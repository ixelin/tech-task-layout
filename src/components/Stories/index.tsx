import { useAppSelector } from 'app/hooks'
import Story from './Story';
import style from "./Stories.module.css"
const Stories = () => {
  const stories = useAppSelector((state) => state.storiesSlice.stories)
  return (
    <div className={style.stories}>
      {stories.map((story) => (
        <Story key={story.id} item={story}/>
      ))}
    </div>
  );
}

export default Stories