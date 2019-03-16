import React from 'react'
import Section from './Section'
import Label from './Label'
import Select from './Select'

const SelectField = ({ title, list, value, onChange }) => (
    <Section>
        <Label>{ title }</Label>
        <Select onChange={ onChange } value={ value }>
            {
                list.map((item) => (
                    <option value={ item } key={ item }>{ item }</option>
                ))
            }
        </Select>
    </Section>
)

export default SelectField