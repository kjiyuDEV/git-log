'use client';
import { Inter } from 'next/font/google';
import '../../public/css/content.css';
import ReduxProvider from './provider';
import Slidemenu from './common/Slidemenu';
import Header from './common/Header';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ConfirmModal from './common/modals/ConfirmModal';
import LoginModal from './common/modals/LoginModal';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });
console.log('here');

export default function RootLayout({ children }) {
    const ref = useRef();
    const [hideMenu, setHideMenu] = useState(true);

    const App = () => {
        const dispatch = useDispatch();
        const { auth } = useSelector((state) => {
            return {
                confirmModal: state.modals.confirmModal,
                auth: state.auth,
            };
        });
    };
    return (
        <html lang="en">
            <body className={inter.className}>
                <Toaster
                    toastOptions={{
                        style: {
                            fontSize: '12px',
                            background: 'rgba(0, 0, 0, 0.801)',
                            color: 'white',
                            height: '30px',
                            borderRadius: '20px',
                        },
                        duration: '300',
                    }}
                />
                <div className="main-wrap">
                    <ReduxProvider>
                        <App />
                        {!hideMenu && <Slidemenu hideMenu={hideMenu} setHideMenu={setHideMenu} />}
                        <div className="wrap" ref={ref}>
                            <Header wrapRef={ref} hideMenu={hideMenu} setHideMenu={setHideMenu} />
                            {children}
                        </div>
                        <ConfirmModal />
                        <LoginModal />
                    </ReduxProvider>
                </div>
            </body>
        </html>
    );
}
