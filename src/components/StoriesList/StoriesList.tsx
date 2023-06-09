import React, { useMemo } from "react";
import cn from "classnames";
import { StoriesIds } from "../../types/story";
import { Card } from "antd";
import { MOCK_DATA_LENGTH } from "../../const";
import styles from "./StoriesList.module.scss";
import ErrorMessage from "../Common/ErrorMessage/ErrorMessage";
import StoryItem from "../StoryItem/StoryItem";

interface StoriesListProps {
  storiesIds: StoriesIds | undefined;
  isStoriesIdsLoading: boolean;
  isStoriesIdsError: boolean;
  isStoriesIdsReloading: boolean;
}

const StoriesList: React.FunctionComponent<StoriesListProps> = ({
  storiesIds,
  isStoriesIdsLoading,
  isStoriesIdsError,
  isStoriesIdsReloading,
}) => {
  const showData = !isStoriesIdsLoading && !isStoriesIdsError && storiesIds;
  const mockData = useMemo(() => new Array(MOCK_DATA_LENGTH).fill(""), []);

  return (
    <div
      className={cn(styles.list, {
        [styles.loading]: isStoriesIdsReloading,
      })}
    >
      {isStoriesIdsLoading &&
        mockData.map((_el: string, index: number) => (
          <Card loading={true} key={index}></Card>
        ))}
      {isStoriesIdsError && (
        <ErrorMessage text="Sorry, some error have occured. Please try later." />
      )}
      {showData &&
        storiesIds.map((storyId: number) => (
          <StoryItem storyId={storyId} key={storyId} />
        ))}
    </div>
  );
};

export default StoriesList;
