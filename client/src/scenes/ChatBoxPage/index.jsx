import React, { useEffect, useState } from "react";
import LineChart from "../../components/dynamiclinechart.jsx"; // Adjust the import path as needed
import BarChart from "../../components/dynamicbarchart.jsx"; // Adjust the import path as needed
import PieChart from "../../components/dynamicpiechart.jsx";

const ChatboxPage = () => {
  console.log("Inside chatgpt");
  const [userQuery, setUserQuery] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [graphType, setGraphType] = useState("");
  const [graphData, setGraphData] = useState("");
  const [graphneeded, setgraphneeded] = useState(false);
  const [calculationneeded, setcalculationneeded] = useState(false);
  const [dbdata, setdbdata] = useState("");
  const [txt, settxt] = useState("");

  const handleUserQuery = async () => {
    // Send the user's query to the backend

    const response = await fetch("http://localhost:7000/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: userQuery }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Bruh Status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log(responseData);

    setGraphType(responseData.graphType);
    setGraphData(responseData.data); 
    setgraphneeded(responseData.graphneeded); 
    setcalculationneeded(responseData.calculationneeded); 
    setdbdata(responseData.data);

    if (graphneeded === true) {
      console.log("helos");
      settxt(responseData.response);
    } else if (calculationneeded === true) {
      console.log(responseData.data[0]);
      settxt(responseData.data[0]);
    } else {
      settxt("no response");
    }

    console.log("Here ", txt);
    console.log("Here2 ", responseData.data[0]);

    const updatedChatHistory = [
      ...chatHistory,
      { role: "user", content: userQuery },
      { role: "bot", content: JSON.stringify(responseData.data[0])  }, //JSON.stringify(responseData.data[0])
    ];

    // // Update the graph type and data

    setChatHistory(updatedChatHistory);
    setUserQuery("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleUserQuery();
    }
  };


  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top Half: Reserved space for the graph (customize styles as needed) */}
      <div
        style={{
          flex: 2,
          height: "490px",
          borderBottom: "1px solid #ccc",
          padding: "20px",
          overflow: "hidden",
          borderRadius: "10px",
          backgroundColor: "#141b2d",
        }}
      >
        {/* Conditionally render the graph based on graphneeded */}
        {graphneeded == true && graphType == "line" && (
          <LineChart data={graphData} />
        )}

        
        {graphneeded == true && graphType == "bar" && (
          <BarChart data={graphData} />
        )}
        
        {graphneeded == true && graphType == "pie" && (
          <PieChart data={graphData} />
        )}
      </div>

      {/* Bottom Half: User Query Input and Chat History */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          overflow: "auto",
          borderRadius: "10px",
          backgroundColor: "#141b2d",
        }}
      >
        {/* Chat History */}
        <div style={{ marginBottom: "20px" }}>
          {chatHistory.map((message, index) => (
            <div
              key={index}
              style={{
                marginBottom: "10px",
                textAlign: message.role === "user" ? "right" : "left",
                color: "white",
              }}
            >
              <span
                style={{
                  fontWeight: message.role === "user" ? "bold" : "normal",
                }}
              >
                {message.role === "user" ? "You: " : "Chatbot: "}
              </span>
              {message.content}
            </div>
          ))}
        </div>

        {/* User Query Input */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Type your query..."
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              flex: 1,
              marginRight: "10px",
              height: "40px",
              borderRadius: "5px",
              backgroundColor: "#fff",
              color: "#141b2d",
              border: "none",
              outline: "none",
              padding: "0 10px",
            }}
          />
          <button
            onClick={handleUserQuery}
            style={{
              height: "40px",
              borderRadius: "5px",
              backgroundColor: "#fff",
              color: "#141b2d",
              border: "none",
              outline: "none",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatboxPage;
