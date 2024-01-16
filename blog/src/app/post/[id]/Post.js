'use client';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { TYPE } from '@/app/redux/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartFill } from '@fortawesome/free-solid-svg-icons';
const Post = ({ id }) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.post.postDetail);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        dispatch({ type: TYPE.POST_DETAIL_LOADING_REQUEST, payload: id });
    }, []);
    return (
        <>
            <div className="post-wrap">
                <div className="title-wrap">
                    <p className="category">{data?.category?.categoryName || '일상'}</p>
                    <p className="title">{data.title}</p>
                    <p className="date">{data.date}</p>
                </div>
                <div className="contents">
                    <div dangerouslySetInnerHTML={{ __html: data.contents }}></div>
                    <div dangerouslySetInnerHTML={{ __html: data.contents }}></div>
                    <div dangerouslySetInnerHTML={{ __html: data.contents }}></div>
                </div>
            </div>
            <div className="post-footer">
                <div className="left-wrap">
                    <div className="likes" onClick={() => setLiked(!liked)}>
                        {/* <FontAwesomeIcon icon={faHeart} fontSize={'25px'} /> */}
                        <FontAwesomeIcon
                            icon={liked ? faHeartFill : faHeart}
                            fontSize={'25px'}
                            color="rgb(237, 64, 107)"
                        />
                        <p>{2}</p>
                    </div>
                    <div className="comments">
                        <FontAwesomeIcon icon={faComment} fontSize={'25px'} />
                    </div>
                </div>
                <div className="share">
                    <FontAwesomeIcon icon={faShare} fontSize={'25px'} />
                </div>
            </div>
        </>
    );
};

export default Post;
