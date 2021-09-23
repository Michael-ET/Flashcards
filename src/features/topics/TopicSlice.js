import { createSlice } from "@reduxjs/toolkit";


//state slice
const options = {
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = {
              id: id,
              name: name,
              icon: icon,
              quizIds: []
            };
        }
    }
}
export const topicSlice = createSlice(options);
// selectors
export const selectTopics = (state) => options.initialState.topics;
// actions + reducers
export const { addTopic, addQuizId } = topicSlice.actions;
export default topicSlice.reducer;