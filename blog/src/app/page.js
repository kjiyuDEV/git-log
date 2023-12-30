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
    const { confirmModal, auth, modal } = useSelector((state) => {
        console.log(state);
        return {
            confirmModal: state.modals.confirmModal,
            auth: state.auth,
            modal: state.modals.modal,
        };
    });

    useEffect(() => {}, []);

    return (
        <>
            <Banner />
            <Main />
        </>
    );
}
