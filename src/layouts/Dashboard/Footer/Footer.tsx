import React from 'react'

import { FooterProps } from './types'
import { FooterContainer, FooterText } from './Footer.styled'

const Footer: React.FunctionComponent<FooterProps> = () => {
    return (
        <FooterContainer>
            <FooterText>© 2023, Bütün hakları saklıdır.</FooterText>
        </FooterContainer>
    )
}

export default Footer
