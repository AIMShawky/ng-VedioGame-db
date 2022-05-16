import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{

    constructor(){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       req = req.clone({
           setHeaders:{
            'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'ce34b3beabmsh4a123c9102693cep17b836jsn7fbea3dc76d4'
           },
           setParams:{
               key:'9463eccf245046efa306a627e8fd3e8d',
           }
       });

       return next.handle(req);
    }
}


