import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GamesComponent } from './games/games.component';
import { GameDevelopersComponent } from './game-developers/game-developers.component';
import { GameCharactersComponent } from './game-characters/game-characters.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GamesComponent,
    GameDevelopersComponent,
    GameCharactersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
