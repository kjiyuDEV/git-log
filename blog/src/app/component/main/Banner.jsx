import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePathname, useRouter } from 'next/navigation';
import { faPen, faShare, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TYPE } from '../../redux/types';
import LoginModal from '../../common/modals/LoginModal';
import { faUser as faUserWhite } from '@fortawesome/free-regular-svg-icons';

const Banner = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { auth } = useSelector((state) => {
        return {
            auth: state.auth,
        };
    });
    const handleModalOpen = () => {
        console.log('acitve');
        if (!auth.token) {
            dispatch({
                type: TYPE.OPEN_MODAL,
                data: {
                    type: 'login',
                    title: '아이디와 비밀번호를 입력해주세요',
                },
            });
        } else {
            dispatch({
                type: TYPE.OPEN_CONFIRM_MODAL,
                data: {
                    type: 'logout',
                    title: '로그아웃 하시겠습니까?',
                    handleConfirm: () => {
                        dispatch({
                            type: TYPE.LOGOUT_REQUEST,
                        });
                        dispatch({
                            type: TYPE.CLOSE_CONFIRM_MODAL,
                        });
                        dispatch({
                            type: TYPE.CLOSE_MODAL,
                        });
                    },
                },
            });
        }
    };
    return (
        <>
            <div className="banner">
                <div className="visitor">
                    <p>total 방문자 수</p>
                    <p>1,234</p>
                </div>
                <div className="comment">
                    <p>반갑습니다! 그냥 이것저것 기록용.</p>
                    <p>개발일지 및 일상을 주로 기록하려함.</p>
                    <p>* 회원 권한 승인 이후 comment 및 likes 가능</p>
                    <p>* This site developed by kjiyu 2024</p>
                </div>
                <div className="icon_wrap">
                    {auth.user && auth?.userRole !== 'User' && (
                        <div className="login">
                            <div
                                onClick={() => {
                                    router.push('/posting');
                                }}
                            >
                                <FontAwesomeIcon icon={faPen} />
                            </div>
                        </div>
                    )}
                    <div className="login">
                        <div onClick={handleModalOpen}>
                            <FontAwesomeIcon icon={auth.token ? faUser : faUserWhite} />
                        </div>
                    </div>
                    <div className="share">
                        <div>
                            <FontAwesomeIcon icon={faShare} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
