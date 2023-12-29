"use client"
import React from 'react';
import Link from 'next/link';

const Main = () => {
        const mainPost = [
        {
            id: 0,
            title: '일본여행 일지',
            content:
                '또 가고싶다 로또당첨되면 한 달에 한 번 갈거다. 오사카는 그래도 2025년즈음에 가고 싶다. 곧 나고야 간다. 우히히힣히 너무 시난다 오예오예오옝~~콘니치와 스고이 와쿠와쿠데스네',
            src: '../img/profile.jpg',
            date: '2023.12.17',
        },
        {
            id: 1,
            title: 'node js 정리',
            content: '오우야 진짜 너무 어렵당',
            src: '../img/profile.jpg',
            date: '2023.12.27',
        },
    ];
    return (
        <ol className="main-posts">
                    {mainPost.map((v) => {
                        return (
                            <li
                                key={v.id}
                                className="post-card"
                            >
                                <Link
                                    href={`/post/${v.id}`}
                                >
                                    <div className="post-title">
                                        <span className="date">
                                            {v.date}
                                        </span>
                                        <span className="title">
                                            {v.title}
                                        </span>
                                    </div>
                                    <div className="post-image">
                                        <img
                                            src={`${v.src}`}
                                        />
                                    </div>
                                    <div className="content">
                                        {v.content}
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ol>
    );
};

export default Main;