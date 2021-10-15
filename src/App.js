import { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { useUpdateUserData } from './react-query/mutations/user'
import { useUserData } from './react-query/queries/user'

function App() {
  // mutate user
  const {
    mutateAsync: updateUser,
    status: userUpdateStatus,
    isLoading: isLoadingUserUpdate,
    data: userUpdateData,
    error: userUpdateErr
  } = useUpdateUserData()

  useEffect(
    () => {
      console.log()
    },
    [ userUpdateData, userUpdateErr, isLoadingUserUpdate, userUpdateStatus ]
  )

  const onUpdateUser = (email) => {
    updateUser({ email, name })
  }

  // query user
  const { status: userDataStatus, data: userData, error: userDataErr } = useUserData()

  useEffect(
    () => {
      console.log()
    },
    [ userData, userDataErr, userDataStatus ]
  )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <button onClick={onUpdateUser()} />
    </div>
  )
}

export default App
