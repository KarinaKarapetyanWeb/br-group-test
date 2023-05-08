import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { formatDate } from "../../utils/date";
import { useGetStoryQuery } from "../../services/newsApi";
import ErrorMessage from "../Common/ErrorMessage/ErrorMessage";

interface StoryItemProps {
  storyId: number;
}

const StoryItem: React.FunctionComponent<StoryItemProps> = ({ storyId }) => {
  const {
    data: story,
    isFetching: isStoryItemLoading,
    isError: isStoryItemError,
  } = useGetStoryQuery(storyId, {
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
  });

  const showStoryItem =
    !isStoryItemLoading && !isStoryItemError && story && !story.deleted;

  return (
    <>
      {isStoryItemLoading && <Card loading={true}></Card>}
      {isStoryItemError && (
        <ErrorMessage text="Sorry, some error have occured. Please try later." />
      )}
      {showStoryItem && (
        <Link to={`stories/${story.id}`}>
          <Card
            title="Story"
            size="small"
            hoverable
            extra={story.time && <p>{formatDate(story.time)}</p>}
            actions={[
              <span key={null}>by {story.by}</span>,
              <span key={null}>{story.descendants} comments</span>,
              <span key={null}>rating {story.score}</span>,
            ]}
          >
            {story.title}
          </Card>
        </Link>
      )}
    </>
  );
};

export default StoryItem;
