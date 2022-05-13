import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment'
import { vCard } from './../models/vCard.model'

@Injectable({
  providedIn: 'root'
})
export class VCardService {

  constructor(private http: HttpClient) { }

  getVCard$(id: string): Observable<vCard> {
    return this.http
      .get<vCard>(`${environment.API_URL}/vCard/${id}`)
  }
}
