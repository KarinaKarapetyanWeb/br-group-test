import * as StoriesActionCreators from "./reducers/stories/action";
import * as StoryActionCreators from "./reducers/story/action";
import Stories from "./reducers/stories";
import Story from "./reducers/story";

const allActionCreators = {
  ...StoriesActionCreators,
  ...Stories.actions,
  ...StoryActionCreators,
  ...Story.actions,
};

export default allActionCreators;
