import { IsArray, IsDate, IsNumber, IsString } from 'class-validator';
interface increase {
  date: Date;
  percentage: number;
}
export class CreateContractDto {
  @IsString()
  renter: string;

  @IsString()
  owner: string;

  @IsString({ each: true })
  @IsArray()
  warranties: string[];

  @IsDate()
  start: Date;

  @IsDate()
  end: Date;

  @IsArray()
  increases: increase[];

  @IsNumber()
  commission: number;

  @IsNumber()
  deposit: number;

  @IsNumber()
  commissionPercentage: number;
}
