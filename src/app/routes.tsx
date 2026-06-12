import { createBrowserRouter } from 'react-router';
import LoveStory from './components/LoveStory';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: LoveStory,
  },
]);
