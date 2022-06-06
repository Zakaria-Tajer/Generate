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

export interface Datas {
  ClientData: any[];
}
