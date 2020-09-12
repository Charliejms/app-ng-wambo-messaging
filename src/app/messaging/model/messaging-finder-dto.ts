export enum MailFolder {
  RECEIVED = 'RECEIVED',
  STARRED = 'STARRED',
  SNOOZED = 'SNOOZED',
  SEND = 'SEND',
  DRAFT = 'DRAFT',
  IMPORTANT = 'IMPORTANT',
  TRASH = 'TRASH'
}

export enum State {
  ALL = 'ALL',
  UNREAD = 'UNREAD'
}

export interface MessagingFinderDto {
  mailFolder: MailFolder;
  state: State;
  bookingCode?: number;
  referenceBookingCodeType?: string;
  dateFrom?: Date;
  dateTo?: Date;
  receivedCodes?: string[];
  agencyCode?: string;
  mainAgencyCode?: string;
  allTextMail?: string;
  nameUserSend?: string;
  priority?: boolean;
  urgent?: boolean;
  inProcess?: boolean;
  hasBookingCode: boolean;
}
