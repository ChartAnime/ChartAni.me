export interface TagProps {
    text: string;
    className: string;
    last?: boolean;
}

interface _TagsItem extends Omit<TagProps, 'last'> { }
export interface TagsItem extends Omit<_TagsItem, 'className'> { }

export interface TagsProps {
    items: TagsItem[];
}
