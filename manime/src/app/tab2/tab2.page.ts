import { Component, OnInit } from '@angular/core';
import { JikanService } from '../projects/api/service/jikan.service';
import { Genre } from 'src/models/genre-data.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  genreContainerList: Genre[] = [];
  genreSelectedValue: any;
 
  constructor(private service: JikanService) {}

  ngOnInit(): void {
    this.initializeGenreContainer();
  }

  initializeGenreContainer() {
    console.log(this.service.getGenreList());
    this.service.getGenreList().subscribe(genreEl => {
      genreEl.data.forEach((genreElement: { mal_id: number; name: string; url: string; count: number }) => {
        this.genreContainerList.push(genreElement);
      });
    });
 }

 
}
