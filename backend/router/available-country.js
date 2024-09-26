import axios from "axios";

export const availableCountries = async (req, res) => {
  try {
    const response = await axios.get(
      "https://date.nager.at/api/v3/AvailableCountries"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching available countries" });
  }
};
