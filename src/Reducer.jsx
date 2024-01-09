 const reducer = (state, action) => {

     switch (action.type) {
         case "CHANG_NAME":

             return {
                 ...state, name: "Rejaul"
             }

             default:
                 break;
     }


 }

 export default reducer