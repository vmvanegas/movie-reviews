import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
import { Review } from '../models/review'

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  @Input() review: Review;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onDetails(review: Review) {
    this.router.navigate(['/reviews', review.display_title])
  }

}
