import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Response } from '../models/response'

@Injectable({
  providedIn: 'root'
})
export class ReviewDetailsService {

  key = "Icbm946pXJWEZ59ep2j4WQAHb4wdGAFu"

  constructor(
    private http: HttpClient
  ) { }


  getReviewDetails(title) {
    return this.http.get<Response>(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${title}&api-key=${this.key}`)
  }

}
