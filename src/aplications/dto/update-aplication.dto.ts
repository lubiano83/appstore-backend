import { PartialType } from '@nestjs/swagger';
import { CreateAplicationDto } from './create-aplication.dto';

export class UpdateAplicationDto extends PartialType(CreateAplicationDto) {
    version: string;
    precio: number;
    tamano: number;
};
