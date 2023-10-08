import NumberList from "./NumberList";
import "./styles.css";
import styled from "styled-components";
import { Hot } from "@styled-icons/boxicons-solid";

export default function App() {
  const BlueHot = styled(Hot)`
    color: blue;
    width: 50px;
    height: 50px;
  `;

  return (
    <div className="App">
      <div className="Title-wrapper">
        <BlueHot />
        <h1>Eden</h1>
      </div>
      <div>
        <NumberList />
      </div>
    </div>
  );
}
