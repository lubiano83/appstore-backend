import { SistemaOperativo } from "../enum/sistemaOperativo.enum";

export class CreateAplicationDto {

    nombre: string;
    precio: number;
    sistemaOperativo: SistemaOperativo;
    tamano: number;
    version: string;

};
