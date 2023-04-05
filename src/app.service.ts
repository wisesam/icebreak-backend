import { Injectable } from '@nestjs/common';

const staticTopics =[
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
   
    return staticTopics;
  }

  getTopic(id: string): {} {
    return staticTopics[parseInt(id)];
  }
  
}
