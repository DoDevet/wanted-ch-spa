export default function useRouter() {
  const push = (url: string) => {
    history.pushState("", "", url);
    dispatchEvent(new Event("popstate"));
  };
  return { push };
}
