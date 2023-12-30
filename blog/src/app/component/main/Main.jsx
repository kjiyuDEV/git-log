'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { TYPE } from '@/app/redux/types';

const Main = () => {
    const dispatch = useDispatch();
    const { posts, postCount } = useSelector((state) => state.post);
    const initFetch = () => {
        dispatch({ type: TYPE.POSTS_LOADING_REQUEST, payload: 0 });
    };

    useEffect(() => {
        console.log('count');
        initFetch();
    }, []);
    return (
        <ol className="main-posts">
            <p>총 {postCount}개의 글</p>
            {posts.map((v) => {
                return (
                    <li key={v.id} className="post-card">
                        <Link href={`/post/${v._id}`}>
                            <div className="post-title">
                                <span className="date">
                                    {v.date.split(' ')[0]}
                                    <span className="time">{v.date.split(' ')[1]}</span>
                                </span>
                                <span className="title">{v.title}</span>
                            </div>
                            <div className="post-image">
                                <img src={`${v.src}`} />
                            </div>
                            <div className="content">{v.content}</div>
                        </Link>
                    </li>
                );
            })}
        </ol>
    );
};

export default Main;
