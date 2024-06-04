export type UserGender = "MALE" | "FEMALE" | "OTHER";

export interface User {
    id: number,
    email: string,
    password: string,
    username: string,
    gender?: UserGender
}
