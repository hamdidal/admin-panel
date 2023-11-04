import React, { useEffect, useState } from 'react'
import { TableRow, IconButton, Radio } from '@mui/material'
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'


import { CustomTableRow, CustomTableCell } from './Table.styled'
import CheckBox from '../Input/Checkbox/Checkbox'
import Icon from '../Icons/Icon'

const ExpandableTableRow: React.FunctionComponent<{
    id: number
    children: React.ReactNode
    expandComponent: React.ReactNode
    checkBox: boolean | undefined
    radioButton: boolean | undefined
    selectedCheckBox: Array<string>
    onSelectRows: (id: string) => void
    initialRadioButtonValue: string | number | undefined
    isRowColorful?: boolean
    rowColor?: string
}> = ({ id, children, expandComponent, checkBox, radioButton, onSelectRows, selectedCheckBox, initialRadioButtonValue, rowColor, isRowColorful }) => {
    const [isExpanded, setIsExpanded] = React.useState(false)
    const [checked, setChecked] = useState<boolean>(selectedCheckBox.indexOf(id.toString()) > -1)

    useEffect(() => {
        setChecked(selectedCheckBox.indexOf(id.toString()) > -1)
    }, [selectedCheckBox, setChecked, id])
    return (
        <>
            <CustomTableRow sx={{ background: !isRowColorful ? rowColor : 'none' }}>
                {checkBox && (
                    <CustomTableCell padding="checkbox" sx={{ paddingLeft: '20px' }}>
                        <CheckBox
                            value={id}
                            checked={checked}
                            onChange={(ids) => {
                                onSelectRows(ids)
                                setChecked(!checked)
                            }}
                        />
                    </CustomTableCell>
                )}
                {radioButton && (
                    <CustomTableCell padding="checkbox" sx={{ paddingLeft: '20px' }}>
                        <Radio value={id} checked={id === initialRadioButtonValue} />
                    </CustomTableCell>
                )}
                {expandComponent && (
                    <CustomTableCell padding="checkbox">
                        <IconButton onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? <Icon icon={<ArrowDropUp />} /> : <Icon icon={<ArrowDropDown />} />}</IconButton>
                    </CustomTableCell>
                )}
                {children}
            </CustomTableRow>
            {isExpanded && <TableRow>{expandComponent}</TableRow>}
        </>
    )
}

export default ExpandableTableRow
