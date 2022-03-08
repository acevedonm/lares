import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
class increase {
  date?: Date;
  percentage: number;
}
export class CreateContractDto {
  @IsString()
  renter: string;

  @IsString()
  owner: string;

  @IsNumber()
  price: number;

  @IsNumber()
  total: number;

  @IsString({ each: true })
  @IsArray()
  warranties: string[];

  @IsDate()
  @IsOptional()
  start: Date;

  @IsDate()
  @IsOptional()
  end: Date;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => increase)
  increases: increase[];

  @IsNumber()
  commission: number;

  @IsNumber()
  deposit: number;

  @IsNumber()
  commissionPercentage: number;
}
