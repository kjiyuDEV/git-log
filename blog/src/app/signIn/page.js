'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TYPE } from '../redux/types';

const SignIn = () => {
    const dispatch = useDispatch();
    const [msg, setMsg] = useState(null);
    const [validChk, setValidChk] = useState(true);
    const [form, setForm] = useState({
        id: null,
        password: null,
        passwordChk: null,
        name: null,
        nickname: null,
        msg: null,
    });

    const onChange = (e) => {
        let { value, id } = e.target;
        if (value === '') {
            value = null;
        }
        setForm({ ...form, [id]: value });
    };

    const onSubmit = (e) => {
        console.log('onSubmit');
        e.preventDefault();
        dispatch({
            type: TYPE.USER_REGISTER_REQUEST,
            payload: form,
        });
    };

    useEffect(() => {
        // slide메뉴 경로로 유입됐을때, slide-menu를 닫게한다.
        if (document.getElementsByClassName('slide-menu') && document.getElementsByClassName('slide-menu')[0]) {
            document.getElementsByClassName('slide-menu')[0].className = 'slide-menu';
        }
    }, []);

    return (
        <div className="signIn">
            <p>회원가입 회원정보 입력</p>
            <form onSubmit={onSubmit}>
                <div className="default-wrap">
                    <input id="userId" placeholder="아이디 *" style={{ borderTop: 0 }} onChange={(e) => onChange(e)} />
                    <input id="password" type="password" placeholder="비밀번호 *" onChange={(e) => onChange(e)} />
                    <input
                        id="passwordChk"
                        type="password"
                        placeholder="비밀번호 재입력 *"
                        onChange={(e) => onChange(e)}
                    />
                </div>
                <div className="additional-wrap">
                    <input
                        id="name"
                        placeholder="이름 * (본명을 입력하세요)"
                        style={{ borderTop: 0 }}
                        onChange={(e) => onChange(e)}
                    />
                    <input
                        id="nickname"
                        placeholder="닉네임 (모든 활동이 닉네임으로 노출됩니다)"
                        onChange={(e) => onChange(e)}
                    />
                    <input id="msg" placeholder="관리자한테 보낼 메세지" onChange={(e) => onChange(e)} />
                </div>
                <p className="msg">{msg}</p>
                <input disabled={!validChk} className="signIn-submit" type="submit" value="회원가입 신청" />
            </form>
            <div className="caution">
                <p className="color-red">- * 표시의 라벨은 필수값입니다.</p>
                <p>- 닉네임은 미입력시 이름과 동일화 시킵니다.</p>
                <p>- 모든 비밀번호는 암호화되어 저장됩니다. 관리자도 몰라요.</p>
                <p>- 회원가입은 신청 후 승인까지.. 관리자 재량입니다.</p>
                <p>- 그렇기 때문에 빠른 회원가입을 원하신다면 직접 연락해주세요.</p>
                <p>- 회원가입은 평균 3-4일 소요됩니다.</p>
            </div>
        </div>
    );
};

export default SignIn;
