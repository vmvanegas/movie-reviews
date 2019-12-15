import { Component, OnInit } from '@angular/core';
import { ReviewDetailsService } from '../services/review-details.service'
import { ActivatedRoute } from '@angular/router'
import { Review } from '../models/review'

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.css']
})
export class ReviewDetailsComponent implements OnInit {

  review: Review;
  title = "";

  constructor(
    private reviewDetailsService: ReviewDetailsService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => { this.title = params.title })
    this.reviewDetailsService.getReviewDetails(this.title)
      .subscribe(
        res => {
          this.review = res.results[0]
        },
        err => {
          console.log(err)
        })
  }

}
