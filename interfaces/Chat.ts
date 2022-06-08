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
  id?: string,
}
export interface ChatNotes {
    Chat_Data_Users?: Chat_Users[],
}
