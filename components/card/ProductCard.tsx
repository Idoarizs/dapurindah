import Image from "next/image";
import Link from "next/link";

// React Icons
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// Types
import { ProductCardProps } from "../../types";

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  route,
  imageUrl,
  rating,
}) => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={`full-${index}`} className="text-yellow-500" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={`empty-${index}`} className="text-yellow-500" />
        ))}
      </>
    );
  };

  return (
    <Link legacyBehavior href={route} passHref>
      <a className="bg-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={250}
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="flex flex-col items-start text-justify p-4">
          <h4 className="text-lg font-semibold">{title}</h4>
          <div className="flex items-center mt-1">
            {renderStars(rating)}
            <span className="ml-2 text-gray-600">{rating.toFixed(1)}</span>
          </div>
          <p className="mt-2">{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
