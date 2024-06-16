import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [],
  exports: [CardComponent], // we need to specify all the module that we need to made available to other modules
  // For eg, when this sharedModule will be added to app.module.ts imports, we want the modules to access all the
  // things that are in the shared module. Right? So, we must add them all to exports.
})
export class SharedModule {}
