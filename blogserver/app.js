import express from 'express';
import mongoose from 'mongoose';
import config from './config';
import helmet from 'helmet';
import hpp from 'hpp';
import cors from 'cors';
import morgan from 'morgan';
// route
import postRoutes from './routes/api/post';

//
const app = express();
const { MONGO_URI } = config;

// 서버 보안적인 측면 보완
app.use(hpp());
app.use(helmet());

// 브라우저가 다른 도메인 혹은 포트가 다른 서버의 자원을 요청하게 해줌
app.use(cors({ origin: true, credential: true })); //모든 허용
app.use(morgan('dev-watch')); //서버 로그 보이기

//서버에서 json형태로 해석하게 함
app.use(express.json());

mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
    })
    .then(() => console.log('success'))
    .catch((err) => {
        console.log('error:', err);
    });

// ** use routes
app.get('/'); //모든 신호를 받아들인다
app.use('/api/post', postRoutes);

export default app;
