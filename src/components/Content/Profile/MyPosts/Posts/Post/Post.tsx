import React from "react";
import s from './Post.module.css';
import {Likes} from "./Likes/Likes";
import {postType} from "../../../../../../redux/state";
type PostPropsType = {
    data: postType
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={s.post}>
            <div className={s.avatar}>
                <img className={s.img} src={props.data.avatar} alt="avatar"/>
            </div>
            <p className={s.message}>{props.data.text} <span className={s.date}>{props.data.date}</span></p>
           <Likes numOfLikes={props.data.numOfLikes}/>
        </div>
    )
}