import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AngularFireAuth } from "angularfire2/auth";
import { storeDto } from '../../challenges/models/storeDto';
import { uidDto } from '../../login/models/uidDto';
import { userDto } from '../../login/models/userDto';
@Injectable()
export class CoordinatorService {

  serverURL = 'http://localhost:3000/prueba/';
  constructor(private http: Http, private afAuth: AngularFireAuth) {
  }

  public newItemStore(reward: storeDto) {
    return this.http.post(this.serverURL + 'newItemStore', reward).toPromise()
      .then(res => <any>res.json())
  }

public updateItemStore(store:storeDto){
  return this.http.post(this.serverURL + 'updateItemStore', store ).toPromise().then
  (res => <any>res.json())
}

}
