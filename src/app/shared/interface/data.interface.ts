export interface data {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  basicSalary: number;
  status: string;
  group: string;
  description: string;
}


export type StateInterface = 'success' | 'loading' | 'error' | 'nodata';