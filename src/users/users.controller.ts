import { Controller } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  create(user: User): user {}
}
