import  React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import Pages from './configs/routersConfig';
import { useSelector } from 'react-redux';

const Routes = () => {
    const { login } = useSelector(state => state.login);
    console.log('login :',login);
    return (
        <Switch>
            {
                Pages.map((page, index) => {
                    if(page.private && login) return (<Route key={index} exact={page.exact} path={page.path} component={() => <Redirect to="/" />}/>)
                    return (
                        <Route key={index} exact={page.exact} path={page.path} component={page.component}/>
                    )
                })
            }
            <Route path="*" component={NotFoundPage} />
        </Switch>
    )
}

export default Routes;