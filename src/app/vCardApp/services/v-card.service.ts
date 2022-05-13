import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { vCard } from './../models/vCard.model'

@Injectable({
  providedIn: 'root'
})
export class VCardService {
  API_URL: string = 'https://api.pacisa.es/api/vCard'

  constructor(private http: HttpClient) { }

  getVCard$(id: string): Observable<vCard> {
    return this.http
      .get<vCard>(`${this.API_URL}/vCard/${id}`)
  }
}
