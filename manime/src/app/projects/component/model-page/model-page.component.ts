import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { forkJoin } from 'rxjs';
import { JikanService } from '../../api/service/jikan.service';
import { Anime } from 'src/models/anime-data.model';

@Component({
  selector: 'app-model-page',
  templateUrl: './model-page.component.html',
  styleUrls: ['./model-page.component.scss'],
})
export class ModelPageComponent implements OnInit {
  @Input() modelItemList!: Anime;

  isLoading: boolean = false;
  id!: number;
  title!: string;
  image!: string;
  season!: string;
  year!: number;
  episodes!: number;
  score!: number;
  synopsis?: string;

  constructor(private service: JikanService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.initializeContainer();
  }

  initializeContainer() {
    this.isLoading = true;
    this.title = this.modelItemList.title;
    this.id = this.modelItemList.mal_id;
    this.image = this.modelItemList.images.jpg.large_image_url;
    this.season = this.modelItemList.season;
    this.year = this.modelItemList.year;
    this.score =this.modelItemList.score;
    this.synopsis = this.modelItemList.synopsis;
    }

  closeModel() {
    this.service.dismissModel();
  }
  cardEventListener(modelItem: Anime) {
    forkJoin(this.service.getAnimeById(modelItem.mal_id), this.service.presentModal(modelItem));
  }

  // In process of developing

   libraryChanged(libraryEvent: any){
    }
    
 } 

 
    
    
  

 
