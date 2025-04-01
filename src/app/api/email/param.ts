export type FormData = {
  name: string;
  email: string;
  full_data: EmailAdminData
};

export type EmailAdminData = {
  name: string;
  email: string;
  date: string;
  person: number,
  time: string,
  hotel:string,
  sortMessage: string,
  transport: string
}
