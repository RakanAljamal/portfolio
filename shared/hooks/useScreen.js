import React from "react";
import { useMediaQuery } from "react-responsive";
import { SCREEN_SIZE } from "../contants";

export const useScreen = () => {

    const isTablet = useMediaQuery({
        query: `(max-width: ${SCREEN_SIZE.TABLET}px)`
    })

    return {
        isTablet
    }
}
