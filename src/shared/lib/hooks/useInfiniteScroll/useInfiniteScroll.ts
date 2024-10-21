import { MutableRefObject, useEffect } from 'react';

export interface useInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({ callback, triggerRef, wrapperRef }: useInfiniteScrollOptions) {
    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const triggerElement = triggerRef.current;

        if (callback) {
            const options = {
                root: wrapperRef.current,
                rootMargin: '0px',
                threashold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerElement);
        }

        return () => {
            if (observer && triggerElement) {
                observer.unobserve(triggerElement);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
}
