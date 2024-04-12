import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';

// using services
// 1 import class service, then use methods
@Controller('books')
export class BooksController {
  serviceInstance = new BooksService();

  @Get()
  findAll() {
    // serviceInstace.
  }
}
