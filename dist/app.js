"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const crmRoutes_1 = require("./routes/crmRoutes");
const mongoose = require("mongoose");
class App {
    constructor() {
        this.routePrv = new crmRoutes_1.Routes();
        this.mongoUrl = 'mongodb://localhost/crm';
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetUp();
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetUp() {
        mongoose.connect(this.mongoUrl);
    }
}
exports.default = new App().app;
