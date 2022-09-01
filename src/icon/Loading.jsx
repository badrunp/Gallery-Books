export function Loading({
  borderColor = "border-t-black",
  borderWidth = "border-2",
}) {
  return (
    <>
      <div className="lds-ring">
        <div className={`loading-border ${borderColor} ${borderWidth}`}></div>
        <div className={`loading-border ${borderColor} ${borderWidth}`}></div>
        <div className={`loading-border ${borderColor} ${borderWidth}`}></div>
        <div className={`loading-border ${borderColor} ${borderWidth}`}></div>
      </div>
    </>
  );
}
