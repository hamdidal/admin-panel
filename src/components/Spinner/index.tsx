import React from 'react'
import { CustomBackdrop, CustomSpinner } from './index.styled'
import { ISpinner } from './types'

const Spinner: React.FC<ISpinner> = ({ open }) => {
    return (
        <CustomBackdrop open={open!}>
            <CustomSpinner />
        </CustomBackdrop>
    )
}

export default Spinner
