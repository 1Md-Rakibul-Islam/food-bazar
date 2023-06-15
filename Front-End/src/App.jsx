import './App.css';
import { RouterProvider } from 'react-router-dom'
import { router } from './Routs/Routs/Routs';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className='mx-auto bg-stone-900' >
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  )
}

export default App
