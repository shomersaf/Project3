import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    email:null,
    vcnId: null
};
const followingSlice =createSlice({
name:'following',
initialState,
reducers:{
    setFollowing(state, action){
      state.vcnId = action.payload.vcnId,
    state.email = action.payload.email
      
    },
    removeFollowing(state){
        state.email = null,
        state.vcnId = null
    },
}
})
export const {setFollowing, removeFollowing }= followingSlice.actions;
export default followingSlice.reducer;