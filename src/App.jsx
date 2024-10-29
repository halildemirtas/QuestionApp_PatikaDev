import {QuestionCounter} from "./question/Question";
import "./App.css";
import {Timer} from "./question/Question"
import Question from "./question/Question";

function App() {
  return (
    <>
      <div className="app-container">
        <div className="header-container">
          <QuestionCounter />
        </div>
        <Question />
      </div>
    </>
  );
}

export default App;
