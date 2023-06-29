import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class OverviewService {
  private baseUrl = 'https://patrimoinemef.000webhostapp.com/?choice=';

  constructor(private http: HttpClient) {}

  getStatProg1(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}1`);
  }
}
