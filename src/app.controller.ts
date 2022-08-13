import { Controller, Get, Query, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/webhook')
  async checkWebHook(@Query() query): Promise<any> {
    return this.appService.checkWebHook(query);
  }
}
