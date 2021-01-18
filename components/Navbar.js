import React from "react";

export default function Navbar() {
  return (
    <nav class="bg-gray-900 max-w-max py-2">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0 flex items-center">
              <img
                class="h-12 w-auto"
                src="http://by.prodigious.com/lbiqa/assets/images/prodigious-logo.png"
                alt="Prodigious"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
