const prototypes = [
  {
    title: "Force Myography",
    category: "Wearable Sensing",
    image: "/prototypes/fmg.jpg",
  },
  {
    title: "Prosthetic Leg",
    category: "Assistive Technology",
    image: "/prototypes/prosthetic-leg.jpg",
  },
  {
    title: "Smart Shoe",
    category: "Gait Analysis",
    image: "/prototypes/shoe.jpg",
  },
  {
    title: "Smart Insoles",
    category: "Healthcare IoT",
    image: "/prototypes/insole.jpg",
  },
];

export default function Prototypes() {
  return (
    <section
      id="prototypes"
      className="py-14 bg-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto px-8">

        <p className="uppercase tracking-[4px] text-cyan-600 text-sm font-semibold">
          Innovation
        </p>

        <h2 className="mt-2 text-4xl font-bold text-slate-900">
          Developed Prototypes
        </h2>

        <p className="mt-3 text-slate-500 max-w-2xl">
          Biomedical devices and assistive technologies developed at the Neuromechanics Research Group.
        </p>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 mt-8">

          {prototypes.map((item) => (

            <div
              key={item.title}
              className="
                rounded-2xl
                overflow-hidden
                bg-white
                border
                border-slate-200
                hover:shadow-lg
                transition
              "
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-36 w-full object-cover"
              />

              <div className="p-4">

                <p className="text-[11px] uppercase tracking-[2px] text-cyan-600 font-semibold">
                  {item.category}
                </p>

                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}