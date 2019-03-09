import { familyMetadataList } from './familyMetadataList.json'

const subsetsList = []
const subsetFamilies = {}
const familyFonts = {}

familyMetadataList.forEach(({ family, subsets, fonts }) => {
    subsets.forEach((subset) => {
        if (!subsetFamilies[subset]) {
            subsetFamilies[subset] = [ family ]
            subsetsList.push(subset)
        } else {
            subsetFamilies[subset].push(family)
        }
    })

    familyFonts[family] = Object.keys(fonts)
})

subsetsList.sort()

export const getSubsetList = () => subsetsList
export const getFamilyList = (subset) => subsetFamilies[subset] || []
export const getFontList = (family) => familyFonts[family] || []