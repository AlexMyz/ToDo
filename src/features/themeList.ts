import { createSlice } from "@reduxjs/toolkit"
import { Theme } from "../models/theme"
import { themes } from "../styles/themes"

export interface ThemeState {
  theme: Theme
}

const initialState: ThemeState = {
  theme: themes['lightTheme']
}

export const tthemeSlice = createSlice({
  name: "themeList",
  initialState,
  reducers: {
    toggleThemeAction: (state) => {
      state.theme = state.theme.name === 'light' ? themes['darkTheme'] : themes['lightTheme']
    },
  },
})

export const { toggleThemeAction } = tthemeSlice.actions

export default tthemeSlice.reducer
