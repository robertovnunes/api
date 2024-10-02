import Server from './conf/server'
import { Router } from 'express'
import router from './routes'


const server = new Server();

server.start();

const app = server.getServer();

app.use(router);

