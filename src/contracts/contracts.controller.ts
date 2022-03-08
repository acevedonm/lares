import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ClientsService } from 'src/clients/clients.service';
import { ContractsService } from './contracts.service';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';

@ApiTags('Contracts')
@Controller('contracts')
export class ContractsController {
  constructor(
    private readonly contractsService: ContractsService,
    private readonly _clientService: ClientsService,
  ) {}

  @Post()
  create(@Body() createContractDto: CreateContractDto) {
    console.log('Buscar renter');
    let renter = this._clientService.findById(createContractDto.renter);
    let owner = this._clientService.findById(createContractDto.owner);
    console.log({ renter });
    if (!renter && !owner) {
      console.log('NO EXISTEN');
    } else {
      return this.contractsService.create(createContractDto);
    }
  }

  @Get()
  findAll() {
    return this.contractsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contractsService.findById(id);
  }

  /*   @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateContractDto: UpdateContractDto,
  ) {
    return this.contractsService.update(id, updateContractDto);
  } */

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contractsService.remove(id);
  }
}
