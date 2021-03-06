export interface userData {
    fName: string,
    lName: string,
    img: string,
    uniqueId: string,
    emoji?: any,
    expiring?: any,
    // id?: string

}
export interface updatedData {
    Email: string,
    Number: number,
    Address: string,
    City: string,
    State: string,
    ZipCode: number,
    Country: string,
}


export interface Emojis {
    emoji: any
}

export interface ProjectClientData {
    ProjectDeadline?: string,
    isProject?: boolean,
    projectName?: string,
    projectDescription?: string,
    CompletedTasks?: string,
    Progress?: string,
    starter_Tasks?: string,
    projectIndexID?: string,
    logo?: string,
    developerId?:string,
    FirstName?: string,
    LastName?: string,
    img?: string,

}