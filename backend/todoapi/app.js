import express from 'express';
import todosRouter from './todoRoutes.js';
import cors from "cors"


const app = express();
app.use(cors())
app.use(express.json());
app.use('/todos', todosRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
