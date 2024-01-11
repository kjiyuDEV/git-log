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

app.get('*', (req, res) => {
    // '*'은 모든 라우트에 대해서 적용합니다.
    // 프로덕션 환경일 때는 Next.js가 자동으로 정적 파일을 처리합니다.
    // 따라서 여기서 따로 파일을 읽어서 보내줄 필요는 없습니다.
    res.sendFile(path.join(__dirname, '..', 'blog', '.next', 'server', 'app', 'index.html'));
});

app.use('/api/post', postRoutes);
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
    console.error('error!!!!!!!!!!', err.stack);
    res.status(500).send('Internal Server Error');
});

export default app;
