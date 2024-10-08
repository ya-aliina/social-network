import { classNames } from 'shared/lib/classNames/classNames';
// import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo(({ className, comment, isLoading }:CommentCardProps) => {
    // const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton height={30} width={30} border="50%" />
                    <Skeleton height={15} width={90} className={cls.username} />
                </div>
                <Skeleton className={cls.text} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink className={cls.header} to={`${RoutePath.profile}/${comment.user.id}`}>
                {comment.user.avatar
                    ? <Avatar size={30} src={comment.user.avatar} alt="avatar" />
                    : null}
                <Text className={cls.username} text={comment.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </div>
    );
});
