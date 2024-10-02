import express from "express"

class Server {
    private server: express.Application
    constructor(){
         this.server = express();
         this.server.use(express.json());
    }

    start(){
        this.server.listen(3000, () => {
            console.log("Server is running on port 3000")
        })
    }

    getServer(){
        return this.server;
    }
}

export default Server;