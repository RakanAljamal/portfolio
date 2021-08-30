import React, { useState, useEffect } from "react";

export const useIntersection = (element, rootMargin) => {
    const [isVisible, setState] = useState(false);
    if (!element?.current) {
        return isVisible;
    }

    useEffect(() => {
        console.log(element)
        const observer = new IntersectionObserver(([entry]) => {
                setState(entry.intersectionRatio > 0);
            }, { rootMargin }
        );

        element && observer.observe(element);

        return () => observer.unobserve(element);
    }, []);

    return isVisible;
};
