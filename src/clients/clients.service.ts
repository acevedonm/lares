import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Client, ClientDocument } from './entities/client.entity';
import { BaseService } from 'src/shared/base-service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientsService extends BaseService<Client, CreateClientDto> {
  constructor(
    @InjectModel(Client.name) private clientModel: Model<ClientDocument>,
  ) {
    super(clientModel);
  }
  /* 
  async create(createClientDto: CreateClientDto): Promise<Client> {
    return new this.clientModel(createClientDto).save();
  }

  async findAll() {
    return this.clientModel.find();
  } */

  /*   async findOne(id: string) {
    const oid = new Types.ObjectId(id);
    return this.clientModel.findById(id);
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  } */
}
