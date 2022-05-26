export interface Auth {
    user?: any;
    show: boolean,
    load: boolean,
    success: boolean,
    toggleBar: boolean,
    Search: boolean,
    Compose:boolean,
    Emojis:boolean,
    showBar: boolean,
}

export interface UsersFiltring{
    Client?: boolean,
    Moderator?: boolean,
    Developer?: boolean,
    CloseFilter?: boolean,
    Notifications?: boolean,
    AddUser?: boolean,
}