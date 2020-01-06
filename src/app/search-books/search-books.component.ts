import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {

  @Input() searchText: '';

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  searchBook() {
    this.router.navigate(['/list-books/' + this.searchText]);
  }
}
