import React from 'react';
import { Card, CardMedia, CardContent, makeStyles, createStyles, CardActionArea } from '@material-ui/core';
import LazyLoad from 'react-lazyload';

const useStyles = makeStyles(({ spacing }) =>
	createStyles({
		root: {
			display: 'flex'
		},
		media: {
			/*width: '175px',
			maxWidth: '175px',
			height: '250px',
			maxHeight: '250px',*/
			position: 'absolute',
			verticalAlign: 'middle',
			left: 'auto',
			display: 'inline-block',
			/*'&:after': {
				width: '175px',
				maxWidth: '175px',
				height: '250px',
				maxHeight: '250px'
			}*/
		},
		content: {

		}
	})
);

export default () => {
	const styles = useStyles();
	return (
		<Card className={styles.root} variant='outlined'>
			<div>
			</div>
			<div>
				<LazyLoad height={250}>
					<CardMedia
						className={styles.media}
						component={'img'}
						height={250}
						width={175}
						src={'https://u.livechart.me/anime/3555/poster_image/a7f61a474b71763ed8be35d41407c611.png?style=small&format=jpg'}
					/>
				</LazyLoad>
				<CardContent className={styles.content}>
					Test
					</CardContent>
			</div>
			<CardActionArea>
			</CardActionArea>
		</Card>
	);
}
