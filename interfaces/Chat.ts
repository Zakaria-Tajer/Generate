export interface Chat_Users {
  first_name?: string[];
  last_name?: string[];
  img?: string[];
  id: string[],
}
export interface SpecClient {
  currentId?: any
  first_name?: string;
  last_name?: string;
  img?: string;
  id: string,
}
export interface ChatNotes {
    Chat_Data_Users?: Chat_Users[],
}

export interface MessagesData {
  ModeratorText?: string;
  id?: number;
  CLientText?: string,
  CurrentClientId?: string,
  CurrentModeratorId?: string,
  moderatorId?: string,
}
export interface MsgAllData {
  ChatModClientData: MsgAllData[]
}
