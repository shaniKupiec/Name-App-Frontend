import { Country } from "./country.models";

export interface NameData {
  id: string,
  name: string;
  gender?: string;
  probability?: number;
  count?: number;
  countries?: Country[]
}
