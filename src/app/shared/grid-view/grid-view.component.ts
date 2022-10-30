import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/service/content.service';

@Component({
  selector: 'news-app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {

 
  news:any=[];
  
  constructor(private contentService: ContentService) { }

  getNews(){
    this.contentService.getNewsdata().subscribe((data:any)=>{
      this.news = data;
    })
  }

  ngOnInit(): void {
  }

}
