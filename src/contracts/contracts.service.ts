import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/shared/base-service';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { Contract, ContractDocument } from './entities/contract.entity';

@Injectable()
export class ContractsService extends BaseService<Contract, CreateContractDto> {
  constructor(
    @InjectModel(Contract.name) private contractModel: Model<ContractDocument>,
  ) {
    super(contractModel);
  }
}
