import React, { useEffect, useState } from 'react';
import ModalHeader from './ModalHeader';
import { faEye, faEyeSlash, faFaceSmile, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { TYPE } from '@/app/redux/types';
import { useRouter } from 'next/navigation';

const LoginModal = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [pwdHide, setPwdHide] = useState(true);
    const [msg, setMsg] = useState('');
    const [form, setForm] = useState({
        userId: '',
        password: '',
    });
    const { errorMsg, modal, auth } = useSelector((state) => {
        return {
            errorMsg: state.auth.errorMsg,
            modal: state.modals.modal,
            auth: state.auth,
        };
    });

    const onChange = (e) => {
        const { value, userId, name } = e.target;
        console.log(value);
        setForm({ ...form, [name]: value });
        dispatch({
            type: TYPE.CLEAR_ERROR_REQUEST,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault(); //서버에 전송 시 새로고침 방지
        const { userId, password } = form;
        const user = { userId, password };
        console.log(user, '::user');
        dispatch({
            type: TYPE.LOGIN_REQUEST,
            payload: user,
        });
    };

    const checkRes = () => {};

    const handlesignUp = () => {
        router.push('/signUp');
        dispatch({
            type: TYPE.CLOSE_MODAL,
        });
    };

    useEffect(() => {
        if (errorMsg) {
            setMsg(errorMsg);
        } else {
            setMsg('');
        }
    }, [errorMsg]);

    useEffect(() => {
        dispatch({
            type: TYPE.CLEAR_ERROR_REQUEST,
        });
    }, []);

    return (
        modal.open &&
        modal.data.type === 'login' &&
        !auth.token && (
            <div className="modal-wrap">
                <div className="modal">
                    <ModalHeader />
                    <div className="input_wrap">
                        <input type="text" placeholder="ID" name="userId" onChange={onChange} />
                        <FontAwesomeIcon icon={faFaceSmile} color="#c5c5c5" />

                        <input
                            type={pwdHide ? 'password' : 'text'}
                            placeholder="Password"
                            name="password"
                            onChange={onChange}
                        />
                        <FontAwesomeIcon icon={faLock} color="#c5c5c5" />
                        <FontAwesomeIcon
                            icon={pwdHide ? faEyeSlash : faEye}
                            className="password_show"
                            color="#c5c5c5"
                            onClick={() => setPwdHide(!pwdHide)}
                        />
                    </div>
                    <p className="err_msg">{msg}</p>
                    <div className="btn-wrap">
                        <button onClick={onSubmit}>로그인</button>
                        <button onClick={handlesignUp}>회원가입</button>
                    </div>
                </div>
            </div>
        )
    );
};

export default LoginModal;
