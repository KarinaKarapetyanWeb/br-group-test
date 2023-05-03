import React from "react";
import { Story } from "../../types/story";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { formatDate } from "../../utils/date";

interface StoryItemProps {
  story: Story;
}

const StoryItem: React.FunctionComponent<StoryItemProps> = ({ story }) => {
  return (
    <Link to={`stories/${story.id}`}>
      <Card
        title="Story"
        size="small"
        hoverable
        extra={<p>{formatDate(story.time)}</p>}
        actions={[
          <span key={null}>by {story.by}</span>,
          <span key={null}>{story.descendants} comments</span>,
          <span key={null}>rating {story.score}</span>,
        ]}
      >
        {story.title}
      </Card>
    </Link>
  );
};

export default StoryItem;
