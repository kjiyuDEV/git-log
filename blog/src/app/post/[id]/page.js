import React from 'react';
import Post from './Post';
import { useParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import axios from 'axios';

export async function generateStaticParams() {
    const posts = await fetch(`${process.env.NEXT_PUBLIC_BASIC_SERVER_URL}/api/post/skip/0`).then((res) => res.json());
    const res = [];
    posts.postsList.map((v, i) => {
        res.push({ id: v._id });
    });
    return res;
}

export default function Page({ params }) {
    return <Post id={params.id} />;
}
