import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll( @Query('email') email?: string ) {
    return this.usersService.findAll(email);
  }

  @Get(':nombre')
  findOne(@Param('nombre') nombre: string) {
    return this.usersService.findOne(nombre);
  }

  @Put(':nombre')
  update(@Param('nombre') nombre: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(nombre, updateUserDto);
  }

  @Delete(':nombre')
  remove(@Param('nombre') nombre: string) {
    return this.usersService.remove(nombre);
  }

  @Post(':nombre/app/:id')
  downloadApp(@Param('nombre') nombre: string, @Param('id') id: string) {
    return this.usersService.downloadApp(nombre, +id);
  };
}
