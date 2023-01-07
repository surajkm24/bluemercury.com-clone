import { useEffect, useState } from "react"
let init = window.innerWidth;
init = init >= 1024 ? 4 : init >= 768 ? 3 : init >= 500 ? 2 : 1;

export const useNoOfCards = () => {
    const [total, setTotal] = useState(init);

    const handleScreenResize = () => {
        let w = window.innerWidth;
        if (w >= 1024) setTotal(4);
        else if (w >= 768) setTotal(3);
        else if (w >= 500) setTotal(2);
        else setTotal(1);
    }

    useEffect(() => {
        window.addEventListener('resize', handleScreenResize)
        return () => window.removeEventListener('resize', handleScreenResize)
    }, [])

    return { total };
}