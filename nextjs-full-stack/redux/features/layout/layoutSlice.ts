import type { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface LayoutState {
  open: boolean;
  collapsed: boolean;
  screenWidth: number;
}

// Define the initial state using that type
const initialState: LayoutState = {
  open: false,
  collapsed: false,
  screenWidth: 0,
};

export const layoutSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<any>): any => {
      state.open = action.payload;
    },

    setCollapsed: (state, action: PayloadAction<any>): any => {
      state.collapsed = action.payload;
    },

    setScreenWidth: (state, action: PayloadAction<number>): any => {
      state.screenWidth = action.payload;
    },
  },
});

export const { setOpen, setCollapsed, setScreenWidth } = layoutSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectLayout = (state: RootState) => state.layout;

export default layoutSlice.reducer;
