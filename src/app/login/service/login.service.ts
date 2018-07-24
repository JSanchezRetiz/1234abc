import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AngularFireAuth } from "angularfire2/auth";
import { uidDto } from '../models/uidDto';
import { userDto } from '../models/userDto';
@Injectable()
export class LoginService {
  serverURL = 'http://localhost:3000/prueba/';
  constructor(private http: Http, private afAuth: AngularFireAuth) {
  }
  simpleLogin(email, password) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then((userData) => {
          localStorage.setItem('currentUser', JSON.stringify(userData));
          console.log(userData);
          if (userData.user != undefined) {
            var name = "";
            var token = "";
            var userId = userData.user.uid;
            userId = userId.replace(/"/g, "");
            localStorage.setItem('uid', userId);
            name = userData.user.displayName;
            //TOKEN debe usar: userData.user.qa;
            token = userData.user.qa;
            name = name.replace(/"/g, "");
            localStorage.setItem('userName', name);
          }
          else {
            console.log("Entrada cuando no ha actualizado datos")
            userId = userId.replace(/"/g, "");
            localStorage.setItem('uid', userId);
            localStorage.setItem('userName', "usuario");
          }
          localStorage.setItem('token', '' + token);
          resolve(userData);
        })
        .catch((error) => {
          alert("Error de inicio de sesion:");

          console.log(error)
          reject(error)
        })
    });
  }
  forgetPassword(email) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.sendPasswordResetEmail(email)
        .then(() => {
          resolve("Mensaje Enviado Correctamente")
        })
        .catch((error) => {
          reject(error);
        })
    })
  }
  logout() {
    this.afAuth.auth.signOut();
    localStorage.removeItem('currentUser');
    localStorage.removeItem('uid');
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
  }
  getUserData(id: uidDto) {
    return this.http.post(this.serverURL + 'getUserData', id).toPromise()
      .then(res => <userDto>res.json());
  }
}
