import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/shared/base-service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import {
  Transaction,
  TransactionDocument,
} from './entities/transaction.entity';

@Injectable()
export class TransactionsService extends BaseService<
  Transaction,
  CreateTransactionDto,
  UpdateTransactionDto
> {
  constructor(
    @InjectModel(Transaction.name)
    private clientModel: Model<TransactionDocument>,
  ) {
    super(clientModel);
  }
}
