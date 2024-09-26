"use client";

import { PopulationChart } from "@/components/charts/population-chart";
import { fetchCountryInfo } from "@/lib/api";
import { CountryInfo } from "@/types/types";
import { LoaderCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const CountryInfoPage = ({ params }: { params: { id: string } }) => {
  const [countryInfo, setCountryInfo] = useState<CountryInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCountryInfo = async () => {
      try {
        const data = await fetchCountryInfo(params.id);
        console.log("data country info >>>", data);
        setCountryInfo(data);
        setLoading(false);
      } catch (error) {
        setError((error as Error).message);
        setLoading(false);
      }
    };

    getCountryInfo();
  }, [params]);

  if (loading)
    return (
      <div className="pt-32 flex items-center justify-center">
        <LoaderCircle className="animate animate-spin text-[#AC94F4]" />
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="px-4 pt-10 md:px-10 lg:px-24">
      <div className="flex items-center justify-between">
        <h1 className="text-gray-800 text-xl font-medium">Country Info</h1>
        <Link href={"/"} className="flex gap-x-1">
          <ArrowLeft className="text-gray-600" strokeWidth={1.5} />
          <h1 className="text-gray-600">Back</h1>
        </Link>
      </div>
      <div className="pt-10">
        <div className="flex items-center gap-x-2">
          <img
            src={countryInfo?.flagUrl}
            alt="Country Flag"
            className="rounded-sm w-16"
          />
          <h1 className="font-medium text-xl">{countryInfo?.commonName}</h1>
        </div>

        <div className="pt-10 flex flex-col ">
          <h1 className="text-gray-700 font-medium">Borders:</h1>
          {countryInfo?.borders?.map((border, index) => (
            <Link
              key={index}
              href={`/country-info-page/${border.countryCode}`}
              className="underline w-full"
            >
              {border.commonName} - ({border.officialName})
            </Link>
          ))}
        </div>

        <div className="pt-10">
          {countryInfo?.populationData && (
            <PopulationChart data={countryInfo.populationData} />
          )}{" "}
        </div>
      </div>
    </div>
  );
};

export default CountryInfoPage;
