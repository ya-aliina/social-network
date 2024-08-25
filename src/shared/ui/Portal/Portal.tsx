import { ReactNode, ReactPortal } from 'react';
import { createPortal } from 'react-dom';
import 'app/styles/index.scss';

interface PortalProps {
    children: ReactNode;
    container?: HTMLElement;
}

export const Portal = (props:PortalProps): ReactPortal | null => {
    const {
        children,
        container = document.body,
    } = props;

    return createPortal(children, container);
};
