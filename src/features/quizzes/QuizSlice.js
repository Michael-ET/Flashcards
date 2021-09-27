import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from '../topics/TopicSlice';

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

//action creator returning 
export const quizzThunk = quiz => {
    const { quizId, name, topicId, cardIds } = quiz;
    return (dispatch) =>{     
        dispatch(quizSlice.actions.addQuiz(quiz));
        dispatch(addQuizId( { quizId: quizId, topicId: topicId } ));
    }
}

console.log(state.quizzes.quizzes)

export const quizSlice = createSlice(options);
export const selectQuiz = state => options.initialState.quizzes;
export const { addQuiz } = quizSlice.actions;
export default quizSlice.reducer;