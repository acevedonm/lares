import { NotFoundException } from '@nestjs/common';
import { FilterQuery, Model, Types } from 'mongoose';

export class BaseService<T, K> {
  constructor(private readonly model: Model<T>) {}

  public async create(dto: K): Promise<T> {
    const createdEntity = new this.model(dto);
    const entity = await createdEntity.save();
    if (createdEntity) {
      return createdEntity.toObject() as T;
    }
    return null;
  }

  public async findById(id: string): Promise<T> {
    try {
      return (await this.model.findById(id).lean()) as T;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
  public async findAll(query?: FilterQuery<T>): Promise<T[]> {
    return await this.model.find(query).lean();
  }
  public async findOne(query?: FilterQuery<T>): Promise<T> {
    return this.model.findOne(query, null, { lean: true });
  }

  public async update(id: Types.ObjectId, model: T): Promise<T> {
    // const finded = await this.model.findById(id);

    //Borro las propiedades que sean null o undefined
    let atributes = Object.keys(model);
    atributes = atributes.filter(
      (a) => model[a] == null && model[a] == undefined,
    );
    atributes.forEach((a) => {
      delete model[a];
    });
    //------

    const res = await this.model.findByIdAndUpdate(id, model, {
      lean: true,
      new: true,
    });
    return res;
  }

  public async remove(id: string): Promise<string> {
    await this.model.findByIdAndDelete(id);
    return id;
  }
}
