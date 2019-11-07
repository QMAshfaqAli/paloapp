import React from "react";
import Style from './styles/loadMoreButton.module.css';

const loadMoreButton = (props) => {


    return (
        <div className={Style.loadMore}>
            <a href={props.url}>
                {props.text}
            </a>
        </div>
    )
};

export default loadMoreButton;