import { useState } from "react";
import { Layout, Card } from "antd";
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";

const { Content } = Layout;

function App() {
  const [results, setResults] = useState([]);

  return (
    <Layout style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "aquamarine" }}>
      <Content style={{ width: "100%", maxWidth: "500px", padding: "20px" }}>
        <Card
          title="Search"
          style={{
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
          
        >
          <SearchBar setResults={setResults} />
          {results && results.length > 0 && <SearchResultsList results={results} />}
        </Card>
      </Content>
    </Layout>
  );
}

export default App;
