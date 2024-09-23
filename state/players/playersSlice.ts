import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Player {
  id?: string | undefined;
  name?: string || "new [layer";
}

interface GroupOfPlayersInterface {
  players: Player[];
}

const GroupOfPlayers: GroupOfPlayersInterface = {
  players: [
    { id: "120413", name: "Bacho" }, // Example initial player
    { id: "120796", name: "Mari" },
  ],
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
