import { createMetadata } from '../lib/metadata';

export const metadata = createMetadata('blog');

export default function BlogLayout({ children }) {
  return children;
}