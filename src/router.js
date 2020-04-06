import Search from "./components/Buscador.vue";
import Error from "./navegation/Error.vue";
import About from "./navegation/About.vue";
import TrackDetail from "./navegation/TrackDetail.vue";

const routes = [
    { path: "/", component: Search, name: "search" },
    { path: '*', component: Error, name: "error" },
    { path: '/About', component: About, name: "about" },
    { path: '/track/:id', component: TrackDetail, name: "track" }
];

export default routes;

