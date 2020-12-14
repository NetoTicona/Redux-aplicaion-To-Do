import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStatee } from 'src/app/app.reducer';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {
  todos:Todo[]=[];
  filtroString:string;

  constructor( private _store:Store<AppStatee> ) { }

  ngOnInit(): void {

    this._store.subscribe( chagestatee=>{
     // console.log('cyega: ',chagestatee);
      
        this.todos = chagestatee.todoss
        this.filtroString = chagestatee.filtru
    } )
  }

}
