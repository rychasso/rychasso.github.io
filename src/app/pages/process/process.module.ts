import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessComponent } from './process/process.component';
import { RouterModule } from '@angular/router';
import { routes } from './process.routes';

@NgModule({
  declarations: [ProcessComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProcessModule {}
