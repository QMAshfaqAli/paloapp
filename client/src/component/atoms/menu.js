import React from "react";

const menu = (props) => {

    return (
        <a href={props.slug}>
            {props.name}
        </a>
    )
};

export default menu;