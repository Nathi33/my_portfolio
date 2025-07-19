import React, { useRef, useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";

const SkillBar = ({ label, value }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <div ref={ref} className={`skill-bar-container ${visible ? "visible" : ""}`}>
        <li className="skills-list-li">{label}</li>
        <ProgressBar 
            now={visible ? value : 0} 
            className="animated-progress" 
        />
    </div>
  );
};

export default SkillBar;
