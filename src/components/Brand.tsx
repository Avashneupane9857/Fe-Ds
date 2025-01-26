import { brand2, brand3 } from "../assets";

interface ImageData {
  src: string;
  alt: string;
  companyName: string;
  services: string[];
}

const imageData: ImageData[] = [
  {
    src: brand2,
    alt: "Image 3",
    companyName: "NIIR",
    services: ["COMMUNICATION", "STRATÉGIE DE MARQUE", "STRATÉGIE ÉDITORIALE"],
  },
  {
    src: brand3,
    alt: "Image 4",
    companyName: "YOKITUP",
    services: [
      "STRATÉGIE ÉDITORIALE",
      "STRATÉGIE DE MARQUE",
      "COPYWRITING",
      "BRAND CONTENT",
    ],
  },
];

function Brand() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto gap-6 md:gap-10 px-4">
      {imageData.map((image, index) => (
        <div
          key={index}
          className="bg-black h-64 md:h-96 w-full relative overflow-hidden"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg max-w-[200px]">
            <p className="text-xs font-bold text-black">{image.companyName}</p>
            <div className="flex flex-wrap mt-2">
              {image.services.map((service, serviceIndex) => (
                <span
                  key={serviceIndex}
                  className="mr-1 mb-1 text-[10px] md:text-xs font-semibold"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Brand;
