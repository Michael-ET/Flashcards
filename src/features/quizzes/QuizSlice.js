import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from '../topics/topicsSlice';

//state slice
const options = {
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { quizId, name, topicId, cardIds } = action.payload;
            state.quizzes[quizId] = {
              id: quizId,
              name: name,
              topicId: topicId,
              cardIds: cardIds
            };
        }
    }
}

export const quizSlice = createSlice(options);
export const selectQuiz = (state) => options.initialState.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizSlice.reducer;