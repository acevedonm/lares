import { IsArray, IsEmail, IsEnum, IsNumber, IsString } from 'class-validator';
import { TypeClient } from '../entities/client-type.enum';

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

  @IsNumber()
  balance: number;
}
