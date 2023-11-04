import { Button, ButtonGroup, styled } from '@mui/material'
import { colors } from '../../../../styles/color'

export const CustomButtonGroup = styled(ButtonGroup)((props) => ({
    background: props.color ? colors.secondary.secondaryMain : colors.primary.primaryMain,
    '& .MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonGroup-grouped.MuiButtonGroup-groupedHorizontal.MuiButtonGroup-groupedContained.MuiButtonGroup-groupedContainedHorizontal.MuiButtonGroup-groupedContainedPrimary.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.MuiButton-root':
        {
            borderColor: props.color ? colors.secondary.secondaryContainedHoverBg : colors.primary.primaryContainedHoverBg,
        },
}))
export const CustomButton = styled(Button)((props) => ({
    background: props.color ? colors.secondary.secondaryMain : colors.primary.primaryMain,
    '&:hover': {
        background: props.color ? colors.secondary.secondaryContainedHoverBg : colors.primary.primaryContainedHoverBg,
    },
}))
