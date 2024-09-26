import express from "express";

import { countryInformation } from "./country-info.js";
import { availableCountries } from "./available-country.js";

export const router = express.Router();

router.get("/available-countries", availableCountries);
router.get("/country-info/:countryCode", countryInformation);
