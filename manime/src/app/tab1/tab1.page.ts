import { Component, OnInit } from '@angular/core';
import { JikanService } from '../projects/api/service/jikan.service';
import { generate } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  sliderContainer: any = [];
  genreContainerList: any = [];
  constructor(private service: JikanService) {}

  ngOnInit(): void {
    // this.initializeSliderContainer();
    this.initializeGenreContainer();
  }

/*   initializeSliderContainer(){
    this.service.getAnimeNews().subscribe(animeNewsEl => {
      animeNewsEl.results.forEach((animeNews: { mal_id: number; title: string; images: { jpg: { image_url: string; }; }; }) => {
        this.sliderContainer.push({
          mal_id: animeNews.mal_id,
          title: animeNews.title,
          image: animeNews.images.jpg.image_url, //might just be animeNews.image_url
          modelItem: animeNews 
        })
      })
    }); 
  } */


 initializeGenreContainer(){
  this.service.getGenreList().subscribe(genreEl => {
    genreEl.genres.forEach((genreElement: any)=>{
      this.genreContainerList.push(genreElement);
    });
  });
 }
}
