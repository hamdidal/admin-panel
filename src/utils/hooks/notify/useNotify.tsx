import { Check, ErrorOutline } from '@mui/icons-material'
import { toast } from 'react-toastify'
import { colors } from '../../../styles/color'

const useNotify = () => {
    type NotifyProps = {
        message: string
        type?: 'success' | 'warning' | 'error' | 'loading'
    }

    const notify = ({ message, type = 'success' }: NotifyProps) => {
        if (type === 'success') {
            return toast(message, {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                icon: <Check />,
                style: { backgroundColor: colors.white.default, color: colors.success.successMain },
                progressStyle: { backgroundColor: colors.success.successContainedHoverBg },
                theme: 'light',
            })
        }
        if (type === 'loading') {
            return toast.loading(message, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: 'light',
            })
        }
        return toast(message, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            icon: <ErrorOutline />,
            style: { backgroundColor: colors.white.default, color: colors.error.errorContainedHoverBg },
            progressStyle: { backgroundColor: colors.error.errorContainedHoverBg },
            theme: 'dark',
        })
    }
    const removeAllToast = () => {
        toast.dismiss()
    }
    return { notify, removeAllToast }
}

export default useNotify
