import atm from "../public/atm.png";
import chip from "../public/chip.jpeg";

const GlowingATMcard = () => {
  return (
    <div className="my-4">
      <div className="bg-[#121321]">
        {/* coloring circle */}
        <div className="circle">
          {/* whole card section */}
          {/* card header section */}
          <div className="atm-card">
            <div className="flex justify-between p-6 items-center">
              {/* master card logo */}
              <img src={atm} alt="mastercard" className="w-8 h-8" />
              {/* master card name */}
              <h1 className="font-bold text-zinc-100 -ml-[80px]">
                Master Card
              </h1>
              {/* master card sim chip */}
              <img src={chip} alt="" className="w-8 h-8" />
            </div>
            {/* card detail */}
            <div className="flex justify-between px-4 uppercase">
              {/* normal detail */}
              <div>
                <h1 className="text-zinc-200 font-bold"> Card Number</h1>
                <h1 className="text-zinc-200 font-bold">1906-2022-0903-0909</h1>
                <h1 className="text-zinc-200 font-bold">Deep Design Web</h1>
              </div>
              {/* generic */}
              <div>
                <h1 className="text-zinc-200 font-bold"> Expire in</h1>
                <h1 className="text-zinc-200 font-bold">99/09</h1>
                <h1 className="text-zinc-200 font-bold">190</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlowingATMcard;
