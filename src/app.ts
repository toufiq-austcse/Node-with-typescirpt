import * as express from "express";
import * as bodyParser from 'body-parser';
import {Routes} from './routes/crmRoutes';
import * as mongoose from 'mongoose';
class App {
    public app:express.Application;
    public routePrv:Routes = new Routes();
    private mongoUrl:string = 'mongodb://localhost/crm';


    constructor(){
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetUp();
    }
    private config():void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:false}));

    }
    private mongoSetUp():void{
        mongoose.connect(this.mongoUrl);
    }
}
export default new App().app;
