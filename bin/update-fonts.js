import path from 'path'
import axios from 'axios'
import { promises as fs } from 'fs'

const FONTS_URL = 'https://fonts.google.com/metadata/fonts'
const FONTS_PATH = path.join(__dirname, '../data/familyMetadataList.json')

async function updateFonts () {
    const { data } = await axios({ url: FONTS_URL, responseType: 'text' })
    return fs.writeFile(FONTS_PATH, data.slice(5), { encoding: 'utf8' })
}

(async () => await updateFonts())()