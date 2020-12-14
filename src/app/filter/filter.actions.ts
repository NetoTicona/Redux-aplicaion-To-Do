import { createAction, props } from '@ngrx/store';




export const sett_rollins = createAction( '[filter] set filtro', props<{ filtro:filtrosValidos}>() )



export type filtrosValidos = 'todos' | 'completados' | 'pendientes';