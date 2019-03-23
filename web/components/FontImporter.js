import React, { useContext } from 'react'

const FontImporter = ({ context }) => {
    const {
        subset,
        family,
        font,
    } = useContext(context)

    const familyUri = family.replace(/\s+/g, '+')
    const importUrl = `https://fonts.googleapis.com/css?family=${ familyUri }:${ font }&amp;subset=${ subset }`

    return <style>{ `@import url('${ importUrl }');` }</style>
}

export default FontImporter