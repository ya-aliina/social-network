import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { addNewCommentActions, addNewCommentReducer } from '../../model/slices/addNewCommentSlice';
import {
    // addNewCommentError,
    addNewCommentText,
} from '../../model/selectors/addNewCommentSelectors';
import cls from './AddNewComment.module.scss';

interface AddNewCommentProps {
    className?: string;
}

const AddNewComment = memo(({ className }:AddNewCommentProps) => {
    const { t } = useTranslation();
    const text = useSelector(addNewCommentText);
    // const error = useSelector(addNewCommentError);
    const dispatch = useAppDispatch();
    const reducers: ReducersList = {
        addNewComment: addNewCommentReducer,
    };

    const addNewCommentTextChange = useCallback((value: string) => {
        dispatch(addNewCommentActions.setText(value));
    }, [dispatch]);

    const onSendComment = useCallback(() => {

    }, []);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddNewComment, {}, [className])}>
                <Input
                    className={cls.input}
                    value={text}
                    onChange={addNewCommentTextChange}
                    placeholder={t('Введите текст комментария')}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendComment}
                >
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddNewComment;
