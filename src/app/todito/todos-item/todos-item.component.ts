import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppStatee } from 'src/app/app.reducer';
import { BORRAR_TODO, EDITAR_TODO, TOOGLE_TODO_ACTION } from '../todo.actions';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.scss']
})
export class TodosItemComponent implements OnInit,OnChanges {
  @Input() entrale:Todo ;
  @ViewChild('edit') editFisico:ElementRef //LAreferencia desdeel html


  chkField: FormControl;
  txtInput: FormControl;

  editando:boolean = false


  constructor( private _store:Store<AppStatee> ) { }

  ngOnInit(): void {
    this.chkField = new FormControl( this.entrale.completado );
    //console.log('chkfield: ', this.chkField.value );
    this.txtInput = new FormControl( this.entrale.texto )

 
  }

  ngOnChanges( changes:SimpleChanges ){
    console.log('ocurrio un cambio: ',  changes.entrale.currentValue.completado );
     
  }


  editar(){
  this.editando = true;
  setTimeout(() => {
    this.editFisico.nativeElement.select();
  }, 10);
  }

  terminarEdicion( id ){
    this.editando = false
    //disparamos la accione de edtiar

    console.log('tenemos ese id: ',id);
    console.log('y este texto: ', this.txtInput.value );
    
    
    this._store.dispatch( EDITAR_TODO( {id:id,texto:this.txtInput.value} ) )

  }

  

  borrar( id ){
    this._store.dispatch( BORRAR_TODO({ id:id }) )
  }




  marked(id:number){
    this._store.dispatch(  TOOGLE_TODO_ACTION( {id:id} ) )
  }

}
