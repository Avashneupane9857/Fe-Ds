import { Features } from "tailwindcss";
import { brand1, brand2, brand3, icon1, icon2, icon3 } from "../assets";
const brands = [
  {
    id: 1,
    tags: ["Copywriting", "Brandssss", "Brandssss"],
    image: brand1,
    icon: icon3,
    title: "Creative Copywriting",
  },
  {
    id: 2,
    tags: ["Brandssss"],
    image: brand2,
    icon: icon2,
    title: "Brand Strategy & Identity",
  },
  {
    id: 3,
    tags: ["Communication"],
    image: brand3,
    icon: icon1,
    title: "Effective Communication",
  },
];
function Brand() {
  return (
    <div className="bg-black h-screen">
      {brands.map((features) => (
        <>
          <div key={features.id} className="w-[493.63px]">
            <img src={features.image} alt="" />
          </div>
          <div className="flex gap-6">
            <img src={features.icon} alt="" />
            <h1 className="text-white">{features.title}</h1>
          </div>

          <div className="flex gap-2 ">
            <div>
              <div className="w-32 text-center h-5 text-black bg-white ">
                <h1>{features.tags}</h1>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default Brand;
