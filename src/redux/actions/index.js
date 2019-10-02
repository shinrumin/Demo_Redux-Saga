import { INCREMENT, DECREMENT, INCREMENT_SUCCESS, DECREMENT_SUCCESS } from './actionTypes'

export const incrementAction = () => ({
    type: INCREMENT
})

export const decrementAction = () => ({
    type: DECREMENT
})

export const incrementSuccessAction = () => ({
    type: INCREMENT_SUCCESS
})

export const decrementSuccessAction = () => ({
    type: DECREMENT_SUCCESS
})