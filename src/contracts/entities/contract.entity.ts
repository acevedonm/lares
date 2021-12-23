import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mongoose, Types } from 'mongoose';
import { Client } from 'src/clients/entities/client.entity';
interface increase {
  date: Date;
  percentage: number;
}

export type ContractDocument = Contract & Document;
@Schema()
export class Contract {
  @Prop({
    required: true,
    ref: 'clients',
  })
  renter: Types.ObjectId;

  @Prop({
    required: true,
    ref: 'clients',
  })
  owner: Types.ObjectId;

  @Prop({
    required: true,
    ref: 'clients',
  })
  warranties: Types.ObjectId[];

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
