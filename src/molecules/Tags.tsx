import React from 'react';
import { TagsProps } from 'types/Tags';
import Tag from 'atoms/Tag';
import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
    createStyles({
        tags: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
            borderBottom: '1px solid rgba(118,118,118,.1)'
        },
        tag: {
            'a': {
                color: '#767676'
            }
        }
    })
);

export default (props: TagsProps) => {
    const styles = useStyles();

    return <ol className={styles.tags}>
        {props.items.map((item, iteration, { length }) =>
            <Tag text={item.text} last={(length - 1) === iteration ? true : false} key={`${item.text}-${iteration}`} className={styles.tag} />
        )}
    </ol>;
}
