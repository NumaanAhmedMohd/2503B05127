import { useState } from "react";

function App() {
  const [filter, setFilter] = useState("All");

  const notifications = [
    {
      ID: "1",
      Type: "Placement",
      Message: "TSMC hiring",
      Timestamp: "2026-06-17 16:14:16",
      viewed: false,
    },
    {
      ID: "2",
      Type: "Result",
      Message: "mid-sem",
      Timestamp: "2026-06-17 20:14:00",
      viewed: true,
    },
    {
      ID: "3",
      Type: "Event",
      Message: "traditional-day",
      Timestamp: "2026-06-18 01:43:12",
      viewed: false,
    },
  ];

  const priorityOrder = {
    Placement: 3,
    Result: 2,
    Event: 1,
  };

  const priorityNotifications = [...notifications]
    .sort((a, b) => priorityOrder[b.Type] - priorityOrder[a.Type])
    .slice(0, 10);

  const filteredNotifications =
    filter === "All"
      ? notifications
      : notifications.filter((n) => n.Type === filter);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Campus Notifications</h1>

      <h2>Filter Notifications</h2>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option>All</option>
        <option>Placement</option>
        <option>Result</option>
        <option>Event</option>
      </select>

      <h2>Priority Notifications</h2>

      {priorityNotifications.map((n) => (
        <div
          key={n.ID}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{n.Type}</h3>
          <p>{n.Message}</p>
          <p>{n.viewed ? "Viewed" : "New"}</p>
        </div>
      ))}

      <h2>All Notifications</h2>

      {filteredNotifications.map((n) => (
        <div
          key={n.ID}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{n.Type}</h3>
          <p>{n.Message}</p>
          <p>{n.viewed ? "Viewed" : "New"}</p>
        </div>
      ))}
    </div>
  );
}

export default App;