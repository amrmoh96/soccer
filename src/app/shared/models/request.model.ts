export interface Request {
    id?: number,
    requestType: RequestTypes,
    requestFrom: number,
    requestTo: number,
    requestDate?: Date
    teamId?:number,
    action?:ActionTypes,
    actionDate?:Date,
    seen?:boolean
    seenDate?:Date
}

export const enum RequestTypes {
    invite = 1,
    join = 2,
}

export const enum ActionTypes {
    invite = 1,
    join = 2,
}

