import "./assets/App.css";
import module from "./assets/App.module.css";
import "./assets/App.scss";

const App = () => {
  return (
    <>
      {/* 인라인 스타일*/}
      <div style={{
        backgroundColor: "blue",
        color: "white",
        textAlign: "center"
      }}
      >
        <h1>Inline Style</h1>
      </div>

      {/* CSS 파일 */}
      <div className="css-style">
        <h1>CSS File Style</h1>
      </div>

      {/* CSS 모듈 */}
      <div className={module.moduleStyle}>
        <h1>CSS Moudule Style</h1>
      </div>

      {/* SCSS */}
      <div className="scss-style">
        <h1>SCSS Style</h1>
      </div>
    </>
  );
};
export default App;