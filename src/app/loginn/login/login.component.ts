import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../service/login.service'
import { TdLoadingService } from '@covalent/core/loading';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService],
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private _router: Router,
    private _loadingService: TdLoadingService, private loginSVC: LoginService) { }

  login(): void {
    this._loadingService.register();
    alert('Mock log in as ' + this.email);
    setTimeout(() => {
      this._router.navigate(['/']);
      this._loadingService.resolve();
    }, 2000);
  }
  ingresoSimple() {
    alert(this.email + ":" + this.password)
    this._loadingService.register();
    this.loginSVC.simpleLogin(this.email, this.password).then((userRecord: any) => {
      alert(userRecord.user.displayName+" Bienvenido")
      if (userRecord.user.displayName == null) {

       this._router.navigate(['/']);
       this._loadingService.resolve();
      } else {
        this._router.navigate(['/']);
        this._loadingService.resolve();
      }
    }).catch((error) => {
      //this.cacthErrores(error);
      this._loadingService.resolve();
      alert(error);
    });
  }
  olvido(){
    this._router.navigate(['/olvidarContrasena']);
  }
  ngOnInit() {
  }

}
