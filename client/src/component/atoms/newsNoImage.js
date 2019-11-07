import React from "react";

const newsNoImage = (props) => {

    return (
        <div className={props.className}>
            <a href={props.webUrl}>
                <h2>{props.title}</h2>
            </a>
        </div>
    )
};

export default newsNoImage;