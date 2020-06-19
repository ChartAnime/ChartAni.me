import React from 'react';
import { Grid, makeStyles, createStyles } from '@material-ui/core';
import AnimeCard from '@Organisms/AnimeCard';
import AnimeCardRow from '@Organisms/AnimeCardRow';

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
	useStyles();
  return (
    <>
      <Grid container direction={'row'}>
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
      </Grid>
      <br/>
      <Grid container direction={'row'}>
        <AnimeCardRow />
        <AnimeCardRow />
        <AnimeCardRow />
      </Grid>
    </>
  )
}
