import { Server } from "socket.io";

//socket server initializing 
const SocketHandler = (req , res) => {
    //if alrady initialized no need to crrate again and again 
    if( res.socket.server.io){
        console.log("socket is already running")
    }
    else {
        const io = new Server(res.socket.server) 
        res.socket.server.io = io

        io.on('connection' , (socket) => {
            console.log("server is connected")
       })
    }
    res.end();
}

export default SocketHandler;
