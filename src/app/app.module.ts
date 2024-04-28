import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssegniComponent } from './components/assegni/assegni.component';
import { ContanteComponent } from './components/contante/contante.component';
import { DepositoComponent } from './components/deposito/deposito.component';
import { EstrattoContoComponent } from './components/estratto-conto/estratto-conto.component';
import { HomeComponent } from './components/home/home.component';
import { PrelievoComponent } from './components/prelievo/prelievo.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AssegniComponent,
    ContanteComponent,
    DepositoComponent,
    EstrattoContoComponent,
    HomeComponent,
    PrelievoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
