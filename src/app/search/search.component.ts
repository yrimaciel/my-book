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
  favs = []
  showFavs = false;

  ngOnInit() {
    this.api.searchBooks('')
  }

  findBooks(search) {
    this.api.searchBooks(search).subscribe((response) => {
      this.books =  response && response.items;
      console.log(this.books)
    })
  }

  addFav(book: any) {
    const title = book.volumeInfo.title;
    const existsOnFavs = this.favs.find(book => book.volumeInfo.title === title);

    if (existsOnFavs) {
      console.log('este livro existe nos seus favoritos!')
    } else {
      this.favs.push(book);
      console.log(this.favs)
    }
}

removeFav(fav: any) {
  this.favs.splice(fav, 1);
}

showFav() {
    this.showFavs = this.showFavs ? false : true;
}

}
