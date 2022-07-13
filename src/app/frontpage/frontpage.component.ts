import { Component, OnInit } from '@angular/core';
import { FrontpageService } from './frontpageservice.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {

  constructor(
     private frontpageService:FrontpageService
    ) { }

  ngOnInit(): void {
     
  }

  saveProduct(){
    this.frontpageService.saveProduct({id:Math.random(),name:"aaa"}).subscribe( x=> {
      console.log(x)
     })
  }

}
