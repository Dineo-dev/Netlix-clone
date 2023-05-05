import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-latest-movies',
  templateUrl: './latest-movies.component.html',
  styleUrls: ['./latest-movies.component.scss']
})
export class LatestMoviesComponent implements OnInit {

  Movies!:any;

  constructor(private card_service: CardService) { }

  ngOnInit(): void {

    this.card_service.getCards().subscribe(( respond:any )=>{
      console.log(respond.results)

      this.Movies = respond.results;
  })
    
  }
  getMovieInfo(index:any){
    localStorage.setItem("movie", JSON.stringify(this.Movies[index]))
  }

}
