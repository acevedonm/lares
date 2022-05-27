import {
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { TypeConcept } from '../entities/concept-type.enum';

export class CreateTransactionDto {
  @IsString()
  contract: string;

  @IsString()
  client: string;

  @IsDate()
  @IsOptional()
  date: Date;

  @IsEnum(TypeConcept)
  concept: TypeConcept;

  @IsString()
  @IsOptional()
  receipt: string;

  @IsNumber()
  amount: number;

  @IsNumber()
  @IsOptional()
  discount: number;

  @IsNumber()
  @IsOptional()
  increase: number;

  @IsString()
  @IsOptional()
  observations: string;
}
