import { CalendarOutlined } from "@ant-design/icons";
import { Card, Space, Typography } from "antd";
import React from "react";
import { formatDate } from "../../utils/date";
import { Story } from "../../types/story";
import CommentsList from "../CommentsList/CommentsList";
import styles from "./StoryInfo.module.scss";

const { Title, Text, Paragraph } = Typography;

interface StoryInfoProps {
  story: Partial<Story>;
}

const StoryInfo: React.FunctionComponent<StoryInfoProps> = ({ story }) => {
  return (
    <Card
      title={
        story.time && (
          <Text type="secondary">
            <CalendarOutlined /> {formatDate(story.time)}
          </Text>
        )
      }
      extra={
        <a href={story.url} target="_blank" rel="noopener noreferrer">
          More
        </a>
      }
    >
      <Space align="center">
        <Title className={styles.title} level={2}>
          {story.title}
        </Title>
        <Text italic>by {story.by}</Text>
      </Space>
      {story.text && <Paragraph>{story.text}</Paragraph>}
      {!story.text && <Paragraph>Some description is missed</Paragraph>}
      <CommentsList commentsIds={story.kids} />
    </Card>
  );
};

export default StoryInfo;
