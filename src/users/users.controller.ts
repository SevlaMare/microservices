import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users') // prefix all routes
export class UsersController {
  // inject methods from services.
  constructor(private readonly usersService: UsersService) {}

  @Post()
  // call a method from service.
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // QUERY PARAM
  @Get()
  findAll(@Query('kind') type: string) {
    // return this.usersService.findAll();
    return [{ type }];
  }

  // ROUTE PARAM = users/1 => @Param()
  // should 200 only for ID == number!
  // users/unk/unk shound't be 200!
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
