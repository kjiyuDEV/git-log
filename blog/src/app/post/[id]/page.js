import React from 'react';
import Post from './Post';
import { useSelector } from 'react-redux';
import { useParams } from 'next/navigation';

export async function generateStaticParams() {
    return;
}

export default function Page({ params }) {
    return <Post id={params.id} />;
}
