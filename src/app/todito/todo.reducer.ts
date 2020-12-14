import { Statement } from '@angular/compiler';
import { createReducer,on } from '@ngrx/store';
import { element } from 'protractor';
import { AGREGAR_TODO_ACTION, BORRAR_TODO, 
        EDITAR_TODO, TOGLEANDO, TOOGLE_TODO_ACTION, BORRAR_ALLL_TODU } from './todo.actions';

import { Todo } from './todo.model';




const todo1 = new Todo('Solo lAs tuyas')
const todo2 = new Todo('otros corazones lo han intentado')
const todo3 = new Todo('lesson in love')
const todo4 = new Todo('Human born to make mistakes')
export const estadoInicial: Todo[] = [ todo1,todo2,todo3,todo4 ]; //el estdo inicial es siempre un array 

const _TodoReducer = createReducer(
    estadoInicial,
    on( AGREGAR_TODO_ACTION, (state,{texto}) => {  
      const todo = new Todo( texto ) ;
      return [...state, todo ]
    } ),

    on( TOOGLE_TODO_ACTION,(state,{id})=> {
       return state.map( (element)=>{ //map regresara un nuevo arreglo :) 
        if( element.id === id ){
          return{
            ...element,
            completado:!element.completado
          }
        }else{
          return element
        }
       }
       
       )

      } ),

  
  on( EDITAR_TODO, (state,{id,texto})=>{
    return state.map( element=>{
      if( element.id === id ){
        return {
          ...element,
          texto:texto
        }
      }else{
        return element
      }
    } )


  } )    ,




  on ( BORRAR_TODO,( state,{id} )=>{
    return state.filter( c =>  c.id !== id ) //regresa todos los elemtos cuyo id sea diferente al id ingresado
  } ),

  on( BORRAR_ALLL_TODU,(state)=>{ 
    return state.filter( c => c.completado===false )
  }  ),



  on( TOGLEANDO, (state,{ completado_state })=>{
    return state.map( element =>{
      
      return {
        ...element,
        completado: completado_state
      }
    } )

  } )



)

export function todoReducer( state,action ){
    return  _TodoReducer(state,action)
}