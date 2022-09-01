function LabelStock({ className = "", children }) {
  return (
    <span
      className={`block w-max rounded-sm text-[10px] sm:text-[11px] text-gray-200 px-1 py-[px] ${className} mt-1`}
    >
      {children}
    </span>
  );
}
export default LabelStock;
