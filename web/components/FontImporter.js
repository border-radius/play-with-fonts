import React, { useContext } from 'react'
import FontContext from '../contexts/FontContext'

const FontImporter = () => {
    const {
        subset,
        family,
        font,
    } = useContext(FontContext)

    const familyUri = family.replace(/\s+/g, '+')
    const importUrl = `https://fonts.googleapis.com/css?family=${ familyUri }:${ font }&amp;subset=${ subset }`

    return <style>{ `@import url('${ importUrl }');` }</style>
}

export default FontImporter