import React from 'react';
import { AnimeCardProps } from 'types/Anime';
import MainTitle from '../../../atoms/MainTitle';
import './AnimeCard.scss';

class AnimeCard extends React.Component<AnimeCardProps> {

	public render() {
		return (
			<article className="anime">
				<div className="anime-card">
					<MainTitle name={this.getName} />
					<div>
                        test
					</div>
				</div>
			</article>
		);
	}

	public get getName(): string {
		return this.props.name.english;
	}

}

export default AnimeCard;
