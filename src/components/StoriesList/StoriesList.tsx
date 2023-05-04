import React, { useMemo } from "react";
import { Story } from "../../types/story";
import { Card } from "antd";
import { MOCK_DATA_LENGTH } from "../../const";
import styles from "./StoriesList.module.scss";
import useAppSelector from "../../hooks/use-app-selector";
import {
  getStories,
  getStoriesError,
  getStoriesLoading,
} from "../../store/reducers/stories/selectors";
import ErrorMessage from "../Common/ErrorMessage/ErrorMessage";
import StoryItem from "../StoryItem/StoryItem";

interface StoriesListProps {}

const StoriesList: React.FunctionComponent<StoriesListProps> = () => {
  const stories = useAppSelector(getStories);
  const isStoriesLoading = useAppSelector(getStoriesLoading);
  const isStoriesError = useAppSelector(getStoriesError);
  const showData = !isStoriesLoading && !isStoriesError && stories.length !== 0;

  const mockData = useMemo(() => new Array(MOCK_DATA_LENGTH).fill(""), []);

  return (
    <div className={styles.list}>
      {isStoriesLoading &&
        mockData.map((_el: string, index: number) => (
          <Card loading={true} key={index}></Card>
        ))}
      {isStoriesError && (
        <ErrorMessage text="Sorry, some error have occured. Please try later." />
      )}
      {showData &&
        stories.map((story: Story) => (
          <StoryItem key={story.id} story={story} />
        ))}
    </div>
  );
};

export default StoriesList;
