import React, { useState } from "react";

export default function Tail() {
  const [toggle, setToggle] = useState<boolean>(false);
  const toggleMenu = (): void => {
    setToggle((cur: boolean) => !cur);
  };
  return (
    <nav className="w-auto pl-10 pr-10 bg-slate-100">
      <div className="flex justify-between py-5">
        <ul className="flex gap-16">
          <li className="py-2 flex font-extrabold cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="skyblue"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="royalblue"
              className="w-6 h-6 text-sky-600 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
            JIWON
          </li>
          <li className="hidden md:block py-2 font-semibold cursor-pointer text-slate-500">
            Menu 1
          </li>
          <li className="hidden md:block py-2 font-semibold cursor-pointer text-slate-500">
            Menu 2
          </li>
          <li className="hidden md:block py-2 font-semibold cursor-pointer text-slate-500">
            Menu 3
          </li>
        </ul>
        <a
          className="hidden md:block py-2 py-2 px-3 text-white font-bold bg-slate-600 hover:bg-orange-500 rounded duration-300"
          href="#"
        >
          Login
        </a>
        {/* 모바일 메뉴 파트 */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 mr-2 text-orange-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* 모바일 토글 파트 */}
      <div className={toggle ? "md:hidden py-3" : "hidden"}>
        <a href="#" className="block py-2 px-4 hover:bg-slate-200">
          Menu1
        </a>
        <a href="#" className="block py-2 px-4 hover:bg-slate-200">
          Menu2
        </a>
        <a href="#" className="block py-2 px-4 hover:bg-slate-200">
          Menu3
        </a>
      </div>
    </nav>
  );
}
