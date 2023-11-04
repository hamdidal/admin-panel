export const IBAN_REGEX = /^TR\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/

export enum EUserRoles {
    BUYER = 'Alıcı',
    SELLER = 'Satıcı',
    BOTH = 'Satıcı & Alıcı',
}

export const LONG_START_DATE_TIME_FORMAT_FOR_BACKEND = 'DD-MM-YYYY 00:00'
export const LONG_FINISH_DATE_TIME_FORMAT_FOR_BACKEND = 'DD-MM-YYYY 23:59'

export const UI_DATE_TIME_FORMAT = 'DD-MM-YYYY'
