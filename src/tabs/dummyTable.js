import React from "react";

const data = [
  { id: 1, name: "John Doe", age: 28, occupation: "Developer" },
  { id: 2, name: "Jane Smith", age: 34, occupation: "Designer" },
  { id: 3, name: "Mike Johnson", age: 45, occupation: "Manager" },
];

export const DummyTable = () => {
  return (
    <div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid #000" }}>
            <th style={{ padding: "10px", textAlign: "left" }}>ID</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Name</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Age</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td style={{ padding: "10px" }}>{row.id}</td>
              <td style={{ padding: "10px" }}>{row.name}</td>
              <td style={{ padding: "10px" }}>{row.age}</td>
              <td style={{ padding: "10px" }}>{row.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
