import { Aplication } from "src/aplications/entities/aplication.entity";

export class User {

    nombreUsuario: string;
    email: string;
    password: string;
    aplicacionesDescargadas: Aplication[];

    constructor(
        nombreUsuario: string,
        email: string,
        password: string,
        aplicacionesDescargadas: Aplication[]
    ) {
        this.nombreUsuario = nombreUsuario;
        this.email = email;
        this.password = password;
        this.aplicacionesDescargadas = aplicacionesDescargadas;
    };

};
