import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [SectionComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [SectionComponent],
})
export class HomeModule {}
