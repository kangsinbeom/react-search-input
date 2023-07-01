const INPUT_DATA = "INPUT_DATA";


export const inputData = (data) => ({type: INPUT_DATA, data})



const initialState = [];

const fetchData = (state=initialState, action) => {
  switch (action.type) {
    case INPUT_DATA:
    default:
      return state;
  }
}








export default fetchData;
