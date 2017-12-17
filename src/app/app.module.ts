import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GamesComponent } from './games/games.component';
import { GameDevelopersComponent } from './game-developers/game-developers.component';
import { GameCharactersComponent } from './game-characters/game-characters.component';
import { GameCharacterItemComponent } from './game-characters/game-character-item/game-character-item.component';
import {GameDeveloperService} from './game-developers/game_developers.service';
import { HttpModule } from '@angular/http';
import { GameDeveloperItemComponent } from './game-developers/game-developer-item/game-developer-item.component';
import { GameDeveloperEditComponent } from './game-developers/game-developer-edit/game-developer-edit.component';
import { GameDeveloperDetailComponent } from './game-developers/game-developer-detail/game-developer-detail.component';
import {AppRoutingModule} from './app-routing.module';
import {GamesService} from './games/games.service';
import { GamesItemComponent } from './games/games-item/games-item.component';
import { GamesEditComponent } from './games/games-edit/games-edit.component';
import { GameDeveloperListComponent } from './game-developers/game-developer-list/game-developer-list.component';
import {DropdownDirective} from './shared/dropdown.directive';
import { GamesDetailComponent } from './games/games-detail/games-detail.component';
import { GamesListComponent } from './games/games-list/games-list.component';
import { GameCharacterListComponent } from './game-characters/game-character-list/game-character-list.component';
import { GameCharacterDetailComponent } from './game-characters/game-character-detail/game-character-detail.component';
import {GameCharacterService} from './game-characters/game_character.service';
import { GamesCharacterListComponent } from './games/games-character-list/games-character-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GameCharacterEditComponent } from './game-characters/game-character-edit/game-character-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GamesComponent,
    GameDevelopersComponent,
    GameCharactersComponent,
    GameCharacterItemComponent,
    GameDeveloperItemComponent,
    GameDeveloperEditComponent,
    GameDeveloperDetailComponent,
    GamesItemComponent,
    GamesEditComponent,
    GameDeveloperListComponent,
    DropdownDirective,
    GamesDetailComponent,
    GamesListComponent,
    GameCharacterListComponent,
    GameCharacterDetailComponent,
    GamesCharacterListComponent,
    GameCharacterEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [GameDeveloperService, GamesService, GameCharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
