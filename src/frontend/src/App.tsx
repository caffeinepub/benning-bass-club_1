import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Join from './pages/Join';
import Info from './pages/Info';
import Links from './pages/Links';
import About from './pages/About';
import Contact from './pages/Contact';
import Schedule from './pages/Schedule';
import Gallery from './pages/Gallery';

// Layout component that wraps all pages
function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// Define root route with layout
const rootRoute = createRootRoute({
  component: Layout,
});

// Define all page routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const joinRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/join',
  component: Join,
});

const scheduleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/schedule',
  component: Schedule,
});

const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/gallery',
  component: Gallery,
});

const infoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/info',
  component: Info,
});

const linksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/links',
  component: Links,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
});

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  joinRoute,
  scheduleRoute,
  galleryRoute,
  infoRoute,
  linksRoute,
  aboutRoute,
  contactRoute,
]);

// Create router
const router = createRouter({ routeTree });

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
