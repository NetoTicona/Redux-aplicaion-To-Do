import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todito/todo.model';
import { filtrosValidos } from './filter.actions';

@Pipe({
  name: 'MyFilter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[] , filtro:filtrosValidos ): Todo[] {

    console.log('Todos: ',todos );
    console.log('filtro: ', filtro );
    
    switch( filtro ){
      case 'completados':
        return todos.filter( todo => todo.completado );

      case 'pendientes':
        return todos.filter( todo => !todo.completado )  

      default:
        return todos;  
    }


    
  }

}
