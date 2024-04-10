import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, finalize, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken: string = '';
    return this.handleRequest(req, next, accessToken);
  }

  handleRequest(req: HttpRequest<any>, next: HttpHandler,accessToken:string): Observable<HttpEvent<any>> {
    let url = req.url;
    
    req = req.clone({
      url,
      setHeaders: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT',
        'Authorization': `Bearer ${accessToken}`
      },
    });
    

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        const message = [];
        if (error.status === 401) {
         
        } else if (error.status === 403) {
          
        } else if (error.status === 0) {
          message.push(error.message);
        } 

        return throwError(()=> error);
      }),
      finalize(() => console.log('finally block'))
    );
  }
}
