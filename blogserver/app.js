import express from 'express';
import mongoose from 'mongoose';
import config from './config';
import helmet from 'helmet';
import hpp from 'hpp';
import cors from 'cors';
import morgan from 'morgan';
import postRoutes from './routes/api/post';
import userRoutes from './routes/api/user';
import authRoutes from './routes/api/auth';
import path from 'path';

const app = express();
const { MONGO_URI } = config;
const prd = process.env.NODE_ENV === 'production';

app.use(hpp());
app.use(helmet());

if (process.env.NODE_ENV === 'production') {
    app.use(morgan('combined'));
} else {
    app.use(morgan('dev'));
}

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: false }));
app.use(express.json());

mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });

app.get('/', (req, res) => {
    if (prd) {
        return res.sendFile(path.join(__dirname, 'build', 'app.js'));
    } else {
        // Handle '/' route in non-production environment if needed
        // For example, you might want to render a different HTML page
        res.send('Non-production environment: Handle the route as needed');
    }
});

app.use('/api/post', postRoutes);
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
    console.error('error!!!!!!!!!!', err.stack);
    res.status(500).send('Internal Server Error');
});

export default app;
