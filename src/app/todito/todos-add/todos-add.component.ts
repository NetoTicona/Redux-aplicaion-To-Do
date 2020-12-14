import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppStatee } from '../../app.reducer';  
import { AGREGAR_TODO_ACTION, BORRAR_TODO } from '../todo.actions'

@Component({
  selector: 'app-todos-add',
  templateUrl: './todos-add.component.html',
  styleUrls: ['./todos-add.component.scss']
})
export class TodosAddComponent implements OnInit {


  txtInput:FormControl;
  constructor( private _store:Store<AppStatee> ) { }

  ngOnInit(): void {
    this.txtInput = new FormControl('' , Validators.required)
    this._store.select('todoss').subscribe( (cambio)=>{
      console.log('este es un cambio del state: ',cambio);
      
    } )
    
    

  }

  agregarTodo(){
    console.log('valor: ', this.txtInput.value );
    console.log( 'valido: ',this.txtInput.valid );
    this._store.dispatch(  AGREGAR_TODO_ACTION({ texto: this.txtInput.value }) )

    
  }

}
