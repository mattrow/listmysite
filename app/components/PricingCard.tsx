import { ChevronRight } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: number;
  originalPrice?: number;
  features: string[];
  isPopular?: boolean;
  spotsLeft?: number;
}

export function PricingCard({ title, price, originalPrice, features, isPopular, spotsLeft }: PricingCardProps) {
  return (
    <div
      className={`${
        isPopular ? 'border-2 border-yellow-400' : 'border border-gray-800'
      } rounded-xl p-8 relative h-full flex flex-col`}
    >
      {isPopular && (
        <>
          <div className="absolute -top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
            BEST VALUE
          </div>
          {spotsLeft && (
            <div
              className="absolute -top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
            >
              Only {spotsLeft} spots left!
            </div>
          )}
        </>
      )}
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="text-3xl font-bold mb-2">
        {originalPrice && (
          <span className="line-through text-gray-500 text-2xl mr-2">${originalPrice}</span>
        )}
        <span className={isPopular ? 'text-yellow-400' : ''}>${price}</span>
      </div>
      {isPopular && (
        <div className="text-sm text-yellow-400 mb-4">
          Launch offer for first 10 customers
        </div>
      )}
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="text-yellow-400 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full ${
          isPopular
            ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
            : 'bg-gray-800 text-gray-100 hover:bg-gray-700'
        } py-2 rounded-lg font-semibold transition-colors`}
      >
        {isPopular ? 'Get Started Now' : 'Choose Plan'}
      </button>
    </div>
  );
}