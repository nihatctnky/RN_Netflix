

interface Notification {
    id:number,
    title:string,
    body:string,
    show:boolean
}

interface NotificationState {
    notifications:[]
}

export type {Notification,NotificationState}