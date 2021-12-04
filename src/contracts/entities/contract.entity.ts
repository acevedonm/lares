import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
interface increase {
  date: Date;
  percentage: number;
}

export type ContractDocument = Contract & Document;

@Schema()
export class Contract {
  @Prop({ required: true, ref: 'clients' })
  renter: string;

  @Prop({ required: true, ref: 'clients' })
  owner: string;

  @Prop({ required: true, ref: 'clients' })
  warranties: string[];

  @Prop()
  start: Date;

  @Prop()
  end: Date;

  @Prop()
  increases: increase[];

  @Prop()
  commission: number;

  @Prop()
  deposit: number;

  @Prop()
  commissionPercentage: number;
}
export const ContractSchema = SchemaFactory.createForClass(Contract);
