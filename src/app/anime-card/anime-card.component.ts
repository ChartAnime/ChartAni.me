/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { Component, Input } from '@angular/core';

@Component({
	selector: 'anime-card',
	templateUrl: './anime-card.component.html',
	styleUrls: ['./anime-card.component.scss']
})
export class AnimeCardComponent {

	@Input() image!: string;
	@Input() title!: string;
	@Input() author!: string;
	@Input() description!: string;
	@Input() labels!: Array<string>;

}
