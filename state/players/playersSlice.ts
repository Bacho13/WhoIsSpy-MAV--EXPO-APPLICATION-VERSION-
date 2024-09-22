import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Player {
  id: string;
  name: string;
}

interface PlayersState {
  players: Player[];
}

const initialState: PlayersState = {
  players: [
    { id: "1", name: "mari" }, // Example initial player
    { id: "2", name: "bacho" }, // Example initial player
  ],
};

const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    removePlayer: (state, action: PayloadAction<string>) => {
      state.players = state.players.filter(
        (player) => player.id !== action.payload
      );
    },
  },
});

export const { removePlayer } = playersSlice.actions;

export default playersSlice.reducer;
