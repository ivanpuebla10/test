import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    thoughts: [],
  };

  export const addThought = createAsyncThunk(
    "thought/addthought",
    async (thought) => {
      try {
        console.log(thought)
        let thoughts =  JSON.parse(localStorage.getItem("thoughts")) || []; 
        thoughts.push({_id:thoughts.length, ...thought})
        localStorage.setItem("thoughts", JSON.stringify(thoughts));   
        return thought
      } catch (error) {
        console.error(error);
        return error
      }
    }
  );
  
  
  export const thoughtSlice = createSlice({
    name: "thought",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addThought.fulfilled, (state, action) => {
          state.thoughts = [action.payload, ...state.thoughts];
        });}
  });
    
  export default thoughtSlice.reducer;