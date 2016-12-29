import App from '../containers/App';

import { PageNotFound } from '../components';
import homeRoute from '../features/home/route';

const routes = [{
  path: '/',
  component: App,
  childRoutes: [
    homeRoute,
    { path: '*', name: 'Page not found', component: PageNotFound }
  ],
}];

function handleIndexRoute(route) {

  if (!route.childRoutes || !route.childRoutes.length) {
    return;
  }

  route.childRoutes = route.childRoutes.filter(child => { // eslint-disable-line
    if (child.isIndex) {
      if (process.env.NODE_ENV === 'dev' && route.indexRoute) {
        console.error('More than one index route: ', route);
      }

      if (!route.indexRoute) {
        delete child.path; // eslint-disable-line
        route.indexRoute = child; // eslint-disable-line
        return false;
      }
    }
    return true;
  });

  route.childRoutes.forEach(handleIndexRoute);
}

routes.forEach(handleIndexRoute);

export default routes;
