import { BaseModel, BaseVehicleMake, BaseVehicleType, BaseWorkCategory } from '.'

export interface BaseManager extends BaseModel {
    userName: string
    name: string
    surname: string
    emailAddress: string
    isActive: boolean
    fullName: string
    isSeller: boolean
    isBuyer: boolean
    reference: string
    phoneNumber: string
    isPhoneNumberConfirmed: boolean
    avatar: any
    position: string
    bankAccounts: string
    companyId: number
    creationTime: string
    vehicleMakes: BaseVehicleMake[]
    workCategories: BaseWorkCategory[]
    vehicleTypes: BaseVehicleType[]
    status: string
    role: string
}
