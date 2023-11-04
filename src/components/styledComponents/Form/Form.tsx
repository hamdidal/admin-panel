import React from 'react'

import { CustomForm } from './Form.styled'
import { FormProps } from './types'

const Form: React.FunctionComponent<FormProps> = ({ children, gap = 'small' }) => {
    return <CustomForm gap={gap}>{children}</CustomForm>
}

export default Form
