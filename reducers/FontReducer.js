import { useReducer } from 'react'

import {
    getSubsetList,
    getFamilyList,
    getFontList,
} from '../data/fonts'

const defaultSubset = 'latin'
const defaultFamily = 'IBM Plex Mono'
const defaultFont = '400'
const defaultSize = 16
const defaultWidth = 700;

const subsets = getSubsetList()
const subset = defaultSubset
const families = getFamilyList(subset)
const family = defaultFamily
const fonts = getFontList(family)
const font = defaultFont

export default () => useReducer(
    (oldState, diff) => {
        const { subsets } = oldState
        const subset = diff.subset || oldState.subset
        const families = diff.subset ? getFamilyList(subset) : oldState.families
        const family = diff.family ? diff.family : families.indexOf(oldState.family) > -1 ? oldState.family : families[0]
        const fonts = diff.subset || diff.family ? getFontList(family) : oldState.fonts
        const font = diff.font ? diff.font : fonts.indexOf(oldState.font) > -1 ? oldState.font : fonts[0]
        const size = diff.size || oldState.size
        const width = diff.width || oldState.width

        return {
            subsets,
            subset,
            families,
            family,
            fonts,
            font,
            size,
            width,
        }
    },
    {
        subsets,
        subset,
        families,
        family,
        fonts,
        font,
        size: defaultSize,
        width: defaultWidth,
    }
)