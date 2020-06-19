import React from 'react';
import { Card, CardMedia, CardContent, makeStyles, createStyles } from '@material-ui/core';
import { Row, Item } from '@mui-treasury/components/flex';
import LazyLoad from 'react-lazyload';
import MainTitle from '@Atoms/MainTitle';

//const useStyles = makeStyles(({ spacing }) =>
const useStyles = makeStyles(() =>
	createStyles({
		root: {
			width: '50%'
		},
		media: {
			height: '250px',
			width: '175px'
		},
		name: {
			textAlign: 'center'
		},
		synopsis: {
			overflowY: 'scroll',
			textAlign: 'left'
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

			<Card variant='outlined' className={styles.root}>
				<MainTitle name={'test123'} className={styles.name} />
					<Row p={0} gap={0}>
						<Item position={'left'}>
							<LazyLoad>
								<CardMedia
									className={styles.media}
									component={'img'}
									width={175}
									height={250}
									src={'https://u.livechart.me/anime/3555/poster_image/a7f61a474b71763ed8be35d41407c611.png?style=small&format=jpg'}
								/>
							</LazyLoad>
						</Item>
						<Item position={'right'}>
							<CardContent className={styles.synopsis}>
								<p>Kouji Ibuki is a Vanguard Fighter. One day, Ibuki was called out to the Tatsunagi residence, when he was suddenly transported to the -IF- world. But the -IF- world has a distorted history, where cardfighting doesn't exist!?</p>
								<p>In the -IF- world, Ibuki met with some mysterious girls. The magical girl Emi Sendou, and the fairy of the cards Shuka. They are the "Blaster Pair" that summons units from cards in their battle against the evil minions of Jammer!</p>
								<p>And so the quartet of Ibuki, Emi, Shuka, and Suiko Tatsunagi who was caught up in the situation, begin their journey to recover the true history.</p>
							</CardContent>
						</Item>
					</Row>
			</Card>
		</>
	);
}
