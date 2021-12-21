import {redux,DELETE_WORD, UNDO_WORD, NEXT_LEVEL} from './actionTypes';

const initialState = {
  wordArray: [],
  hiddenIdArray: [],

};

export const mainreducer = (state = initialState, action) => {
  
  switch (action.type) {
    case redux:
      console.log(...state.wordArray)
      return {...state, wordArray: [...state.wordArray, action.payload],
      };
    case DELETE_WORD :
      // console.log(state.wordArray)
      return {...state,
        // ...state.wordArray.map((word,index)=>word.visible=false),
        wordArray:[...state.wordArray,state.wordArray.map((word,index)=>((word.id===action.payload)?(word.visible=false):console.log("null")))],
        hiddenIdArray: [...state.hiddenIdArray,action.payload],
        
      }
    case UNDO_WORD :
      return {
        ...state,
        wordArray:[...state.wordArray,state.hiddenIdArray.map((hid)=>state.wordArray.map((word)=>word.id===hid?word.visible=true:console.log('null')))]
        
      
      };
      case NEXT_LEVEL : 
      return {...state,
        wordArray:[]
      }
    default:
      return state;
  }
};