export interface Request {
    id?: number,
    requestType: RequestTypes,
    requestFrom: number,
    requestTo: number,
    requestDate?: Date
}

export const enum RequestTypes {
    join = 0,
    invite = 1
}

