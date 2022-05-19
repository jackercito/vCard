import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { vCardModel } from './../models/vCard.model'

import { environment } from './../../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class VCardService {
  API_URL: string = 'https://api.pacisa.es/api/vCard'

  constructor(private http: HttpClient) { }

  getVCard$(id: string): Observable<vCardModel.vCardObject> {
    return this.http
      .get<vCardModel.vCardObject>(`${environment.API_URL}/vCard/vCard?id=${encodeURIComponent(id)}`)
  }
}
