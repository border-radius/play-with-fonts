import styled from 'styled-components'
import React, { useContext } from 'react'

const defaultText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto quo labore nulla. Corporis possimus asperiores sit voluptates debitis voluptas, pariatur accusamus. Cupiditate ipsum tempora, natus earum ex hic nesciunt soluta!';

const FontDemo = ({ context }) => {
    const {
        family,
        font,
        size,
        width,
    } = useContext(context)

    const Paragraph = styled.p`
        padding: 0 22px;
        width: ${width}px;
        font-family: '${ family }';
        font-weight: ${ font };
        font-size: ${ size }px;
    `

    return <Paragraph>{ defaultText }</Paragraph>
}

export default FontDemo