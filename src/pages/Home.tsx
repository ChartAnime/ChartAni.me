import React from 'react';
import { Grid, makeStyles, createStyles } from '@material-ui/core';
import AnimeCard from 'components/Cards/Anime/AnimeCard';

/*
main {
  display: block;
}

.chart {
  margin: 0 0 0 1rem;
  clear: both;
}
*/

const useStyles = makeStyles(() =>
	createStyles({
		chart: {
			display: 'block',
			margin: '0 0 0 1rem',
			clear: 'both'
		}
	})
);

export default () => {
	const styles = useStyles();
	return (
		<AnimeCard />
	);
}
