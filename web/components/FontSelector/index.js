import React, { useContext } from 'react'
import FontContext from '../../contexts/FontContext'
import Container from './Container'
import Section from './Section'
import Label from './Label'
import InputNumber from './InputNumber'
import SelectField from './SelectField'

const FontSelector = () => {
    const {
        setState,
        subsets,
        subset,
        families,
        family,
        fonts,
        font,
        size,
    } = useContext(FontContext)
    
    const subsetChange = ({ target }) => setState({ subset: target.value })
    const familyChange = ({ target }) => setState({ family: target.value })
    const fontChange = ({ target }) => setState({ font: target.value })
    const sizeChange = ({ target }) => setState({ size: target.value })



    return (
        <Container>
            <SelectField title="Subset" list={ subsets } value={ subset } onChange={ subsetChange } />
            <SelectField title="Family" list={ families } value={ family } onChange={ familyChange } />
            <SelectField title="Weight" list={ fonts } value={ font} onChange={ fontChange } />
            <Section>
                <Label>Size</Label>
                <InputNumber type='number' onChange={ sizeChange } value={ size } />
            </Section>
        </Container>
    )
}

export default FontSelector