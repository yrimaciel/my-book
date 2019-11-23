import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  constructor(private http: HttpClient) { }

  searchBooks(search: string) {
    const googleApiSearch = (`https://www.googleapis.com/books/v1/volumes?q=${search}`);
    return this.http.get(googleApiSearch).pipe(map(response => response))
  }
}
