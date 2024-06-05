import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizzes: {

    }
}
const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: initialState,
    reducers: {
        addQuizz(state,action) {
            const {id,name,topicId, cardIds} = action.payload;
            state.quizzes[id] = {id,name,topicId,cardIds};
        }
    }
})

export const selectQuiz = (state) => state.quizzes.quizzes;
export const {addQuizz} = quizzesSlice.actions;
export default quizzesSlice.reducer;