import { Component, OnInit } from '@angular/core';
import { JikanService } from '../projects/api/service/jikan.service';
import { Anime } from 'src/models/anime-data.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  sliderContainer: any = [];
  animeContainerList: Anime[] = [];
  constructor(private service: JikanService) {}

  ngOnInit(): void {
    // this.initializeSliderContainer();
    this.initializeAnimeContainerListTest();
  }
  initializeAnimeContainerListTest(){
    this.service.getSeasonalAnimeListNow().subscribe(animeEl => {
      console.log(animeEl);
      })
    }; 
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


}
