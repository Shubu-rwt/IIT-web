// import professor from "../../assets/images/professor.jpg";
// import heroImage from "../../assets/images/campus.jpg";
// import hexagon from "../../assets/images/hexagon.svg";

// const interests = [
//   "Intelligent Prosthetics",
//   "Neuromotor Disorders",
//   "Stroke Rehabilitation",
//   "Biomedical Imaging",
//   "Machine Learning",
//   "Wearable Healthcare",
// ];

// export default function Hero() {
//   return (
//     <section className="px-6 pt-6 pb-4">

//       <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">

//         {/* Background Pattern */}

//         <img
//           src={hexagon}
//           alt=""
//           className="absolute inset-0 h-full w-full object-cover opacity-5 pointer-events-none"
//         />

//         {/* Hero */}

//         <div className="relative grid lg:grid-cols-[1.2fr_0.8fr] items-center gap-8 px-10 py-8">

//           {/* ================= LEFT ================= */}

//           <div>

//             {/* Profile */}

//             <div className="flex items-center gap-3">

//               <img
//                 src={professor}
//                 alt="Professor"
//                 className="h-14 w-14 rounded-full border-4 border-white object-cover shadow-md"
//               />

//               <div>

//                 <p className="uppercase tracking-[3px] text-[11px] font-semibold text-cyan-600">
//                   Professor
//                 </p>

//                 <p className="mt-1 text-sm text-slate-500">
//                   Centre for Biomedical Engineering
//                 </p>

//               </div>

//             </div>

//             {/* Name */}

//             <h1 className="mt-5 text-5xl font-bold leading-none text-slate-900">

//               Deepak Joshi

//             </h1>

//             {/* Institute */}

//             <p className="mt-2 text-sm text-slate-500">

//               Indian Institute of Technology Delhi • New Delhi

//             </p>

//             {/* Description */}

//             <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600">

//               Welcome to the
//               <span className="font-semibold">
//                 {" "}Neuromechanics Research Group
//               </span>
//               {" "}at the Centre for Biomedical Engineering,
//               IIT Delhi.

//               <br />
//               <br />

//               Our interdisciplinary research combines
//               biomechanics, neuroscience,
//               rehabilitation engineering,
//               wearable sensing,
//               biomedical imaging,
//               and artificial intelligence to develop
//               next-generation healthcare technologies for
//               neurological rehabilitation and assistive systems.

//             </p>

//             {/* Buttons */}

//             <div className="mt-6 flex flex-wrap gap-3">

//               <button
//                 className="
//                   rounded-full
//                   bg-[#21409A]
//                   px-5
//                   py-2.5
//                   text-sm
//                   font-semibold
//                   text-white
//                   transition
//                   hover:bg-[#19327b]
//                 "
//               >
//                 Explore Research
//               </button>

//               <button
//                 className="
//                   rounded-full
//                   border
//                   border-slate-300
//                   px-5
//                   py-2.5
//                   text-sm
//                   font-semibold
//                   transition
//                   hover:bg-slate-50
//                 "
//               >
//                 Publications
//               </button>

//               <button
//                 className="
//                   rounded-full
//                   border
//                   border-slate-300
//                   px-5
//                   py-2.5
//                   text-sm
//                   font-semibold
//                   transition
//                   hover:bg-slate-50
//                 "
//               >
//                 Contact
//               </button>

//             </div>

//             {/* Research Areas */}

//             <div className="mt-6">

//               <p className="mb-3 text-xs uppercase tracking-[3px] font-semibold text-cyan-600">

//                 Research Areas

//               </p>

//               <div className="flex flex-wrap gap-2">

//                 {interests.map((item) => (

//                   <span
//                     key={item}
//                     className="
//                       rounded-full
//                       border
//                       border-slate-300
//                       px-3
//                       py-1.5
//                       text-xs
//                       text-slate-700
//                       transition
//                       hover:border-[#21409A]
//                       hover:text-[#21409A]
//                     "
//                   >
//                     {item}
//                   </span>

//                 ))}

//               </div>

//             </div>

//           </div>

//           {/* ================= RIGHT ================= */}
        
//           <div className="relative flex items-center justify-center">

//             {/* Background Glow */}

//             <div className="absolute h-[360px] w-[360px] rounded-full bg-[#21409A]/5 blur-3xl"></div>

//             {/* Image Container */}

//             <div className="relative w-full max-w-[420px]">

//               {/* Experience Badge */}

//               <div
//                 className="
//                   absolute
//                   -left-5
//                   top-6
//                   z-10
//                   rounded-2xl
//                   border
//                   border-slate-200
//                   bg-white/95
//                   px-4
//                   py-3
//                   shadow-xl
//                   backdrop-blur-md
//                 "
//               >

//                 <h3 className="text-2xl font-bold text-[#21409A]">
//                   20+
//                 </h3>

//                 <p className="mt-1 text-[11px] uppercase tracking-[2px] text-slate-500">
//                   Years Research
//                 </p>

//               </div>

//               {/* Publication Badge */}

//               <div
//                 className="
//                   absolute
//                   -right-5
//                   bottom-6
//                   z-10
//                   rounded-2xl
//                   border
//                   border-slate-200
//                   bg-white/95
//                   px-4
//                   py-3
//                   shadow-xl
//                   backdrop-blur-md
//                 "
//               >

//                 <h3 className="text-2xl font-bold text-[#21409A]">
//                   90+
//                 </h3>

//                 <p className="mt-1 text-[11px] uppercase tracking-[2px] text-slate-500">
//                   Publications
//                 </p>

//               </div>

//               {/* Main Image */}

//               <div
//                 className="
//                   overflow-hidden
//                   rounded-[28px]
//                   border
//                   border-slate-200
//                   shadow-lg
//                 "
//               >

//                 <img
//                   src={heroImage}
//                   alt="Neuromechanics Research Group"
//                   className="
//                     h-[420px]
//                     w-full
//                     object-cover
//                     transition-transform
//                     duration-700
//                     hover:scale-105
//                   "
//                 />

//               </div>

//             </div>

//           </div>

//         </div>

//         {/* ================= STATISTICS STRIP ================= */}

//         {/* Bottom Statistics */}

//         <div className="border-t border-slate-200 bg-[#FAFBFC]">

//           <div className="grid grid-cols-2 lg:grid-cols-4">

//             {/* Publications */}

//             <div className="flex flex-col items-center justify-center py-6 border-b lg:border-b-0 lg:border-r border-slate-200">

//               <h3 className="text-3xl font-bold text-[#21409A]">
//                 90+
//               </h3>

//               <p className="mt-1 text-sm text-slate-500">
//                 Publications
//               </p>

//             </div>

//             {/* Experience */}

//             <div className="flex flex-col items-center justify-center py-6 border-b lg:border-b-0 lg:border-r border-slate-200">

//               <h3 className="text-3xl font-bold text-[#21409A]">
//                 20+
//               </h3>

//               <p className="mt-1 text-sm text-slate-500">
//                 Years of Research
//               </p>

//             </div>

//             {/* Projects */}

//             <div className="flex flex-col items-center justify-center py-6 lg:border-r border-slate-200">

//               <h3 className="text-3xl font-bold text-[#21409A]">
//                 12+
//               </h3>

//               <p className="mt-1 text-sm text-slate-500">
//                 Funded Projects
//               </p>

//             </div>

//             {/* Focus */}

//             <div className="flex flex-col items-center justify-center py-6">

//               <h3 className="text-lg font-bold text-[#21409A]">
//                 AI + Healthcare
//               </h3>

//               <p className="mt-1 text-sm text-slate-500">
//                 Research Focus
//               </p>

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }


import { Link } from "react-router-dom";

import professor from "../../assets/images/professor.jpg";
import heroImage from "../../assets/images/campus.jpg";
import hexagon from "../../assets/images/hexagon.svg";

const interests = [
  "Intelligent Prosthetics",
  "Neuromotor Disorders",
  "Stroke Rehabilitation",
  "Biomedical Imaging",
  "Machine Learning",
  "Wearable Healthcare",
];

export default function Hero() {
  return (
    <section className="px-6 pt-6 pb-4">

      <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">

        {/* Background Pattern */}

        <img
          src={hexagon}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-5"
        />

        {/* =====================================================
            HERO
        ===================================================== */}

        <div className="relative grid items-center gap-8 px-10 py-8 lg:grid-cols-[1.2fr_0.8fr]">

          {/* ================= LEFT ================= */}

          <div>

            {/* Profile */}

            <div className="flex items-center gap-3">

              <img
                src={professor}
                alt="Professor"
                className="h-14 w-14 rounded-full border-4 border-white object-cover shadow-md"
              />

              <div>

                <p className="text-[11px] font-semibold uppercase tracking-[3px] text-cyan-600">
                  Professor
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Centre for Biomedical Engineering
                </p>

              </div>

            </div>


            {/* Name */}

            <h1 className="mt-5 text-5xl font-bold leading-none text-slate-900">
              Deepak Joshi
            </h1>


            {/* Institute */}

            <p className="mt-2 text-sm text-slate-500">
              Indian Institute of Technology Delhi • New Delhi
            </p>


            {/* Description */}

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600">

              Welcome to the{" "}

              <span className="font-semibold">
                Neuromechanics Research Group
              </span>{" "}

              at the Centre for Biomedical Engineering,
              IIT Delhi.

              <br />
              <br />

              Our interdisciplinary research combines
              biomechanics, neuroscience,
              rehabilitation engineering,
              wearable sensing,
              biomedical imaging,
              and artificial intelligence to develop
              next-generation healthcare technologies for
              neurological rehabilitation and assistive systems.

            </p>


            {/* =================================================
                WORKING BUTTONS
            ================================================= */}

            <div className="mt-6 flex flex-wrap gap-3">

              {/* Explore Research */}

              <Link
                to="/projects"
                className="
                  rounded-full
                  bg-[#21409A]
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-[#19327b]
                  hover:shadow-md
                "
              >
                Explore Research
              </Link>


              {/* Publications */}

              <Link
                to="/publications"
                className="
                  rounded-full
                  border
                  border-slate-300
                  bg-white
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-slate-900
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-[#21409A]
                  hover:bg-blue-50
                  hover:text-[#21409A]
                  hover:shadow-sm
                "
              >
                Publications
              </Link>


              {/* Contact */}

              <Link
                to="/contact"
                className="
                  rounded-full
                  border
                  border-slate-300
                  bg-white
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-slate-900
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-[#21409A]
                  hover:bg-blue-50
                  hover:text-[#21409A]
                  hover:shadow-sm
                "
              >
                Contact
              </Link>

            </div>


            {/* =================================================
                RESEARCH AREAS
            ================================================= */}

            <div className="mt-6">

              <p className="mb-3 text-xs font-semibold uppercase tracking-[3px] text-cyan-600">
                Research Areas
              </p>

              <div className="flex flex-wrap gap-2">

                {interests.map((item) => (

                  <span
                    key={item}
                    className="
                      rounded-full
                      border
                      border-slate-300
                      px-3
                      py-1.5
                      text-xs
                      text-slate-700
                      transition
                      hover:border-[#21409A]
                      hover:text-[#21409A]
                    "
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

          </div>


          {/* ================= RIGHT ================= */}

          <div className="relative flex items-center justify-center">

            {/* Background Glow */}

            <div className="absolute h-[360px] w-[360px] rounded-full bg-[#21409A]/5 blur-3xl" />


            {/* Image Container */}

            <div className="relative w-full max-w-[420px]">


              {/* Experience Badge */}

              <div
                className="
                  absolute
                  -left-5
                  top-6
                  z-10
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white/95
                  px-4
                  py-3
                  shadow-xl
                  backdrop-blur-md
                "
              >

                <h3 className="text-2xl font-bold text-[#21409A]">
                  20+
                </h3>

                <p className="mt-1 text-[11px] uppercase tracking-[2px] text-slate-500">
                  Years Research
                </p>

              </div>


              {/* Publication Badge */}

              <div
                className="
                  absolute
                  -right-5
                  bottom-6
                  z-10
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white/95
                  px-4
                  py-3
                  shadow-xl
                  backdrop-blur-md
                "
              >

                <h3 className="text-2xl font-bold text-[#21409A]">
                  90+
                </h3>

                <p className="mt-1 text-[11px] uppercase tracking-[2px] text-slate-500">
                  Publications
                </p>

              </div>


              {/* Main Image */}

              <div className="overflow-hidden rounded-[28px] border border-slate-200 shadow-lg">

                <img
                  src={heroImage}
                  alt="Neuromechanics Research Group"
                  className="
                    h-[420px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            STATISTICS
        ===================================================== */}

        <div className="border-t border-slate-200 bg-[#FAFBFC]">

          <div className="grid grid-cols-2 lg:grid-cols-4">


            {/* Publications */}

            <div className="flex flex-col items-center justify-center border-b border-slate-200 py-6 lg:border-b-0 lg:border-r">

              <h3 className="text-3xl font-bold text-[#21409A]">
                90+
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Publications
              </p>

            </div>


            {/* Experience */}

            <div className="flex flex-col items-center justify-center border-b border-slate-200 py-6 lg:border-b-0 lg:border-r">

              <h3 className="text-3xl font-bold text-[#21409A]">
                20+
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Years of Research
              </p>

            </div>


            {/* Projects */}

            <div className="flex flex-col items-center justify-center py-6 lg:border-r lg:border-slate-200">

              <h3 className="text-3xl font-bold text-[#21409A]">
                12+
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Funded Projects
              </p>

            </div>


            {/* Focus */}

            <div className="flex flex-col items-center justify-center py-6">

              <h3 className="text-lg font-bold text-[#21409A]">
                AI + Healthcare
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Research Focus
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}