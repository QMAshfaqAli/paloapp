import React from "react";
import Style from './styles/bigImage.module.css';

const leftImage = (props) => {

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

                <div>
                    <h2>{props.title}</h2>
                    <p>{props.excerpt}</p>
                    <span className={Style.category}>{props.category}</span>
                </div>
            </a>
        </div>
    )
};

export default leftImage;