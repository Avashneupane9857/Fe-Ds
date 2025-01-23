import { brand2, icon1 } from "../assets";
const features = [
  { id: 1, ft: "Copywriting" },
  { id: 2, ft: "Brandssss" },
  { id: 3, ft: "Communication" },
];
function Brand() {
  return (
    <div className="bg-black h-screen">
      <div className="h-[623px] w-[493.63px]">
        <img src={brand2} alt="" />
        <div className="flex gap-6">
          <img src={icon1} alt="" />
          <h1 className="text-white">Sacré Armand</h1>
        </div>
        {features.map(({ id, ft }) => (
          <div key={id}>
            <div className="w-22 h-5 text-white ">
              <div className="flex">
                <h1>{ft}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brand;
