export class Contenido{

    constructor(public id : number,
                public title: string,
                public descripcion : string, 
                public url : string,
                public tipo :number){
//TIPO
//1 = Imagen
//2 = Gif
//3 = video
    }
}