export interface ProfileResponse {
  data: Profile[];
}

export interface Profile {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}
