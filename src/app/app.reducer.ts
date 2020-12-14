

//nuevo paso:DEfinir el stado que va tener la aplicaion uu

import { ActionReducerMap } from '@ngrx/store';
import { filtrosValidos } from './filter/filter.actions';
import { filterReducer } from './filter/filter.reducer';
import { Todo } from './todito/todo.model';
import { todoReducer } from './todito/todo.reducer';

export interface AppStatee {
    todoss:Todo[];

    filtru:filtrosValidos  // o podia ser string
}

//Esto se realiza en caso de manejar mas Reducers
//este sera el gran eportador que se conectara a appmodule.ts
export const reducers: ActionReducerMap<AppStatee> = {
    todoss:todoReducer,
    filtru:filterReducer
}