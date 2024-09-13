import { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="container" style={{ maxWidth: "400px", margin: "auto" }}>
      <Input
        placeholder="Type to search..."
        prefix={<SearchOutlined />}
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      />
    </div>
  );
};
