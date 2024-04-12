import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// prefix all routes with /v1 wont be here
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
