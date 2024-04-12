import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  findAll() {
    return 'a lot of books';
  }
}
