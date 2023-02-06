import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(
    private http: HttpClient,
  ) { }

  // Url de l'api
  UrlApi: string = "http://127.0.0.1:5000/api/";

  // Obtenir la liste des profils
  listProfil(){
    return this.http.get(this.UrlApi+'all_profils').pipe(
      map(res => {
        return res
      })
    )
  }
}
