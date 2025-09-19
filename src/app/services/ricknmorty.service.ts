import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RicknmortyService {

  private favorites: string[] = [];
  private isFavorite: boolean = false;
  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private httpClient: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/character`);
  }

  getCharacterById(id: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/character/${id}`);
  }

  searchCharacters(name: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/character/?name=${name}`);
  }

  toggleFavorite(characterId: number): Observable<any> {
    const idStr = characterId.toString();
    const index = this.favorites.indexOf(idStr);
    if (index === -1) {
      this.favorites.push(idStr);
      this.isFavorite = true;
    } else {
      this.favorites.splice(index, 1);
      this.isFavorite = false;
    }
    return new Observable(observer => {
      observer.next({ success: true, favorites: this.favorites });
      console.log(this.favorites);
      observer.complete();
    });
  }
}
