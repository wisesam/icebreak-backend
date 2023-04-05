import { Injectable } from '@nestjs/common';

const topics =[
  {
   "title":"Favorate Movie",
   "category":"fun" 
  },
  {
    "title":"Best Game",
    "category":"fun" 
   },
   {
    "title":"Grace Moment",
    "category":"church" 
   }
];

@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Hello World!';
  }
  getAllTopics() {
   
    return topics;
  }

  getTopic(id: string): {} {
    return topics[parseInt(id)];
  }
  
}
