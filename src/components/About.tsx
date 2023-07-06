import useRouter from "../hooks/useRouter";

function About() {
  const { push } = useRouter();
  return (
    <div className="card">
      <p>about</p>
      <button onClick={() => push("/")}>Go main</button>
    </div>
  );
}
export default About;
