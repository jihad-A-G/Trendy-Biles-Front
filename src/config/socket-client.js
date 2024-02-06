import {io} from 'socket.io-client'
import Cookies from 'js-cookie';
const socket = io('http://localhost:4000',{
    reconnectionDelayMax:10000,
})

socket.on('connect',()=>{
    console.log('hello client',socket.id);
})
// socket.on('notification',Notification=>{
//     console.log('new notification', Notification);
// })

export default socket
