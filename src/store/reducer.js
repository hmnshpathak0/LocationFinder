import { Service } from '../services/service'
import App from '../App/App';

const initialState = {
    allparams: [],
    hotellist:["fab hotes,delhi","fab Hotels,Gurgaon"]
}


export const reducer = (state = initialState, action) => {
 
    if (action.type === 'fetchAll') {
            console.log(action.response);
            const list=action.response;
            const listItems=[];
            console.log(state.counter);
            if(list.length>0){
                for(let i =0;i<list.length;i++)
                listItems.push(list[i].description);
               
               
                return{
                    ...state,
                    allparams:listItems,
                   
                }
               
            }else{
                console.log(state);
               return { ...state,
                    allparams:[],
                
               } 
            }
        }
        if (action.type === 'fetchAllHotels') {
            console.log("hotels list" +action.response);
            const list=action.response;
           
           
            if(list.length>0){
                return{
                    ...state,
                    hotellist:list,
                   
                }
               
            }else{
                console.log(state);
               return { ...state,
                    hotellist:[],
                
               } 
            }
        }




    console.log("hiiiiiiiiiiiiiiii");
   return state;
};

export default reducer;