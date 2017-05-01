import { Component, OnInit } from '@angular/core';
import { Contenido } from '../../Clases/Contenido';
import {ListaMultimediaService  } from '../../Servicios/ListaMultimedis.service';

@Component({
    moduleId: module.id,
    selector: 'listado-multimedia',
    templateUrl: 'listado-multimedia.component.html'
})

export class ListadoMultimediaComponent implements OnInit {
    multimedias: Array<Contenido>;
    constructor(
        private servicio: ListaMultimediaService) { }
    ngOnInit() {
        this.servicio.getAll().then(data => {
            this.multimedias = data;
        });
    }
}