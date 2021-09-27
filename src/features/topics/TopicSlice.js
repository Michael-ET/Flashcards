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
            }

        },
        addQuizId: (state, action) => {
            const { quizId, topicId } = action.payload;
            state.topics[topicId].quizIds.push(quizId)
              
            }
        }
    }

export const topicSlice = createSlice(options);
// selectors
export const selectTopics = (state) => state.topics.topics;
// actions + reducers
export const { addTopic, addQuizId } = topicSlice.actions;
export default topicSlice.reducer;