import express from 'express' ; 
import mongoose  from 'mongoose';
import dotenv  from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js'; 
import cookieParser from 'cookie-parser';
import path from 'path' ; 
dotenv.config({path: './api/config/config.env'}); 
import cors from "cors";




mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDB!');
}).catch((err)=>{
    console.log(err);
});

const __dirname = path.resolve();

const app = express(); 
app.use(cors({origin: true, credentials: true,}));

app.use(express.json()) ; //allow to send json to server as input

app.use(cookieParser()) ;

app.listen(3000, ()=>{
    console.log('server is running on port 3000!');
}
); 


app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use('/api/listing', listingRouter);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
  })

app.use((err,req,res,next) =>{
const statusCode = err.statusCode || 500 ; 
const message = err.message || 'Internal Server Error'; 
return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
});
});
