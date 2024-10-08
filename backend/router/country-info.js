import axios from "axios";

export const countryInformation = async (req, res) => {
  try {
    const countryCode = req.params.countryCode;
    const borderCountriesResponse = await axios.get(
      `https://date.nager.at/api/v3/CountryInfo/${countryCode}`
    );
    const borderCountries = borderCountriesResponse.data.borders || [];
    const countryName = borderCountriesResponse.data.commonName;

    const populationResponse = await axios.post(
      "https://countriesnow.space/api/v0.1/countries/population",
      {
        country: countryName,
      }
    );
    if (populationResponse.data.error) {
      return res.status(500).json({ message: populationResponse.data.msg });
    }

    const populationData = populationResponse.data.data.populationCounts || [];

    const flagResponse = await axios.post(
      "https://countriesnow.space/api/v0.1/countries/flag/images",
      {
        iso2: countryCode,
      }
    );
    const flagUrl = flagResponse.data.data.flag || "";

    const countryInfo = {
      commonName: borderCountriesResponse.data.commonName,
      officialName: borderCountriesResponse.data.officialName,
      countryCode: borderCountriesResponse.data.countryCode,
      region: borderCountriesResponse.data.region,
      borders: borderCountries,
      populationData: populationData,
      flagUrl: flagUrl,
    };

    res.json(countryInfo);
  } catch (error) {
    console.error("Error fetching country information:", error);
    res.status(500).json({ message: "Error fetching country information" });
  }
};
