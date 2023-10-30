import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteComponent } from './vote.component';
import { VoteCardComponent } from './vote-card/vote-card.component';



@NgModule({
  declarations: [
    VoteComponent,
    VoteCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VoteModule { }
