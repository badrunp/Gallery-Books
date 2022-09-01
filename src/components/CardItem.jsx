import formatRupiah from "../helpers/formatRupiah";
import Price from "../icon/Price";
import LabelStock from "./LabelStock";
import { m } from "framer-motion";

function CardItem({ item }) {
  return (
    <m.div
      whileHover={{ scale: 1.02 }}
      key={item.id}
      className="relative bg-gray-700 rounded shadow flex"
    >
      <div className="absolute z-10 top-1 left-1 px-2 rounded bg-cyan-500 shadow text-gray-200">
        <span className="text-xs font-semibold uppercase">
          {item.volumeInfo.language}
        </span>
      </div>
      <div className="flex-none">
        <img
          src={item.volumeInfo.imageLinks.thumbnail}
          alt={item.volumeInfo.title}
          className="h-[220px] w-[160px] contrast-75"
        />
      </div>

      <div className="p-4">
        <h1 className="text-gray-200 text-base sm:text-xl font-semibold">
          {item.volumeInfo.title}
        </h1>
        {item.saleInfo.isEbook ? (
          <LabelStock className="bg-green-600">In Stock</LabelStock>
        ) : (
          <LabelStock className="bg-red-600">Out of Stock</LabelStock>
        )}
        {item.saleInfo.listPrice?.amount && (
          <div className="flex items-center space-x-2 text-gray-200 text-sm sm:text-xl">
            <h1>
              {formatRupiah(
                item.saleInfo.retailPrice.amount.toString(),
                "Rp. "
              )}
            </h1>
            <h1 className="line-through text-gray-300/80">
              {formatRupiah(item.saleInfo.listPrice.amount.toString(), "Rp. ")}
            </h1>
          </div>
        )}
        {item.volumeInfo.description && (
          <p className="text-xs md:text-sm text-gray-300/80 mt-1">
            {item.volumeInfo.description.slice(
              0,
              item.saleInfo.isEbook ? 80 : 150
            )}{" "}
            ...
          </p>
        )}
        {item.saleInfo.isEbook && (
          <a
            href={item.saleInfo.buyLink}
            className="bg-blue-600 uppercase hover:bg-blue-700 transition-colors w-max mt-2 py-1 sm:py-2 px-2 sm:px-4 rounded-sm text-gray-200 text-xs sm:text-sm font-semibold flex items-center space-x-1"
          >
            <Price />
            <span>Buy Now</span>
          </a>
        )}
        <div className="absolute bottom-2 left-2 sm:right-2">
          {item.volumeInfo.categories &&
            item.volumeInfo.categories.map((category, index) => (
              <span
                key={index}
                className="bg-gray-800 text-xs px-2 py-1 text-gray-200 rounded-sm"
              >
                #{category}
              </span>
            ))}
        </div>
      </div>
    </m.div>
  );
}

export default CardItem;
