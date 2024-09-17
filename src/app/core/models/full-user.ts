export interface FullUser {
  name: string,
  surname: string,
  birthdate: string,
  nick: string,
  company?: string,
  occupation: string,
  email: string,
  password: string,
  fullRegistration?: boolean
}
