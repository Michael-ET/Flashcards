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
            const { quizIds, name, topicId, cardIds } = action.payload;
            state.quizzes[quizIds] = {
              id: quizIds,
              name: name,
              topicId: topicId,
              cardIds: cardIds
            };
        }
    }
};

//action creator 
export const quizzThunk = quiz => {
 
    const { quizId, name, topicId, cardIds } = quiz;
    if(!topicId){
            alert('Please assign quiz to topic')
            return
    }else{
            return (dispatch) => {     
            dispatch(quizSlice.actions.addQuiz(quiz));
            dispatch(addQuizId( { quizId: quizId, topicId: topicId } ));
        }
    }
    

};



export const quizSlice = createSlice(options);
export const selectQuiz = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizSlice.actions;
export default quizSlice.reducer;