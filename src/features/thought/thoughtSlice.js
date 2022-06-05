import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    thoughts: [],
    thought: [],
  };

  export const addThought = createAsyncThunk(
    "thought/addthought",
    async (thought) => {
      try {
        let thoughts =  JSON.parse(localStorage.getItem("thoughts")) || []; 
        thoughts.push({thought})
        localStorage.setItem("thoughts", JSON.stringify(thoughts));   
        return thoughts
      } catch (error) {
        console.error(error);
        return error
      }
    }
  );
  export const getThoughts = createAsyncThunk(
    "thought/getthought",
    async () => {
      try {
        let thoughts =  JSON.parse(localStorage.getItem("thoughts")) || []; 
        return thoughts
      } catch (error) {
        console.error(error);
        return error
      }
    }
  );

  export const getThoughtById = createAsyncThunk(
    "thought/getthoughtbyid",
    async (_id) => {
      try {
        let thoughts =  JSON.parse(localStorage.getItem("thoughts")) || [];
        const thought = thoughts.filter((elem)=> elem.thought._id == _id)
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
        });
        builder.addCase(getThoughts.fulfilled, (state, action) => {
          state.thoughts = action.payload;
        });
        builder.addCase(getThoughtById.fulfilled, (state, action) => {
          state.thought = action.payload;
        });
        ;},         
       
  });
    
  export default thoughtSlice.reducer;