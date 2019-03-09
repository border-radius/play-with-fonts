import styled from 'styled-components'
import React, { useContext } from 'react'
import FontContext from '../contexts/FontContext'

const Container = styled.div`
    padding: 15px 15px 5px;
    display: flex;
`

const Section = styled.div`
    padding: 7px;
`

const Label = styled.div`
    padding-left: 14px;
    font: 12px/1.4 Arial, sans-serif;
    color: #666;
`

const Select = styled.select`
    padding: 4px 10px;
    min-width: 70px;
    border: 1px solid #ccc;
    background: #fff;
    font: 14px/1.4 Arial, sans-serif;
    color: #000;
`

const InputNumber = styled.input`
    padding: 4px 0 4px 15px;
    width: 70px;
    border: 1px solid #ccc;
    background: #fff;
    font: 14px/1.4 Arial, sans-serif;
    color: #000;
`

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
            <Section>
                <Label>Subset</Label>
                <Select onChange={ subsetChange } value={ subset }>
                    {
                        subsets.map((subset) => (
                            <option value={ subset } key={ subset }>{ subset }</option>
                        ))
                    }
                </Select>
            </Section>
            <Section>
                <Label>Family</Label>
                <Select onChange={ familyChange } value={ family }>
                    {
                        families.map((family) => (
                            <option value={ family } key={ family }>{ family }</option>
                        ))
                    }
                </Select>
            </Section>
            <Section>
                <Label>Weight</Label>
                <Select onChange={ fontChange } value={ font }>
                    {
                        fonts.map((font) => (
                            <option value={ font } key={ font }>{ font }</option>
                        ))
                    }
                </Select>
            </Section>
            <Section>
                <Label>Size</Label>
                <InputNumber type='number' onChange={ sizeChange } value={ size } />
            </Section>
        </Container>
    )
}

export default FontSelector