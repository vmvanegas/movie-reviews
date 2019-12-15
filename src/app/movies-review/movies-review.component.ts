import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../services/search.service';
import { ReviewsService } from '../services/reviews.service';
import { Review } from '../models/review'

@Component({
  selector: 'app-movies-review',
  templateUrl: './movies-review.component.html',
  styleUrls: ['./movies-review.component.css']
})
export class MoviesReviewComponent implements OnInit {

  search: String;
  reviews: Array<Review>;

  constructor(
    private searchService: SearchService,
    private reviewsService: ReviewsService,
  ) {

  }

  ngOnInit() {
    this.searchService.currentSearch.subscribe(search => {
      this.search = search;
      this.getMoviesReview();
    });

    this.getMoviesReview();
  }


  private getMoviesReview() {
    this.reviewsService.getReviews(this.search)
      .subscribe(res => {
        this.reviews = res.results;
      }, err => {
        console.log(err);
      });
  }
}
