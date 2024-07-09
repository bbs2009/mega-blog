'use client';

import { useState, useEffect } from 'react';
import AppLink from './shared/components/app-link';
import { ROUTING } from './routing';

const getLikeKey = (articleName: string) => `drug_13_blog_likes_${articleName}`;


export default function ArticlePreview({name, text}: ArticlePreviewProps){
  
  const [liked, setLiked] = useState(false);

  useEffect(()=>{
    const likekey = getLikeKey(name);
    const likevalue = localStorage.getItem(likekey);
    setLiked(likevalue === 'liked')
  }, [name]);

  const like=()=>{
    const likekey = getLikeKey(name);
    localStorage.setItem(likekey, 'liked');
    setLiked(true);
  }
  
  return(
    <>
     <AppLink href={ROUTING.article(name)}>{text}</AppLink>
     <button type="button" onClick={like}>{liked? 'LIKED': 'LIKE'}</button>
     </>
  )
}