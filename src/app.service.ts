import { Injectable } from '@nestjs/common';
require("dotenv").config();
const { MongoClient } = require('mongodb');
var ObjectId = require('mongodb').ObjectId; 

const staticTopics = [
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

  public mongoDBbUri =`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PWD}@${process.env.MONGODB_CLUSTER}`;

  getHello(): string {
    return 'Hello World!';
  }

  async getAllStaticTopics() : Promise<any> {
    return staticTopics;
  }

  getStaticTopic(id: string): {} {
    return staticTopics[parseInt(id)];
  }

  async getAllTopics(): Promise<{}> {
    const client = new MongoClient(this.mongoDBbUri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
      const database = client.db("Icebreaking");
      const topics = database.collection("topic");
      // query for movies that have a runtime less than 15 minutes
      const query = { category: 'fun' };
      const options = {
        // sort returned documents in ascending order by title (A->Z)
        sort: { title: 1 },
        // Include only the `title` and `imdb` fields in each returned document
        projection: { _id: 1, title: 1, category: 1 },
      };

      return await topics.find(query,options).toArray(() => (err: any,result: any): any => {
        if(err) throw err;
        return result; 
      });
    } finally {
      await client.close();
    }
  }

  async getTopic(id: string): Promise<{}> {
    const client = new MongoClient(this.mongoDBbUri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
      const database = client.db("Icebreaking");
      const topics = database.collection("topic");
      // query for movies that have a runtime less than 15 minutes
      const query = { _id: new ObjectId(id) };
      const options = { 
        // sort returned documents in ascending order by title (A->Z)
        // sort: { title: 1 },
        // Include only the `title` and `imdb` fields in each returned document
        projection: { _id: 0, title: 1, category: 1 },
      };
      return await topics.findOne(query,options, (err: any,result: any): any => {
        if(err) throw err;
        console.log(result);
        
        return result; 
      });
    } finally {
      await client.close();
    }   
  }
}
