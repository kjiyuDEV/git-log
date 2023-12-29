'use client';
import { Inter } from 'next/font/google';
import '../../public/css/content.css';
import ReduxProvider from './provider';
import Slidemenu from './common/Slidemenu';
import Header from './common/Header';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

const inter = Inter({ subsets: ['latin'] });
console.log('here');

export default function RootLayout({ children }) {
    const ref = useRef();
    const [hideMenu, setHideMenu] = useState(true);
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="main-wrap">
                    <ReduxProvider>
                        {!hideMenu && <Slidemenu hideMenu={hideMenu} setHideMenu={setHideMenu} />}
                        <div className="wrap" ref={ref}>
                            <Header wrapRef={ref} hideMenu={hideMenu} setHideMenu={setHideMenu} />
                            {children}
                        </div>
                    </ReduxProvider>
                </div>
            </body>
        </html>
    );
}
