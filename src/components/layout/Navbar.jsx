// import { Search, Phone } from "lucide-react";
// import logo from "../../assets/images/iit-logo.png";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <header className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-[#0A2558] via-[#10367F] to-[#17489E] shadow-md">
//       <div className="mx-auto flex h-[72px] max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">

//         {/* Left */}
//         <div className="flex items-center gap-3">

//           {/* Logo */}
//           <div className="h-12 w-12 overflow-hidden rounded-full border border-white/20 bg-white/10">
//             <img
//               src={logo}
//               alt="IIT Delhi"
//               className="h-full w-full object-cover"
//             />
//           </div>

//           {/* Faculty Info */}
//           <div className="leading-tight">

//             <h1 className="text-xl font-bold text-white sm:text-2xl lg:text-[28px]">
//               Deepak Joshi
//             </h1>

//             <p className="text-xs font-medium text-blue-100 sm:text-sm lg:text-[13px]">
//               Centre for Biomedical Engineering
//             </p>

//             <p className="hidden text-[14px] text-blue-200 md:block lg:text-[11px]">
//               Indian Institute of Technology Delhi
//             </p>

//           </div>

//         </div>

//         {/* Right */}
//         <div className="hidden items-center gap-6 lg:flex">

//           {/* <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-base font-medium text-white transition hover:bg-white/10">
//             Contact
//             <Phone size={18} />
//           </button> */}
//           <Link
//   to="/contact"
//   className="flex items-center gap-2 rounded-lg px-3 py-2 text-base font-medium text-white transition hover:bg-white/10"
// >
//   Contact
//   <Phone size={18} />
// </Link>

//           <div className="flex h-10 w-72 items-center rounded-full bg-white px-4 shadow">

//             <Search
//               size={18}
//               className="text-slate-500"
//             />

//             <input
//               type="text"
//               placeholder="Search content..."
//               className="ml-2 w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
//             />

//           </div>

//         </div>

//         {/* Mobile Search */}
//         {/* <button className="rounded-full bg-white/10 p-2 text-white lg:hidden">
//           <Search size={20} />
//         </button> */}

//       </div>
//     </header>
//   );
// }


import { useState } from "react";
import {Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/iit-logo.png";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ===================== NAVBAR ===================== */}
      <header className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-[#0A2558] via-[#10367F] to-[#17489E] shadow-md">
        <div className="mx-auto flex h-[72px] max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Left */}
          <div className="flex items-center gap-3">

            {/* Logo */}
            <div className="h-12 w-12 overflow-hidden rounded-full border border-white/20 bg-white/10">
              <img
                src={logo}
                alt="IIT Delhi"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Faculty Info */}
            <div className="leading-tight">

              <h1 className="text-lg font-bold text-white sm:text-xl lg:text-[28px]">
                Deepak Joshi
              </h1>

              <p className="text-xs font-medium text-blue-100 sm:text-sm lg:text-[13px]">
                Centre for Biomedical Engineering
              </p>

              <p className="hidden text-[11px] text-blue-200 md:block">
                Indian Institute of Technology Delhi
              </p>

            </div>

          </div>

          {/* Desktop Right */}
          <div className="hidden items-center gap-6 lg:flex">

            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-base font-medium text-white transition hover:bg-white/10"
            >
              Contact
              <Phone size={18} />
            </Link>

            {/* <div className="flex h-10 w-72 items-center rounded-full bg-white px-4 shadow">

              <Search
                size={18}
                className="text-slate-500"
              />

              <input
                type="text"
                placeholder="Search content..."
                className="ml-2 w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
              />

            </div> */}

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-xl border border-white/20 bg-white/10 p-2 text-white backdrop-blur-md transition hover:bg-white/20 lg:hidden"
          >
            <Menu size={24} />
          </button>

        </div>
      </header>

      {/* ===================== MOBILE OVERLAY ===================== */}

      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 transition-all duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* ===================== MOBILE DRAWER ===================== */}

      <div
        className={`fixed top-0 left-0 z-50 h-screen w-72 bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >

        {/* Drawer Header */}

        <div className="flex items-center justify-between border-b border-gray-200 p-5">

          <div>

            <h2 className="text-lg font-bold text-slate-900">
              Navigation
            </h2>

            <p className="text-xs text-slate-500">
              IIT Delhi Faculty Profile
            </p>

          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 transition hover:bg-slate-100"
          >
            <X size={22} />
          </button>

        </div>

        {/* Sidebar */}

        <Sidebar
  mobile
  onClose={() => setIsOpen(false)}
/>

      </div>
    </>
  );
}