import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'vote',
    loadChildren: () => import('./vote/vote.module').then((m) => m.VoteModule),
  },
  {
    path: 'top-rated',
    loadChildren: () =>
      import('./top-rated/top-rated.module').then((m) => m.TopRatedModule),
  },
  {
    path: '',
    redirectTo: 'vote',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class PokemonsModule {}
