import { createReducer ,on} from "@ngrx/store";
import { filtrosValidos, sett_rollins } from './filter.actions';



const estadoInicial: filtrosValidos = 'todos';

const _FiltroReducer = createReducer( estadoInicial, on( sett_rollins,( state,{filtro} )=>filtro) ,

)





export function filterReducer( state=estadoInicial,action ){
    return _FiltroReducer(state,action)

}