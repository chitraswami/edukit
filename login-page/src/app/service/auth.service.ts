import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  newAddress: any;
  constructor(private http: HttpClient) {}

  signup(data: any): Observable<any> {
    return this.http.post(`${environment.URL}/auth/register`, data);
  }

  signin(data: any): Observable<any> {
    return this.http.post(`${environment.URL}/auth/login`, data);
  }

  getProfile(): Observable<any> {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    return this.http.get(`${environment.URL}/auth/profile`, {
      headers: headers,
    });
  }

  addAddress(data: any): Observable<any> {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    const newAddress = { address: this.newAddress };

    return this.http.post(
      `${environment.URL}/auth/profile/add-Address`,
      { ...data, ...newAddress },
      {
        headers: headers,
      }
    );
  }

  editAddress(data: any): Observable<any> {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    return this.http.put(`${environment.URL}/auth/profile/edit-Address`, data, {
      headers: headers,
    });
  }
}
