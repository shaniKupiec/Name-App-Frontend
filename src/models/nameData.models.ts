import { Country } from "./country.models";

export interface NameData {
  name: string;
  gender?: string;
  probability?: number;
  count?: number;
  countries?: Country[]
}
