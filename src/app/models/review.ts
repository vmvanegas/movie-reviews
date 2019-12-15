import { Link } from './link'
import { Multimedia } from './multimedia'
export class Review {
  display_title: String;
  mpaa_rating: String;
  critics_pick: Number;
  byline: String;
  headline: String;
  summary_short: String;
  publication_date: String;
  opening_date: String;
  date_updated: String;
  link: Link
  multimedia: Multimedia
}
