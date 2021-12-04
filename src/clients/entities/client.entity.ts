import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { TypeClient } from './client-type.enum';
import * as uniqueValidator from 'mongoose-unique-validator';

export type ClientDocument = Client & Document;

@Schema()
export class Client {
  @Prop()
  name: string;

  @Prop()
  lastName: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  types: TypeClient[];

  @Prop()
  balance: number;
}

export const ClientSchema = SchemaFactory.createForClass(Client);

ClientSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único' });
