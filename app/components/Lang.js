"use client";
import React, { useState } from "react";

export default function Lang({ langs }) {
  const [selectedLang, setSelectedLang] = useState(langs[0].value);

  return (
    <div className="flex border w-[86px] h-[35px] border-[#94D4FF] rounded-full overflow-hidden">
      {langs.map((lang, index) => (
        <button
          key={index}
          className={`py-2 w-1/2 justify-center relative transition-colors items-center flex duration-300 ${
            selectedLang === lang.value
              ? "bg-[#94D4FF] text-[#002B87] path"
              : "bg-transparent text-white"
          } ${index === 0 ? "clip-left" : "clip-right"}`}
          onClick={() => setSelectedLang(lang.value)}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
}
