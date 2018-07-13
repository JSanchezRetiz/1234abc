import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AngularFireAuth } from "angularfire2/auth";
import { uidDto } from '../../login/models/uidDto';
import { userDto } from '../../login/models/userDto';
import { activityDto } from '../models/activityDto';
import { activitiesScoreDto } from '../models/activitiesScoreDto';
@Injectable()
export class ChallengesService {

  serverURL = 'http://localhost:3000/prueba/';
  constructor(private http: Http, private afAuth: AngularFireAuth) {
  }
  public getAllActivy() {
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
}
