import React from "react";
import { TStory } from "types";
import style from "./Story.module.css";
const Story: React.FC<{ item: TStory }> = ({ item }) => {
  return (
    <div className={style.story}>
      {item.image ? (
        <div
          className={style["story-image"]}
          style={{
            background: `url(${item.image})`,
            borderColor: item.id > 2 ? "#D7EEFE" : "black",
          }}
        />
      ) : (
        <div className={style["story-image_disabled"]}></div>
      )}
      {item.name ? (
        <p className={style["story-name"]}>{item.name}</p>
      ) : (
        <div className={style["story-name_disabled"]}></div>
      )}
    </div>
  );
};

export default Story;
