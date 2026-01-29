import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FicheRenseignementService {

  private apiUrl = 'http://localhost:8080/api/fiches';

  constructor(private http: HttpClient) {}

  enregistrerFiche(fiche: any): Observable<any> {
    return this.http.post(this.apiUrl, fiche);
  }

  getToutesLesFiches(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getFicheById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
