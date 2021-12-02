import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { TypeClient } from './clientType-enum';

export type ClientDocument = Client & Document;

@Schema()
export class Client {
  @Prop()
  name: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  types: TypeClient[];
}

export const ClientSchema = SchemaFactory.createForClass(Client);
