import { BaseModel } from '.'
import { BaseManager } from './Manager'

export interface BaseCompanyWithManager extends BaseCompany {
    manager: BaseManager
}

export interface BaseCompany extends BaseModel {
    name: string
    taxNumber: string
    city: string
    district: string
    address: string
    managerId: number
    isActive: boolean
    isConfirmed: boolean
    status: string
}
