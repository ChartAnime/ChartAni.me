import { Component, Input } from '@angular/core';

@Component({
	selector: 'anime-card',
	templateUrl: './anime-card.component.html',
	styleUrls: ['./anime-card.component.scss']
})
export class AnimeCardComponent {

	@Input() public image!: string;
	@Input() public title!: string;
	@Input() public author!: string;
	@Input() public description!: string;
	@Input() public labels!: Array<string>;

}
