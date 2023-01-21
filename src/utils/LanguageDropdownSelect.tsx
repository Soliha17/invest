export interface LanguageOption {
  readonly value: string;
  readonly label: string;
}

export const languageOptions: readonly LanguageOption[] = [
  { value: "uz", label: "O'zbek tili" },
  { value: "ru", label: "Rus tili" },
  { value: "en", label: "Ingliz tili" },
];
