import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import 'app/styles/index.scss';

interface PortalProps {
    children: ReactNode;
    container?: HTMLElement;
}

export const Portal = (props:PortalProps) => {
    const {
        children,
        container = document.body,
    } = props;

    return createPortal(children, container);
};
