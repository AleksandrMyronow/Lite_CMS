import App from './components/App';
const TABS = require ('./assets/tabs.json');

const loadRoute = (cb) => {
    return module => cb (null, module.default)
};

const errRoute = () => {
    throw new Error ('Component with error')
};

export default {
    path: '/',
    component: App,
    childRoutes: TABS.map((tab, index) => ({
        path: `/${tab.id}`,
        getComponent(location, cb) {
            import(`./${tab.path}`)
                .then(loadRoute(cb))
                .catch(errRoute)
        }
    }))
}
