export default function Input({
  grow = true,
  id,
  label,
  icon,
  type,
  placeholder,
  onChangeHandler,
  errorHandler,
  errorMessage,
  value,
}) {
  return (
    <div
      className={`md:min-w-96 min-w-60 p-2
    ${grow ? "xl:w-4/12" : ""} `}>
      {/* Label Start */}
      <div className="flex justify-between">
        <label className="max-[350px]:ml-0 ml-12" htmlFor={id}>
          {label}
        </label>
        {/* Error */}
        {errorHandler ? (
          <div className="text-red sm:mr-3 xl:mr-4 mr-12">{errorMessage}</div>
        ) : null}
      </div>
      {/* Label End */}
      <div className="flex gap-3 flex-auto items-center">
        {icon ? (
          !icon.includes("/") ? (
            <span className="material-symbols-rounded text-4xl max-[350px]:hidden">
              {icon}
            </span>
          ) : (
            <img src={icon} className="size-4  max-[350px]:hidden" />
          )
        ) : null}
        {/* Input field */}
        <input
          className={`
          ${
            errorHandler ? "outline outline-2 outline-red border-red" : ""
          } bg-text-box border p-3 md:min-w-80 min-w-60 ${
            grow ? " xl:w-10/12" : ""
          }  rounded-lg border-grey hover:outline hover:outline-grey hover:outline-2 focus:outline focus:outline-2 focus:outline-light-blue focus:border-light-blue `}
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          onChange={onChangeHandler}
          value={value}
        />
      </div>
    </div>
  );
}
