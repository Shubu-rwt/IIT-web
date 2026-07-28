// import { NavLink } from "react-router-dom";
// import sidebarData from "../../data/sidebarData";

// export default function Sidebar() {
//   return (
//     <aside
//       className="
//         fixed
//         top-[80px]
//         left-0
//         w-[280px]
//         h-[calc(100vh-70px)]
//         bg-white
//         border-r
//         border-gray-200
//         flex
//         flex-col
//       "
//     >
//       {/* Navigation */}

//       <div className="flex-1 overflow-y-auto px-6 py-8">

//         <nav className="space-y-2">

//           {sidebarData.map((item) => (

//             <NavLink key={item.path} to={item.path}>

//               {({ isActive }) => (

//                 <div
//                   className={`
//                     group
//                     flex
//                     items-center
//                     gap-4
//                     rounded-full
//                     px-4
//                     py-3
//                     transition-all
//                     duration-300
//                     cursor-pointer

//                     ${
//                       isActive
//                         ? "bg-slate-100 text-slate-900 shadow-sm"
//                         : "text-slate-500 hover:bg-slate-50 hover:text-[#163D88]"
//                     }
//                   `}
//                 >

//                   <span
//                     className={`
//                       w-2
//                       h-2
//                       rounded-full
//                       transition-all
//                       duration-300

//                       ${
//                         isActive
//                           ? "bg-cyan-500"
//                           : "bg-transparent group-hover:bg-[#163D88]"
//                       }
//                     `}
//                   />

//                   <span className="text-[15px] font-medium">
//                     {item.title}
//                   </span>

//                 </div>

//               )}

//             </NavLink>

//           ))}

//         </nav>

//       </div>

//       {/* Bottom */}

//       <div className="border-t border-gray-200 p-6">

//         <button
//           className="
//             w-full
//             rounded-full
//             bg-[#2E56D6]
//             py-3
//             text-white
//             font-semibold
//             transition-all
//             duration-300
//             hover:bg-[#2348BD]
//             hover:shadow-lg
//           "
//         >
//           Download CV
//         </button>

//       </div>

//     </aside>
//   );
// }

import { NavLink } from "react-router-dom";
import sidebarData from "../../data/sidebarData";

export default function Sidebar({
  mobile = false,
  onClose = () => {},
}) {
  return (
    <aside
      className={
        mobile
          ? "flex h-full flex-col bg-white"
          : `
            fixed
            top-[72px]
            left-0
            h-[calc(100vh-72px)]
            w-[280px]
            border-r
            border-gray-200
            bg-white
            flex
            flex-col
          `
      }
    >
      {/* Navigation */}

      <div className="flex-1 overflow-y-auto px-6 py-8">

        <nav className="space-y-2">

          {sidebarData.map((item) => (

            <NavLink
              key={item.path}
              to={item.path}
              onClick={mobile ? onClose : undefined}
            >
              {({ isActive }) => (

                <div
                  className={`
                    group
                    flex
                    cursor-pointer
                    items-center
                    gap-4
                    rounded-full
                    px-4
                    py-3
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "bg-slate-100 text-slate-900 shadow-sm"
                        : "text-slate-500 hover:bg-slate-50 hover:text-[#163D88]"
                    }
                  `}
                >

                  <span
                    className={`
                      h-2
                      w-2
                      rounded-full
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "bg-cyan-500"
                          : "bg-transparent group-hover:bg-[#163D88]"
                      }
                    `}
                  />

                  <span className="text-[15px] font-medium">
                    {item.title}
                  </span>

                </div>

              )}
            </NavLink>

          ))}

        </nav>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-200 p-6">

        <button
          className="
            w-full
            rounded-full
            bg-[#2E56D6]
            py-3
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-[#2348BD]
            hover:shadow-lg
          "
        >
          Download CV
        </button>

      </div>
    </aside>
  );
}