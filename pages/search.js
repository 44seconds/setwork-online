import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
import "mapbox-gl/dist/mapbox-gl.css"; // <---- Very important for pins to align to map

function Search({ searchResults }) {
  const router = useRouter();
  // console.log(searchResults);
  const { jobrole, startDate, endDate, location } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM");
  const formattedEndDate = format(new Date(endDate), "dd MMMM");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  // console.log(router.query);

  return (
    <div>
      <Header pleaceholder={`${jobrole} | ${location} | ${range}`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ {jobrole}s available from {range}
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            {jobrole}s in {location}
          </h1>

          <div
            className="hidden lg:inline-flex mb-5 
          space-x-3 text-gray-800 whitespace-nowrap"
          >
            <p className="button">Price</p>
            <p className="button">Skill</p>
            <p className="button">Distance</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map((item) => (
              <InfoCard
                key={item.id}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
                long={item.long}
                lat={item.lat}
              />
            ))}
          </div>
        </section>

        <section className="hidden xl:inline-flex md:min-w-[700px]">
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

// SERVER SIDE RENDERING OF DUMMY DATA

export async function getServerSideProps() {
  const searchResults = await fetch("https://setwork.ai/result-data.json").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
