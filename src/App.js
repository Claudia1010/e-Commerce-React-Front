import React from 'react';
import 'boxicons';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import PublicRoute from './PublicRoute';
import { DataProvider } from './context/DataProvider';
import AuthUser from './components/AuthUser/AuthUser';
import PrivateRoute from './PrivateRoute';

function App() {
  const {getToken, getRole} = AuthUser();

  console.log(getRole())
  console.log(getToken())
  if(getToken() && getRole()==='admin'){
    return <PrivateRoute />
  }
  return (
    <DataProvider>
      <PublicRoute />
    </DataProvider>
  );
}

export default App;