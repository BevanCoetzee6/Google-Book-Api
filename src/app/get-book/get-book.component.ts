import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-get-book',
  templateUrl: './get-book.component.html',
  styleUrls: ['./get-book.component.css']
})
export class GetBookComponent implements OnInit {

  id = this.activatedRoute.snapshot.params['id'];
  bookData: any = {};

  constructor(
    public restApi: RestApiService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.getBookDetails(this.id);
  }

  getBookDetails(id) {
    this.restApi.getSpecificBook(this.id).subscribe((data: {}) => {
      this.bookData = data;
    });
  }
}
