import React, { useState } from "react";
import { Skeleton, Space, Typography } from "antd";
import styles from "./CommentItem.module.scss";
import ErrorMessage from "../Common/ErrorMessage/ErrorMessage";
import { useGetCommentQuery } from "../../services/newsApi";

const { Text, Paragraph, Link } = Typography;

interface CommentItemProps {
  commentId: number;
}

const CommentItem: React.FunctionComponent<CommentItemProps> = ({
  commentId,
}) => {
  const {
    data: comment,
    isFetching: isCommentLoading,
    isError: isCommentError,
    refetch,
  } = useGetCommentQuery(commentId);

  const [activeCommentId, setActiveCommentId] = useState(0);

  const handleShowAnswersClick = (evt: React.SyntheticEvent<HTMLElement>) => {
    evt.preventDefault();
    const id = Number(evt.currentTarget?.dataset?.id) as number;
    setActiveCommentId((prev: number) => (prev === id ? 0 : id));
  };

  const showComment =
    !isCommentLoading && !isCommentError && comment && !comment.deleted;

  return (
    <>
      {isCommentLoading && (
        <Skeleton.Button active size="small" shape="square" block />
      )}
      {isCommentError && (
        <ErrorMessage text="Some error have occured while loading comment." />
      )}
      {showComment && (
        <div>
          <Paragraph className={styles.comment}>
            {comment.text}
            <span className={styles.info}>
              <Text italic strong>
                {comment.by}
              </Text>
              {comment.kids && (
                <Link
                  className={styles.link}
                  href="#"
                  data-id={comment.id}
                  onClick={(evt) => handleShowAnswersClick(evt)}
                >
                  {activeCommentId === comment.id
                    ? "Hide answers"
                    : "Show answers"}
                </Link>
              )}
            </span>
          </Paragraph>

          {activeCommentId === comment.id && comment.kids && (
            <Space
              direction="vertical"
              size="middle"
              className={styles.innerComments}
            >
              {comment.kids?.map((id: number) => (
                <CommentItem commentId={id} key={id} />
              ))}
            </Space>
          )}
        </div>
      )}
    </>
  );
};

export default CommentItem;
