import { Component, Input } from '@angular/core';

@Component({
	selector: 'description',
	templateUrl: './description.component.html',
	styleUrls: ['./description.component.scss']
})
export class DescriptionComponent {

	@Input() public content!: string;

}
