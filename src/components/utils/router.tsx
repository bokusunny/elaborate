import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { auth } from '../../utils/firebase'
import CircularProgress from '@material-ui/core/CircularProgress'
import PublicRoute from './public-route'
import PrivateRoute from './private-route'
import SignInPage from '../pages/SignInPage'
import MyPage from '../pages/MyPage'
import DirectoryPage from '../pages/DirectoryPage'
import EditorPage from '../pages/EditorPage'

const Router: React.FC<{}> = () => {
  const [authState, setAuthState] = useState({ isLoading: true, isAuthorized: false })
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null)
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setAuthState({ isLoading: false, isAuthorized: true })
        setCurrentUser(user)
      } else {
        setAuthState({ isLoading: false, isAuthorized: false })
        setCurrentUser(null)
      }
    })
  }, [auth])

  const { isLoading, isAuthorized } = authState

  if (isLoading) return <CircularProgress />

  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/sign_in" component={SignInPage} isAuthorized={isAuthorized} />
        <PrivateRoute
          exact
          path="/mypage"
          component={MyPage}
          currentUser={currentUser}
          isAuthorized={isAuthorized}
        />
        <PrivateRoute
          exact
          path="/:directoryName"
          component={DirectoryPage}
          currentUser={currentUser}
          isAuthorized={isAuthorized}
        />
        <Route exact path="/" component={isAuthorized ? MyPage : SignInPage} />
        {/* TODO: It's tmp route, need to make it Private Route & Use uid  */}
        <Route exact path="/:id/edit" component={EditorPage} />
        <Route render={() => <h2>404 Not Found</h2>} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
