// import Logo from "../assets/logo-text.png";

// const Nav = () => {
//   return (
//     <>
//       <nav className="flex justify-between container mx-auto mt-5">
//         <img src={Logo} alt="Dev Stack" />

//         <ul className="flex gap-5 items-center">
//           <li className="text-red-500">Home</li>
//           <li>Technologies</li>
//           <li>Projects</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>

//         <div className="flex items-center gap-4">
//           <button>Sign In</button>

//           <button className="bg-pink-500 text-white rounded-full px-5 py-2">
//             Sign Up
//           </button>
//         </div>
//       </nav>

//       <hr className=" mt-6 border-t border-gray-200" />
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
      <nav className="relative flex items-center justify-between container mx-auto mt-5 px-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-xl"
        >
          ☰
        </button>

        <img
          src={Logo}
          alt="Dev Stack"
          className="md:static absolute left-1/2 -translate-x-1/2"
        />

        <ul className="hidden md:flex gap-5 items-center">
          <li className="text-red-500">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="flex items-center gap-2 md:gap-4">
          <button className="text-sm md:text-base">Sign In</button>

          <button className="bg-pink-500 text-white rounded-full px-3 py-1 md:px-5 md:py-2 text-sm md:text-base">
            Sign Up
          </button>
        </div>
      </nav>

      {isOpen && (
        <ul className="md:hidden container mx-auto mt-5 flex flex-col gap-4 border-t pt-4">
          <li className="text-red-500">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      )}

      <hr className="mt-6 border-gray-200" />
    </>
  );
};

export default Nav;
