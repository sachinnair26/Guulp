import React from 'react';
import {NativeRouter as Router,Switch,Route,Link,BackButton} from 'react-router-native'
import Menu from '../Menu';
import Dishes from '../Dishes';
function Routes(){
    
    return(
        <Router>
         <BackButton>

            <Switch>
                <Route path='/:dish' component={Dishes}/>
                <Route path='/' component={Menu}/>
            </Switch>
         </BackButton>
        </Router>
    )
}
export default Routes;