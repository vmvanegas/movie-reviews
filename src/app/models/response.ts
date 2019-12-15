import { Review } from './review'

export class Response {
  copyright: String;
  has_more: Boolean;
  num_results: Number;
  results: Array<Review>;
}
