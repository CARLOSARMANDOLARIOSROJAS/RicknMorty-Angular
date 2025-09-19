import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchTermSubject = new BehaviorSubject<string>('');
  public searchTerm$: Observable<string> = this.searchTermSubject.asObservable();

  constructor() { }

  updateSearchTerm(term: string): void {
    this.searchTermSubject.next(term);
  }

  getCurrentSearchTerm(): string {
    return this.searchTermSubject.value;
  }
}