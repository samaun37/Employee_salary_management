import { Route, Routes } from 'react-router-dom';
import AllrecordsPage from './pages/Allrecords';
import AddnewemployeePage from './pages/Addnew';
import Addnew_2 from './pages/Addnew_2'
import QueryPage from './pages/Query';
import MainNavigation from './components/layout/MainNavigation';
import Homepage from './pages/Homepage';
import UpdatePage from './pages/Update'

function App() {
  return (
    <div>
      <MainNavigation />
      <Route path='/' exact>
          <Homepage/>
      </Route>
      <Route path='/all'>
          <AllrecordsPage />
        </Route>
      <Route path='/add'>
          <AddnewemployeePage />
        </Route>
      <Route path='/query'>
          <QueryPage />
      </Route>
      <Route path='/update'>
          <UpdatePage />
      </Route>
    </div>
  );
}
export default App;