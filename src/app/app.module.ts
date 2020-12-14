import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ToditoComponent } from './todito/todito.component';
import { TodosListComponent } from './todito/todos-list/todos-list.component';
import { TodosItemComponent } from './todito/todos-item/todos-item.component';
import { FootercitoComponent } from './todito/footercito/footercito.component';
import { TodosAddComponent } from './todito/todos-add/todos-add.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todito/todo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReactiveFormsModule } from '@angular/forms';
import { reducers } from './app.reducer';
import { FilterPipe } from './filter/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ToditoComponent,
    TodosListComponent,
    TodosItemComponent,
    FootercitoComponent,
    TodosAddComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(  reducers ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
       // Restrict extension to log-only mode
    }),
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule { }
