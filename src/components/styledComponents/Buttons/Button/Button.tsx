import { CustomButton } from './Button.styled'
import { ButtonProps } from './types'

const Button: React.FunctionComponent<ButtonProps> = ({
    children,
    backgroundColor,
    startIcon,
    endIcon,
    size = 'medium',
    variant = 'contained',
    padding,
    onClick = () => {},
    disabled,
    width,
    id,
    color,
    colorsx,
    borderColor,
    type = 'submit',
    borderRadius,
}) => {
    return (
        <CustomButton
            style={{ borderColor: borderColor }}
            type={type}
            size={size}
            variant={variant}
            startIcon={startIcon}
            endIcon={endIcon}
            color={color}
            id={id}
            sx={{ padding, backgroundColor, width, color: colorsx, borderRadius }}
            onClick={() => onClick()}
            disabled={disabled}
            disableTouchRipple
        >
            {children}
        </CustomButton>
    )
}

export default Button
