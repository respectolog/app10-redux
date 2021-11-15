import { createSlice } from "@reduxjs/toolkit";
import data from "./data.json";

const todata = data.data;
const list = todata.cheques;

var newmassiv = list.map(function (item) {
  return {
    dataReg: item.dateReg,
    num: item.num,
    kioskName: item.kioskName,
    chequeType: item.chequeType,
    pays: item.pays,
    sum: item.sum,
    positions: item.positions,
  };
});

const initialState = {
  list: newmassiv,
};

export const prodlistSlice = createSlice({
  name: "prodlist",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addString: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //state.list.splice(tag_story.indexOf(id_tag), 1)
      state.list.push(action.payload);
      console.log(action.payload);
    },
    deleteString: (state, action) => {
      state.list.splice(action.payload, 1);
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
});

export const { addString, deleteString } = prodlistSlice.actions;

export const selectMassive = (state) => state.prodlist.list;

export default prodlistSlice.reducer;
