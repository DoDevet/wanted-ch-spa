const Route = ({ component, path }: { path: string; component: JSX.Element }) =>
  location.pathname === path && component;

export default Route;
