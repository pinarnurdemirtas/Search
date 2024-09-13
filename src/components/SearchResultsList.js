import { List, Card } from "antd";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="container" style={{ maxWidth: "400px", margin: "auto" }}>
      <List
        grid={{
          gutter: 16,
          column: 1,
        }}
        dataSource={results}
        renderItem={(result) => (
          <List.Item>
            <Card title={result.name} bordered={false}>
              {result.email}<br></br>
              {result.phone}
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};
