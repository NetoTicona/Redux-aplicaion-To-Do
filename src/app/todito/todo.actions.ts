import { Identifiers } from '@angular/compiler';
import { createAction, props } from '@ngrx/store';
import { createECDH } from 'crypto';

export const AGREGAR_TODO_ACTION = createAction( '[TUDU Agregar todo]',props<{ texto:string }>()  );
export const TOOGLE_TODO_ACTION = createAction( 'TUDU Togleando el chek',props<{ id:number }>() )
export const EDITAR_TODO = createAction( '[TUDU Editar]',props<{id:number,texto:string}>() )
export const BORRAR_TODO = createAction( '[TUDU Borrar]',props<{id:number}>() )

export const TOGLEANDO = createAction( '[TUDU TOGLEANDO]', props<{ completado_state:boolean  }>() );

export const BORRAR_ALLL_TODU = createAction( 'BORRART_TODO_TODITIRIJILLO' )



