import { configureStore } from "@reduxjs/toolkit";
import TopicSlice from "../features/topics/TopicSlice";
import topicsReducer from '../features/topics/TopicSlice';

export default configureStore({
  reducer: {
    topics: topicsReducer
    
  },
});
