import { ClaimPromoParamater, RegisterPhoneNumberParamater } from "../parameter/paramater";

export class RequestActionApi {
    static readonly BE_URL = "https://cac3-103-190-47-55.ngrok-free.app"

    static async RegisterPhoneNumber(data: RegisterPhoneNumberParamater) {
        try {
            const result = await fetch(`${this.BE_URL}/register`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    "ngrok-skip-browser-warning": "true"  // ← penting banget!
                }
            })
            const response = await result.json();
            return response
        } catch (error) {
            console.log(error)
            return false
        }
    }

    static async GetAllPromo() {
        try {
            const result = await fetch(`${this.BE_URL}/all-promo`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                   "ngrok-skip-browser-warning": "true"  // ← penting banget!
                }
            })
            const response = await result.json();
            return response
        } catch (error) {
            console.log(error)
            return false
        }
    }

    static async ClaimPromo(data: ClaimPromoParamater) {
        try {
            const result = await fetch(`${this.BE_URL}/voucher`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                   "ngrok-skip-browser-warning": "true"  // ← penting banget!
                }
            })
            const response = await result.json();
            return response
        } catch (error) {
            console.log(error)
            return false
        }
    }
}