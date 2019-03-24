import { useContext } from 'react'
import Container from './Container'
import Section from './Section'
import Label from './Label'
import InputNumber from './InputNumber'
import SelectField from './SelectField'

const FontSelector = ({ context }) => {
    const {
        setState,
        subsets,
        subset,
        families,
        family,
        fonts,
        font,
        size,
        width,
    } = useContext(context)
    
    const subsetChange = ({ target }) => setState({ subset: target.value })
    const familyChange = ({ target }) => setState({ family: target.value })
    const fontChange = ({ target }) => setState({ font: target.value })
    const sizeChange = ({ target }) => setState({ size: target.value })
    const widthChange = ({ target }) => setState({ width: target.value })

    return (
        <Container>
            <SelectField title="Subset" list={ subsets } value={ subset } onChange={ subsetChange } />
            <SelectField title="Family" list={ families } value={ family } onChange={ familyChange } />
            <SelectField title="Weight" list={ fonts } value={ font} onChange={ fontChange } />
            <Section>
                <Label>Size</Label>
                <InputNumber type='number' onChange={ sizeChange } value={ size } />
            </Section>
            <Section>
                <Label>Width</Label>
                <InputNumber type='number' onChange={ widthChange } value={ width } />
            </Section>
        </Container>
    )
}

export default FontSelector