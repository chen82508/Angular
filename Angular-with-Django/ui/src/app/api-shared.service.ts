import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Branch } from './models/branch/branch';

@Injectable({
  providedIn: 'root'
})
export class ApiSharedService {
  readonly APIUrl = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  getFuncTabs(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + 'SysFunctiontab/');
  }

  getBranches(): Observable<Branch[]> {
    return this.http.get<Branch[]>(this.APIUrl + 'branch/');
  }

  addBranch(val: Branch) {
    return this.http.post(this.APIUrl + 'branch/', val);
  }

  updateBranch(val: Branch) {
    return this.http.put(this.APIUrl + 'branch/', val);
  }
}
