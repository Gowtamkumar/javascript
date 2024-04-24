import type { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface globalState {
  response: any;
  // collapsed: boolean;
  // screenWidth: number;
}

// Define the initial state using that type
const initialState: globalState = {
  response: {},
  // collapsed: false,
  // screenWidth: 0,
};

export const globalSlice = createSlice({
  name: "global",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setResponse: (state, action: PayloadAction<any>): any => {
      state.response = action.payload;
    },

    // setCollapsed: (state, action: PayloadAction<any>): any => {
    //   state.collapsed = action.payload;
    // },

    // setScreenWidth: (state, action: PayloadAction<number>): any => {
    //   state.screenWidth = action.payload;
    // },
  },
});

export const { setResponse } = globalSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectGlobal = (state: RootState) => state.global

export default globalSlice.reducer;
