import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AngularFireAuth } from "angularfire2/auth";
import { storeDto } from '../../challenges/models/storeDto';
import { uidDto } from '../../login/models/uidDto';
import { userDto } from '../../login/models/userDto';
import { activityDto } from '../../challenges/models/activityDto';
import { medalDto } from '../models/medalDto';
import { scoreDto } from '../models/scoreDto';
import { notificationDto } from '../models/notificationDto';
import { usersDto } from '../models/usersDto';
import { myActivitiesDto } from '../../challenges/models/myActivitiesDto';

@Injectable()
export class CoordinatorService {

  serverURL = 'http://localhost:3000/prueba/';
  constructor(private http: Http, private afAuth: AngularFireAuth) {
  }

  public newItemStore(reward: storeDto) {
    return this.http.post(this.serverURL + 'newItemStore', reward).toPromise()
      .then(res => <any>res.json())
  }

  public updateItemStore(store: storeDto) {
    return this.http.post(this.serverURL + 'updateItemStore', store).toPromise().then
      (res => <any>res)
  }

  public deleteItemStore(store: storeDto) {
    return this.http.post(this.serverURL + 'deleteItemStore', store).toPromise().then
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

  public updateMedal(medal: medalDto) {
    return this.http.post(this.serverURL + 'updateMedal', medal).toPromise().then
      (res => <any>res)
  }

  public deleteMedal(medal: medalDto) {
    return this.http.post(this.serverURL + 'deleteMedal', medal).toPromise().then
      (res => <any>res)
  }

  public createMedal(medal: medalDto) {

    return this.http.post(this.serverURL + 'createMedal', medal).toPromise()
      .then(res => <any>res.json())
  }

  public getMedalById(id: medalDto) {
    return this.http.post(this.serverURL + 'getMedalById', id).toPromise()
      .then(res => <any>res);
  }

  public deleteActivity(activity: activityDto) {
    return this.http.post(this.serverURL + 'deleteActivity', activity).toPromise().then
      (res => <any>res)
  }

  public updateActivity(activity: activityDto) {
    return this.http.post(this.serverURL + 'updateActivity', activity).toPromise().then
      (res => <any>res)
  }

  public getTypeOfScore() {
    return this.http.get(this.serverURL + 'getTypeOfScore').toPromise()
      .then(res => <any>res.json())
  }

  
  public createNotification(notification: notificationDto) {

    return this.http.post(this.serverURL + 'createNotification', notification).toPromise()
      .then(res => <any>res.json())
  }

  public updateNotification(notification: notificationDto) {
    return this.http.post(this.serverURL + 'updateNotification', notification).toPromise().then
      (res => <any>res)
  }

  public deleteNotification(notification: notificationDto) {
    return this.http.post(this.serverURL + 'deleteNotification', notification).toPromise().then
      (res => <any>res)
  }

  public getAllNotification() {
    return this.http.get(this.serverURL + 'getAllNotification').toPromise()
      .then(res => <any>res.json())
  }

  public getNotificationsGlobal(notification: notificationDto){
    return this.http.post(this.serverURL + 'getNotificationsGlobal', notification).toPromise()
    .then(res => <any>res.json())
    
  }
  public getAllUsers() {
    return this.http.get(this.serverURL + 'getAllUsers').toPromise()
      .then(res => <any>res.json())
  }

  
  public updateUsers(users: usersDto) {
    return this.http.post(this.serverURL + 'updateUsers', users).toPromise().then
      (res => <any>res)
  }

  public deleteUsers(users: usersDto) {
    return this.http.post(this.serverURL + 'deleteUsers', users).toPromise().then
      (res => <any>res)
  }
  public getActivityById(id: myActivitiesDto) {
    return this.http.post(this.serverURL + 'getActivityById', id).toPromise()
      .then(res => <any>res);
  }
}
