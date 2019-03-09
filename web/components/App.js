import React, { useMemo } from 'react'

import FontDemo from './FontDemo'
import FontSelector from './FontSelector'
import FontImporter from './FontImporter'
import FontContext from '../contexts/FontContext'
import FontReducer from '../reducers/FontReducer'

const App = () => {
    const [ state, setState ] = FontReducer()

    const contextValue = useMemo(
        () => ({ ...state, setState }),
        [
            state.subset,
            state.family,
            state.font,
            state.size,
        ]
    )

    return (
        <FontContext.Provider value={ contextValue }>
            <FontSelector />
            <FontImporter />
            <FontDemo />
        </FontContext.Provider>
    )
}

export default App