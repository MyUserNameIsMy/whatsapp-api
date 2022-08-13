import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async checkWebHook(data: any) {
    console.log(data);
  }
}
