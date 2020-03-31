import React from 'react';
import { Grid } from '@material-ui/core';
import AnimeCard from 'components/Cards/Anime/AnimeCard';
import './App.scss';

function App() {
	return (
		<main className="chart">
			<Grid container direction={'row'}>
				<AnimeCard name={{ 'english': 'Plunderer', 'romaji': '', 'native': '' }} />
				<AnimeCard name={{ 'english': 'Plunderer', 'romaji': '', 'native': '' }} />
				<AnimeCard name={{ 'english': 'Plunderer', 'romaji': '', 'native': '' }} />
			</Grid>
		</main>
	);
}

export default App;
