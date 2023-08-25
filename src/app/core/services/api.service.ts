import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { withCache } from '@ngneat/cashew';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1', {
      context: withCache({ ttl: 1000 * 3 })
    });
  }

  getFact(): Observable<any> {
    return this.http.get('https://catfact.ninja/fact', {
      context: withCache({ ttl: 1000 * 3 })
    })
  }
  onCheckVMName(name: string) {
    return of(true);
  }
}
