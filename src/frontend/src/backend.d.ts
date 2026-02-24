import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactInfo {
    name: string;
    email: string;
    address: string;
    phone: string;
}
export interface Inquiry {
    name: string;
    email: string;
    message: string;
}
export interface backendInterface {
    getContactInfo(): Promise<ContactInfo>;
    submitInquiry(_inquiry: Inquiry): Promise<void>;
}
