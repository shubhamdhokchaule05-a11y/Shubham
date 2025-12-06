// Given the manufacturer (Torrent Pharma, Cipla, Sun Pharma), use switch to print the origin country or brand reputation.

let manufacturer = "Cipla";

switch (manufacturer)  {
    case "Torrent Pharma":
        console.log("Origin Country:India, Known for: High-quality pharmaceuticals");
        break;
    case "Cipla":
        console.log("Origin Country: India, Known for: Affordable generic medicines");
        break;
    case "Sun Pharma":
        console.log("Origin Country: India, Known for: Large portfolio of pharmaceutical products");
        break;
    default:
        console.log("Manufacturer not recognized");
}