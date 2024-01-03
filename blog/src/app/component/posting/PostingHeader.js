'use client';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import React from 'react';

const PostingHeader = ({ onSubmit }) => {
    const router = useRouter();
    return (
        <div className="posting-header">
            <div className="close-btn" onClick={() => router.back()}>
                <FontAwesomeIcon icon={faXmark} fontSize="20px" />
            </div>
            <div className="submit-btn" onClick={onSubmit}>
                등록
            </div>
        </div>
    );
};

export default PostingHeader;
