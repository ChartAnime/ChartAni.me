import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

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

export default (props: { name: string }) => {
    const styles = useStyles();

    return <h3 className={styles.mainTitle}>
        <a className={styles.name}>{props.name}</a>
    </h3>;
}
