import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TOGLEANDO } from './todo.actions';

@Component({
  selector: 'app-todito',
  templateUrl: './todito.component.html',
  styleUrls: ['./todito.component.scss']
})
export class ToditoComponent implements OnInit {


  click_togle_completado=false;

  constructor( private _store:Store ) { }

  ngOnInit(): void {
  }


  togleando(){
    this.click_togle_completado = !this.click_togle_completado;
    this._store.dispatch( TOGLEANDO( { completado_state:this.click_togle_completado } ) )


  }

}
