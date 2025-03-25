import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artisan } from '../models/artisan';

@Injectable({
  providedIn: 'root'
})
export class ArtisanService {
  private jsonURL = '/artisans.json';


  constructor(private http: HttpClient) {}

  getArtisans(): Observable<Artisan[]> {
    return this.http.get<Artisan[]>(this.jsonURL);
  }
}
