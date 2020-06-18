import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(() =>
    createStyles({
        mainTitle: {
            display: 'center',
            WebkitBoxAlign: 'center',
            alignItems: 'center'
        },
        name: {
            color: '#33b1ff'
        }
    })
);

export default (props: { name: string, className?: string }) => {
    const styles = useStyles();

    return (
        <>
            <h3 className={clsx(styles.mainTitle, props.className)}>
                <a className={clsx(styles.name, props.className)}>{props.name}</a>
            </h3>
        </>
    );
}
