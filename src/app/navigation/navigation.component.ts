import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  search: string;

  constructor(private searchService: SearchService) { }

  onChange() {
    this.searchService.changeSearch(this.search);
  }

  ngOnInit() {
    this.searchService.currentSearch.subscribe(search => this.search = search);
  }

}
