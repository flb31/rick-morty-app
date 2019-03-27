import {
    Home,
    Character,
    NotFound,
} from './pages';

export default [
    {
        path: "/",
        component: Home,
        exact: true,
    },
    {
        path: "/:id/character",
        component: Character,
        exact: true,
    },
    {
        component: NotFound,
    },
];
