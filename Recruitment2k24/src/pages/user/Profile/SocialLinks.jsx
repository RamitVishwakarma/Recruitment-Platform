export default function Links({ ico, text }) {
  return (
    <div className="flex w-60 gap-2">
      <img className="w-4" src={ico} />
      {text === "Not Submitted" ? (
        <div className="text-lg">{text}</div>
      ) : (
        <a href={text} target="_blank">
          <div className="text-lg">{text.slice(0, 30).concat("...")}</div>
        </a>
      )}
    </div>
  );
}
