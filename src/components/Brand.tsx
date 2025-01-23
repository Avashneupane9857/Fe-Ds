import { brand1, brand2, brand3, brand4 } from "../assets";

interface ImageData {
  src: string;
  alt: string;
  companyName: string;
  services: string[];
}

const imageData: ImageData[] = [
  {
    src: brand2,
    alt: "Image 1",
    companyName: "SACRÉ ARMAND",
    services: ["COPYWRITING", "STRATÉGIE ÉDITORIALE", "BRAND CONTENT"],
  },
  {
    src: brand1,
    alt: "Image 2",
    companyName: "SMOTEO",
    services: ["STRATÉGIE DE MARQUE", "COPYWRITING", "DESIGN"],
  },
  {
    src: brand3,
    alt: "Image 3",
    companyName: "NIIR",
    services: ["COMMUNICATION", "STRATÉGIE DE MARQUE", "STRATÉGIE ÉDITORIALE"],
  },
  {
    src: brand4,
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

const Brand = () => {
  return (
    <div className="grid grid-cols-2 w-[90%] mx-auto gap-10 ">
      {imageData.map((image, index) => (
        <div key={index} className="bg-black h-96 w-[620px] relative ">
          <img
            src={image.src}
            alt={image.alt}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg">
            <p className="text-xs font-bold text-black">{image.companyName}</p>
            <div className="flex flex-wrap mt-2">
              {image.services.map((service, serviceIndex) => (
                <span key={serviceIndex} className="mr-2 text-xs font-semibold">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Brand;
