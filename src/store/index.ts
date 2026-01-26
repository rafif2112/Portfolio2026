import { configureStore } from "@reduxjs/toolkit";
import aboutReducer from "./about";
import skillReducer from "./skill";
import contactReducer from "./contact";
import projectReducer from "./project";
import experienceReducer from "./experience";
import statsReducer from "./stats";

export const store = configureStore({
  reducer: {
    about: aboutReducer,
    skill: skillReducer,
    contact: contactReducer,
    project: projectReducer,
    experience: experienceReducer,
    stats: statsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
