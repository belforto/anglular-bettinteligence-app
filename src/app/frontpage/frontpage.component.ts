import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllFrontpage } from '../state/frontpage/frontpage.selector';
import { FrontpageService } from './frontpageservice.service';
import * as FP from '../state/frontpage/frontpage.action'
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {
   public allProducts$ = this.store.select(selectAllFrontpage);
   public todo = '';
   
   
   constructor(
     //  private frontpageService:FrontpageService,
     private store: Store<AppState>
     ) { }
     
     ngOnInit(): void {
    console.log('allProducts$ : ', this.allProducts$ )
     
    this.store.dispatch(FP.LOAD_FRONTPAGE());
    
  
  }

  onClickDispatchLogout(){
    this.store.dispatch(FP.LOGOUT_CLICKED());
  }

  // saveProduct(){
  //   this.frontpageService.saveProduct({id:Math.random(),name:"aaa"}).subscribe( x=> {
  //     console.log(x)
  //    })
  // }

}
