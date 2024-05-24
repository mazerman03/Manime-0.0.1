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
  appCardContainer: any = [];
  page: number=1;
  has_next_page: boolean = true;
  loadingCurrentEventData: any;

  constructor(private service: JikanService) {}

  ngOnInit(): void {
    // this.initializeSliderContainer();
    this.initializeSeasonalAnimeContainerList();
    this.initializeContainer();
  }


  initializeSeasonalAnimeContainerList(){
    this.service.getSeasonalAnimeListNow(this.page).subscribe(animeEl => {
      animeEl.data.forEach(element => {
        this.appCardContainer.push({
          mal_id: element.mal_id,
          title: element.title,
          image: element.images.jpg.large_image_url,
          score: element.score,
          modelItem: element,
        });
      });
     });
    } 

  loadSeasonalAnimeContainerList(){
    if (this.page > 1) {
      this.service.getSeasonalAnimeListNow(this.page).subscribe(animeEl => {
        animeEl.data.forEach(element => {
          this.appCardContainer.push({
            mal_id: element.mal_id,
            title: element.title,
            image: element.images.jpg.large_image_url,
            score: element.score,
            modelItem: element,
          });
        });
  
          if (this.page > 1) {
            this.loadingCurrentEventData.target.complete();
            if (animeEl.pagination.items.count == 0) {
              this.loadingCurrentEventData.target.disabled = true;
            }
          }
  
        });
    }
  
    } 

    
  initializeContainer() {
    this.page = 1;
    this.loadSeasonalAnimeContainerList();
  }

    loadData(event: any) {
      this.page = this.page + 1;
      this.loadingCurrentEventData = event;
      this.loadSeasonalAnimeContainerList();
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


}
