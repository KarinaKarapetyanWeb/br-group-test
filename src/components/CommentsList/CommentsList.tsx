import React, { useEffect, useState } from "react";
import { CommentOutlined } from "@ant-design/icons";
import { Card, Space, Button } from "antd";
import ErrorMessage from "../Common/ErrorMessage/ErrorMessage";
import Loader from "../Common/Loader/Loader";
import useAppSelector from "../../hooks/useAppSelector";
import {
  getComments,
  getCommentsLoading,
  getCommentsError,
  getStory,
} from "../../store/reducers/story/selectors";
import { useActions } from "../../hooks/useActions";
import { Comment } from "../../types/comment";
import CommentItem from "../CommentItem/CommentItem";

interface CommentsListProps {}

const CommentsList: React.FunctionComponent<CommentsListProps> = () => {
  const { fetchComments } = useActions();
  const [activeCommentId, setActiveCommentId] = useState(0);
  const story = useAppSelector(getStory);
  const comments = useAppSelector(getComments);
  const isCommentsLoading = useAppSelector(getCommentsLoading);
  const isCommentsError = useAppSelector(getCommentsError);
  const showComments =
    !isCommentsLoading && !isCommentsError && comments.length !== 0;

  useEffect(() => {
    if (story && story.kids) {
      fetchComments(story.kids);
    }
  }, [story]);

  const handleRefreshCommentsClick = () => {
    if (story && story.kids) {
      fetchComments(story.kids);
    }
  };

  return (
    <Card
      type="inner"
      title={
        <Space>
          <CommentOutlined />
          Comments ({story?.descendants})
        </Space>
      }
      extra={
        <Button
          type="link"
          onClick={handleRefreshCommentsClick}
          disabled={story?.descendants === 0}
        >
          Refresh comments
        </Button>
      }
    >
      {isCommentsLoading && <Loader />}
      <Space direction="vertical" size="middle">
        {isCommentsError && (
          <ErrorMessage text="Some error have occured. Please try refresh comments." />
        )}
        {showComments &&
          comments.map((comment: Comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              activeCommentId={activeCommentId}
              setActiveCommentId={setActiveCommentId}
            />
          ))}
      </Space>
    </Card>
  );
};

export default CommentsList;
