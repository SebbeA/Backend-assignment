import React from 'react';
import './App.css';
import CreateForm from './components/CreateForm';
import UserList from './components/UserList';
import UserProvider from './contexts/userContext';

function App() {

  return (
    <UserProvider>
      <div className="container mt-5">
        <CreateForm />
        <hr className="my-5" />
        <UserList />
      </div>
    </UserProvider>
  );
}

export default App;
