export interface CountryOption {
  readonly value: string;
  readonly label: string;
}

export const countryOptions: readonly CountryOption[] = [
  { value: "buxoro", label: "Buxoro" },
  { value: "samarqand", label: "Samarqand" },
  { value: "toshkent", label: "Toshkent" },
  { value: "sirdaryo", label: "Sirdaryo" },
  { value: "andijon", label: "Andijon" },
];

export interface CityOption {
  readonly value: string;
  readonly label: string;
}

export const cityOptions: readonly CityOption[] = [
  { value: "buxoro", label: "Buxoro" },
  { value: "samarqand", label: "Samarqand" },
  { value: "toshkent", label: "Toshkent" },
  { value: "sirdaryo", label: "Sirdaryo" },
  { value: "andijon", label: "Andijon" },
];