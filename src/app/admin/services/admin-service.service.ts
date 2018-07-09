import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AngularFireAuth } from "angularfire2/auth";
import { userDto } from '../../loginn/models/userDto';
@Injectable()
export class AdminServiceService {
  serverURL = 'http://localhost:3000/prueba/';
  constructor(private http: Http, private afAuth: AngularFireAuth) {

   }
   createAuthUser(userDto:userDto) {
    return this.http.post(this.serverURL + 'createAuthUser',userDto).toPromise()
      .then(res => <any> res.json());
  }
}
