import { BaseCompany } from './Company'
import { BaseModel } from './index'

export interface BaseUser extends BaseModel, BaseUserInformation {
    companyId: number
    company: BaseCompany
    vehicleTypeNames: string[]
    vehicleMakeNames: string[]
    workCategoryNames: string[]
}

export interface BaseUserInformation {
    name: string
    surname: string
    userName: string
    emailAddress: string | null
    isActive: boolean
    fullName: string
    phoneNumber: string
    isPhoneNumberConfirmed: boolean
    avatar: string
    status: string
    role: string
    isSeller: boolean
    isBuyer: boolean
    reference: string
    position: string
    bankAccounts: string | null
}
