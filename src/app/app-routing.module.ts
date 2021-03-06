import {RouterModule, Routes} from '@angular/router';
import {GameDevelopersComponent} from './game-developers/game-developers.component';
import {GameDeveloperEditComponent} from './game-developers/game-developer-edit/game-developer-edit.component';
import {GameDeveloperDetailComponent} from './game-developers/game-developer-detail/game-developer-detail.component';
import {NgModule} from '@angular/core';
import {GamesComponent} from './games/games.component';
import {GamesDetailComponent} from './games/games-detail/games-detail.component';
import {GameCharacterDetailComponent} from './game-characters/game-character-detail/game-character-detail.component';
import {GameCharactersComponent} from './game-characters/game-characters.component';
import {GamesCharacterListComponent} from './games/games-character-list/games-character-list.component';
import {GamesEditComponent} from './games/games-edit/games-edit.component';
import {GameCharacterEditComponent} from './game-characters/game-character-edit/game-character-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/developers', pathMatch: 'full' },
  { path: 'developers/new', component: GameDeveloperEditComponent},
  { path: 'developers/:devId/edit', component: GameDeveloperEditComponent},
  { path: 'developers/:id/addGame', component: GamesEditComponent},
  { path: 'games/:id/characters/newCharacter', component: GameCharacterEditComponent},
  { path: 'games/:gameId/edit', component: GamesEditComponent},
  { path: 'characters/:charId/edit', component: GameCharacterEditComponent},
  { path: 'developers', component: GameDevelopersComponent, children: [
    { path: ':_id', component: GameDeveloperDetailComponent },
    { path: ':_id/detail/:gameId', component: GamesDetailComponent}
  ] },
  { path: 'games', component: GamesComponent, children: [
    { path: ':gameId', component: GamesDetailComponent },
    {path: ':_gameId/characters', component: GamesCharacterListComponent}
  ] },
  { path: 'characters', component: GameCharactersComponent, children: [
    {path: ':_id', component: GameCharacterDetailComponent},
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
