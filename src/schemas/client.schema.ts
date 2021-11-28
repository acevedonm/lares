import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClientDocument = Client & Document;

@Schema()
export class Client {
  @Prop()
  name: string;

  @Prop()
  last_name: string;

  @Prop()
  tel: number;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
