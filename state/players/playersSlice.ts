import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Player {
  id?: string;
  name?: string;
}

interface GroupOfPlayersInterface {
  players: Player[];
}

const GroupOfPlayers: GroupOfPlayersInterface = {
  players: [],
};

const playersSlice = createSlice({
  name: "GroupOfPlayers",
  initialState: GroupOfPlayers,
  reducers: {
    removePlayer: (state, action: PayloadAction<string>) => {
      state.players = state.players.filter(
        (player) => player.id !== action.payload
      );
    },
    addPlayer: (state, action: PayloadAction<Player>) => {
      state.players.push(action.payload);
    },
  },
});

export const { removePlayer, addPlayer } = playersSlice.actions;

export default playersSlice.reducer;
