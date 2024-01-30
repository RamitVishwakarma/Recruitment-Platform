export default function HeaderProfile() {
  const name = localStorage.getItem("Name");
  const profile = localStorage.getItem("Photo");
  return (
    <div className="flex flex-col">
      <div className="flex text-right gap-3">
        <div className="flex flex-col">
          <span className="text-grey text-xl">Hello</span>
          <span className="text-grey text-2xl font-bold">{name}</span>
        </div>
        <div>
          <img className="w-16 h-16 min-w-16 min-h-16" src={profile} />
        </div>
      </div>
    </div>
  );
}
