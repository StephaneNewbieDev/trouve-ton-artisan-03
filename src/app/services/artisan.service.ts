import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

  getArtisanById(id: number): Observable<Artisan | undefined> {
    return this.getArtisans().pipe(
      map((artisans) => artisans.find((a) => +a.id === id))
    );
  }
  
}
