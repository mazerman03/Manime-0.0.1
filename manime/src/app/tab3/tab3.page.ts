import { Component, OnInit } from '@angular/core';
import { JikanService } from '../projects/api/service/jikan.service';
import { Anime } from 'src/models/anime-data.model';
import { from, concatMap, timer } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  animeContainerList: Anime[] = [];
  appCardContainer: any = [];
  LibraryContainerList: number[] = [9253, 52701, 11061, 28851, 5114, 31859, 41467, 6594, 21, 210, 47917, 1575, 20583, 11887];

  page: number=1;
  has_next_page: boolean = true;
  loadingCurrentEventData: any;

  constructor(private service: JikanService) {}

  ngOnInit() {
    this.initializeLibraryContainer();
    this.initializeAnimeLibraryContainerList();
  }

  initializeLibraryContainer() {
    this.service.getLibraryListTEST().forEach((mal_id: number) => {this.LibraryContainerList.push(mal_id);  });
    // this.loadLibraryAnimeContainerList();
  }
  
  initializeAnimeLibraryContainerList(){
    this.service.getAnimeTestLibrary().subscribe(animeEl => {
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

// In process of developing


/* 
  libraryChanged(genreEvent: { detail: { value: number[]; }; }){
    this.genreSelectedValue = genreEvent.detail.value;
    if (this.genreSelectedValue.length > 0 || this.genreSelectedValue != null) {
      this.page = 1;
      this.appCardContainer = [];
      this.loadAnimeSearchContainer();
    }
 } */


/*  loadLibraryAnimeContainerList() {
  this.appCardContainer = []; // Clear existing list

  from(this.LibraryContainerList)
    .pipe(
      concatMap((libraryEl: number) => 
        timer(3000).pipe( // Introduce a 500ms delay before each request
          concatMap(() => this.service.getAnimeById(libraryEl))
        )
      )
    )
    .subscribe(animeEl => {
      console.log('Received animeEl:', animeEl); // Log the entire response to inspect

      // Add defensive coding to check if properties exist
    // Add defensive coding to check if properties exist
    let imageUrl = 'https://cdn.myanimelist.net/images/anime/1711/142478l.jpg'; // Provide a default image URL

    if (animeEl.images) {
      if (animeEl.images.jpg && animeEl.images.jpg.image_url) {
        imageUrl = animeEl.images.jpg.image_url;
      } else if (animeEl.images.webp && animeEl.images.webp.image_url) {
        imageUrl = animeEl.images.webp.image_url;
      } else if (animeEl.images.jpg && animeEl.images.jpg.large_image_url) {
        imageUrl = animeEl.images.jpg.large_image_url;
      } else if (animeEl.images.webp && animeEl.images.webp.large_image_url) {
        imageUrl = animeEl.images.webp.large_image_url;
      } else if (animeEl.images.jpg && animeEl.images.jpg.small_image_url) {
        imageUrl = animeEl.images.jpg.small_image_url;
      } else if (animeEl.images.webp && animeEl.images.webp.small_image_url) {
        imageUrl = animeEl.images.webp.small_image_url;
      }
    }
        this.appCardContainer.push({
          mal_id: animeEl.mal_id,
          title: animeEl.title,
          image: imageUrl,
          score: animeEl.score,
          modelItem: animeEl,
        });
    
  
    });
}

    handleLibraryNewAdd(id: number) {
      console.log('ID from CardComponent:', id);
      if (!this.LibraryContainerList.includes(id)) {
        this.LibraryContainerList.push(id);
        this.loadLibraryAnimeContainerList();
      }
    }
      

  }
    
      */

/* 
    loadData(event: any) {
      this.page = this.page + 1;
      this.loadingCurrentEventData = event;
      this.loadLibraryAnimeContainerList();
    } */
  }