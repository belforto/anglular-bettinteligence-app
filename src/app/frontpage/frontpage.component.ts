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

  saveProduct(){
    console.log('saveProduct: ')
    // this.frontpageService.saveProduct({id:Math.random(),name:"aaa"}).subscribe( x=> {
    //   console.log(x)
    //  })
    const prod={product:{name:"novi prod",id:4567}}
    this.store.dispatch(FP.API_SAVE_FRONTPAGE_SUCCESS(prod));
  }

}
