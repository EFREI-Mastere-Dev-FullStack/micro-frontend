import {useState} from "react";

const ToggleText = ({ title }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible && <h1>{title}</h1>}
    </div>
  );
}

export default ToggleText;
