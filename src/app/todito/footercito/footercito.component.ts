import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStatee } from 'src/app/app.reducer';
import { filtrosValidos, sett_rollins } from 'src/app/filter/filter.actions';
import { BORRAR_ALLL_TODU } from '../todo.actions';
import { Todo } from '../todo.model';


@Component({
  selector: 'app-footercito',
  templateUrl: './footercito.component.html',
  styleUrls: ['./footercito.component.scss']
})
export class FootercitoComponent implements OnInit {

  pendientes:number;

  filtrosValidosArr:filtrosValidos[] = ['todos','completados','pendientes'];
  filtroActual:filtrosValidos;

  constructor( private store:Store<AppStatee> ) { }

  ngOnInit(): void {

    
    this.store.subscribe( state =>{
      this.filtroActual = state.filtru;
      this.contarPendientes( state.todoss )
    } )
  }


  cambiarFiltro( newFiltro :filtrosValidos ){
    this.store.dispatch( sett_rollins( { filtro: newFiltro  } ) )
  }

  contarPendientes( todos:Todo[] ){
    this.pendientes = todos.filter( todo => !todo.completado ).length
  }

  borrarToditirijillo(){
    this.store.dispatch( BORRAR_ALLL_TODU() )
  }

}
