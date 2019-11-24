import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  private link = 'https://www.googleapis.com/books/v1/volumes';
  private googleKey = `AIzaSyBg8qJOZIY8Sr5ieJ_rDdUGiWx-LrMDayY`

  constructor(private http: HttpClient) { }

  searchBooks(search: string): any {
    const googleApiSearch = (`${this.link}?q=${search}&key=${this.googleKey}`);
    return this.http.get(googleApiSearch).pipe(map(response => response))
  }

  searchBookID(isbn: number): any {
    const googleApiSearchForISBN = (`${this.link}/?q=isbn:${isbn}&maxResults=1&key=${this.googleKey}`)
    return this.http.get(googleApiSearchForISBN).pipe(map(response => response))
  }
}
