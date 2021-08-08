import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon
} from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { DateRange, DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useRouter } from "next/dist/client/router";

function Header({ placeholder }) {
  const [show, handleShow] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();
  const pathname = router.pathname;

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    if (pathname === "/search") {
      return;
    }
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  useEffect(() => {
    if (pathname === "/search") {
      handleShow(true);
    }
  });

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate,
    endDate,
    key: "selection"
  };

  const searchHandler = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests
      }
    });
  };

  return (
    <header className={show ? "headera" : "header"}>
      {/* left */}
      <div
        className="relative flex items-center h-7 md:h-10 cursor-pointer my-auto"
        onClick={() => router.push("/")}
      >
        {show ? (
          <Image
            src="https://i.imgur.com/gVZXj9K.png"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        ) : (
          <Image
            src="https://i.imgur.com/f2rClX0.png"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        )}
      </div>
      {/* middle */}
      <div className="flex items-center md:border-2 rounded-full px-2 py-2 md:shadow-sm bg-white">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-2 md:pl-5 bg-transparent outline-none text-xs md:text-sm text-gray-600 placeholder-gray-500"
          type="text"
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {/* right */}
      <div
        className={`flex items-center space-x-4 justify-end ${
          show ? "text-gray-500" : "text-white"
        }`}
      >
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full bg-white cursor-pointer text-gray-500">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto bg-white rounded-xl mt-2">
          <DateRange
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4 bg-white">
            <h2 className="text-2xl flex-grow font-semibold ml-3">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              onChange={(e) => setNoOfGuests(e.target.value)}
              value={noOfGuests}
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              min={1}
            />
          </div>
          <div className="flex mb-2">
            <button
              onClick={() => setSearchInput("")}
              className="flex-grow text-gray-500 "
            >
              Cancel
            </button>
            <button onClick={searchHandler} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
