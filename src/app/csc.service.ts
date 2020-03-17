import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError ,Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CscService {
  apiBaseUrl = ' https://api.printful.com/countries';
  constructor(private httpclient: HttpClient) { }

 
//return this.http.get(' https://api.printful.com/countries');
      // catchError(this.handleError)
      // getCountries():Observable<any>{
      //   return this.http.get("https://jsonplaceholder.typicode.com/todos");

      // }

      getdata():Observable<any>{
        return this.httpclient.get(" https://api.printful.com/countries");
      }
    
  }

  // getStates(code: number) {
  //   return this.http.get(`${this.apiBaseUrl}api/code/${code}`).pipe(
  //     catchError(this.handleError)
  //   );
  // } 

  // getCities(states: any) {
  //   return this.http.get(`${this.apiBaseUrl}api/states/${states}`).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
  //   }
  //   // return an observable with a user-facing error message
  //   return throwError('Something bad happened. Please try again later.');
  // }


