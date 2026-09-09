// import { FiExternalLink } from "react-icons/fi";
// import students from "../data/students";

// /* =========================================================
//    STUDENT CARD
// ========================================================= */

// function StudentCard({ student }) {
//   return (
//     <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0A4DA3]/40 hover:shadow-xl">

//       {/* Top Information */}
//       <div className="flex gap-5 p-5">

//         {/* Photo */}
//         <div className="shrink-0">
//           <div className="overflow-hidden rounded-xl bg-gray-100 ring-1 ring-gray-200">
//             <img
//               src={student.photo}
//               alt={student.name}
//               className="h-28 w-24 object-cover transition duration-500 group-hover:scale-105"
//             />
//           </div>
//         </div>

//         {/* Name + Designation */}
//         <div className="min-w-0 flex-1">

//           <div className="flex flex-wrap items-start justify-between gap-2">

//             <div>

//               <h3 className="text-lg font-semibold tracking-tight text-gray-900">
//                 {student.name}
//               </h3>

//               <p className="mt-1 text-sm font-medium text-[#0A4DA3]">
//                 Ph.D. Scholar
//               </p>

//             </div>

//             {/* Scholarship */}
//             {student.scholarship && (
//               <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#0A4DA3]">
//                 {student.scholarship}
//               </span>
//             )}

//           </div>

//         </div>

//       </div>


//       {/* Divider */}
//       <div className="mx-5 border-t border-gray-100" />


//       {/* Biography */}
//       <div className="flex flex-1 flex-col p-5">

//         <p className="text-sm leading-6 text-gray-600">
//           {student.bio}
//         </p>


//         {/* Website */}
//         {student.website && (
//           <a
//             href={student.website}
//             target="_blank"
//             rel="noreferrer"
//             className="mt-4 flex w-fit items-center gap-2 text-sm font-medium text-[#0A4DA3] transition-all hover:gap-3"
//           >
//             {student.websiteLabel || "Website"}

//             <FiExternalLink size={14} />

//           </a>
//         )}

//       </div>

//     </article>
//   );
// }


// /* =========================================================
//    PROJECT RESEARCH SCIENTIST CARD
// ========================================================= */

// function ScientistCard({ student }) {
//   return (
//     <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0A4DA3]/40 hover:shadow-xl">

//       {/* Top Information */}
//       <div className="flex gap-5 p-5">

//         {/* Photo */}
//         <div className="shrink-0">

//           <div className="overflow-hidden rounded-xl bg-gray-100 ring-1 ring-gray-200">

//             <img
//               src={student.photo}
//               alt={student.name}
//               className="h-28 w-24 object-cover transition duration-500 group-hover:scale-105"
//             />

//           </div>

//         </div>


//         {/* Name */}
//         <div className="min-w-0 flex-1">

//           <h3 className="text-lg font-semibold tracking-tight text-gray-900">
//             {student.name}
//           </h3>

//           <p className="mt-1 text-sm font-medium text-[#0A4DA3]">
//             Project Research Scientist
//           </p>

//         </div>

//       </div>


//       {/* Divider */}
//       <div className="mx-5 border-t border-gray-100" />


//       {/* Biography */}
//       <div className="flex flex-1 flex-col p-5">

//         <p className="text-sm leading-6 text-gray-600">
//           {student.bio}
//         </p>

//         {student.website && (
//           <a
//             href={student.website}
//             target="_blank"
//             rel="noreferrer"
//             className="mt-4 flex w-fit items-center gap-2 text-sm font-medium text-[#0A4DA3] transition-all hover:gap-3"
//           >
//             {student.websiteLabel || "Website"}

//             <FiExternalLink size={14} />

//           </a>
//         )}

//       </div>

//     </article>
//   );
// }


// /* =========================================================
//    SECTION HEADING
// ========================================================= */

// function SectionHeading({ title, description }) {
//   return (
//     <div className="mb-8">

//       <div className="flex items-center gap-4">

//         {/* Blue vertical line */}
//         <div className="h-8 w-1 rounded-full bg-[#0A4DA3]" />

//         <div>

//           <h2 className="text-2xl font-bold tracking-tight text-gray-900">
//             {title}
//           </h2>

//           {description && (
//             <p className="mt-1 text-sm text-gray-500">
//               {description}
//             </p>
//           )}

//         </div>

//       </div>

//     </div>
//   );
// }


// /* =========================================================
//    LAB ALUMNI
// ========================================================= */

// function LabAlumni() {
//   return (
//     <section className="mt-16">

//       <SectionHeading
//         title="Lab Alumni"
//         description="Former members of the research laboratory"
//       />


//       <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

//         <div className="overflow-x-auto">

//           <table className="min-w-[750px] w-full border-collapse">

//             {/* Header */}
//             <thead>

//               <tr className="bg-gray-50">

//                 <th className="w-[170px] border-b border-gray-200 px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
//                   Category
//                 </th>

//                 <th className="w-[190px] border-b border-gray-200 px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
//                   Name
//                 </th>

//                 <th className="border-b border-gray-200 px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
//                   Current Designation
//                 </th>

//               </tr>

//             </thead>


//             {/* Body */}
//             <tbody>

//               {students.labAlumni.map((group) => (

//                 group.rows.map((row, rowIndex) => (

//                   <tr
//                     key={`${group.category}-${row.name || rowIndex}`}
//                     className="transition hover:bg-blue-50/40"
//                   >

//                     {/* Category */}
//                     {rowIndex === 0 && (
//                       <td
//                         rowSpan={group.rows.length}
//                         className="border-b border-gray-100 px-5 py-4 align-top text-sm font-semibold text-gray-800"
//                       >
//                         {group.category}
//                       </td>
//                     )}


//                     {/* Full row */}
//                     {row.fullRow ? (

//                       <td
//                         colSpan={2}
//                         className="border-b border-gray-100 px-5 py-4 text-sm leading-6 text-gray-600"
//                       >
//                         {row.designation}
//                       </td>

//                     ) : (

//                       <>

//                         {/* Name */}
//                         <td className="border-b border-gray-100 px-5 py-4 text-sm font-medium text-gray-800">
//                           {row.name}
//                         </td>


//                         {/* Designation */}
//                         <td
//                           className="border-b border-gray-100 px-5 py-4 text-sm leading-6 text-gray-600"
//                           dangerouslySetInnerHTML={{
//                             __html: row.designation,
//                           }}
//                         />

//                       </>

//                     )}

//                   </tr>

//                 ))

//               ))}

//             </tbody>

//           </table>

//         </div>

//       </div>

//     </section>
//   );
// }


// /* =========================================================
//    MAIN PAGE
// ========================================================= */

// export default function StudentsPage() {

//   return (
//     <section className="min-h-screen bg-gray-50">


//       {/* =====================================================
//           COMPACT HERO
//       ===================================================== */}

//       <div className="border-b border-gray-200 bg-white">

//         <div className="mx-auto max-w-7xl px-6 py-7 lg:px-8">

//           <div className="max-w-3xl">

//             {/* Label */}
//             <span className="inline-flex rounded-full bg-blue-50 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0A4DA3]">
//               Students
//             </span>


//             {/* Heading */}
//             <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//               Research Students
//             </h1>


//             {/* Description */}
//             <p className="mt-2 text-sm leading-6 text-gray-600">
//               Current members and researchers contributing to the
//               Neuromechanics Research Lab.
//             </p>

//           </div>

//         </div>

//       </div>


//       {/* =====================================================
//           MAIN CONTENT
//       ===================================================== */}

//       <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8">


//         {/* ===================================================
//             PH.D. SCHOLARS
//         =================================================== */}

//         <section>

//           <SectionHeading
//             title="Ph.D. Scholars"
//             description="Current doctoral researchers and their areas of research"
//           />


//           <div className="grid gap-6 lg:grid-cols-2">

//             {students.phdScholars.map((student) => (

//               <StudentCard
//                 key={student.id}
//                 student={student}
//               />

//             ))}

//           </div>

//         </section>


//         {/* ===================================================
//             PROJECT RESEARCH SCIENTISTS
//         =================================================== */}

//         <section className="mt-16">

//           <SectionHeading
//             title="Project Research Scientists"
//             description="Researchers working on ongoing laboratory projects"
//           />


//           <div className="grid gap-6 lg:grid-cols-2">

//             {students.projectResearchScientists.map(
//               (student) => (

//                 <ScientistCard
//                   key={student.id}
//                   student={student}
//                 />

//               )
//             )}

//           </div>

//         </section>


//         {/* ===================================================
//             LAB ALUMNI
//         =================================================== */}

//         <LabAlumni />

//       </main>

//     </section>
//   );
// }

//*********************************************************************************************************************************** */

// import { FiExternalLink } from "react-icons/fi";
// import students from "../data/students";

// /* =========================================================
//    HELPERS
// ========================================================= */

// function getPhoto(student) {
//   return student?.photo || "/students/default.jpg";
// }

// // function getDesignation(student, fallback = "Research Member") {
// //   return student?.designation || fallback;
// // }

// /* =========================================================
//    SECTION HEADING
// ========================================================= */

// function SectionHeading({ title, description }) {
//   return (
//     <div className="mb-8">
//       <div className="flex items-center gap-4">
//         <div className="h-8 w-1 rounded-full bg-[#0A4DA3]" />

//         <div>
//           <h2 className="text-2xl font-bold tracking-tight text-gray-900">
//             {title}
//           </h2>

//           {description && (
//             <p className="mt-1 text-sm text-gray-500">
//               {description}
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    STANDARD STUDENT CARD
// ========================================================= */

// function StudentCard({
//   student,
//   designation = "Research Member",
// }) {
//   return (
//     <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0A4DA3]/40 hover:shadow-xl">

//       {/* Top Information */}
//       <div className="flex gap-5 p-5">

//         {/* Photo */}
//         <div className="shrink-0">
//           <div className="overflow-hidden rounded-xl bg-gray-100 ring-1 ring-gray-200">
//             <img
//               src={getPhoto(student)}
//               alt={student?.name || "Student"}
//               className="h-28 w-24 object-cover transition duration-500 group-hover:scale-105"
//               onError={(e) => {
//                 e.currentTarget.src = "/students/default.jpg";
//               }}
//             />
//           </div>
//         </div>

//         {/* Name + Designation */}
//         <div className="min-w-0 flex-1">
//           <div className="flex flex-wrap items-start justify-between gap-2">

//             <div>
//               <h3 className="text-lg font-semibold tracking-tight text-gray-900">
//                 {student?.name}
//               </h3>

//               <p className="mt-1 text-sm font-medium text-[#0A4DA3]">
//                 {student?.designation || designation}
//               </p>
//             </div>

//             {/* Scholarship */}
//             {student?.scholarship && (
//               <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#0A4DA3]">
//                 {student.scholarship}
//               </span>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="mx-5 border-t border-gray-100" />

//       {/* Biography */}
//       <div className="flex flex-1 flex-col p-5">

//         <p className="text-sm leading-6 text-gray-600">
//           {student?.bio || "Research details will be added later."}
//         </p>

//         {/* Research Areas */}
//         {Array.isArray(student?.research) &&
//           student.research.length > 0 && (
//             <div className="mt-4 flex flex-wrap gap-2">
//               {student.research.map((item, index) => (
//                 <span
//                   key={`${item}-${index}`}
//                   className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
//                 >
//                   {item}
//                 </span>
//               ))}
//             </div>
//           )}

//         {/* Website */}
//         {student?.website && (
//           <a
//             href={student.website}
//             target="_blank"
//             rel="noreferrer"
//             className="mt-4 flex w-fit items-center gap-2 text-sm font-medium text-[#0A4DA3] transition-all hover:gap-3"
//           >
//             {student.websiteLabel || "Website"}

//             <FiExternalLink size={14} />
//           </a>
//         )}
//       </div>
//     </article>
//   );
// }

// /* =========================================================
//    INTERNATIONAL FELLOW CARD
// ========================================================= */

// function FellowCard({ student }) {
//   return (
//     <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0A4DA3]/40 hover:shadow-xl">

//       <div className="flex gap-5 p-5">

//         <div className="shrink-0">
//           <div className="overflow-hidden rounded-xl bg-gray-100 ring-1 ring-gray-200">
//             <img
//               src={getPhoto(student)}
//               alt={student?.name}
//               className="h-28 w-24 object-cover transition duration-500 group-hover:scale-105"
//               onError={(e) => {
//                 e.currentTarget.src = "/students/default.jpg";
//               }}
//             />
//           </div>
//         </div>

//         <div className="min-w-0 flex-1">

//           <h3 className="text-lg font-semibold tracking-tight text-gray-900">
//             {student?.name}
//           </h3>

//           <p className="mt-1 text-sm font-medium text-[#0A4DA3]">
//             International Fellow
//           </p>

//           <span className="mt-3 inline-flex rounded-full bg-blue-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#0A4DA3]">
//             {student?.designation || "WIPO Fellow"}
//           </span>

//         </div>
//       </div>

//       <div className="mx-5 border-t border-gray-100" />

//       <div className="flex flex-1 flex-col p-5">

//         <p className="text-sm leading-6 text-gray-600">
//           {student?.bio}
//         </p>

//         {student?.website && (
//           <a
//             href={student.website}
//             target="_blank"
//             rel="noreferrer"
//             className="mt-4 flex w-fit items-center gap-2 text-sm font-medium text-[#0A4DA3] hover:gap-3"
//           >
//             {student.websiteLabel || "Website"}
//             <FiExternalLink size={14} />
//           </a>
//         )}
//       </div>
//     </article>
//   );
// }

// /* =========================================================
//    PROJECT ASSOCIATE CARD
// ========================================================= */

// function AssociateCard({ student }) {
//   return (
//     <article className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0A4DA3]/40 hover:shadow-lg">

//       <div className="flex items-center gap-4">

//         <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-100 ring-1 ring-gray-200">
//           <img
//             src={getPhoto(student)}
//             alt={student?.name}
//             className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//             onError={(e) => {
//               e.currentTarget.src = "/students/default.jpg";
//             }}
//           />
//         </div>

//         <div className="min-w-0">
//           <h3 className="text-base font-semibold text-gray-900">
//             {student?.name}
//           </h3>

//           <p className="mt-1 text-sm font-medium text-[#0A4DA3]">
//             {student?.designation || "Project Associate"}
//           </p>
//         </div>
//       </div>

//       {student?.bio && (
//         <p className="mt-4 text-sm leading-6 text-gray-600">
//           {student.bio}
//         </p>
//       )}

//       {student?.website && (
//         <a
//           href={student.website}
//           target="_blank"
//           rel="noreferrer"
//           className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#0A4DA3]"
//         >
//           {student.websiteLabel || "Website"}
//           <FiExternalLink size={14} />
//         </a>
//       )}
//     </article>
//   );
// }

// /* =========================================================
//    INTERN CARD
// ========================================================= */

// function InternCard({ student }) {
//   return (
//     <article className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0A4DA3]/40 hover:shadow-lg">

//       <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-gray-100 ring-2 ring-gray-100">
//         <img
//           src={getPhoto(student)}
//           alt={student?.name}
//           className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//           onError={(e) => {
//             e.currentTarget.src = "/students/default.jpg";
//           }}
//         />
//       </div>

//       <div className="min-w-0">

//         <h3 className="truncate text-base font-semibold text-gray-900">
//           {student?.name}
//         </h3>

//         <p className="mt-1 text-xs font-medium text-[#0A4DA3]">
//           {student?.designation || "Intern"}
//         </p>

//       </div>
//     </article>
//   );
// }

// /* =========================================================
//    LAB ALUMNI
// ========================================================= */

// function LabAlumni() {
//   if (!Array.isArray(students?.labAlumni)) {
//     return null;
//   }

//   return (
//     <section className="mt-16">

//       <SectionHeading
//         title="Lab Alumni"
//         description="Former members of the research laboratory"
//       />

//       <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

//         <div className="overflow-x-auto">

//           <table className="min-w-[750px] w-full border-collapse">

//             <thead>
//               <tr className="bg-gray-50">

//                 <th className="w-[170px] border-b border-gray-200 px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
//                   Category
//                 </th>

//                 <th className="w-[190px] border-b border-gray-200 px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
//                   Name
//                 </th>

//                 <th className="border-b border-gray-200 px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
//                   Current Designation
//                 </th>

//               </tr>
//             </thead>

//             <tbody>

//               {students.labAlumni.map((group) =>

//                 Array.isArray(group?.rows)
//                   ? group.rows.map((row, rowIndex) => (

//                       <tr
//                         key={`${group.category}-${row.name || rowIndex}`}
//                         className="transition hover:bg-blue-50/40"
//                       >

//                         {rowIndex === 0 && (
//                           <td
//                             rowSpan={group.rows.length}
//                             className="border-b border-gray-100 px-5 py-4 align-top text-sm font-semibold text-gray-800"
//                           >
//                             {group.category}
//                           </td>
//                         )}

//                         {row.fullRow ? (

//                           <td
//                             colSpan={2}
//                             className="border-b border-gray-100 px-5 py-4 text-sm leading-6 text-gray-600"
//                             dangerouslySetInnerHTML={{
//                               __html: row.designation || "",
//                             }}
//                           />

//                         ) : (

//                           <>
//                             <td className="border-b border-gray-100 px-5 py-4 text-sm font-medium text-gray-800">
//                               {row.name}
//                             </td>

//                             <td
//                               className="border-b border-gray-100 px-5 py-4 text-sm leading-6 text-gray-600"
//                               dangerouslySetInnerHTML={{
//                                 __html: row.designation || "",
//                               }}
//                             />
//                           </>
//                         )}

//                       </tr>

//                     ))
//                   : null
//               )}

//             </tbody>
//           </table>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* =========================================================
//    MAIN PAGE
// ========================================================= */

// export default function StudentsPage() {
//   return (
//     <section className="min-h-screen bg-gray-50">

//       {/* =====================================================
//           COMPACT HERO
//       ===================================================== */}

//       <div className="border-b border-gray-200 bg-white">

//         <div className="mx-auto max-w-7xl px-6 py-7 lg:px-8">

//           <div className="max-w-3xl">

//             <span className="inline-flex rounded-full bg-blue-50 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0A4DA3]">
//               Students
//             </span>

//             <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//               Research Students
//             </h1>

//             <p className="mt-2 text-sm leading-6 text-gray-600">
//               Current members, researchers, fellows and interns contributing
//               to the Neuromechanics Research Lab.
//             </p>

//           </div>
//         </div>
//       </div>

//       {/* =====================================================
//           MAIN CONTENT
//       ===================================================== */}

//       <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

//         {/* ===================================================
//             INTERNATIONAL FELLOWS
//         =================================================== */}

//         {Array.isArray(students?.internationalFellows) &&
//           students.internationalFellows.length > 0 && (
//             <section>

//               <SectionHeading
//                 title="International Fellows"
//                 description="International researchers and fellows associated with the laboratory"
//               />

//               <div className="grid gap-6 lg:grid-cols-2">

//                 {students.internationalFellows.map((student) => (
//                   <FellowCard
//                     key={student.id}
//                     student={student}
//                   />
//                 ))}

//               </div>

//             </section>
//           )}

//         {/* ===================================================
//             PH.D. SCHOLARS
//         =================================================== */}

//         {Array.isArray(students?.phdScholars) &&
//           students.phdScholars.length > 0 && (
//             <section className="mt-16">

//               <SectionHeading
//                 title="Ph.D. Scholars"
//                 description="Current doctoral researchers and their areas of research"
//               />

//               <div className="grid gap-6 lg:grid-cols-2">

//                 {students.phdScholars.map((student) => (
//                   <StudentCard
//                     key={student.id}
//                     student={student}
//                     designation="Ph.D. Scholar"
//                   />
//                 ))}

//               </div>

//             </section>
//           )}

//         {/* ===================================================
//             PROJECT RESEARCH SCIENTISTS
//         =================================================== */}

//         {Array.isArray(students?.projectResearchScientists) &&
//           students.projectResearchScientists.length > 0 && (
//             <section className="mt-16">

//               <SectionHeading
//                 title="Project Research Scientists"
//                 description="Researchers working on ongoing laboratory projects"
//               />

//               <div className="grid gap-6 lg:grid-cols-2">

//                 {students.projectResearchScientists.map((student) => (
//                   <StudentCard
//                     key={student.id}
//                     student={student}
//                     designation="Project Research Scientist"
//                   />
//                 ))}

//               </div>

//             </section>
//           )}

//         {/* ===================================================
//             MASTERS STUDENTS
//         =================================================== */}

//         {Array.isArray(students?.mastersStudents) &&
//           students.mastersStudents.length > 0 && (
//             <section className="mt-16">

//               <SectionHeading
//                 title="Masters Students"
//                 description="Students pursuing master's research within the laboratory"
//               />

//               <div className="grid gap-6 lg:grid-cols-2">

//                 {students.mastersStudents.map((student) => (
//                   <StudentCard
//                     key={student.id}
//                     student={student}
//                     designation="Masters Student"
//                   />
//                 ))}

//               </div>

//             </section>
//           )}

//         {/* ===================================================
//             LAB MEMBERS
//         =================================================== */}

//         {students?.labMembers && (
//           <>

//             {/* =================================================
//                 PROJECT ASSOCIATES
//             ================================================= */}

//             {Array.isArray(students.labMembers.projectAssociates) &&
//               students.labMembers.projectAssociates.length > 0 && (
//                 <section className="mt-16">

//                   <SectionHeading
//                     title="Project Associates"
//                     description="Research associates contributing to laboratory projects"
//                   />

//                   <div className="grid gap-5 md:grid-cols-2">

//                     {students.labMembers.projectAssociates.map(
//                       (student) => (
//                         <AssociateCard
//                           key={student.id}
//                           student={student}
//                         />
//                       )
//                     )}

//                   </div>

//                 </section>
//               )}

//             {/* =================================================
//                 MASTER THESIS INTERNS
//             ================================================= */}

//             {Array.isArray(students.labMembers.masterThesisInterns) &&
//               students.labMembers.masterThesisInterns.length > 0 && (
//                 <section className="mt-16">

//                   <SectionHeading
//                     title="Master Thesis Interns"
//                     description="Students undertaking thesis and research projects"
//                   />

//                   <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

//                     {students.labMembers.masterThesisInterns.map(
//                       (student) => (
//                         <InternCard
//                           key={student.id}
//                           student={student}
//                         />
//                       )
//                     )}

//                   </div>

//                 </section>
//               )}

//             {/* =================================================
//                 SUMMER / VISITING INTERNS
//             ================================================= */}

//             {Array.isArray(students.labMembers.summerVisitingInterns) &&
//               students.labMembers.summerVisitingInterns.length > 0 && (
//                 <section className="mt-16">

//                   <SectionHeading
//                     title="Summer & Visiting Interns"
//                     description="Students and visiting researchers associated with the laboratory"
//                   />

//                   <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

//                     {students.labMembers.summerVisitingInterns.map(
//                       (student) => (
//                         <InternCard
//                           key={student.id}
//                           student={student}
//                         />
//                       )
//                     )}

//                   </div>

//                 </section>
//               )}

//           </>
//         )}

//         {/* ===================================================
//             LAB ALUMNI
//         =================================================== */}

//         <LabAlumni />

//       </main>
//     </section>
//   );
// }

//******************************************************************************************************************************** */

// import React from "react";
// import {
//   FiExternalLink,
//   FiMail,
//   FiArrowLeft,
//   FiUsers,
//   FiBookOpen,
//   FiUserCheck,
// } from "react-icons/fi";

// import students from "../data/students";

// // ============================================================
// // HELPERS
// // ============================================================

// const getPhoto = (student) => {
//   return student?.photo || "/students/default.jpg";
// };

// const getShortBio = (student) => {
//   if (student?.shortBio) return student.shortBio;

//   const bio =
//     student?.detailedBio ||
//     student?.bio ||
//     "Research details will be added later.";

//   if (bio.length <= 190) return bio;

//   return `${bio.substring(0, 187)}...`;
// };

// const hasDetails = (student) => {
//   const bio = student?.detailedBio || student?.bio;

//   return (
//     bio &&
//     bio.trim() !== "" &&
//     bio.trim() !== "Details will be added later."
//   );
// };

// // ============================================================
// // STATUS BADGE
// // ============================================================

// function StatusBadge({ status }) {
//   if (status === "current") {
//     return (
//       <span
//         className="
//           mt-2
//           inline-flex
//           items-center
//           gap-1.5
//           rounded-full
//           bg-green-50
//           px-2.5
//           py-1
//           text-[10px]
//           font-semibold
//           text-green-700
//         "
//       >
//         <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
//         Currently Working
//       </span>
//     );
//   }

//   if (status === "former") {
//     return (
//       <span
//         className="
//           mt-2
//           inline-flex
//           items-center
//           rounded-full
//           bg-gray-100
//           px-2.5
//           py-1
//           text-[10px]
//           font-semibold
//           text-gray-500
//         "
//       >
//         Former Member
//       </span>
//     );
//   }

//   return null;
// }

// // ============================================================
// // SECTION HEADING
// // ============================================================

// function SectionHeading({ icon: Icon, children }) {
//   return (
//     <div className="mb-6 flex items-center gap-3">
//       <div
//         className="
//           flex
//           h-9
//           w-9
//           shrink-0
//           items-center
//           justify-center
//           rounded-lg
//           bg-blue-50
//           text-[#0A4DA3]
//         "
//       >
//         <Icon size={19} />
//       </div>

//       <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
//         {children}
//       </h2>
//     </div>
//   );
// }

// // ============================================================
// // MAIN STUDENT CARD
// // ============================================================

// function StudentCard({ student, compact = false }) {
//   const [showDetails, setShowDetails] = React.useState(false);

//   const detailedBio =
//     student?.detailedBio ||
//     student?.bio ||
//     "Research details will be added later.";

//   const shortBio = getShortBio(student);
//   const canShowDetails = hasDetails(student);

//   return (
//     <div
//       className={`
//         group
//         relative
//         overflow-hidden
//         rounded-2xl
//         border
//         border-gray-200
//         bg-white
//         shadow-sm
//         transition-all
//         duration-300
//         hover:-translate-y-1
//         hover:shadow-lg
//         ${compact ? "min-h-[245px]" : "min-h-[265px]"}
//       `}
//     >
//       {/* ======================================================
//           CARD PREVIEW
//       ====================================================== */}

//       <div
//         className={`
//           absolute
//           inset-0
//           flex
//           transition-transform
//           duration-500
//           ease-in-out
//           ${showDetails ? "-translate-x-full" : "translate-x-0"}
//         `}
//       >
//         {/* IMAGE */}

//         <div
//           className={`
//             relative
//             shrink-0
//             overflow-hidden
//             ${compact ? "w-[30%]" : "w-[32%]"}
//           `}
//         >
//           {student?.photo ? (
//             <img
//               src={getPhoto(student)}
//               alt={student.name}
//               className="
//                 h-full
//                 w-full
//                 object-cover
//                 transition-transform
//                 duration-500
//                 group-hover:scale-105
//               "
//               onError={(e) => {
//                 e.currentTarget.src = "/students/default.jpg";
//               }}
//             />
//           ) : (
//             <div
//               className="
//                 flex
//                 h-full
//                 w-full
//                 items-center
//                 justify-center
//                 bg-gray-100
//               "
//             >
//               <FiUsers
//                 className="text-gray-400"
//                 size={40}
//               />
//             </div>
//           )}

//           <div
//             className="
//               absolute
//               inset-0
//               bg-gradient-to-t
//               from-black/20
//               via-transparent
//               to-transparent
//             "
//           />
//         </div>

//         {/* CONTENT */}

//         <div
//           className={`
//             flex
//             min-w-0
//             flex-1
//             flex-col
//             justify-between
//             ${compact ? "p-4" : "p-4"}
//           `}
//         >
//           <div className="min-w-0">
//             {/* LABEL */}

//             <p
//               className="
//                 mb-1.5
//                 text-[10px]
//                 font-semibold
//                 uppercase
//                 tracking-wider
//                 text-[#0A4DA3]
//               "
//             >
//               Researcher
//             </p>

//             {/* NAME */}

//             <h3
//               className="
//                 text-sm
//                 font-bold
//                 leading-tight
//                 tracking-tight
//                 text-gray-900
//               "
//             >
//               {student.name}
//             </h3>

//             {/* STATUS */}

//             <StatusBadge status={student?.status} />

//             {/* BLUE LINE */}

//             <div
//               className="
//                 mt-2.5
//                 h-px
//                 w-9
//                 bg-[#0A4DA3]
//               "
//             />

//             {/* SHORT BIO */}

//             <p
//               className="
//                 mt-2.5
//                 text-xs
//                 leading-5
//                 text-gray-600
//               "
//             >
//               {shortBio}
//             </p>
//           </div>

//           {/* DETAILS BUTTON */}

//           {canShowDetails && (
//             <div className="mt-3 shrink-0">
//               <button
//                 type="button"
//                 onClick={() => setShowDetails(true)}
//                 className="
//                   inline-flex
//                   items-center
//                   gap-1.5
//                   rounded-lg
//                   bg-[#0A4DA3]
//                   px-3
//                   py-1.5
//                   text-xs
//                   font-semibold
//                   text-white
//                   transition-all
//                   duration-200
//                   hover:bg-[#083b7d]
//                   focus:outline-none
//                   focus:ring-2
//                   focus:ring-[#0A4DA3]/30
//                 "
//               >
//                 Details
//                 <FiExternalLink size={12} />
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* ======================================================
//           DETAILS PANEL
//       ====================================================== */}

//       <div
//         className={`
//           absolute
//           inset-0
//           flex
//           flex-col
//           border-l-4
//           border-[#0A4DA3]
//           bg-gray-50
//           transition-transform
//           duration-500
//           ease-in-out
//           ${showDetails ? "translate-x-0" : "translate-x-full"}
//         `}
//       >
//         {/* DETAIL CONTENT */}

//         <div className="flex-1 overflow-y-auto p-4">
//           <div className="flex gap-3">
//             {/* SMALL PHOTO */}

//             <div
//               className="
//                 hidden
//                 h-14
//                 w-14
//                 shrink-0
//                 overflow-hidden
//                 rounded-lg
//                 border
//                 border-gray-200
//                 bg-white
//                 sm:block
//               "
//             >
//               {student?.photo ? (
//                 <img
//                   src={getPhoto(student)}
//                   alt={student.name}
//                   className="
//                     h-full
//                     w-full
//                     object-cover
//                   "
//                   onError={(e) => {
//                     e.currentTarget.src =
//                       "/students/default.jpg";
//                   }}
//                 />
//               ) : (
//                 <div
//                   className="
//                     flex
//                     h-full
//                     w-full
//                     items-center
//                     justify-center
//                   "
//                 >
//                   <FiUsers
//                     className="text-gray-400"
//                     size={22}
//                   />
//                 </div>
//               )}
//             </div>

//             <div className="min-w-0">
//               {/* DETAIL TITLE */}

//               <h4
//                 className="
//                   text-sm
//                   font-bold
//                   text-gray-900
//                 "
//               >
//                 About {student.name}
//               </h4>

//               {/* DETAIL STATUS */}

//               <StatusBadge status={student?.status} />

//               {/* BLUE LINE */}

//               <div
//                 className="
//                   mt-2
//                   h-1
//                   w-8
//                   rounded-full
//                   bg-[#0A4DA3]
//                 "
//               />
//             </div>
//           </div>

//           {/* FULL BIO */}

//           <p
//             className="
//               mt-3
//               whitespace-pre-line
//               text-xs
//               leading-5
//               text-gray-600
//             "
//           >
//             {detailedBio}
//           </p>

//           {/* LINKS */}

//           {(student?.website || student?.email) && (
//             <div
//               className="
//                 mt-4
//                 flex
//                 flex-wrap
//                 gap-2
//                 border-t
//                 border-gray-200
//                 pt-3
//               "
//             >
//               {student?.website && (
//                 <a
//                   href={student.website}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="
//                     inline-flex
//                     items-center
//                     gap-1.5
//                     rounded-lg
//                     border
//                     border-[#0A4DA3]
//                     bg-white
//                     px-3
//                     py-1.5
//                     text-xs
//                     font-semibold
//                     text-[#0A4DA3]
//                     transition-colors
//                     hover:bg-blue-50
//                   "
//                 >
//                   <FiExternalLink size={12} />
//                   {student.websiteLabel || "Webpage"}
//                 </a>
//               )}

//               {student?.email && (
//                 <a
//                   href={`mailto:${student.email}`}
//                   className="
//                     inline-flex
//                     items-center
//                     gap-1.5
//                     rounded-lg
//                     border
//                     border-gray-200
//                     bg-white
//                     px-3
//                     py-1.5
//                     text-xs
//                     font-semibold
//                     text-gray-700
//                     transition-colors
//                     hover:border-[#0A4DA3]
//                     hover:text-[#0A4DA3]
//                   "
//                 >
//                   <FiMail size={12} />
//                   Email
//                 </a>
//               )}
//             </div>
//           )}
//         </div>

//         {/* DETAIL FOOTER */}

//         <div
//           className="
//             border-t
//             border-gray-200
//             bg-white
//             px-4
//             py-2
//           "
//         >
//           <button
//             type="button"
//             onClick={() => setShowDetails(false)}
//             className="
//               inline-flex
//               items-center
//               gap-1.5
//               text-xs
//               font-semibold
//               text-[#0A4DA3]
//               hover:underline
//             "
//           >
//             <FiArrowLeft size={13} />
//             Back to Profile
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ============================================================
// // SMALL CARD
// // ============================================================

// function SmallStudentCard({ student }) {
//   return (
//     <StudentCard
//       student={student}
//       compact
//     />
//   );
// }

// // ============================================================
// // INTERN CARD
// // ============================================================

// function InternCard({ student }) {
//   const [showDetails, setShowDetails] = React.useState(false);

//   const detailedBio =
//     student?.detailedBio ||
//     student?.bio ||
//     "Intern.";

//   const canShowDetails = hasDetails(student);

//   return (
//     <div className="group relative">
//       {/* AVATAR */}

//       <button
//         type="button"
//         onClick={() =>
//           canShowDetails && setShowDetails(true)
//         }
//         className="
//           mx-auto
//           block
//           h-24
//           w-24
//           overflow-hidden
//           rounded-full
//           border-4
//           border-white
//           bg-gray-100
//           shadow-md
//           transition-all
//           duration-300
//           group-hover:-translate-y-1
//           group-hover:shadow-lg
//           focus:outline-none
//         "
//       >
//         {student?.photo ? (
//           <img
//             src={getPhoto(student)}
//             alt={student.name}
//             className="
//               h-full
//               w-full
//               object-cover
//               transition-transform
//               duration-300
//               group-hover:scale-105
//             "
//             onError={(e) => {
//               e.currentTarget.src =
//                 "/students/default.jpg";
//             }}
//           />
//         ) : (
//           <div
//             className="
//               flex
//               h-full
//               w-full
//               items-center
//               justify-center
//             "
//           >
//             <FiUsers
//               className="text-gray-400"
//               size={30}
//             />
//           </div>
//         )}
//       </button>

//       {/* INTERN NAME */}

//       <div className="mt-2 text-center">
//         <h3
//           className="
//             text-sm
//             font-semibold
//             text-gray-900
//           "
//         >
//           {student.name}
//         </h3>

//         <p
//           className="
//             mt-0.5
//             text-[11px]
//             text-gray-500
//           "
//         >
//           Intern
//         </p>
//       </div>

//       {/* SIMPLE DETAIL POPUP */}

//       {showDetails && (
//         <div
//           className="
//             absolute
//             left-1/2
//             top-0
//             z-20
//             w-72
//             -translate-x-1/2
//             rounded-xl
//             border
//             border-gray-200
//             bg-white
//             p-4
//             shadow-xl
//           "
//         >
//           <button
//             type="button"
//             onClick={() => setShowDetails(false)}
//             className="
//               absolute
//               right-3
//               top-3
//               flex
//               h-7
//               w-7
//               items-center
//               justify-center
//               rounded-full
//               bg-gray-100
//               text-gray-600
//               hover:bg-blue-50
//               hover:text-[#0A4DA3]
//             "
//           >
//             ×
//           </button>

//           <h3
//             className="
//               pr-6
//               text-sm
//               font-bold
//               text-gray-900
//             "
//           >
//             {student.name}
//           </h3>

//           <div className="mt-2 h-px bg-gray-200" />

//           <p
//             className="
//               mt-3
//               text-xs
//               leading-5
//               text-gray-600
//             "
//           >
//             {detailedBio}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// // ============================================================
// // ALUMNI SECTION
// // ============================================================

// function AlumniSection() {
//   const [activeCategory, setActiveCategory] =
//     React.useState(
//       students?.labAlumni?.[0]?.category || ""
//     );

//   const activeGroup =
//     students?.labAlumni?.find(
//       (group) =>
//         group.category === activeCategory
//     ) || null;

//   const getCategoryLabel = (category) => {
//     const labels = {
//       "Post Doc. Fellow": "Post Doc. Fellows",
//       "Ph.D. Scholar": "Ph.D. Scholars",
//       "M.Tech students": "M.Tech Students",
//       "Project Associates": "Project Associates",
//       Interns: "Interns",
//     };

//     return labels[category] || category;
//   };

//   // Categories where only names should be shown
//   const namesOnlyCategories = [
//     "M.Tech students",
//     "Project Associates",
//     "Interns",
//   ];

//   const namesOnly = namesOnlyCategories.includes(
//     activeCategory
//   );

//   /*
//    * Convert comma-separated fullRow names into
//    * individual names.
//    */
//   const getNamesFromFullRow = (member) => {
//     if (!member?.designation) return [];

//     return member.designation
//       .replace(/<br\s*\/?>/gi, "")
//       .split(",")
//       .map((name) => name.trim())
//       .filter(Boolean);
//   };

//   return (
//     <section className="mt-20">
//       {/* ====================================================
//           HEADING
//       ==================================================== */}

//       <div className="mb-8 text-center">
//         <h2
//           className="
//             text-3xl
//             font-bold
//             text-gray-900
//           "
//         >
//           Lab Alumni
//         </h2>

//         <div
//           className="
//             mx-auto
//             mt-3
//             h-1
//             w-14
//             rounded-full
//             bg-[#0A4DA3]
//           "
//         />

//         <p
//           className="
//             mx-auto
//             mt-3
//             max-w-2xl
//             text-sm
//             text-gray-500
//           "
//         >
//           Former members of the Neuromechanics
//           Research Lab and their current
//           professional affiliations.
//         </p>
//       </div>

//       {/* ====================================================
//           TABS
//       ==================================================== */}

//       <div
//         className="
//           mb-6
//           flex
//           flex-wrap
//           justify-center
//           gap-2
//         "
//       >
//         {students?.labAlumni?.map((group) => (
//           <button
//             key={group.category}
//             type="button"
//             onClick={() =>
//               setActiveCategory(group.category)
//             }
//             className={`
//               rounded-full
//               px-4
//               py-2
//               text-xs
//               font-semibold
//               transition-all
//               duration-200
//               ${
//                 activeCategory === group.category
//                   ? "bg-[#0A4DA3] text-white shadow-sm"
//                   : `
//                       border
//                       border-gray-200
//                       bg-white
//                       text-gray-600
//                       hover:border-[#0A4DA3]
//                       hover:text-[#0A4DA3]
//                     `
//               }
//             `}
//           >
//             {getCategoryLabel(group.category)}
//           </button>
//         ))}
//       </div>

//       {/* ====================================================
//           ALUMNI CONTENT
//       ==================================================== */}

//       <div
//         className="
//           overflow-hidden
//           rounded-2xl
//           border
//           border-gray-200
//           bg-white
//           shadow-sm
//         "
//       >
//         {activeGroup?.rows?.length > 0 ? (
//           <>
//             {/* =================================================
//                 NAME ONLY CATEGORIES
//             ================================================= */}

//             {namesOnly ? (
//               <div className="p-5 md:p-6">
//                 <div
//                   className="
//                     grid
//                     grid-cols-1
//                     gap-3
//                     sm:grid-cols-2
//                     lg:grid-cols-3
//                   "
//                 >
//                   {activeGroup.rows.flatMap(
//                     (member, rowIndex) => {
//                       if (member.fullRow) {
//                         return getNamesFromFullRow(
//                           member
//                         ).map(
//                           (name, nameIndex) => (
//                             <div
//                               key={`${rowIndex}-${nameIndex}`}
//                               className="
//                                 rounded-lg
//                                 border
//                                 border-gray-100
//                                 bg-gray-50
//                                 px-4
//                                 py-3
//                                 text-sm
//                                 font-medium
//                                 text-gray-800
//                                 transition-all
//                                 duration-200
//                                 hover:border-blue-100
//                                 hover:bg-blue-50/50
//                               "
//                             >
//                               {name}
//                             </div>
//                           )
//                         );
//                       }

//                       return [
//                         <div
//                           key={`${rowIndex}-${member.name}`}
//                           className="
//                             rounded-lg
//                             border
//                             border-gray-100
//                             bg-gray-50
//                             px-4
//                             py-3
//                             text-sm
//                             font-medium
//                             text-gray-800
//                             transition-all
//                             duration-200
//                             hover:border-blue-100
//                             hover:bg-blue-50/50
//                           "
//                         >
//                           {member.name}
//                         </div>,
//                       ];
//                     }
//                   )}
//                 </div>
//               </div>
//             ) : (
//               /* =================================================
//                   NAME + CURRENT POSITION CATEGORIES
//               ================================================= */

//               <div className="overflow-x-auto">
//                 <table className="w-full min-w-[600px]">
//                   <thead>
//                     <tr
//                       className="
//                         border-b
//                         border-gray-200
//                         bg-gray-50
//                       "
//                     >
//                       <th
//                         className="
//                           px-5
//                           py-3
//                           text-left
//                           text-xs
//                           font-semibold
//                           text-gray-700
//                         "
//                       >
//                         Name
//                       </th>

//                       <th
//                         className="
//                           px-5
//                           py-3
//                           text-left
//                           text-xs
//                           font-semibold
//                           text-gray-700
//                         "
//                       >
//                         Current Position
//                       </th>
//                     </tr>
//                   </thead>

//                   <tbody>
//                     {activeGroup.rows.map(
//                       (member, index) => (
//                         <tr
//                           key={`${member.name}-${index}`}
//                           className="
//                             border-b
//                             border-gray-100
//                             last:border-b-0
//                             transition-colors
//                             hover:bg-blue-50/40
//                           "
//                         >
//                           <td
//                             className="
//                               px-5
//                               py-4
//                               text-sm
//                               font-semibold
//                               text-gray-900
//                             "
//                           >
//                             {member.name}
//                           </td>

//                           <td
//                             className="
//                               px-5
//                               py-4
//                               text-sm
//                               leading-6
//                               text-gray-600
//                             "
//                             dangerouslySetInnerHTML={{
//                               __html:
//                                 member.designation ||
//                                 "—",
//                             }}
//                           />
//                         </tr>
//                       )
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </>
//         ) : (
//           <div
//             className="
//               p-8
//               text-center
//               text-gray-500
//             "
//           >
//             No alumni information available.
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
// // ============================================================
// // MAIN PAGE
// // ============================================================

// export default function StudentsPage() {
//   const internationalFellows =
//     students?.internationalFellows || [];

//   const phdScholars =
//     students?.phdScholars || [];

//   const projectResearchScientists =
//     students?.projectResearchScientists || [];

//   const mastersStudents =
//     students?.mastersStudents || [];

//   const projectAssociates =
//     students?.labMembers?.projectAssociates || [];

//   const masterThesisInterns =
//     students?.labMembers?.masterThesisInterns || [];

//   const summerVisitingInterns =
//     students?.labMembers?.summerVisitingInterns || [];

//   return (
//     <main className="min-h-screen bg-gray-50">
//       {/* ======================================================
//           HERO
//       ====================================================== */}

//       <section
//         className="
//           border-b
//           border-gray-200
//           bg-white
//         "
//       >
//         <div
//           className="
//             mx-auto
//             max-w-7xl
//             px-6
//             py-9
//             md:px-10
//             md:py-11
//           "
//         >
//           <div className="max-w-4xl">
//             <div
//               className="
//                 mb-4
//                 inline-flex
//                 items-center
//                 gap-2
//                 rounded-full
//                 bg-blue-50
//                 px-3.5
//                 py-1.5
//                 text-xs
//                 font-semibold
//                 text-[#0A4DA3]
//               "
//             >
//               <FiUsers size={14} />
//               Neuromechanics Research Lab
//             </div>

//             <h1
//               className="
//                 text-4xl
//                 font-bold
//                 tracking-tight
//                 text-gray-900
//                 md:text-5xl
//                 lg:text-6xl
//               "
//             >
//               Students & Researchers
//             </h1>

//             <p
//               className="
//                 mt-4
//                 max-w-3xl
//                 text-sm
//                 leading-6
//                 text-gray-600
//                 md:text-base
//                 md:leading-7
//               "
//             >
//               Meet the students, researchers,
//               fellows and interns contributing to
//               research at the Neuromechanics Research
//               Lab, IIT Delhi.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ======================================================
//           CONTENT
//       ====================================================== */}

//       <div
//         className="
//           mx-auto
//           max-w-7xl
//           px-6
//           py-12
//           md:px-10
//           md:py-14
//         "
//       >
//         {/* ====================================================
//             INTERNATIONAL FELLOWS
//         ==================================================== */}

//         {internationalFellows.length > 0 && (
//           <section>
//             <SectionHeading icon={FiUserCheck}>
//               International Fellows
//             </SectionHeading>

//             <div
//               className="
//                 grid
//                 grid-cols-1
//                 gap-6
//                 lg:grid-cols-2
//               "
//             >
//               {internationalFellows.map(
//                 (student) => (
//                   <StudentCard
//                     key={student.id}
//                     student={student}
//                   />
//                 )
//               )}
//             </div>
//           </section>
//         )}

//         {/* ====================================================
//             PHD SCHOLARS
//         ==================================================== */}

//         {phdScholars.length > 0 && (
//           <section className="mt-16">
//             <SectionHeading icon={FiBookOpen}>
//               PhD Scholars
//             </SectionHeading>

//             <div
//               className="
//                 grid
//                 grid-cols-1
//                 gap-6
//                 lg:grid-cols-2
//               "
//             >
//               {phdScholars.map((student) => (
//                 <StudentCard
//                   key={student.id}
//                   student={student}
//                 />
//               ))}
//             </div>
//           </section>
//         )}

//         {/* ====================================================
//             PROJECT RESEARCH SCIENTISTS
//         ==================================================== */}

//         {projectResearchScientists.length > 0 && (
//           <section className="mt-16">
//             <SectionHeading icon={FiUserCheck}>
//               Project Research Scientists
//             </SectionHeading>

//             <div
//               className="
//                 grid
//                 grid-cols-1
//                 gap-6
//                 lg:grid-cols-2
//               "
//             >
//               {projectResearchScientists.map(
//                 (student) => (
//                   <StudentCard
//                     key={student.id}
//                     student={student}
//                   />
//                 )
//               )}
//             </div>
//           </section>
//         )}

//         {/* ====================================================
//             MASTERS STUDENTS
//         ==================================================== */}

//         {mastersStudents.length > 0 && (
//           <section className="mt-16">
//             <SectionHeading icon={FiBookOpen}>
//               Masters Students
//             </SectionHeading>

//             <div
//               className="
//                 grid
//                 grid-cols-1
//                 gap-6
//                 lg:grid-cols-2
//               "
//             >
//               {mastersStudents.map((student) => (
//                 <StudentCard
//                   key={student.id}
//                   student={student}
//                 />
//               ))}
//             </div>
//           </section>
//         )}

//         {/* ====================================================
//             LAB MEMBERS
//         ==================================================== */}

//         <section className="mt-16">
//           <SectionHeading icon={FiUsers}>
//             Lab Members
//           </SectionHeading>

//           {/* PROJECT ASSOCIATES */}

//           {projectAssociates.length > 0 && (
//             <div className="mb-16">
//               <h3
//                 className="
//                   mb-5
//                   text-lg
//                   font-bold
//                   text-gray-900
//                 "
//               >
//                 Project Associates
//               </h3>

//               <div
//                 className="
//                   grid
//                   grid-cols-1
//                   gap-6
//                   lg:grid-cols-2
//                 "
//               >
//                 {projectAssociates.map(
//                   (student) => (
//                     <SmallStudentCard
//                       key={student.id}
//                       student={student}
//                     />
//                   )
//                 )}
//               </div>
//             </div>
//           )}

//           {/* MASTER THESIS INTERNS */}

//           {masterThesisInterns.length > 0 && (
//             <div className="mb-16">
//               <h3
//                 className="
//                   mb-5
//                   text-lg
//                   font-bold
//                   text-gray-900
//                 "
//               >
//                 Master Thesis Interns
//               </h3>

//               <div
//                 className="
//                   grid
//                   grid-cols-1
//                   gap-6
//                   lg:grid-cols-2
//                 "
//               >
//                 {masterThesisInterns.map(
//                   (student) => (
//                     <SmallStudentCard
//                       key={student.id}
//                       student={student}
//                     />
//                   )
//                 )}
//               </div>
//             </div>
//           )}

//           {/* SUMMER / VISITING INTERNS */}

//           {summerVisitingInterns.length > 0 && (
//             <div>
//               <h3
//                 className="
//                   mb-6
//                   text-lg
//                   font-bold
//                   text-gray-900
//                 "
//               >
//                 Summer / Visiting Interns
//               </h3>

//               <div
//                 className="
//                   grid
//                   grid-cols-2
//                   gap-6
//                   sm:grid-cols-3
//                   md:grid-cols-4
//                   lg:grid-cols-6
//                 "
//               >
//                 {summerVisitingInterns.map(
//                   (student) => (
//                     <InternCard
//                       key={student.id}
//                       student={student}
//                     />
//                   )
//                 )}
//               </div>
//             </div>
//           )}
//         </section>

//         {/* ====================================================
//             ALUMNI
//         ==================================================== */}

//         <AlumniSection />
//       </div>
//     </main>
//   );
// }

//********************************************************************************************************************************************* */

import React from "react";
import {
  FiExternalLink,
  FiMail,
  FiArrowLeft,
  FiUsers,
  FiBookOpen,
  FiUserCheck,
  FiFileText,
  FiLinkedin,
} from "react-icons/fi";

import students from "../data/students";

// ============================================================
// HELPERS
// ============================================================

function getPhoto(student) {
  return student?.photo || "/students/default.jpg";
}

function getShortBio(student) {
  if (student?.shortBio) {
    return student.shortBio;
  }

  if (student?.bio) {
    return student.bio.length > 170
      ? `${student.bio.slice(0, 170)}...`
      : student.bio;
  }

  if (student?.detailedBio) {
    return student.detailedBio.length > 170
      ? `${student.detailedBio.slice(0, 170)}...`
      : student.detailedBio;
  }

  return "Research details will be added later.";
}

function hasDetails(student) {
  const details =
    student?.detailedBio || student?.bio;

  if (!details) return false;

  const text = details.trim().toLowerCase();

  return (
    text !== "details will be added later." &&
    text !== "intern."
  );
}

// ============================================================
// STUDENT OPTIONS
// ============================================================

function getStudentOptions(student) {
  const options = [];

  // EMAIL
  if (
    typeof student?.email === "string" &&
    student.email.trim()
  ) {
    options.push({
      key: "email",
      label: "Email",
      href: `mailto:${student.email}`,
      icon: FiMail,
      external: false,
    });
  }

  // WEBSITE
  if (
    typeof student?.website === "string" &&
    student.website.trim()
  ) {
    options.push({
      key: "website",
      label:
        student.websiteLabel || "Website",
      href: student.website,
      icon: student.website
        .toLowerCase()
        .includes("linkedin")
        ? FiLinkedin
        : FiExternalLink,
      external: true,
    });
  }

  // LINKEDIN
  if (
    typeof student?.linkedin === "string" &&
    student.linkedin.trim() &&
    student.linkedin !== student?.website
  ) {
    options.push({
      key: "linkedin",
      label: "LinkedIn",
      href: student.linkedin,
      icon: FiLinkedin,
      external: true,
    });
  }

  // GOOGLE SCHOLAR
  if (
    typeof student?.googleScholar === "string" &&
    student.googleScholar.trim()
  ) {
    options.push({
      key: "googleScholar",
      label: "Scholar",
      href: student.googleScholar,
      icon: FiBookOpen,
      external: true,
    });
  }

  // RESEARCHGATE
  if (
    typeof student?.researchGate === "string" &&
    student.researchGate.trim()
  ) {
    options.push({
      key: "researchGate",
      label: "ResearchGate",
      href: student.researchGate,
      icon: FiExternalLink,
      external: true,
    });
  }

  // CV
  if (
    typeof student?.cv === "string" &&
    student.cv.trim()
  ) {
    options.push({
      key: "cv",
      label: "CV",
      href: student.cv,
      icon: FiFileText,
      external: true,
    });
  }

  // PUBLICATIONS
  if (
    typeof student?.publications === "string" &&
    student.publications.trim()
  ) {
    options.push({
      key: "publications",
      label: "Publications",
      href: student.publications,
      icon: FiBookOpen,
      external: true,
    });
  }

  return options;
}

// ============================================================
// STUDENT OPTIONS UI
// ============================================================

function StudentOptions({ student }) {
  const options = getStudentOptions(student);

  if (!options.length) {
    return null;
  }

  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      {options.map((option) => {
        const Icon = option.icon;

        return (
          <a
            key={option.key}
            href={option.href}
            target={
              option.external
                ? "_blank"
                : undefined
            }
            rel={
              option.external
                ? "noopener noreferrer"
                : undefined
            }
            className="
              inline-flex
              items-center
              gap-1
              rounded-md
              border
              border-gray-200
              bg-white
              px-2
              py-1
              text-[9px]
              font-medium
              text-gray-600
              transition
              hover:border-[#0A4DA3]
              hover:bg-blue-50
              hover:text-[#0A4DA3]
            "
          >
            <Icon size={10} />
            {option.label}
          </a>
        );
      })}
    </div>
  );
}

// ============================================================
// SECTION HEADING
// ============================================================

function SectionHeading({
  icon: Icon,
  children,
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-blue-50
          text-[#0A4DA3]
        "
      >
        <Icon size={18} />
      </div>

      <h2
        className="
          text-2xl
          font-bold
          tracking-tight
          text-gray-900
        "
      >
        {children}
      </h2>
    </div>
  );
}

// ============================================================
// FULL STUDENT CARD
// ============================================================

function StudentCard({ student }) {
  const [showDetails, setShowDetails] =
    React.useState(false);

  const canShowDetails = hasDetails(student);

  const detailedBio =
    student?.detailedBio ||
    student?.bio ||
    "Research details will be added later.";

  return (
    <div
      className="
        relative
        h-[220px]
        overflow-hidden
        rounded-xl
        border
        border-gray-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:shadow-md
      "
    >
      {/* ====================================================
          PROFILE
      ==================================================== */}

      <div
        className={`
          absolute
          inset-0
          flex
          bg-white
          transition-transform
          duration-500
          ease-in-out
          ${
            showDetails
              ? "-translate-x-full"
              : "translate-x-0"
          }
        `}
      >
        {/* PHOTO */}

        <div
          className="
            relative
            w-[34%]
            shrink-0
            overflow-hidden
            bg-gray-100
          "
        >
          {student?.photo ? (
            <img
              src={getPhoto(student)}
              alt={
                student?.name || "Student"
              }
              className="
                h-full
                w-full
                object-cover
              "
              onError={(event) => {
                event.currentTarget.src =
                  "/students/default.jpg";
              }}
            />
          ) : (
            <div
              className="
                flex
                h-full
                w-full
                items-center
                justify-center
                bg-gray-100
              "
            >
              <FiUsers
                size={32}
                className="text-gray-400"
              />
            </div>
          )}

          {/* PHOTO LABEL */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              bg-gradient-to-t
              from-black/60
              to-transparent
              px-2
              pb-2
              pt-8
            "
          >
            <span
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-wider
                text-white
              "
            >
              Neuromechanics Lab
            </span>
          </div>
        </div>

        {/* CONTENT */}

        <div
          className="
            flex
            min-w-0
            flex-1
            flex-col
            p-4
          "
        >
          {/* NAME */}

          <h3
            className="
              break-words
              text-base
              font-bold
              leading-5
              text-gray-900
            "
          >
            {student?.name}
          </h3>

          {/* DESIGNATION */}

          {student?.designation && (
            <p
              className="
                mt-1
                text-[10px]
                font-semibold
                leading-4
                text-[#0A4DA3]
              "
            >
              {student.designation}
            </p>
          )}

          {/* SHORT BIO */}

          <p
            className="
              mt-2
              line-clamp-4
              text-[10px]
              leading-4
              text-gray-600
            "
          >
            {getShortBio(student)}
          </p>

          {/* ACTIONS */}

          <div className="mt-auto">
            <StudentOptions
              student={student}
            />

            {canShowDetails && (
              <button
                type="button"
                onClick={() =>
                  setShowDetails(true)
                }
                className="
                  mt-2
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-md
                  bg-[#0A4DA3]
                  px-3
                  py-1.5
                  text-[10px]
                  font-semibold
                  text-white
                  transition
                  hover:bg-blue-800
                "
              >
                View Details
                <FiExternalLink size={11} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ====================================================
          DETAILS
      ==================================================== */}

      <div
        className={`
          absolute
          inset-0
          flex
          flex-col
          border-l-4
          border-[#0A4DA3]
          bg-gray-50
          transition-transform
          duration-500
          ease-in-out
          ${
            showDetails
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        <div
          className="
            min-h-0
            flex-1
            overflow-y-auto
            p-4
          "
        >
          {/* CLOSE */}

          <button
            type="button"
            onClick={() =>
              setShowDetails(false)
            }
            className="
              absolute
              right-3
              top-3
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              text-gray-400
              hover:bg-white
              hover:text-[#0A4DA3]
            "
          >
            ×
          </button>

          {/* NAME */}

          <h3
            className="
              pr-8
              text-base
              font-bold
              leading-5
              text-gray-900
            "
          >
            {student?.name}
          </h3>

          {/* DESIGNATION */}

          {student?.designation && (
            <p
              className="
                mt-1
                text-[10px]
                font-semibold
                leading-4
                text-[#0A4DA3]
              "
            >
              {student.designation}
            </p>
          )}

          <div
            className="
              my-2.5
              h-px
              bg-gray-200
            "
          />

          {/* FULL BIO */}

          <p
            className="
              whitespace-pre-line
              text-[10px]
              leading-5
              text-gray-600
            "
          >
            {detailedBio}
          </p>

          {/* OPTIONS */}

          <StudentOptions
            student={student}
          />
        </div>

        {/* FOOTER */}

        <div
          className="
            shrink-0
            border-t
            border-gray-200
            bg-white
            px-4
            py-2
          "
        >
          <button
            type="button"
            onClick={() =>
              setShowDetails(false)
            }
            className="
              inline-flex
              items-center
              gap-1.5
              text-[10px]
              font-semibold
              text-[#0A4DA3]
              hover:underline
            "
          >
            <FiArrowLeft size={12} />
            Back to Profile
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// SUMMER / VISITING INTERN
// ============================================================

function InternOptions({
  student,
  onDetails,
}) {
  const options = getStudentOptions(student);
  const canShowDetails = hasDetails(student);

  return (
    <div
      className="
        pointer-events-none
        absolute
        left-1/2
        top-[76px]
        z-30
        w-[145px]
        -translate-x-1/2
        rounded-lg
        border
        border-gray-200
        bg-white
        p-2
        opacity-0
        shadow-xl
        transition-all
        duration-200
        group-hover:pointer-events-auto
        group-hover:top-[70px]
        group-hover:opacity-100
      "
    >
      {/* ARROW */}

      <div
        className="
          absolute
          -top-1.5
          left-1/2
          h-3
          w-3
          -translate-x-1/2
          rotate-45
          border-l
          border-t
          border-gray-200
          bg-white
        "
      />

      <div
        className="
          relative
          flex
          flex-wrap
          justify-center
          gap-1
        "
      >
        {options.map((option) => {
          const Icon = option.icon;

          return (
            <a
              key={option.key}
              href={option.href}
              target={
                option.external
                  ? "_blank"
                  : undefined
              }
              rel={
                option.external
                  ? "noopener noreferrer"
                  : undefined
              }
              className="
                inline-flex
                h-6
                items-center
                gap-1
                rounded
                border
                border-gray-200
                bg-gray-50
                px-1.5
                text-[8px]
                font-semibold
                text-gray-600
                transition
                hover:border-[#0A4DA3]
                hover:bg-blue-50
                hover:text-[#0A4DA3]
              "
            >
              <Icon size={9} />
              {option.label}
            </a>
          );
        })}

        {canShowDetails && (
          <button
            type="button"
            onClick={onDetails}
            className="
              inline-flex
              h-6
              items-center
              gap-1
              rounded
              bg-[#0A4DA3]
              px-1.5
              text-[8px]
              font-semibold
              text-white
              hover:bg-blue-800
            "
          >
            <FiExternalLink size={9} />
            Details
          </button>
        )}

        {!options.length &&
          !canShowDetails && (
            <span
              className="
                py-1
                text-[8px]
                text-gray-400
              "
            >
              No additional information
            </span>
          )}
      </div>
    </div>
  );
}

// ============================================================
// INTERN CARD
// ============================================================

function InternCard({ student }) {
  const [showDetails, setShowDetails] =
    React.useState(false);

  const detailedBio =
    student?.detailedBio ||
    student?.bio ||
    "Intern.";

  return (
    <div
      className="
        group
        relative
        flex
        min-h-[150px]
        flex-col
        items-center
        px-2
        pt-1
      "
    >
      {/* PHOTO */}

      <div
        className="
          relative
          h-[82px]
          w-[82px]
          rounded-full
          border-[3px]
          border-white
          bg-gray-100
          shadow-md
          transition-all
          duration-300
          group-hover:-translate-y-1
          group-hover:shadow-lg
        "
      >
        {student?.photo ? (
          <img
            src={getPhoto(student)}
            alt={
              student?.name || "Intern"
            }
            className="
              h-full
              w-full
              rounded-full
              object-cover
            "
            onError={(event) => {
              event.currentTarget.src =
                "/students/default.jpg";
            }}
          />
        ) : (
          <div
            className="
              flex
              h-full
              w-full
              items-center
              justify-center
              rounded-full
              bg-gray-100
            "
          >
            <FiUsers
              size={27}
              className="text-gray-400"
            />
          </div>
        )}

        {/* HOVER OPTIONS */}

        <InternOptions
          student={student}
          onDetails={() =>
            setShowDetails(true)
          }
        />
      </div>

      {/* NAME */}

      <div className="mt-3 text-center">
        <h3
          className="
            text-sm
            font-semibold
            leading-5
            text-gray-900
          "
        >
          {student?.name}
        </h3>

        <p
          className="
            mt-0.5
            text-[10px]
            text-gray-500
          "
        >
          Intern
        </p>
      </div>

      {/* DETAIL POPUP */}

      {showDetails && (
        <div
          className="
            absolute
            left-1/2
            top-0
            z-50
            w-[220px]
            -translate-x-1/2
            rounded-xl
            border
            border-gray-200
            border-l-4
            border-l-[#0A4DA3]
            bg-white
            p-4
            text-left
            shadow-xl
          "
        >
          <button
            type="button"
            onClick={() =>
              setShowDetails(false)
            }
            className="
              absolute
              right-3
              top-2
              text-lg
              text-gray-400
              hover:text-[#0A4DA3]
            "
          >
            ×
          </button>

          <h3
            className="
              pr-5
              text-sm
              font-bold
              text-gray-900
            "
          >
            {student?.name}
          </h3>

          <p
            className="
              mt-1
              text-[10px]
              font-semibold
              text-[#0A4DA3]
            "
          >
            Intern
          </p>

          <div
            className="
              my-3
              h-px
              bg-gray-200
            "
          />

          <p
            className="
              text-[10px]
              leading-5
              text-gray-600
            "
          >
            {detailedBio}
          </p>

          <StudentOptions
            student={student}
          />

          <button
            type="button"
            onClick={() =>
              setShowDetails(false)
            }
            className="
              mt-3
              inline-flex
              items-center
              gap-1
              text-[10px]
              font-semibold
              text-[#0A4DA3]
              hover:underline
            "
          >
            <FiArrowLeft size={11} />
            Back
          </button>
        </div>
      )}
    </div>
  );
}

// ============================================================
// ALUMNI NAME CARD
// ============================================================

function AlumniNameCard({ name }) {
  return (
    <div
      className="
        flex
        min-h-[48px]
        items-center
        rounded-lg
        border
        border-gray-200
        bg-white
        px-4
        py-2.5
        shadow-sm
        transition
        hover:border-[#0A4DA3]
        hover:bg-blue-50/40
      "
    >
      <span
        className="
          mr-2.5
          h-1.5
          w-1.5
          shrink-0
          rounded-full
          bg-[#0A4DA3]
        "
      />

      <span
        className="
          text-xs
          font-medium
          leading-5
          text-gray-700
        "
      >
        {name}
      </span>
    </div>
  );
}

// ============================================================
// LAB ALUMNI
// ============================================================

function AlumniSection() {
  const alumni = Array.isArray(
    students?.labAlumni
  )
    ? students.labAlumni
    : [];

  const [activeCategory, setActiveCategory] =
    React.useState(
      alumni?.[0]?.category || ""
    );

  if (!alumni.length) {
    return null;
  }

  const activeGroup =
    alumni.find(
      (group) =>
        group.category === activeCategory
    ) || alumni[0];

  const members = Array.isArray(
    activeGroup?.members
  )
    ? activeGroup.members
    : Array.isArray(activeGroup?.rows)
    ? activeGroup.rows
    : [];

  const category =
    activeGroup?.category || "";

  /*
   * ONLY THESE ALUMNI CATEGORIES
   * ARE NAME ONLY.
   */

  const namesOnly =
    category === "M.Tech Students" ||
    category === "M.Tech students" ||
    category === "Project Associates" ||
    category === "Interns";

  function getCategoryLabel(value) {
    const labels = {
      "Post Doc. Fellow":
        "Post Doc. Fellows",

      "Post Doc Fellow":
        "Post Doc. Fellows",

      PhD: "Ph.D. Scholars",

      "Ph.D. Scholar":
        "Ph.D. Scholars",

      "M.Tech students":
        "M.Tech Students",

      "M.Tech Students":
        "M.Tech Students",

      "Project Associates":
        "Project Associates",

      Interns: "Interns",
    };

    return labels[value] || value;
  }

  /*
   * Convert old fullRow format to names.
   */

  function getFullRowNames(member) {
    if (!member?.fullRow) {
      return [];
    }

    return member?.designation
      ? member.designation
          .split(",")
          .map((name) => name.trim())
          .filter(Boolean)
      : [];
  }

  return (
    <section className="mt-14">
      {/* ==================================================
          HEADING
      ================================================== */}

      <SectionHeading icon={FiUsers}>
        Lab Alumni
      </SectionHeading>

      {/* ==================================================
          TABS
      ================================================== */}

      <div
        className="
          mb-5
          flex
          flex-wrap
          gap-2
        "
      >
        {alumni.map((group) => {
          const active =
            group.category ===
            activeCategory;

          return (
            <button
              key={group.category}
              type="button"
              onClick={() =>
                setActiveCategory(
                  group.category
                )
              }
              className={`
                rounded-full
                border
                px-3
                py-1.5
                text-[10px]
                font-semibold
                transition
                ${
                  active
                    ? "border-[#0A4DA3] bg-[#0A4DA3] text-white"
                    : "border-gray-200 bg-white text-gray-600 hover:border-[#0A4DA3] hover:text-[#0A4DA3]"
                }
              `}
            >
              {getCategoryLabel(
                group.category
              )}
            </button>
          );
        })}
      </div>

      {/* ==================================================
          NAME-ONLY ALUMNI
          M.TECH / PROJECT ASSOCIATES / INTERNS
      ================================================== */}

      {namesOnly ? (
        <div
          className="
            grid
            grid-cols-2
            gap-2.5
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            xl:grid-cols-6
          "
        >
          {members.flatMap(
            (member, index) => {
              /*
               * NEW FORMAT
               */
              if (!member?.fullRow) {
                return [
                  <AlumniNameCard
                    key={
                      member?.name ||
                      `alumni-${index}`
                    }
                    name={member?.name}
                  />,
                ];
              }

              /*
               * OLD fullRow FORMAT
               */
              return getFullRowNames(
                member
              ).map((name) => (
                <AlumniNameCard
                  key={name}
                  name={name}
                />
              ));
            }
          )}
        </div>
      ) : (
        /* ==================================================
           POST DOC / PHD
        ================================================== */

        <div
          className="
            overflow-hidden
            rounded-xl
            border
            border-gray-200
            bg-white
            shadow-sm
          "
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-gray-50">
                  <th
                    className="
                      border-b
                      border-gray-200
                      px-4
                      py-3
                      text-left
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-wider
                      text-gray-500
                    "
                  >
                    Name
                  </th>

                  <th
                    className="
                      border-b
                      border-gray-200
                      px-4
                      py-3
                      text-left
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-wider
                      text-gray-500
                    "
                  >
                    Current Designation
                  </th>
                </tr>
              </thead>

              <tbody>
                {members.map(
                  (member, index) => (
                    <tr
                      key={
                        member?.name ||
                        index
                      }
                      className="
                        transition
                        hover:bg-blue-50/40
                      "
                    >
                      <td
                        className="
                          border-b
                          border-gray-100
                          px-4
                          py-3
                          text-xs
                          font-semibold
                          text-gray-800
                        "
                      >
                        {member?.name ||
                          "—"}
                      </td>

                      <td
                        className="
                          border-b
                          border-gray-100
                          px-4
                          py-3
                          text-xs
                          leading-5
                          text-gray-600
                        "
                        dangerouslySetInnerHTML={{
                          __html:
                            member?.designation ||
                            "—",
                        }}
                      />
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}

// ============================================================
// MAIN PAGE
// ============================================================

export default function StudentsPage() {
  const internationalFellows =
    Array.isArray(
      students?.internationalFellows
    )
      ? students.internationalFellows
      : [];

  const phdScholars =
    Array.isArray(students?.phdScholars)
      ? students.phdScholars
      : [];

  const projectResearchScientists =
    Array.isArray(
      students?.projectResearchScientists
    )
      ? students.projectResearchScientists
      : [];

  const mastersStudents =
    Array.isArray(
      students?.mastersStudents
    )
      ? students.mastersStudents
      : [];

  const projectAssociates =
    Array.isArray(
      students?.labMembers
        ?.projectAssociates
    )
      ? students.labMembers.projectAssociates
      : [];

  const masterThesisInterns =
    Array.isArray(
      students?.labMembers
        ?.masterThesisInterns
    )
      ? students.labMembers.masterThesisInterns
      : [];

  const summerVisitingInterns =
    Array.isArray(
      students?.labMembers
        ?.summerVisitingInterns
    )
      ? students.labMembers
          .summerVisitingInterns
      : [];

  // ==========================================================
  // MAIN 2-CARD GRID
  // ==========================================================

  const twoCardGrid = `
    grid
    grid-cols-1
    gap-5
    lg:grid-cols-2
  `;

  // ==========================================================
  // SMALL INTERN GRID
  // ==========================================================

  const internGrid = `
    grid
    grid-cols-3
    gap-x-2
    gap-y-4
    sm:grid-cols-4
    md:grid-cols-5
    lg:grid-cols-6
    xl:grid-cols-7
  `;

  return (
    <section
      className="
        min-h-screen
        bg-gray-50
      "
    >
      {/* ====================================================
          PAGE HEADER
      ==================================================== */}

      <div
        className="
          border-b
          border-gray-200
          bg-white
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
            px-6
            py-7
            md:px-10
          "
        >
          <span
            className="
              inline-flex
              rounded-full
              bg-blue-50
              px-3
              py-1
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#0A4DA3]
            "
          >
            Students
          </span>

          <h1
            className="
              mt-2
              text-3xl
              font-bold
              tracking-tight
              text-gray-900
            "
          >
            Research Students
          </h1>

          <p
            className="
              mt-2
              max-w-2xl
              text-xs
              leading-5
              text-gray-600
            "
          >
            Meet the researchers, scholars,
            fellows, project associates and
            interns contributing to the
            Neuromechanics Research Lab.
          </p>
        </div>
      </div>

      {/* ====================================================
          CONTENT
      ==================================================== */}

      <main
        className="
          mx-auto
          max-w-7xl
          px-6
          py-8
          md:px-10
          md:py-10
        "
      >
        {/* ==================================================
            INTERNATIONAL FELLOWS
        ================================================== */}

        {internationalFellows.length > 0 && (
          <section>
            <SectionHeading icon={FiUserCheck}>
              International Fellows
            </SectionHeading>

            <div className={twoCardGrid}>
              {internationalFellows.map(
                (student) => (
                  <StudentCard
                    key={student.id}
                    student={student}
                  />
                )
              )}
            </div>
          </section>
        )}

        {/* ==================================================
            PHD SCHOLARS
        ================================================== */}

        {phdScholars.length > 0 && (
          <section className="mt-10">
            <SectionHeading icon={FiBookOpen}>
              PhD Scholars
            </SectionHeading>

            <div className={twoCardGrid}>
              {phdScholars.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                />
              ))}
            </div>
          </section>
        )}

        {/* ==================================================
            PROJECT RESEARCH SCIENTISTS
        ================================================== */}

        {projectResearchScientists.length >
          0 && (
          <section className="mt-10">
            <SectionHeading icon={FiUserCheck}>
              Project Research Scientists
            </SectionHeading>

            <div className={twoCardGrid}>
              {projectResearchScientists.map(
                (student) => (
                  <StudentCard
                    key={student.id}
                    student={student}
                  />
                )
              )}
            </div>
          </section>
        )}

        {/* ==================================================
            MASTERS STUDENTS
        ================================================== */}

        {mastersStudents.length > 0 && (
          <section className="mt-10">
            <SectionHeading icon={FiBookOpen}>
              Masters Students
            </SectionHeading>

            <div className={twoCardGrid}>
              {mastersStudents.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                />
              ))}
            </div>
          </section>
        )}

        {/* ==================================================
            LAB MEMBERS
        ================================================== */}

        {(projectAssociates.length > 0 ||
          masterThesisInterns.length > 0 ||
          summerVisitingInterns.length >
            0) && (
          <section className="mt-10">
            <SectionHeading icon={FiUsers}>
              Lab Members
            </SectionHeading>

            {/* ================================================
                PROJECT ASSOCIATES
                FULL CARD
            ================================================= */}

            {projectAssociates.length > 0 && (
              <div className="mb-10">
                <h3
                  className="
                    mb-5
                    text-lg
                    font-bold
                    text-gray-900
                  "
                >
                  Project Associates
                </h3>

                <div className={twoCardGrid}>
                  {projectAssociates.map(
                    (student) => (
                      <StudentCard
                        key={student.id}
                        student={student}
                      />
                    )
                  )}
                </div>
              </div>
            )}

            {/* ================================================
                MASTER THESIS INTERNS
                FULL CARD
            ================================================= */}

            {masterThesisInterns.length > 0 && (
              <div className="mb-10">
                <h3
                  className="
                    mb-5
                    text-lg
                    font-bold
                    text-gray-900
                  "
                >
                  Master Thesis Interns
                </h3>

                <div className={twoCardGrid}>
                  {masterThesisInterns.map(
                    (student) => (
                      <StudentCard
                        key={student.id}
                        student={student}
                      />
                    )
                  )}
                </div>
              </div>
            )}

            {/* ================================================
                SUMMER / VISITING INTERNS
                COMPACT CIRCULAR DESIGN
            ================================================= */}

            {summerVisitingInterns.length >
              0 && (
              <div>
                <h3
                  className="
                    mb-4
                    text-lg
                    font-bold
                    text-gray-900
                  "
                >
                  Summer / Visiting Interns
                </h3>

                <div className={internGrid}>
                  {summerVisitingInterns.map(
                    (student) => (
                      <InternCard
                        key={student.id}
                        student={student}
                      />
                    )
                  )}
                </div>
              </div>
            )}
          </section>
        )}

        {/* ==================================================
            LAB ALUMNI
            ONLY THIS SECTION USES NAME-ONLY CARDS
        ================================================== */}

        <AlumniSection />
      </main>
    </section>
  );
}