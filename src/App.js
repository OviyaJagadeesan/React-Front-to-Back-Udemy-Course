import React,{useState} from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeebackData from "./data/FeedbackData";
import Card from "./components/shared/Card";

function App() {
  const [feedback, setFeedback] = useState(FeebackData);
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
