"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Country } from "@/types/types";
import { fetchAvailableCountries } from "@/lib/api";
import { LoaderCircle } from "lucide-react";

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await fetchAvailableCountries();
        console.log("data >>>", data);
        setCountries(data);
        setLoading(false);
      } catch (error) {
        setError((error as Error).message);
        setLoading(false);
      }
    };

    getCountries();
  }, []);

  if (loading)
    return (
      <div className="pt-32 flex items-center justify-center">
        <LoaderCircle className="animate animate-spin text-[#AC94F4]" />
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="px-4 pt-10 md:px-10 lg:px-24">
      <h1 className="text-gray-800 text-xl font-medium">Countries List</h1>

      <h1 className="pt-4 text-gray-600">
        Click to find more information about each country
      </h1>

      <div className="pt-10 flex flex-wrap gap-x-2 gap-y-2">
        {countries.map((country) => (
          <Link
            href={`/country-info-page/${country.countryCode}`}
            key={country.countryCode}
            className="border rounded-md px-2 text-gray-600"
          >
            {country.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
