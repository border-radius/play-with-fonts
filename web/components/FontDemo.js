import styled from 'styled-components'
import React, { useContext, useState } from 'react'

const defaultText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
Architecto quo labore nulla.
Corporis possimus asperiores sit voluptates debitis voluptas, pariatur accusamus.
Cupiditate ipsum tempora, natus earum ex hic nesciunt soluta!`.replace(/\n/g, ' ')

const TextArea = ({ value, onChange, className }) => (
    <textarea
        value={ value }
        onChange={ onChange }
        className={ className }
        autocomplete='off'
        autocorrect='off'
        autocapitalize='off'
        spellcheck='false'
    />
)

const Editor = styled(TextArea)`
    margin: 0 22px;
    width: ${ props => props.width }px;
    height: 200px;
    font-family: '${ props => props.family }';
    font-weight: ${ props => props.font };
    font-size: ${ props => props.size }px;
    border: none;
`

const FontDemo = ({ context }) => {
    const [ text, setText ] = useState(defaultText)
    const onChange = ({ target }) => setText(target.value)

    const {
        family,
        font,
        size,
        width,
    } = useContext(context)

    return (
        <Editor
            width={ width }
            family={ family }
            font={ font }
            size={ size }
            onChange={ onChange }
            value={ text }
        />
    )
}

export default FontDemo