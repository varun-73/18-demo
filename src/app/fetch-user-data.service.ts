import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormFields } from './formFields.model';

@Injectable({
  providedIn: 'root'
})
export class FetchUserDataService {

  constructor(private http:HttpClient) { }


  getData():Observable<FormFields[]>{
    return this.http.get<FormFields[]>('assets/form.json');

  }
}
