import { Component, OnInit } from '@angular/core';
import { GoogleApiService } from '../service/google-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private api: GoogleApiService, private toastr: ToastrService) { }

  books = [];
  favs = [];
  showFavs = false;
  p = 1;
  count = 4;

  ngOnInit() {
    this.api.searchBooks('HELLO');
  }

  findBooks(search) {
    this.api.searchBooks(search).subscribe((response) => {
      this.books = response.items;
    });
  }

  addFav(book: any) {
    const title = book.volumeInfo.title;
    const existsOnFavs = this.favs.find(book => book.volumeInfo.title === title);

    if (existsOnFavs) {
      this.toastr.warning('Este livro já está inserido aos seus favoritos!');
    } else {
      this.favs.push(book);
      this.toastr.success(`O livro "${title}" foi adicionado aos seus favoritos!`);
    }
}

removeFav(fav: any, i: number) {
    const title = fav.volumeInfo.title;
    this.favs.splice(i, 1);
    this.toastr.error(`O livro "${title}" foi removido dos seus favoritos!`);
}

setFav() {
    this.showFavs = this.showFavs ? false : true;
}

}
