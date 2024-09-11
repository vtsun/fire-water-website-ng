import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partner } from '../models/partner';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {
  private apiURL = 'http://localhost:8080/api/partners';

  constructor(private http: HttpClient) { }

  getPartners(): Observable<Partner[]> {
    return this.http.get<Partner[]>(this.apiURL);
  }

  getPartnerById(id: number): Observable<Partner> {
    return this.http.get<Partner>(`${this.apiURL}/${id}`);
  }

  addPartner(partner: Partner): Observable<Partner> {
    return this.http.post<Partner>(this.apiURL, partner);
  }

  updatePartner(id: number, partner: Partner): Observable<Partner> {
    return this.http.put<Partner>(`${this.apiURL}/${id}`, partner);
  }

  deletePartner(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`)
  }
}
