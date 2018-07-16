import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RestListComponent } from './rest-list/rest-list.component';
import { RestAddComponent } from './rest-add/rest-add.component';
import { RestEditComponent } from './rest-edit/rest-edit.component';
import { RestReviewComponent } from './rest-review/rest-review.component';
import { ReviewAddComponent } from './review-add/review-add.component';
const routes: Routes = [
    { path: '', pathMatch: 'full', component:RestListComponent },
    { path: 'refresh',  component:RestListComponent },
    { path: 'add',  component:RestAddComponent },
    { path: 'edit/:id',  component:RestEditComponent },
    { path: 'review/:id',  component:RestReviewComponent },
    { path: 'review/:id/add',  component:ReviewAddComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
