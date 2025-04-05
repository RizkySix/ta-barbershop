export interface RegisterPhoneNumberParamater {
    name: string,
    phone: string,
    address: string
}

export interface ClaimPromoParamater {
    phone: string,
    promo_id: number
}