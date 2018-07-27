import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AngularFireAuth } from "angularfire2/auth";
import { storeDto } from '../../challenges/models/storeDto';
import { uidDto } from '../../login/models/uidDto';
import { userDto } from '../../login/models/userDto';
import { activityDto } from '../../challenges/models/activityDto';
import { medalDto } from '../models/medalDto';

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
  (res => <any>res)
}

public deleteItemStore(store:storeDto){
  return this.http.post(this.serverURL + 'deleteItemStore', store ).toPromise().then
  (res => <any>res)
}

public createActivity(activity: activityDto) {
  
  return this.http.post(this.serverURL + 'createActivity', activity).toPromise()
    .then(res => <any>res.json())
}

public getAllMedals() {
  return this.http.get(this.serverURL + 'getAllMedals').toPromise()
    .then(res => <any>res.json())
}

public updateMedal(medal:medalDto){
  return this.http.post(this.serverURL + 'updateMedal', medal ).toPromise().then
  (res => <any>res)
}

public deleteMedal(medal:medalDto){
  return this.http.post(this.serverURL + 'deleteMedal', medal ).toPromise().then
  (res => <any>res)
}

public createMedal(medal: medalDto) {
  
  return this.http.post(this.serverURL + 'createMedal', medal).toPromise()
    .then(res => <any>res.json())
}



}
