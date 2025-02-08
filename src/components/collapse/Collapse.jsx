import { useState } from "react";

import "./collapse.scss";

const Collapse = ({ item }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="collapseContent">
      <div className="collapse" onClick={() => setIsCollapsed(!isCollapsed)}>
        {item.title}
        <i
          className={`fa-solid fa-chevron-up ${
            isCollapsed ? "rotateBottom" : "rotateTop"
          }`}
        ></i>
      </div>
      <div className={isCollapsed ? "textOpen" : "textClose"}>
        {Array.isArray(item.content) ? (
          <ul>
            {item.content.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        ) : (
          <p>{item.content}</p>
        )}
      </div>
    </div>
  );
};






export default Collapse;
