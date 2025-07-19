// guidesData.ts — массив гайдов для Guides & Tips
import type { ReactNode } from 'react';

export type Guide = {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  date: string;
  content: ReactNode;
};

const guidesData: Guide[] = [
  {
    id: 'beginners',
    title: "Beginner’s Guide",
    subtitle: 'Learn the basics of movement, shooting, and teamwork in Apex Legends.',
    author: 'Gameexa Team',
    date: '2024-05-01',
    // Для JSX используйте guidesData.tsx
    content: 'TODO: fill content as JSX in guidesData.tsx',
  },
];

export default guidesData; 