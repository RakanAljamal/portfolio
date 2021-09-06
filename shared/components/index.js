import React from "react";

export const LocalImage = ({ alt, name }) => {

    const handleClick = () => {
        window.open('/api/resume', '__blank');
    }
    return (
        <img onClick={handleClick} alt={alt || 'image'} src={`${window?.location.origin}/${name}`}/>
    )
}
