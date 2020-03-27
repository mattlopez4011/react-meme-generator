import React from "react";

export const Meme =({template, onClick}) => {
    return(
     <img
        className={'imageStyles'}
        key={template.id}
        src={template.url}
        alt={template.name}
        onClick={onClick}
     />
    )
}