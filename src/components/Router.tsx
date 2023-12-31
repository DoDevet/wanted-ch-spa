import { useEffect, useState } from "react";

const Router = ({ children }: { children: React.ReactNode }) => {
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    const handleSetPath = () => setPath(location.pathname);
    addEventListener("popstate", handleSetPath);
    return () => removeEventListener("popstate", handleSetPath);
  }, []);

  return Array.isArray(children)
    ? children.map((route: React.ReactElement<{ path: string }>) => {
        if (route.props.path === path) return route;
      })
    : children;
};
export default Router;
