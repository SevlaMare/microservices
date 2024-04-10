import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Being cyclic, but assume is not cyclic';
  }
}
