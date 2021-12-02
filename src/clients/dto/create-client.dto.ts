import { IsArray, IsEmail, IsEnum, IsString } from 'class-validator';
import { TypeClient } from '../entities/clientType-enum';

export class CreateClientDto {
  @IsString()
  name: string;
  @IsString()
  lastName: string;
  @IsEnum(TypeClient, { each: true })
  @IsArray()
  types: TypeClient[];
  @IsEmail()
  email: string;
}
