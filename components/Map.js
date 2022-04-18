import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import getCenter from "geolib/es/getCenter";

function Map({ searchResults }) {
  // Clicking pins that bind to card
  const [selectedLocation, setSelectedLocation] = useState({});

  // Transform the search results into geolib object (longitude and latitude only)
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  // Longitude and Latitude on default center of given search

  const center = getCenter(coordinates);

  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "100%",
    longitude: center.longitude - 0.15,
    latitude: center.latitude,
    zoom: 11,
  });

  console.log(selectedLocation);

  return (
    // THE MAPBOX MAP
    <ReactMapGL
      {...viewPort}
      onMove={(nextViewPort) => setViewPort(nextViewPort.viewport)}
      mapStyle="mapbox://styles/setwork/cl23afdis000415p8lm4gvamw"
      mapboxAccessToken={process.env.mapbox_key}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetTop={-10}
            offsetLeft={-20}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>

          {/* THe pop that shows if you click on Marker */}
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
