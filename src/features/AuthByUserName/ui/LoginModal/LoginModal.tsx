import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader';
import { classNames } from 'shared/lib/classNames/classNames';
import { LoginFormAsync } from '../LoginForm/LoginForm.asynс';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = (props:LoginModalProps) => {
    const {
        isOpen,
        onClose,
        className,
    } = props;

    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
