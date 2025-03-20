import { useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default function DropDown({
  options,
  icon,
  label,
  name,
  onChangeOptionHandler,
  error,
  errorMessage,
}) {
  const [option, setOption] = useState(options[0]);

  useEffect(() => {
    onChangeOptionHandler(option, name);
  }, [option]);

  return (
    <div className="md:min-w-80 min-w-60 flex items-center gap-3 p-2">
      <span className="material-symbols-rounded text-4xl mt-7 max-[350px]:hidden">
        {icon}
      </span>
      <Listbox value={option} onChange={setOption}>
        <div className="relative mt-1">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <span>{label}</span>
              {error ? <span className="text-red">{errorMessage}</span> : null}
            </div>
            <Listbox.Button
              className={` ${
                error ? "outline outline-2 outline-red border-red" : ""
              } container xl:w-full md:min-w-80 min-w-60 relative h-12 w-56  bg-text-box  cursor-pointer rounded-lg  py-2 pl-3 pr-10 text-left outline outline-1 hover:outline hover:outline-grey hover:outline-2 focus:outline focus:outline-2 focus:outline-light-blue focus:border-light-blue`}>
              <span className="block truncate">{option}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
          </div>
          <Listbox.Options className="z-10 custom-scrollbar absolute mt-1 max-h-60 w-full overflow-auto rounded-md outline outline-2 outline-light-blue bg-white py-1 text-base sm:text-sm">
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
