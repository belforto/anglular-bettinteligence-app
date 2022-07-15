import { createReducer, on } from "@ngrx/store";
import { Frontpage } from "src/app/frontpage/frontpage.model";
import 
    * as FP
   from './frontpage.action';

export interface  FrontPageState {
    products:Frontpage[]
    error?:string | null
    status?:'pending' |'loading' | 'error' |'success'
}

export const initialState : FrontPageState ={
    products:[],
    error:null,
    status:'pending'
}

export const frontpageReducer = createReducer(
    // Supply the initial state
    initialState,
    // Add the new todo to the todos array
    on(FP.ADD_FRONTPAGE, (state, { name }) => ({
      ...state,
      products: [...state.products, { id: Date.now().toString(), name: name }],
    })),
    // Remove the todo from the todos array
    // on(removeTodo, (state, { id }) => ({
    //   ...state,
    //   todos: state.todos.filter((todo) => todo.id !== id),
    // })),
    // Trigger loading the todos
    on(FP.LOAD_FRONTPAGE, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(FP.LOAD_FRONTPAGE_SUCCESS, (state, { products }) => ({
      ...state,
      products: products,
      error: null,
      status: 'success',
    })),
    // Handle todos load failure
    on(FP.LOAD_FRONTPAGE_ERROR, (state, { error }) => ({
      ...state,
      error: error,
      status: 'error',
    }))
  );