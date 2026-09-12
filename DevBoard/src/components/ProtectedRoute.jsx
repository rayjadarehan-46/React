import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({children}) {
    const {isAuthenticated, authInitialized}  = useSelector((state) =>  state.auth)
    if(!authInitialized ) {
          return <div>Loading ...</div>
    }

    if(!isAuthenticated ) {
        return < Navigate to="/login"  />
    }
    return children
}

export default ProtectedRoute
