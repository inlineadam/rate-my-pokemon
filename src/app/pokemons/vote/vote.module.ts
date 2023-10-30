import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteComponent } from './vote.component';
import { VoteCardComponent } from './vote-card/vote-card.component';
import { RouterModule } from '@angular/router';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from 'src/app/shared/shared.module';

const routes = [{ path: '', component: VoteComponent }];

@NgModule({
  declarations: [VoteComponent, VoteCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatCardModule,
    SharedModule,
  ],
})
export class VoteModule {}
