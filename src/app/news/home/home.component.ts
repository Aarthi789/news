import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/service/content.service';

@Component({
  selector: 'news-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 

  constructor(private contentService: ContentService) { }

  news:any=[]

  getNews(){
    this.contentService.getNewsdata().subscribe((data:any)=>{
      this.news = data;
    })
  }

  ngOnInit(): void {
    this.getNews()
  }

}

 
