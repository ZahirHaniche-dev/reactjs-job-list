export default function FilterInfo({ skillsList, dataLength }) {
  return (
    <div className="mt-6 mb-6">
      {skillsList.skills.length === 0 && (
        <span className="text-slate-900 text-base sm:text-lg px-2 py-1 cursor-pointer block text-center sm:text-left">
          Select one or more skill filters from the{" "}
          <span className="font-extrabold">
            {dataLength} job listings
          </span>{" "}
          below
        </span>
      )}
    </div>
  );
}
