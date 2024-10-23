import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { addNewCommentActions, addNewCommentReducer } from '../../model/slices/addNewCommentSlice';
import { addNewCommentText } from '../../model/selectors/addNewCommentSelectors';
import cls from './AddNewComment.module.scss';

export interface AddNewCommentProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const AddNewComment = memo(({ className, onSendComment }:AddNewCommentProps) => {
    const { t } = useTranslation();
    const text = useSelector(addNewCommentText);
    const dispatch = useAppDispatch();
    const reducers: ReducersList = {
        addNewComment: addNewCommentReducer,
    };

    const addCommentTextChange = useCallback((value: string) => {
        dispatch(addNewCommentActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        addCommentTextChange('');
    }, [addCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddNewComment, {}, [className])}>
                <Input
                    className={cls.input}
                    value={text}
                    onChange={addCommentTextChange}
                    placeholder={t('Введите текст комментария')}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendHandler}
                >
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddNewComment;
