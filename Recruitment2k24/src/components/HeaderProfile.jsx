export default function HeaderProfile({ name, photo }) {
  return (
    <div className="flex flex-col">
      <div className="flex text-right gap-3">
        <div className="flex flex-col">
          <span className="text-grey text-xl">Hello</span>
          <span className="text-grey text-2xl font-bold">{name}</span>
        </div>
        <div>
          <img
            className="w-16 h-16 object-cover min-w-16 min-h-16 rounded-full"
            src={photo}
          />
        </div>
      </div>
    </div>
  );
}
