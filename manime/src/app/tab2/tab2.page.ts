import { Component, model, OnInit } from '@angular/core';
import { JikanService } from '../projects/api/service/jikan.service';
import { Genre } from 'src/models/genre-data.model';
import { Anime } from 'src/models/anime-data.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  genreContainerList: Genre[] = [];
  animeContainerList: Anime[] = [];
  genreSelectedValue: number[] = [];;
  appCardContainer: any = [];
  page: number=1; 
  loadingCurrentEventData: any;
  firstTopPage: boolean = true;

  constructor(private service: JikanService) {}

  ngOnInit(): void {
    this.initializeGenreContainer();
    this.initializeTopAnimeContainer();
    this.initializeContainer();
  }
  initializeContainer() {
    this.page = 1;
    this.loadAnimeSearchContainer();
  }

  initializeGenreContainer() {
    console.log(this.service.getGenreList());
    this.service.getGenreList().subscribe(genreEl => {
      genreEl.data.forEach((genreElement: { mal_id: number; name: string; url: string; count: number }) => {
        this.genreContainerList.push(genreElement);
      });
    });
 }

 genreSelectionChanged(genreEvent: { detail: { value: number[]; }; }){
    this.genreSelectedValue = genreEvent.detail.value;
    if (this.genreSelectedValue.length > 0 || this.genreSelectedValue != null) {
      this.page = 1;
      this.appCardContainer = [];
      this.loadAnimeSearchContainer();
    }
 }

 initializeTopAnimeContainer(){
  
  this.service.getAnimeSearch(this.page, this.genreSelectedValue).subscribe(animeEl => {
      animeEl.data.forEach(element => {
        this.appCardContainer.push({
          mal_id: element.mal_id,
          title: element.title,
          image: element.images.jpg.large_image_url,
          score: element.score,
          modelItem: element,
        });
      })
     });
    
     this.firstTopPage = false;
  }

  loadAnimeSearchContainer(){
    if ( !this.firstTopPage) {
    this.service.getAnimeSearch(this.page, this.genreSelectedValue).subscribe(animeEl => {
      animeEl.data.forEach(element => {
        this.appCardContainer.push({
          mal_id: element.mal_id,
          title: element.title,
          image: element.images.jpg.large_image_url,
          score: element.score,
          modelItem: element,
        });
      });

      
        this.loadingCurrentEventData.target.complete();
        if (animeEl.pagination.items.count == 0) {
          this.loadingCurrentEventData.target.disabled = true;
        
      
    }
    });
    }
  }

  loadData(event: any) {
    console.log(this.page, event);
    this.page = this.page + 1;
    this.loadingCurrentEventData = event;
    this.loadAnimeSearchContainer();
  }
}
