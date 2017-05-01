import {Injectable} from '@angular/core';
import {Contenido} from '../Clases/Contenido';

const CONTENIDOS : Array<Contenido> =[
    new Contenido(1,'Titulo','Des','http://68.media.tumblr.com/4cd52e60fe4f41226d351d4d9b0344ec/tumblr_mrijgeDKZq1sn0mkdo1_500.jpg',1),
    new Contenido(2,'MMM que has dicho?','Famosa estrella de la NBA poniendo cara rara.','http://68.media.tumblr.com/e87bedb23b7c98c4ac9bb013633876f6/tumblr_op50m867521ufbwoco2_250.gif',2),
    new Contenido(3,'Titulo 3','Des','http://68.media.tumblr.com/489d93b620028f5eb0868acc9625178c/tumblr_opa0kmPaug1s9y3qio1_500.jpg',1),
    new Contenido(4,'Titulo 4','Des','url',3),
    new Contenido(5,'Titulo 5','Des','http://68.media.tumblr.com/12f508285b643d821e3775fa4203ec5c/tumblr_op9ng4bRg61s9y3qio1_1280.jpg',1),
    new Contenido(6,'Titulo 6','Des','url',3),
    new Contenido(7,'Titulo 7','Des','http://68.media.tumblr.com/a3035c589dc24bf14b6373a77431a761/tumblr_op6ls1S1y91vyi6t3o1_500.jpg',1),
    new Contenido(8,'JAJAJJAAJJA','Jacobo Nicolasito riendose a carcajadas','http://68.media.tumblr.com/4b294d4d19901c9973ba47a2c5700fdb/tumblr_op3xeb1MC91vyi6t3o2_400.gif',2),
    new Contenido(9,'Titulo 9','Des','url',1),
    new Contenido(10,'Mis ojooosss','Al coronel le sangran los ojitos','http://68.media.tumblr.com/760c117a294d9ceef432d2837673c17b/tumblr_inline_oomh70WXrh1sn5zl7_250.gif',2),
    new Contenido(10,'Titulo 11','Des','url',1),
    new Contenido(12,'Titulo 12','Des','url',3),
];

@Injectable()

export class ListaMultimediaService{

getAll(){
        return new Promise<Contenido[]>(data =>{
            setTimeout(()=>{
                data(CONTENIDOS);
            }, 500);
        });
    }

getIMG(){
        return new Promise<Contenido[]>(data =>{
            setTimeout(()=>{
               let imgs : Contenido[] = [];
                CONTENIDOS.map(c=>{
                    if(c.tipo==1){
                        imgs.push(c);
                    }
                });
                data(imgs);
            }, 500);
        });
    }

getGIFS(){
        return new Promise<Contenido[]>(data =>{
            setTimeout(()=>{
               let gifs : Contenido[] = [];
                CONTENIDOS.map(c=>{
                    if(c.tipo==2){
                        gifs.push(c);
                    }
                });
                data(gifs);
            }, 500);
        });
    }

    getVIDEOS(){
        return new Promise<Contenido[]>(data =>{
            setTimeout(()=>{
               let videos : Contenido[] = [];
                CONTENIDOS.map(c=>{
                    if(c.tipo==2){
                        videos.push(c);
                    }
                });
                data(videos);
            }, 500);
        });
    }



}