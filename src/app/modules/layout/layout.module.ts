import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { RouterModule } from '@angular/router';
import { IconModule } from '@modules/icon';
import { TranslateModule } from '@i18n/translate.module';

@NgModule({
  declarations: [AppLayoutComponent],
  imports: [CommonModule, RouterModule.forChild([]), IconModule, TranslateModule],
  exports: [AppLayoutComponent],
})
export class LayoutModule {}
