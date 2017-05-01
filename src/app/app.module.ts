import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './Componentes/main/app.component';
import {ListadoMultimediaComponent} from './Componentes/multimediaAll/multimediaAll.component';
import {ListaMultimediaService} from './Servicios/ListaMultimedis.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,ListadoMultimediaComponent ],
  bootstrap:    [ AppComponent ],
   providers : [ListaMultimediaService]
})
export class AppModule { }
