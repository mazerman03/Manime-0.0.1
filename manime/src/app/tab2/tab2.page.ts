import { Component, OnInit } from '@angular/core';
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
 
  constructor(private service: JikanService) {}

  ngOnInit(): void {
    this.initializeGenreContainer();
    this.initializeTopAnimeContainerTest();
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
  console.log(genreEvent.detail.value)
  this.genreSelectedValue = genreEvent.detail.value;
  this.initializeTopAnimeContainerTest();
 }

 initializeTopAnimeContainerTest(){
  this.service.getAnimeSearch(this.genreSelectedValue).subscribe(animeEl => {
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
  };
}
