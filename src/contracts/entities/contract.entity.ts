import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContractDocument = Contract & Document;

@Schema()
export class Contract {
  @Prop()
  name: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;
}

export const ContractSchema = SchemaFactory.createForClass(Contract);
