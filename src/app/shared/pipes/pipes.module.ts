import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinTypesPipe } from './join-types.pipe';

@NgModule({
  declarations: [JoinTypesPipe],
  imports: [CommonModule],
  exports: [JoinTypesPipe],
})
export class PipesModule {}
