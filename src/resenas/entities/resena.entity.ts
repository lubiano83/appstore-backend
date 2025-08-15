import { Aplication } from "src/aplications/entities/aplication.entity";
import { User } from "src/users/entities/user.entity";

export class Resena {

    id: number;
    usuario: User;
    aplicacion: Aplication;
    calificacion: number;
    texto: string;
    fecha: Date;

    constructor(
        id: number,
        usuario: User,
        aplicacion: Aplication,
        calificacion: number,
        texto: string,
        fecha: Date
    ) {
        this.id = id;
        this.usuario = usuario;
        this.aplicacion = aplicacion;
        this.calificacion = calificacion;
        this.texto = texto;
        this.fecha = fecha;
    };

};
