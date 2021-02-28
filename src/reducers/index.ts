import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { combineReducers } from 'redux'
import userReducer from '../slices/userSlice'

export const rootReducer = combineReducers({
    user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
