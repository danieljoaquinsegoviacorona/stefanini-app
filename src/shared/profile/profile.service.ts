import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Profile, ProfileResponse } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
 // Base url
 baseurl = 'http://localhost:3000';
 constructor(private http: HttpClient) { }

 // Http Headers
 httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json'
   })
 };
 // GET
 GetProfiles(): Observable<ProfileResponse> {
  return this.http.get<ProfileResponse>(this.baseurl + '/profiles/')
    .pipe(
      retry(1),
      catchError(this.errorHandle)
    );
}

// Error handling
errorHandle(error) {
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
