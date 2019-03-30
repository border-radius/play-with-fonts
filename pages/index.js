import { createContext, useMemo } from 'react'

import FontDemo from '../components/FontDemo'
import FontSelector from '../components/FontSelector'
import FontImporter from '../components/FontImporter'
import FontReducer from '../reducers/FontReducer'

const FontContext = createContext({})

const App = () => {
  const [state, setState] = FontReducer()

  const contextValue = useMemo(() => ({ ...state, setState }), [
    state.subset,
    state.family,
    state.font,
    state.size,
    state.width,
  ])

  return (
    <FontContext.Provider value={contextValue}>
      <FontSelector context={FontContext} />
      <FontImporter context={FontContext} />
      <FontDemo context={FontContext} />
    </FontContext.Provider>
  )
}

export default App
