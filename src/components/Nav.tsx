

// import { useState } from "react";
// import Logo from "../assets/logo-text.png";

// const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <nav className="relative flex items-center justify-between container mx-auto mt-5 px-4 md:px-8">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-xl"
//         >
//           ☰
//         </button>

//         <img
//           src={Logo}
//           alt="Dev Stack"
//           className="absolute left-1/2 -translate-x-1/2 w-24 md:w-auto md:static md:translate-x-0"
//         />

//         <ul className="hidden md:flex gap-5 items-center">
//           <li className="text-red-500">Home</li>
//           <li>Technologies</li>
//           <li>Projects</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>

//         <div className="flex items-center gap-2 md:gap-4">
//           <button className="text-sm md:text-base">Sign In</button>

//           <button className="bg-pink-500 text-white rounded-full px-3 py-1 md:px-5 md:py-2 text-sm md:text-base">
//             Sign Up
//           </button>
//         </div>
//       </nav>

//       {isOpen && (
//         <ul className="md:hidden container mx-auto mt-5 flex flex-col gap-4 border-t pt-4">
//           <li className="text-red-500">Home</li>
//           <li>Technologies</li>
//           <li>Projects</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       )}

//       <hr className="mt-6 border-gray-200" />
//     </>
//   );
// };

// export default Nav;



import { useState } from "react";
import Logo from "../assets/logo-text.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="relative max-w-300 mx-auto mt-5 px-5 md:px-8 flex items-center justify-between">

        {/* Mobile Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-xl z-10"
        >
          ☰
        </button>

        {/* Logo */}
        <img
          src={Logo}
          alt="Dev Stack"
          className="w-22.5 md:w-auto md:static absolute left-1/2 -translate-x-1/2"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-5">
          <li className="text-red-500">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2 md:gap-4">
          <button className="text-sm md:text-base">
            Sign In
          </button>

          <button className="bg-pink-500 text-white rounded-full px-3 py-1 md:px-5 md:py-2 text-sm md:text-base">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden max-w-300 mx-auto mt-4 px-5 flex flex-col gap-4 border-t pt-4">
          <li className="text-red-500">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      )}
    </>
  );
};

export default Nav;