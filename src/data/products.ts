export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
};

const imageBaseUrl = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike';

const products: Product[] = [
  {
    id: 'nike-1',
    name: 'Air Max 270',
    category: 'Running',
    price: 150,
    image: `${imageBaseUrl}/nike1.png`,
  },
  {
    id: 'nike-2',
    name: 'Air Force 1',
    category: 'Lifestyle',
    price: 120,
    image: `${imageBaseUrl}/nike2.png`,
  },
  {
    id: 'nike-3',
    name: 'React Infinity Run',
    category: 'Running',
    price: 160,
    image: `${imageBaseUrl}/nike3.png`,
  },
  {
    id: 'nike-4',
    name: 'Air Zoom Pegasus',
    category: 'Running',
    price: 135,
    image: `${imageBaseUrl}/nike4.png`,
  },
  {
    id: 'nike-5',
    name: 'Blazer Mid',
    category: 'Lifestyle',
    price: 110,
    image: `${imageBaseUrl}/nike5.png`,
  },
  {
    id: 'nike-6',
    name: 'Air Max 90',
    category: 'Lifestyle',
    price: 140,
    image: `${imageBaseUrl}/nike6.png`,
  },
];

export default products;
