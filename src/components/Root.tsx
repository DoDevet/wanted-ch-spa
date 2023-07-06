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
