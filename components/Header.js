import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
  GlobeIcon,
  MapIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
// import DropdownMenu from "./DropdownMenu";
import { useRouter } from "next/router";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [countrySelected, setCountrySelected] = useState("United Kingdom");

  const router = useRouter();
  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        jobrole: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        location: countrySelected,
      },
    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 ">
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src="https://setwork.ai/images/Setwork4-logo-new-tiny.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* SEARCH BAR */}
      <div className="flex items-center md:border 2 rounded-full py-2 md:shadow">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-blue-600 
          placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Type 'Videographer', 'Editor' ect..."}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-[#0c5ea3] text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Filmmaker account</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex space-x-2 items-center border-2 p-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer" />

          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {/* DATE RANGE PICKER */}
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto ">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#0c5ea3"]}
            onChange={handleSelect}
          />

          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl pl-2 flex-grow font-semibold">Country</h2>

            <label for="countries"></label>
            <select
              value={setCountrySelected}
              onChange={(e) => setCountrySelected(e.target.value)}
              name="countries"
              id="countries"
              className="outline-none pl-12 text-[#0c5ea3]"
            >
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="Brazil">Brazil</option>
              <option value="France">France</option>
              <option value="UK">UK</option>
            </select>
            {/* <Dropdown menu options={options} /> */}
          </div>

          <div className="flex items-center">
            <button
              onClick={resetInput}
              className="flex-grow text-gray-500 hover:shadow-md p-2 rounded-lg transition transform duration-200 ease-out"
            >
              Cancel
            </button>
            <button
              onClick={search}
              className="flex-grow text-[#0c5ea3] hover:shadow-md p-2 rounded-lg hover:text-white hover:bg-[#0c5ea3] transition transform duration-200 ease-in-out"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
