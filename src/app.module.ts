import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ClientsModule } from './clients/clients.module';
import { TransactionsModule } from './transactions/transactions.module';
import { ContractsModule } from './contracts/contracts.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ClientsModule,
    TransactionsModule,
    ContractsModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
