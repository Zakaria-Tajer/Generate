export interface Auth {
  fName: string;
  lName: string;
  img: string;
  loaded: boolean;
}
export interface Project {
  isOpened?: boolean;
  nextItems?: boolean;
  TnxComp?: boolean;
  deliverType?: string;
  projectDesc?: string;
  projectName?: string;
  Notifiy?: boolean;
  isConfirmed?: boolean;
}
export interface NotificationModerator {
  CLientFirstName?: string[];
  CLientLastName?: string[];
  CLientImage?: string[];
  CLientId?: string[];
  Project_unique_id?: string[];
  deliverType?: string[];
  projectDesc?: string[];
  projectName?: string[];
  showDetails?: boolean;
  E_mail?: string[];
}
export interface notes {
  CLientFirstName?: string[];
  CLientLastName?: string[];
  img?: string[];
  id?: string;
  Project_unique_id?: string[];
  deliverType?: string[];
  projectDesc?: string[];
  projectName?: string[];
  last_name?: string[];
  first_name?: string[];
}

export interface Datas {
  ClientData: notes[];
}

export interface Mods {
  first_name: string
  last_name: string
  img: string
  unique_id: string
  email: string
  id: string
}
