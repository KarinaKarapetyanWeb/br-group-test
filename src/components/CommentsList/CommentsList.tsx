import React from "react";
import { CommentOutlined } from "@ant-design/icons";
import { Button, Card, Space } from "antd";
import CommentItem from "../CommentItem/CommentItem";
import { CommentIds } from "../../types/comment";
import styles from "./CommentsList.module.scss";

interface CommentsListProps {
  commentsIds: CommentIds | undefined;
}

const CommentsList: React.FunctionComponent<CommentsListProps> = ({
  commentsIds,
}) => {
  const showComments = commentsIds && commentsIds.length !== 0;

  //   const refreshComments = (refresh: () => void) => {
  //     refresh();
  //   };

  //   const handleRefreshCommentsClick = () => {
  //     refreshComments();
  //   };

  return (
    <Card
      type="inner"
      title={
        <Space>
          <CommentOutlined />
          Comments ({commentsIds?.length || 0})
        </Space>
      }
      //   extra={
      //     <Button
      //       type="link"
      //       onClick={handleRefreshCommentsClick}
      //       disabled={story?.descendants === 0}
      //     >
      //       Refresh comments
      //     </Button>
      //   }
    >
      <Space className={styles.list} direction="vertical" size="middle">
        {showComments &&
          commentsIds.map((commentId: number) => (
            <CommentItem key={commentId} commentId={commentId} />
          ))}
      </Space>
    </Card>
  );
};

export default CommentsList;
