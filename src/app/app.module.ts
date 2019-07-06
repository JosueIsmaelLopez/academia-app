import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ReservaComponent } from './components/recepcion/reserva/reserva.component';
import { MainComponent } from './components/main/main.component';
import { PanelComponent } from './components/panel/panel.component';
import { RecordComponent } from './components/recepcion/record/record.component';

//Definiendo un Objeto de tipo Routes con todas las rutas que manejara la aplicacion
const routes: Routes = [
  {path:'', component: MainComponent, pathMatch: 'full'},
  // {path:'reserva', component: ReservaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ReservaComponent,
    MainComponent,
    PanelComponent,
    RecordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //Se importa para el soporte de formularios de angular
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
