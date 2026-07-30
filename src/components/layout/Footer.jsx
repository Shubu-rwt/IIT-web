import logo from "../../assets/images/iit-logo.png";

const links = [
  "Research",
  "Publications",
  "Projects",
  "Students",
  "Gallery",
  "Contact",
];

export default function Footer() {
  return (
    <footer
      className="
        lg:ml-[280px]
        bg-gradient-to-r
        from-[#183A88]
        via-[#21409A]
        to-[#183A88]
        text-white
      "
    >
      <div className="max-w-7xl mx-auto px-8 py-5">

        {/* Top Row */}

        <div className="flex flex-col lg:flex-row items-center justify-between gap-5">

          {/* Logo */}

          <div className="flex items-center gap-3">

            <img
              src={logo}
              alt="IIT Delhi"
              className="h-12 w-12 rounded-full bg-white p-1"
            />

            <div>

              <h2 className="text-lg font-bold leading-tight">
                Centre for Biomedical Engineering
              </h2>

              <p className="text-sm text-blue-100">
                Indian Institute of Technology Delhi
              </p>

            </div>

          </div>

          {/* Navigation */}

          <div className="flex flex-wrap justify-center gap-2">

            {links.map((item) => (
              <a
                key={item}
                href="#"
                className="
                  rounded-full
                  px-4
                  py-2
                  text-sm
                  text-blue-100
                  transition-all
                  duration-300
                  hover:bg-white/15
                  hover:text-white
                "
              >
                {item}
              </a>
            ))}

          </div>

          {/* Contact */}

          {/* <a
            href="mailto:joshid@iitd.ac.in"
            className="
              rounded-full
              bg-white
              px-5
              py-2.5
              text-sm
              font-semibold
              text-[#21409A]
              transition-all
              duration-300
              hover:scale-105
              hover:bg-blue-100
            "
          >
            Contact Us
          </a> */}

        </div>

        {/* Divider */}

        <div className="my-4 h-px bg-white/20" />

        {/* Bottom */}

        <div className="flex items-center justify-between">

          <p className="text-sm text-blue-100">
            © {new Date().getFullYear()} Deepak Joshi Laboratory • IIT Delhi
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-white/15
              text-lg
              font-bold
              text-white
              transition-all
              duration-300
              hover:bg-white
              hover:text-[#21409A]
              hover:scale-110
            "
          >
            ↑
          </button>

        </div>

      </div>
    </footer>
  );
}