import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AngularFireAuth } from "angularfire2/auth";
import { uidDto } from '../../login/models/uidDto';
import { userDto } from '../../login/models/userDto';
import { activityDto } from '../models/activityDto';
import { activitiesScoreDto } from '../models/activitiesScoreDto';
import {scoreActivity} from '../models/scoreActivity';
import { storeDto } from '../models/storeDto';
import { purchaseDto } from '../models/purchaseDto';
import { myActivitiesDto } from '../models/myActivitiesDto';

@Injectable()
export class ChallengesService {

  serverURL = 'http://localhost:3000/prueba/';
  constructor(private http: Http, private afAuth: AngularFireAuth) {
  }
  public getAllActivity() {
    return this.http.get(this.serverURL + 'getAllActivity').toPromise()
      .then(res => <any>res.json())
  }

  public getActivity(id: activityDto) {
    return this.http.post(this.serverURL + 'getActivity', id).toPromise()
      .then(res => <any>res.json())
  }
  public getAllScoreByActivity(activityId: activitiesScoreDto) {
    return this.http.post(this.serverURL + 'getAllScoreByActivity', activityId).toPromise()
      .then(res => <any>res.json())
  }
  public registerScore(score:scoreActivity ){
    console.log(score.activityName,score.idActivity,score.experience,score.uid,score.userName)
    return this.http.post(this.serverURL + 'registerScore', score).toPromise().
    then(res=> <any>res.json())
  }

  public getAllItemsStore() {
    return this.http.get(this.serverURL + 'getAllItemsStore').toPromise()
      .then(res => <any>res.json())
  }

  
  public getItemById(itemId: storeDto) {
    return this.http.post(this.serverURL + 'getItemById', itemId).toPromise()
      .then(res => <any>res.json());
  }

  public getStoreItem(purchase:purchaseDto){
    return this.http.post(this.serverURL + 'getStoreItem', purchase).toPromise()
    .then(res => <any>res);
  }

  public getMyActivities(uid:any){
    return this.http.post(this.serverURL + 'getMyActivitys',uid).toPromise()
    .then( doc => <any>doc.json());
    
  }

  public saveActivity(activity:myActivitiesDto){
    return this.http.post(this.serverURL + 'saveActivity', activity).toPromise()
    .then( res => <any>res.json());
  }


}
