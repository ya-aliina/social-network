import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import 'app/styles/index.scss';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal = (props:PortalProps) => {
    const {
        children,
        element = document.body,
    } = props;
    return createPortal(children, element);
};
