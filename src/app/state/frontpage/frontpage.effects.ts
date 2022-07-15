import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as FP from './frontpage.action';
import {  FrontpageService } from '../../frontpage/frontpageservice.service';
import { of, from,tap } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AppState } from '../app.state';
import { selectAllFrontpage } from './frontpage.selector';
import { Router } from '@angular/router';

@Injectable()
export class FrontpageEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private frontpageService: FrontpageService,
    private router: Router,
  ) {}

  // Run this code when a loadTodos action is dispatched
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FP.LOAD_FRONTPAGE),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.frontpageService.getProducts()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((productsFirebaseObj) => {
              const productsArray =[]
              for (const key in productsFirebaseObj) {
                if (Object.prototype.hasOwnProperty.call(productsFirebaseObj, key)) {
                  const element = productsFirebaseObj[key];
                  productsArray.push({...element})
                }
              }
              return productsArray;
          }),
          map((products) => FP.LOAD_FRONTPAGE_SUCCESS({ products: products })),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(FP.LOAD_FRONTPAGE_ERROR({ error })))
        )
      )
    )
  );

  // Run this code when the addTodo or removeTodo action is dispatched
//   saveTodos$ = createEffect(
//     () =>
//       this.actions$.pipe(
//         ofType(FP.ADD_FRONTPAGE),
//         withLatestFrom(this.store.select(selectAllFrontpage)),
//         switchMap(([action, todos]) => from(this.frontpageService.saveProduct(todos)))
//       ),
//     // Most effects dispatch another action, but this one is just a "fire and forget" effect
//     { dispatch: false }
//   );

logOut = createEffect(
  () => {
    return this.actions$.pipe(
      ofType(FP.LOGOUT_CLICKED),
      tap(x => {
        this.router.navigate(['/']);
        console.log("Logout action ",x)
      })
    )
  },
  { dispatch: false },
)

}