import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        // If not a hash link, scroll to top
        if (hash === '') {
            window.scrollTo(0, 0);
        }
        // Else scroll to id
        else {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100); // 100ms delay to allow DOM to render
        }
    }, [pathname, hash, key]);

    return null;
};

export default ScrollToHash;
