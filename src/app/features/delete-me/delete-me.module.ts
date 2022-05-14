import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeleteMeComponent } from './delete-me.component';

const routes: Routes = [
  {
    path: '',
    component: DeleteMeComponent,
  },
];

@NgModule({
  declarations: [DeleteMeComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class DeleteMeModule {}
