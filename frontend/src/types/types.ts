export interface Country {
  name: string;
  countryCode: string;
}
export interface PopulationData {
  year: number;
  value: number;
}

export interface BorderCountry {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
}

export interface CountryInfo {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: BorderCountry[];
  populationData: PopulationData[];
  flagUrl: string;
}
