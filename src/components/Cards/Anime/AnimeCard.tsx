import React from 'react';
import { AnimeCardProps } from 'types/Anime';
import MainTitle from 'atoms/MainTitle';
import CardPosterImage from 'atoms/CardPosterImage';
import './AnimeCard.scss';
import Tags from 'molecules/Tags';

class AnimeCard extends React.Component<AnimeCardProps> {

	public render() {
		return (
			<article className="anime">
				<div className="anime-card">
					<MainTitle name={this.getName} />
					<Tags items={[{text: '1'}, {text: '2'}]} />
					<CardPosterImage url="https://u.livechart.me/anime/3110/poster_image/205556ff45a01e2978278340fcb6534f.png?style=small&format=jpg" />
				</div>
			</article>
		);
	}

	public get getName(): string {
		return this.props.name.english;
	}

}

export default AnimeCard;
