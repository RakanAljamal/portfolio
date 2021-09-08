import React, { useEffect, useState } from "react";

export const useInScreen = () => {
    const [ref, setRef] = useState(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(entry => setShow(entry.isIntersecting))
            , { threshold: 0.5 })

        if (ref) {
           ref && observer.observe(ref);
        }

    }, [ref])

    return {
        ref: setRef,
        show,
    }
}
