import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mongoose, Types } from 'mongoose';
import { TypeConcept } from './concept-type.enum';
import * as uniqueValidator from 'mongoose-unique-validator';

export type TransactionDocument = Transaction & Document;
@Schema()
export class Transaction {
  @Prop({
    required: true,
    ref: 'contracts',
  })
  contract: Types.ObjectId;

  @Prop({
    required: true,
    ref: 'clients',
  })
  client: Types.ObjectId;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  concept: TypeConcept;

  @Prop({ required: false })
  receipt: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: false })
  discount: number;

  @Prop({ required: false })
  increase: number;

  @Prop({ required: false })
  observations: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);

TransactionSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único' });
