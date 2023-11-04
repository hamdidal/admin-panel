import { ISelectDate } from 'models/common/selectDate'
import { RefObject } from 'react'

export type DateRangePickerProps = {
    onSelectDate: (param: ISelectDate) => void
    placeholder: string
    width?: string | number
    border?: string
    value?: string | Date | number | ReadonlyArray<string | Date | number> | undefined
    ref?: RefObject
    startDate?: string
    endDate?: string
    setEndDate?: React.Dispatch<React.SetStateAction<string>>
    setStartDate?: React.Dispatch<React.SetStateAction<string>>
    height?: string | number
    size?: boolean
    mode?: "time" | "multiple" | "single" | "range" | undefined
}
