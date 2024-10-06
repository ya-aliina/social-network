import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Comment } from '../../model/types/comment';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string;
    comments?: Comment[]
    isLoading?: boolean;

}

export const CommentList = memo(({ className, comments, isLoading }:CommentListProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {
                comments?.length
                    ? comments.map((comment) => (
                        <CommentCard isLoading={isLoading} className={cls.comment} comment={comment} />
                    ))
                    : t('Комментарии отсутствуют')
            }
        </div>
    );
});
