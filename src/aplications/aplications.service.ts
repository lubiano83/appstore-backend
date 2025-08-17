import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException, UnsupportedMediaTypeException, UploadedFile } from '@nestjs/common';
import { CreateAplicationDto } from './dto/create-aplication.dto';
import { UpdateAplicationDto } from './dto/update-aplication.dto';
import { Aplication } from './entities/aplication.entity';

@Injectable()
export class AplicationsService {

  private aplicaciones: Aplication[] = [];

  create(createAplicationDto: CreateAplicationDto): Aplication {
    const nombreExist = this.aplicaciones.find(aplicacion => aplicacion.nombre.toLowerCase().trim() === createAplicationDto.nombre.toLowerCase().trim());
    if(nombreExist) throw new BadRequestException("Ese nombre ya existe..");
    const nuevaAplicacion = new Aplication(
      this.aplicaciones.length + 1,
      createAplicationDto.nombre,
      createAplicationDto.precio,
      createAplicationDto.sistemaOperativo,
      createAplicationDto.tamano,
      "1.0.0"
    )
    this.aplicaciones.push(nuevaAplicacion);
    return nuevaAplicacion;
  }

  findAll(nombre?: string, so?: string): Aplication[] {
    if(nombre && so) return this.aplicaciones.filter(aplicacion => aplicacion.sistemaOperativo.toLowerCase() === so.toLowerCase() && aplicacion.nombre.toLowerCase() === nombre.toLowerCase());
    if(nombre) return this.aplicaciones.filter(aplicacion => aplicacion.nombre.toLowerCase() === nombre.toLowerCase());
    if(so) return this.aplicaciones.filter(aplicacion => aplicacion.sistemaOperativo.toLowerCase() === so.toLowerCase());
    return this.aplicaciones;
  }

  findOne(id: number): Aplication {
    const aplicacion = this.buscar(aplicacion => aplicacion.id === id);
    if(!aplicacion) throw new NotFoundException("Ese id no existe..");
    return aplicacion;
  }

  buscar(funcionBusqueda: (app: Aplication) => boolean): Aplication | undefined {
    for (let i = 0; i < this.aplicaciones.length; i++) {
      const resultado = funcionBusqueda(this.aplicaciones[i]);
      if (resultado) return this.aplicaciones[i];
    }
  }

  update(id: number, updateAplicationDto: UpdateAplicationDto): Aplication {
    let aplicacion = this.findOne(id);
    if(!aplicacion) throw new NotFoundException("Ese id no existe..");
    aplicacion.version = updateAplicationDto.version ?? aplicacion.version;
    aplicacion.precio = updateAplicationDto.precio ?? aplicacion.precio;
    aplicacion.tamano = updateAplicationDto.tamano ?? aplicacion.tamano;
    return aplicacion;
  }

  remove(id: number): Aplication {
    const aplicacion = this.findOne(id);
    if(!aplicacion) throw new NotFoundException("Ese id no existe..");
    const aplicaciones = this.aplicaciones.filter(aplicacion => aplicacion.id !== id);
    this.aplicaciones = aplicaciones;
    return aplicacion;
  }
}
