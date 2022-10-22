import React from "react";

const Dashboard = () => {
  const mockArr = [];
  for (let i = 0; i < 100; i++) {
    mockArr.push(`Placeholder -${i}`);
  }
  console.log(mockArr);

  return (
    <ul>
      {mockArr.map((e) => (
        <li key={e}>{e}</li>
      ))}
    </ul>
  );
};

export default Dashboard;
