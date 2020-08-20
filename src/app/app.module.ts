import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimeCardComponent } from './info/anime-card/anime-card.component';
import { DescriptionComponent } from './info/anime-card/description/description.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { FlexLayoutModule } from '@angular/flex-layout';

import { NgScrollbarModule } from 'ngx-scrollbar';
import { AnimeCardModule } from './info/anime-card/anime-card.module';

@NgModule({
	declarations: [
		AppComponent,
		AnimeCardComponent,
		DescriptionComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatCardModule,
		MatButtonModule,
		MatChipsModule,
		MatDividerModule,
		MatIconModule,
		FlexLayoutModule,
		NgScrollbarModule,
		AnimeCardModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
