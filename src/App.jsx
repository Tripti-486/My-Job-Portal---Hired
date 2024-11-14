import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import AppLayout from '@/layouts/app-layout'
import LandingPage from '@/pages/landing'
import Onboarding from '@/pages/onboarding'
import JobListing from '@/pages/job-listing'
import PostJob from '@/pages/post-job'
import MyJobs from '@/pages/my-jobs'
import SavedJobs from '@/pages/saved-job'
import JobPage from '@/pages/job'
import { ThemeProvider } from './components/ui/theme-provider'
import ProtectedRoute from '@/components/protected-route'; // Add this import
const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: (
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        ),
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRoute>
            <JobListing />
          </ProtectedRoute>
        ),
      },
      {
        path: "/post-job",
        element: (
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <ProtectedRoute>
            <MyJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/saved-jobs",
        element: (
          <ProtectedRoute>
            <SavedJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <ProtectedRoute>
            <JobPage />
          </ProtectedRoute>
        ),
      },

    ],
  },
]);
function App() {
   return(
     <ThemeProvider defaultTheme="dark" storagekey="vite-ui-theme">
        <RouterProvider router={router} />
   </ThemeProvider>
   );
   
  

  //return ();
}

export default App;
