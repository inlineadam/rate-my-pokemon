import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopRatedComponent } from './top-rated.component';
import { RouterModule } from '@angular/router';

const routes = [{ path: '', component: TopRatedComponent }];

@NgModule({
  declarations: [TopRatedComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TopRatedModule {}
