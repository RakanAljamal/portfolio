import React from "react";
import Image from "next/image";
import cv from '../../public/cv.png'
export const LocalImage = ({ alt, name }) => {

    const handleClick = () => {
        window.open('/api/resume', '__blank');
    }
    return (
        <Image onClick={handleClick} alt={alt || 'image'} src={cv}/>
    )
}
