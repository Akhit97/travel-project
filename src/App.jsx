import Header from "./components/Header";
import Entry from "./components/Entry";
import journeyData from "./journeyData";

export default function App() {
  //using map to get data
  const entryElements = journeyData.map((entry) => {
    return (
      <Entry
        key={entry.id}
        // entry={entry} //full object usinprops- passing object as props
        {...entry} //spread objects as props

        // img={entry.img}
        // title={entry.title}
        // country={entry.country}
        // location={entry.googleMapsLink}
        // tripdate={entry.dates}
        // text={entry.text}
      />
    );
  });
  return (
    <>
      <Header />
      <main className="container">
        {entryElements}

        {/* <Entry
          img={{
            src: "https://scrimba.com/links/travel-journal-japan-image-url",
            alt: "Mount Fuji",
          }}
          // markerImg = "/src/assets/marker.png"
          country="Japan"
          location="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
          title="Mount Fuji"
          tripdate="12 Jan, 2021 - 24 Jan, 2021"
          text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists."
        />
        <Entry
          img={{
            src: "https://scrimba.com/links/travel-journal-japan-image-url",
            alt: "Mount Fuji",
          }}
          country="Japan"
          location="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
          title="Mount Fuji"
          tripdate="12 Jan, 2021 - 24 Jan, 2021"
          text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists."
        />
        <Entry
          img={{
            src: "https://scrimba.com/links/travel-journal-japan-image-url",
            alt: "Mount Fuji",
          }}
          country="Japan"
          location="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
          title="Mount Fuji"
          tripdate="12 Jan, 2021 - 24 Jan, 2021"
          text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists."
        />
        <Entry
          img={{
            src: "https://scrimba.com/links/travel-journal-japan-image-url",
            alt: "Mount Fuji",
          }}
          country="Japan"
          location="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
          title="Mount Fuji"
          tripdate="12 Jan, 2021 - 24 Jan, 2021"
          text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists." */}
        {/* /> */}
      </main>
    </>
  );
}
