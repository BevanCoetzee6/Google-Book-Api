import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../shared/book';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, windowCount } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  apiUrl = 'https://www.googleapis.com/books/v1/volumes';

  constructor(
    private http: HttpClient
  ) {}

  //
  // CRUD Methods for consuming RESTful API
  //

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // HttpClient API get() method => Fetch List Of Books based on Search
  getListOfBooks(searchText): Observable<Book> {
    return this.http.get<Book>(this.apiUrl + '?q=' + searchText)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API get() method => Fetch Specific Book based on ID
  getSpecificBook(id): Observable<Book> {
    return this.http.get<Book>(this.apiUrl + '/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get Client-Side Error
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
