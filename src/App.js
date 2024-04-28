import NeshanMap from "./components/NeshanMap";

function App() {
  return (
    <div className="App">
      <NeshanMap
        options={{
          key: 'web.YPxFbDFt9ZSJ71EwC3t8p6HQBgeYwnKfLG6xftri',
          center: [35.699739, 51.338097],
          zoom: 13
        }}
      />
    </div>
  );
}

export default App;
