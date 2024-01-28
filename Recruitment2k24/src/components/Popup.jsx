export default function Popup({ children }) {
  return (
    <>
      <div className="absolute z-20 top-[10vh] h-[90vh] right-0 w-screen bg-grey/60 backdrop-blur-[16px] flex justify-center items-center">
        <div className="relative h-4/5 w-4/5 lg:w-2/3 lg:h-2/3 bg-white rounded-3xl flex flex-col items-center gap-5">
          {children}
        </div>
      </div>
    </>
  );
}
