import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { AplicationsService } from './aplications.service';
import { CreateAplicationDto } from './dto/create-aplication.dto';
import { UpdateAplicationDto } from './dto/update-aplication.dto';
import { Aplication } from './entities/aplication.entity';

@Controller('aplications')
export class AplicationsController {
  constructor(private readonly aplicationsService: AplicationsService) {}

  @Post()
  create(@Body() createAplicationDto: CreateAplicationDto) {
    return this.aplicationsService.create(createAplicationDto);
  }

  @Get()
  findAll( @Query('nombre') nombre?: string, @Query('so') so?: string ): Aplication[] {
    return this.aplicationsService.findAll(nombre, so);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aplicationsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAplicationDto: UpdateAplicationDto) {
    return this.aplicationsService.update(+id, updateAplicationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aplicationsService.remove(+id);
  }
}
