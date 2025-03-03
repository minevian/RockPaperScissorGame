import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface gamestate {
    userInput: {
        name: string
    },
    isInstructionPopupOpen: boolean;
    isGameOver: boolean;
}

const initialState: gamestate = {
    userInput: {
        name: ''
    },
    isInstructionPopupOpen: false,
    isGameOver: false,
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        handleUserInput: (state, action) => {
            state.userInput.name = action.payload
        },
        handleInstructionPopup: (state, action: PayloadAction<{ isInstructionPopupOpen: boolean }>) => {
            state.isInstructionPopupOpen = action.payload.isInstructionPopupOpen
        },
        handleisGameOver: (state, action: PayloadAction<{ isGameOver: boolean }>) => {
            state.isGameOver = action.payload.isGameOver

        },
    }
    });

export const { handleUserInput,
    handleInstructionPopup,
    handleisGameOver
} = gameSlice.actions

export default gameSlice.reducer