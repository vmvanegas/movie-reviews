import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../models/response'

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(
    private http: HttpClient,
  ) { }

  URL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=Icbm946pXJWEZ59ep2j4WQAHb4wdGAFu"

  getReviews(search: String = '') {
    var query = search ? `&query=${search}` : '';
    return this.http.get<Response>(this.URL + query)
  }

}
