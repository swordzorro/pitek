import React, { useRef } from "react";
import styles from "./Sprite.module.scss";

const ProjectSpritesheet = () => {
  const projectSpriteRef = useRef();
  return (
    <div className={styles.projectSpriteSheet} ref={projectSpriteRef}>
      <div className={styles.box}></div>
    </div>
  );
};

export default ProjectSpritesheet;
