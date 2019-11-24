import { Component, OnInit } from '@angular/core';
import { GoogleApiService } from '../service/google-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book;
  favs = [];

  constructor(private api: GoogleApiService, private route: ActivatedRoute) { }

  ngOnInit() {

    const isbn = this.route.snapshot.params['isbn'];

    this.api.searchBookID(isbn).subscribe((response) => {
      this.book = response.items[0];
    })
  }

  addFav(book) {
    const existsOnFavs = this.favs.find(book => book === book);

    if(existsOnFavs) {
      console.log('Este livro já existe nos seus favoritos!')
      console.log(this.favs)
      return;
    } else {
      this.favs.push(book);
      console.log(this.favs)
    }
  }

  removeFav(book) {
    this.favs.splice(book, 1)
    console.log(this.favs)
  }

  

}
