import { Component, OnInit } from '@angular/core';
import { JikanService } from '../projects/api/service/jikan.service';
import { Anime } from 'src/models/anime-data.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  animeContainerList: Anime[] = [];
  appCardContainer: any = [];
  LibraryContainerList: number[] = [];

  page: number=1;
  has_next_page: boolean = true;
  loadingCurrentEventData: any;

  constructor(private service: JikanService) {}

  ngOnInit(): void {
    this.initializeLibraryAnimeContainerList();
    this.initializeLibraryContainer();
  }

  initializeLibraryContainer() {
    this.service.getLibraryListTEST().forEach((mal_id: number) => {this.LibraryContainerList.push(mal_id);  });
  }
  initializeLibraryAnimeContainerList(){
    
    this.LibraryContainerList.forEach((libraryEl: number) => 
      this.service.getAnimeById(libraryEl).subscribe(animeEl => {
        
        animeEl.data.forEach(element => {
          this.appCardContainer.push({
            mal_id: element.mal_id,
            title: element.title,
            image: element.images.jpg.large_image_url,
            score: element.score,
            modelItem: element,
          });
        })
    }));
  }
    
     


    
/* 
    loadData(event: any) {
      this.page = this.page + 1;
      this.loadingCurrentEventData = event;
      this.loadLibraryAnimeContainerList();
    } */
}