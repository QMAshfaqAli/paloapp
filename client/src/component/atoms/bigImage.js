import React from "react";
import style from './styles/bigImage.module.css';

const bigImage = (props) => {

    let imgUrl;
    if (props.imageUrl) {
        imgUrl = "http://thumbor-stg.assettype.com/" + props.imageUrl;
    } else {
        imgUrl = window.location.origin + "/default_thumbnail_800x450.png";
    }

    return (
        <div className={props.className}>
            <a href={props.webUrl}>
                <figure className={props.imageRatio}><picture><img src={imgUrl} alt="my"/></picture></figure>
                <h2>{props.title}</h2>
                <p>{props.excerpt}</p>
                <span className={style.category}>{props.category}</span>
            </a>
        </div>
    )
};

export default bigImage;