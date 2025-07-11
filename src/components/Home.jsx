import "./Home.css"
export default function Home({ name, age }) {
  let id = 3453566;
  return (
    <>
      <h1 style={{ backgroundColor: "orange",color:"blue" }}>
        Hello {name}. You are {age} years old.
      </h1>
      <h2 className="App-Home-Header">Your Student Id is {id}</h2>
      <p>This is a paragraph</p>
    </>
  );
}
