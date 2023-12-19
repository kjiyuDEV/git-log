import { faShare, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const Banner = () => {
    return (
        <>
        <div className='banner'>
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
            <div className='icon_wrap'>
                <div className='login'>
                    <div> 
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                </div>
                <div className='share'>
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