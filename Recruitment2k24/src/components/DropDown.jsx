import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default function DropDown({ options, icon, label }) {
  const [option, setoption] = useState(options[0]);

  return (
    <div className="min-w-96 flex items-center gap-3">
      <span className="material-symbols-rounded text-4xl mt-7">{icon}</span>
      <Listbox value={option} onChange={setoption}>
        <div className="relative mt-1">
          <div className="flex flex-col">
            <span>{label}</span>
            <Listbox.Button className="relative h-12 w-80 outline outline-1 bg-white min-w-72 cursor-pointer rounded-lg  py-2 pl-3 pr-10 text-left">
              <span className="block truncate">{option}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
          </div>
          <Listbox.Options className="custom-scrollbar absolute mt-1 max-h-60 w-full overflow-auto rounded-md outline outline-2 outline-light-blue bg-white py-1 text-base sm:text-sm">
            {options.map((option, index) => (
              <Listbox.Option
                key={index}
                className={`relative cursor-pointer hover:bg-light-blue/50  py-2 pl-4  pr-4`}
                value={option}>
                {option}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}
