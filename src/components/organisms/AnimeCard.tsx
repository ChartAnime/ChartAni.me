import React from 'react';
import { Card, CardMedia, CardContent, makeStyles, createStyles, Grid } from '@material-ui/core';
import LazyLoad from 'react-lazyload';
import MainTitle from '@Atoms/MainTitle';

//const useStyles = makeStyles(({ spacing }) =>
const useStyles = makeStyles(() =>
	createStyles({
		root: {
			flexGrow: 1
		},
		media: {
			height: '250px',
			width: '175px'
		},
		name: {
			textAlign: 'center'
		}
	})
);

export default () => {
	const styles = useStyles();
	return (
		<>
			<style jsx>{`
				.anime {
					display: inline-block;
					padding: 0 1rem 1rem 0;
					position: relative;
					vertical-align: top;
					white-space: nowrap;
					width: 16.66666667%;
					font-size: 14px;
				}

				.anime-card {
					box-shadow: 0 1px 4px rgba(0,0,0,.2);
					background-color: #fff;
					font-size: .9em;
					line-height: 1;
					overflow: hidden;
					text-align: center;
				}
			`}</style>

			<Card variant='outlined'>
				<MainTitle name={'test123'} className={styles.name} />
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
		</>
	);
}
