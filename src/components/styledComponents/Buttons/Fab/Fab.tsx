import Plus from '../../../../assets/Icons/Plus'
import { colors } from '../../../../styles/color'
import { CustomFab } from './Fab.styled'
import { FabProps } from './types'

const Fab: React.FunctionComponent<FabProps> = ({ children, variant = 'extended', size, color, backgroundColor, disabled }) => {
    return (
        <CustomFab variant={variant} size={size} disabled={disabled} color={color} sx={{ backgroundColor }}>
            <Plus color={disabled ? colors.action.actionDisabledLight : colors.white.default} /> {children}
        </CustomFab>
    )
}

export default Fab
