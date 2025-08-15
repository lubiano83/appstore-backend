import { SistemaOperativio } from "../enum/sistemaOperativo.enum";

export class Aplication {

    id: number;
    nombre: string;
    precio: number;
    sistemaOperativo: SistemaOperativio;
    calificacion: number;
    tamaño: number;
    version: number;
    descargas: number;

    constructor(
        id: number,
        nombre: string,
        precio: number,
        sistemaOperativo: SistemaOperativio,
        calificacion: number,
        tamaño: number,
        version: number,
        descargas: number
    ) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.sistemaOperativo = sistemaOperativo;
        this.calificacion = calificacion;
        this.tamaño = tamaño;
        this.version = version;
        this.descargas = descargas;        
    };
    
};
