import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/stopic')
  getAllStaticTopics(): any {
    return this.appService.getAllStaticTopics();
  }

  @Get('/stopic/:id')
  getStaticTopic(@Param() params:any): {} {
    return this.appService.getStaticTopic(params.id);
  }

  @Get('/topic')
  getAllTopic(): Promise<any> {
    return this.appService.getAllTopics();
  }

  @Get('/topic/:id')
  getTopic(@Param() params:any): {} {
    return this.appService.getTopic(params.id);
  }
}
