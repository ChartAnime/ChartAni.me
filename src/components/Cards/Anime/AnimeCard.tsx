import React from 'react';
import { Card, CardMedia, CardContent, makeStyles, createStyles, CardActionArea, Grid } from '@material-ui/core';
import LazyLoad from 'react-lazyload';
import MainTitle from 'atoms/MainTitle';

const useStyles = makeStyles(({ spacing }) =>
	createStyles({
		root: {
			flexGrow: 1
		},
		media: {
			height: '250px',
			width: '175px'
		},
		title: {
			textAlign: 'center'
		}
	})
);

export default () => {
	const styles = useStyles();
	return (
		<Card variant='outlined'>
			<MainTitle name={'test123'} className={styles.title} />
			<Grid container className={styles.root} spacing={2}>
				<Grid item xs={12} sm={6}>
					<LazyLoad>
						<CardMedia
							className={styles.media}
							component={'img'}
							width={175}
							height={250}
							src={'https://u.livechart.me/anime/3555/poster_image/a7f61a474b71763ed8be35d41407c611.png?style=small&format=jpg'}
						/>
					</LazyLoad>
				</Grid>
				<Grid item xs={12} sm={6}>
						<CardContent>2</CardContent>
				</Grid>
			</Grid>
		</Card>
	);
}
