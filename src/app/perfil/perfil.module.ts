import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CovalentCommonModule } from '@covalent/core/common';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentMediaModule } from '@covalent/core/media';
import { CovalentLoadingModule } from '@covalent/core/loading';

import { CovalentHttpModule, IHttpInterceptor } from '@covalent/http';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil/perfil.component';


@NgModule({
  imports: [
    CommonModule,
    PerfilRoutingModule,
    // material modules
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatInputModule,
    MatToolbarModule,
    // covalent modules
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentLoadingModule,
  ],
  declarations: [PerfilComponent]
})
export class PerfilModule { }