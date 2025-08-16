import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { AplicationsService } from 'src/aplications/aplications.service';
import { Aplication } from 'src/aplications/entities/aplication.entity';

@Injectable()
export class UsersService {

  private usuarios: User[] = [];

  constructor(private readonly aplicationsService: AplicationsService) {};

  create(createUserDto: CreateUserDto): User {
    const usuarioExiste = this.usuarios.find(usuario => usuario.nombreUsuario.toLowerCase().trim() === createUserDto.nombreUsuario.toLowerCase().trim());
    if(usuarioExiste) throw new BadRequestException("Ese usuario ya existe..");
    const nuevoUsuario = new User(
      createUserDto.nombreUsuario,
      createUserDto.email,
      createUserDto.password,
      []
    );
    this.usuarios.push(nuevoUsuario);
    return nuevoUsuario;
  }

  findAll(email?: String): User[] {
    if(email) return this.usuarios.filter(usuario => usuario.email.toLowerCase().trim() === email.toLowerCase().trim());
    return this.usuarios;
  }

  findOne(nombre: string): User {
    const usuario = this.usuarios.find(usuario => usuario.nombreUsuario.toLowerCase().trim() === nombre.toLowerCase().trim());
    if(!usuario) throw new NotFoundException("Ese usuario no existe..");
    return usuario;
  }

  update(nombre: string, updateUserDto: UpdateUserDto): User {
    let usuario = this.usuarios.find(usuario => usuario.nombreUsuario.toLowerCase().trim() === nombre.toLowerCase().trim());
    if(!usuario) throw new NotFoundException("Ese usuario no existe..");
    usuario.email = updateUserDto.email;
    usuario.password = updateUserDto.password;
    return usuario;
  }

  remove(nombre: string): User {
    const usuario = this.usuarios.find(usuario => usuario.nombreUsuario.toLowerCase().trim() === nombre.toLowerCase().trim());
    if(!usuario) throw new NotFoundException("Ese usuario no existe..");
    const usuarioEliminado = this.usuarios.filter(usuario => usuario.nombreUsuario.toLowerCase().trim() !== nombre.toLowerCase().trim());
    this.usuarios = usuarioEliminado;
    return usuario;
  }

  downloadApp(nombre: string, id: number): Aplication {
    let usuario = this.usuarios.find(usuario => usuario.nombreUsuario.toLowerCase().trim() === nombre.toLowerCase().trim());
    if(!usuario) throw new NotFoundException("Ese usuario no existe..");
    let aplicacion = this.aplicationsService.findOne(id);
    if(!aplicacion) throw new NotFoundException("Esa aplicacion no existe..");
    const aplicacionYaDescargada = usuario.aplicacionesDescargadas.find(aplicacion => aplicacion.id === id);
    if(aplicacionYaDescargada) {
      aplicacion.descargas++;
    } else {
      usuario.aplicacionesDescargadas.push(aplicacion);
      aplicacion.descargas++;
    }
    return aplicacion;
  };

}
