import { SistemaOperativo } from "../enum/sistemaOperativo.enum";

export class Aplication {

    id: number;
    nombre: string;
    precio: number;
    sistemaOperativo: SistemaOperativo;
    calificacion: number = 0;
    tamano: number;
    version: string;
    descargas: number = 0;

    constructor(
        id: number,
        nombre: string,
        precio: number,
        sistemaOperativo: SistemaOperativo,
        tamano: number,
        version: string
    ) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.sistemaOperativo = sistemaOperativo;
        this.calificacion;
        this.tamano = tamano;
        this.version = version;
        this.descargas;
    };
    
};
