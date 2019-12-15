import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesReviewComponent } from './movies-review/movies-review.component'
import { ReviewDetailsComponent } from './review-details/review-details.component'

const routes: Routes = [
  {
    path: "",
    redirectTo: "reviews",
    pathMatch: "full"
  },
  {
    path: "reviews",
    component: MoviesReviewComponent
  }, {
    path: "reviews/:title",
    component: ReviewDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
