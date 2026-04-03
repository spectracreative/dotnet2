import { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

const Counter = ({ from = 0, to, duration = 2, delay = 0 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, margin: "-50px" });

    useEffect(() => {
        if (inView) {
            const animation = animate(from, to, {
                duration,
                delay,
                ease: "easeOut",
                onUpdate: (value) => {
                    if (ref.current) {
                        ref.current.textContent = Math.round(value);
                    }
                }
            });
            return () => animation.stop();
        }
    }, [inView, from, to, duration, delay]);

    return <span ref={ref}>{from}</span>;
};

export default Counter;
