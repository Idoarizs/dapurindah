export interface Product {
  id: number;
  title: string;
  description: string;
  route: string;
  imageUrl: string;
  rating: number;
  category: string;
  price: number;
  availability: boolean;
}

export interface ProductCardProps {
  title: string;
  description: string;
  route: string;
  imageUrl: string;
  rating: number;
}

export interface Filter {
  title?: string;
  category?: string;
  priceRange?: [number, number];
  rating?: number;
}

export interface FilterProps {
  onFilterChange: (filters: {
    title?: string;
    category?: string;
    priceRange?: [number, number]; // price range as a tuple of two numbers
    rating?: string;
    availability?: boolean;
  }) => void;
  filters: {
    categories: string[];
  };
}
