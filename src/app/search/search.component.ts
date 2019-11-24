import { Component, OnInit } from '@angular/core';
import { GoogleApiService } from '../service/google-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private api: GoogleApiService) { }

  books = []

  ngOnInit() {
    this.api.searchBooks('')
  }

  findBooks(search) {
    this.api.searchBooks(search).subscribe((response) => {
      this.books =  response && response.items;
      console.log(this.books)
    })
  }

}
