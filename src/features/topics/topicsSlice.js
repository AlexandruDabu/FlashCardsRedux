import { createSlice } from "@reduxjs/toolkit";
import { addQuizz } from "../quizzes/quizzesSlice";
const initialState = {
    topics: {}
};

const topicsSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        addTopic(state,action) {
            const {id, name, icon} = action.payload;
            state.topics[id] = {id,name,icon, quizIds: []};
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addQuizz, (state,action) => {
            const {id, topicId } = action.payload;
            console.log(id,topicId);
            state.topics[topicId].quizIds.push(id);
        })
    }
})

export const selectTopics = (state) => state.topics.topics;

export const { addTopic } = topicsSlice.actions;

export default topicsSlice.reducer;