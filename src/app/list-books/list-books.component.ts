import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  searchText = this.activatedRoute.snapshot.params['searchText'];
  bookData: any = {};

  constructor(
    public restApi: RestApiService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.restApi.getListOfBooks(this.searchText).subscribe((data: {}) => {
      this.bookData = data;
    });
  }

  getBookDetails(id) {
    this.router.navigate(['/get-book/' + id]);
  }

}
