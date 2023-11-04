import React, { useState } from 'react'

import { ButtonCapsule, PopButtonContainer, Pop, CustomBackdrop } from './PopButton.styled'
import { PopButtonProps } from './types'

const PopButton: React.FunctionComponent<PopButtonProps> = ({ button, popArea, pos = { x: 0, y: 0 }, style }) => {
    const [pop, setPop] = useState<boolean>(false)
    const handlePop = () => {
        setPop(!pop)
    }
    return (
        <PopButtonContainer style={{ ...style }}>
            <ButtonCapsule onClick={handlePop}>{button}</ButtonCapsule>
            {pop && <Pop type={pos}>{popArea}</Pop>}
            <CustomBackdrop onClick={handlePop} open={pop} />
        </PopButtonContainer>
    )
}

export default PopButton
