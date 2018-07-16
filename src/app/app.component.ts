import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'qs-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  iconUser: boolean;
  user: any = {};
  public opend: boolean = false;
  
  name = 'Gamificación';

  routes: Object[] = [{
    icon: 'casa',
    route: '/home',
    title: 'Inicio',
  }, {
    icon: 'ingresar',
    route: '/ingreso',
    title: 'Ingresar',
  }, {
    icon: 'registro',
    route: '/registro',
    title: 'Registrate',
  },

  {
    icon: 'gestionar',
    route: '/gestionarUsuarios',
    title: 'Gestion de usuarios',
  },
  //projects
  {
    icon: 'administrar',
    route: '/admin-projects',
    title: 'Administrar Proyectos',
  },
  // cupos
  {
    icon: 'consultar',
    route: '/projects',
    title: 'Consultar Proyecto',
  },
  //{
    //icon: 'shopping_cart',
    //route: '/compra',
    //title: 'Carrito de Compras',
 // },
//mis cupos:
{
  icon: 'l',
  route: '/lista',
  title: 'Mis Cupos',
},
{
  icon: 'oferta',
  route: '/oferta',
  title: 'Oferta Publica',
},
{
  icon: 'referidos',
  route: '/referido',
  title: 'Referidos',
},
{
  icon: 'contacto',
  route: '/contactenos',
  title: 'contactenos',
},
  ];
  constructor(private _iconRegistry: MatIconRegistry,
              private _domSanitizer: DomSanitizer) {
    this._iconRegistry.addSvgIconInNamespace('assets', 'teradata',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'github',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/covalent.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent-mark',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/covalent-mark.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'teradata-ux',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata-ux.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'appcenter',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/appcenter.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'listener',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/listener.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'querygrid',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/querygrid.svg'));
      this._iconRegistry.addSvgIconInNamespace('assets', 'teradata-ux',
      this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/teradata-ux.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
      this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent-mark',
      this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent-mark.svg'));
  }

}
