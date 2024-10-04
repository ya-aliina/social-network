import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponent {
    className?: string;
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = ({ className, block }: ArticleTextBlockComponent) => (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
        {block.title
            && <Text title={block.title} className={cls.title} />}
        {block.paragraphs.map((paragraph) => (
            <Text key={paragraph} text={paragraph} />
        ))}
    </div>
);
