"use server";

import { Country, CountryInfo } from "@/types/types";

export const fetchAvailableCountries = async (): Promise<Country[]> => {
  const response = await fetch("http://localhost:3003/available-countries");
  if (!response.ok) {
    throw new Error("Error fetching countries");
  }
  const data: Country[] = await response.json();

  return data;
};

export const fetchCountryInfo = async (
  countryCode: string
): Promise<CountryInfo> => {
  const response = await fetch(
    `http://localhost:3003/country-info/${countryCode}`
  );
  if (!response.ok) {
    throw new Error("Error fetching country information");
  }
  const data: CountryInfo = await response.json();
  return data;
};
