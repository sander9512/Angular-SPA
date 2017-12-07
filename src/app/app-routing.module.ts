import {RouterModule, Routes} from '@angular/router';
import {GameDevelopersComponent} from './game-developers/game-developers.component';
import {GameDeveloperEditComponent} from './game-developers/game-developer-edit/game-developer-edit.component';
import {GameDeveloperDetailComponent} from './game-developers/game-developer-detail/game-developer-detail.component';
import {NgModule} from '@angular/core';
import {GamesComponent} from './games/games.component';
import {GamesDetailComponent} from './games/games-detail/games-detail.component';
import {GameCharacterDetailComponent} from './game-characters/game-character-detail/game-character-detail.component';
import {GameCharactersComponent} from './game-characters/game-characters.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/developers', pathMatch: 'full' },
  { path: 'developers', component: GameDevelopersComponent, children: [
    { path: 'new', component: GameDeveloperEditComponent },
    { path: ':_id', component: GameDeveloperDetailComponent },
    { path: ':_id/edit', component: GameDeveloperEditComponent },
    { path: ':_id/detail/:gameId', component: GamesDetailComponent}
  ] },
  { path: 'games', component: GamesComponent, children: [
    { path: 'detail/:gameId', component: GamesDetailComponent }
  ] },
  { path: 'characters', component: GameCharactersComponent, children: [
    {path: ':_id', component: GameCharacterDetailComponent}
  ] }
 // { path: 'developers/:_id/detail/:gameId', component: GamesDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
