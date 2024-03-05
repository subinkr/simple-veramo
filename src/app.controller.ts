import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getID() {
    return this.appService.getID();
  }

  @Get('credentialStatus')
  async getCredentialStatus() {
    return false;
  }
}
