'use client';
import Image from 'next/image';
import Header from './component/Header';
import Slidemenu from './component/slide_menu/Slidemenu';
import {
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from 'react';
import Banner from './component/Banner';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
    const ref = useRef();
    const dispatch = useDispatch();
    const [hideMenu, setHideMenu] = useState(true);
    const dd = useSelector((state) => {
        console.log(state);
    });
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

    useEffect(() => {
        dispatch({
            type: 'gg',
        });
    }, []);

    return (
        <>
            {!hideMenu && (
                <Slidemenu
                    hideMenu={hideMenu}
                    setHideMenu={setHideMenu}
                />
            )}
            <div ref={ref} className="wrap">
                <Header
                    wrapRef={ref}
                    hideMenu={hideMenu}
                    setHideMenu={setHideMenu}
                />
                <Banner />
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
            </div>
        </>
    );
}
