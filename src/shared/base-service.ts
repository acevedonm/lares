import {
  ConflictException,
  HttpException,
  NotFoundException,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { FilterQuery, Model, Types } from 'mongoose';

export class BaseService<MODEL, DTO, DTOUPDATE> {
  constructor(private readonly model: Model<MODEL>) {}

  public async create(dto: DTO): Promise<MODEL> {
    try {
      await this.model.init();
      const createdEntity = new this.model(dto);
      await createdEntity.save({}, function (err) {
        throw new ConflictException(err);
      });
      if (createdEntity) {
        return createdEntity.toObject() as MODEL;
      }
      return null;
    } catch (error) {
      throw new ConflictException(error);
    }
  }

  public async findById(id: string): Promise<MODEL> {
    try {
      return (await this.model.findById(id).lean()) as MODEL;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
  public async findAll(query?: FilterQuery<MODEL>): Promise<MODEL[]> {
    return await this.model.find(query).lean();
  }
  public async findOne(query?: FilterQuery<MODEL>): Promise<MODEL> {
    return this.model.findOne(query, null, { lean: true });
  }

  public async update(id: string, dto: DTOUPDATE): Promise<MODEL> {
    //Borro las propiedades que sean null o undefined
    let atributes = Object.keys(dto);
    atributes = atributes.filter((a) => dto[a] == null && dto[a] == undefined);
    atributes.forEach((a) => {
      delete dto[a];
    });
    //------

    const res = await this.model.findByIdAndUpdate(id, dto, {
      lean: true,
      new: true,
    });
    if (res) {
      return res;
    } else {
      throw new HttpException(
        'Error al actualizar, verifique que el id sea correcto',
        404,
      );
    }
  }

  public async remove(id: string): Promise<string> {
    await this.model.findByIdAndDelete(id);
    return id;
  }
}
