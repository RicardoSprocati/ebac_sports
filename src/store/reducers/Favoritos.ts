import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosSlice = {
  itens: Produto[]
}

const initialState: FavoritosSlice = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    toggleFavorito: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload
      const favoritoExistente = state.itens.find((p) => p.id === favorito.id)

      if (favoritoExistente) {
        state.itens = state.itens.filter((p) => p.id !== favorito.id)
      } else {
        state.itens.push(favorito)
      }
    }
  }
})

export const { toggleFavorito } = favoritosSlice.actions
export default favoritosSlice.reducer
