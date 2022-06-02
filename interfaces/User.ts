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
export interface NotificationModerator extends Project {
  CLientFirstName?: string,
  CLientLastName?: string,
  CLientImage?: string,
  CLientId?: string,
}
