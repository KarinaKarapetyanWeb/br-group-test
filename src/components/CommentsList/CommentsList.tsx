import React, { useState } from "react";
import { CommentOutlined } from "@ant-design/icons";
import { Button, Card, Space } from "antd";
import CommentItem from "../CommentItem/CommentItem";
import { CommentIds } from "../../types/comment";
import styles from "./CommentsList.module.scss";

interface CommentsListProps {
  commentsIds: CommentIds | undefined;
  commentsCount: number;
}

const CommentsList: React.FunctionComponent<CommentsListProps> = ({
  commentsIds,
  commentsCount,
}) => {
  const [forceRefreshComments, setForceRefreshComments] = useState(0);
  const showComments = commentsIds && commentsIds.length !== 0;

  const handleRefreshCommentsClick = () => {
    setForceRefreshComments((prev) => ++prev);
  };

  return (
    <Card
      type="inner"
      title={
        <Space>
          <CommentOutlined />
          Comments ({commentsIds?.length || 0})
        </Space>
      }
      extra={
        <Button
          type="link"
          onClick={handleRefreshCommentsClick}
          disabled={commentsCount === 0}
        >
          Refresh comments
        </Button>
      }
    >
      <Space className={styles.list} direction="vertical" size="middle">
        {showComments &&
          commentsIds.map((commentId: number) => (
            <CommentItem
              key={commentId}
              commentId={commentId}
              reload={forceRefreshComments}
            />
          ))}
      </Space>
    </Card>
  );
};

export default CommentsList;
