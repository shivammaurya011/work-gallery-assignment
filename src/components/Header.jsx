import React from "react";
import logo from "../assets/logo.png";
function Header() {
  return (
    <header>
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between px-20 py-2"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <img class="h-20 w-auto" src={logo} alt="" />
          </a>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
            Work
          </a>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
            Platform
          </a>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
            Profile
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
