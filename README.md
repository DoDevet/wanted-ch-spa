
# Router
```jsx
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
```
Router에서 children들의 props 정보를 볼 수 있다.
Router children들의 props 중에서 
path prop이 location.pathname과 일치하는 children을 리턴하는 형식으로 구현하였다.

# Route
```jsx
const Route = ({ component, path }: { path: string; component: JSX.Element }) =>
  location.pathname === path && component;
export default Route;
```
굳이 path를 활용하지 않고 component를 리턴해도 되지만 안쓰긴 좀 그래서 사용했다.

# useRouter
```jsx
export default function useRouter() {
  const push = (url: string) => {
    history.pushState("", "", url);
    dispatchEvent(new Event("popstate"));
  };
  return { push };
```
push함수가 동작하면 pushState로 url을 변경하고
dispatchEvent로 popState 이벤트를 발생시켜 
Router에서 추가한 EventListener가 반응할 수 있게 구현하였다.

# Page Component
```jsx
import useRouter from "../hooks/useRouter";

function Root() {
  const { push } = useRouter();
  return (
    <div className="card">
      <p>root</p>
      <button onClick={() => push("about")}>About</button>
    </div>
  );
}
export default Root;
```
