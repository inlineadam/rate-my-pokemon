import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteComponent } from './vote.component';
import { VoteCardComponent } from './vote-card/vote-card.component';
import { RouterModule } from '@angular/router';

const routes = [{ path: '', component: VoteComponent }];

@NgModule({
  declarations: [VoteComponent, VoteCardComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class VoteModule {}
