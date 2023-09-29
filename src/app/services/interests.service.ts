import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterestsService {


  constructor(
    private readonly http: HttpClient
  ) { }
  apiURL = 'https://node-apicv-service-n4ndomx.cloud.okteto.net/interests'

  //http opcions

  httpOpcions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getHeader(): Observable<any> {
    return this.http.get<any>(this.apiURL, this.httpOpcions).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error: any) {
    let errorMessage = ''
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code ${error.status} Mensage: ${error.message}`
    }
    window.alert(errorMessage)
    return throwError(errorMessage)
  }
}
