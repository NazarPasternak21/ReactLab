import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    laptopItems: [],
    laptopTotalQuantity: 0,
};

const laptopSlice = createSlice({
    name: "laptop",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.laptopItems.findIndex((item) => item.id === action.payload.id);

            if (itemIndex >= 0) {
                state.laptopItems[itemIndex].laptopQuantity += action.payload.laptopQuantity;
            } else {
                const temp = { ...action.payload, laptopQuantity: action.payload.laptopQuantity };
                state.laptopItems.push(temp);
            }

            state.laptopTotalQuantity += action.payload.laptopQuantity;
        },
        incrementQuantity(state, action) {
            const laptopId = action.payload;
            const laptopItem = state.laptopItems.find((item) => item.id === laptopId);

            if (laptopItem) {
                laptopItem.laptopQuantity += 1;
                state.laptopTotalQuantity += 1;
            }
        },

        decrementQuantity(state, action) {
            const laptopId = action.payload;
            const laptopItem = state.laptopItems.find((item) => item.id === laptopId);

            if (laptopItem && laptopItem.laptopQuantity > 0) {
                laptopItem.laptopQuantity -= 1;
                state.laptopTotalQuantity -= 1;

                if (laptopItem.laptopQuantity === 0) {
                    state.laptopItems = state.laptopItems.filter((item) => item.id !== laptopId);
                }
            }
        },
    },
});

export const { addToCart, incrementQuantity, decrementQuantity } = laptopSlice.actions;
export default laptopSlice.reducer;
