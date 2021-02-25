/**
 * Created By : Pramod Kumar  
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, Subject,throwError } from 'rxjs';
import {environment} from  '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { 
    
  }


private API_URL= environment.API_URL;
  // Get all students list via API or any data storage
  getAllStudents() {
    let studentList: any;
     studentList =  this.http.get(this.API_URL + 'users/getall');
     console.log(studentList);
   // studentList =[{"_id":"60374a7bd16c742a8c79a3d5","firstName":"Pramod","lastName":"Kumar","email":"pramod@gmail.com","phone":1234567890,"__v":0},{"_id":"60374ac0d16c742a8c79a3d6","firstName":"Oman","lastName":"Umir","email":"oman@yopmail.com","phone":1234567765,"__v":0},{"_id":"60374aded16c742a8c79a3d7","firstName":"Tina","lastName":"Sharma","email":"tina@yopmail.com","phone":123456776523,"__v":0},{"_id":"60374af6d16c742a8c79a3d8","firstName":"Heema","lastName":"Pathak","email":"hima@yopmail.com","phone":123456776523,"__v":0}];

  
    return studentList;
  }

  doRegisterStudent(data, index): Observable<any> {
    //check email
    let studentDetail={};
    let returnData={};
    
      let url=this.API_URL + 'users/create';
   return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )


    
    
    /*   returnData = {
        code: 200,
        message: 'Student Successfully Updated',
        data: null,
      };
    const studentList = JSON.parse(localStorage.getItem('students'));
    let returnData;
    console.log('index', index);
    if (index != null) {
      for (let i = 0; i < studentList.length; i++) {
        if (index !== i && studentList[i].email === data.email) {
         
        }
      }

      studentList[index] = data;
      localStorage.setItem('students', JSON.stringify(studentList));
      returnData = {
        code: 200,
        message: 'Student Successfully Updated',
        data: JSON.parse(localStorage.getItem('students'))
      };
    } else {
      data.id = this.generateRandomID();
      for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].email === data.email) {
          returnData = {
            code: 503,
            message: 'Email Address Already In Use',
            data: null
          };
          return returnData;
        }
      }
      studentList.unshift(data);

      localStorage.setItem('students', JSON.stringify(studentList));

      returnData = {
        code: 200,
        message: 'Student Successfully Added',
        data: JSON.parse(localStorage.getItem('students'))
      };
    }*/
    //return returnData;
  }

  // Update employee
  updateUser(data,id): Observable<any> {
    let url = `${this.API_URL}users/${id}/update`;
    let updateData={
                      firstName:data.first_name,
                      lastName:data.last_name,
                      phone:data.phone,
                      email:data.email
                    }
    return this.http.put(url, updateData, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  deleteStudent(id): Observable<any> {


     let url = `${this.API_URL}users/${id}/delete`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
    
  }


 getStudentDetails(id): Observable<any> {
    let url = `${this.API_URL}users/${id}`;
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
/**
 * Created By : Pramod Kumar  
 */
