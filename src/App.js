import FeatureA from "./components/FeatureA/FeatureA";

function App() {
  return (
    <div className="border rounded bg-green-300 m-4 p-4 ">
    <h1 className="text-3xl font-bold text-center">
    Hello, I'm the Main Branch for Production.
    </h1>
    <FeatureA />
    </div>
  );
}

export default App;
