import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import todoRoute from './routes/todo.route.js';
import cors from 'cors';


const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
};
app.use(cors(corsOptions));

dotenv.config({});


// app.get("/home", (req, res) => {
//     return res.status(200).json({
//         message: "good",
//         success: true
//     })
// });

// console.log(process.env.MONGO_URI);

// const route = router;

const PORT = process.env.PORT || 5000;

// app.use(route);
app.use('/api/todos', todoRoute);



app.listen(PORT, () => {
    connectDB();
    console.log(`Server Connected at ${PORT}`);
})