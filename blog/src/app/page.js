'use client';
import Image from 'next/image';
import Header from './common/Header';
import Slidemenu from './common/Slidemenu';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Banner from './component/main/Banner';
import { useDispatch, useSelector } from 'react-redux';
import Main from './component/main/Main';
import LoginModal from './common/modals/LoginModal';
import { wrapper } from './store';
import ConfirmModal from './common/modals/ConfirmModal';
import { Toaster } from 'react-hot-toast';

export default function Home() {
    const { confirmModal, auth } = useSelector((state) => {
        console.log(state);
        return {
            confirmModal: state.modals.confirmModal,
            auth: state.auth,
        };
    });

    useEffect(() => {}, []);

    return (
        <>
            <Banner />
            <Main />

            <Toaster
                toastOptions={{
                    style: {
                        fontSize: '12px',
                        background: 'rgba(0, 0, 0, 0.801)',
                        color: 'white',
                        height: '30px',
                        borderRadius: '20px',
                    },
                    duration: '150',
                }}
            />
            {confirmModal.open && <ConfirmModal />}
        </>
    );
}
