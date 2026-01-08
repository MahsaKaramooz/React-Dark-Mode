import { combineSlices } from "@reduxjs/toolkit";
import { cartSlice } from "./cart";
import { coursesSlice } from "./courses";
import { globalSlice } from "./global";
import { courseSlice } from "./course";

const rootReducer = combineSlices(cartSlice, coursesSlice, globalSlice , courseSlice);

export default rootReducer;
