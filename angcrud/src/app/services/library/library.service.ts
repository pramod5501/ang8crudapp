import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, Subject,throwError } from 'rxjs';
import {environment} from  '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { 
    
  }
  private API_URL= environment.API_URL;
  // Get all library list via API or any data storage
  getAllLibrary() {
    let libraryList: any;
     libraryList =  this.http.get(this.API_URL + 'library/getall');
     console.log(libraryList);
  
     

  
    return libraryList;
  }

  doRegisterLibrary(data, index): Observable<any> {
    //check email
    let libraryDetail={};
    let returnData={};
    
      let url=this.API_URL + 'library/create';
   return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )  
  }

  // Update library
  updateLibrary(data,id): Observable<any> {
    let url = `${this.API_URL}library/${id}/update`;
    let updateData={
                      bookName:data.bookName,
                      authorName:data.authorName,
                      publishOn:data.publishOn,
                      authorEmail:data.authorEmail
                    }
    return this.http.put(url, updateData, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  deleteLibrary(id): Observable<any> {


     let url = `${this.API_URL}library/${id}/delete`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
    
  }


 getLibraryDetails(id): Observable<any> {
    let url = `${this.API_URL}library/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }
 


  generateRandomID() {
    const x = Math.floor((Math.random() * Math.random() * 9999));
    return x;
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
