import { Component, OnInit } from '@angular/core';
import { movies } from './moviedata/movies.db';
import { compareDate } from './fuctions/granular date comparison/daymonthcomp.module';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  mov = movies
  constructor() { }
  compare(date:Date,limit:number = 3)
  {
    // TODO make the simpler date comparison
    let comparison = compareDate(date)

  }
  ngOnInit(): void {
  }

}
