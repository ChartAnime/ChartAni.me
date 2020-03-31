import React from 'react';
import { TagProps } from 'types/Tags';

export default ({ text, last = false, className }: React.PropsWithChildren<TagProps>) => {
    //{last ? '' : '::after' }
    return <li className={className}>
        <a className={className}>{text}</a>
    </li>;
}
