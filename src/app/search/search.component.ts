import { Component, OnInit } from '@angular/core';
import { GoogleApiService } from '../service/google-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private api: GoogleApiService) { }

  ngOnInit() {
  }

  findBooks(search: any) {
    console.log(search)
  }

}
