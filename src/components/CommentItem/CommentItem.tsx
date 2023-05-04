import React, { useState } from "react";
import { Typography } from "antd";
import { Comment, Comments } from "../../types/comment";
import styles from "./CommentItem.module.scss";
import Loader from "../Common/Loader/Loader";
import ErrorMessage from "../Common/ErrorMessage/ErrorMessage";
import axios from "axios";
import { BACKEND_URL } from "../../const";

const { Text, Paragraph, Link } = Typography;

interface CommentItemProps {
  comment: Comment;
}

const CommentItem: React.FunctionComponent<CommentItemProps> = ({
  comment,
}) => {
  const [activeCommentId, setActiveCommentId] = useState(0);
  const [comments, setComments] = useState<Comments>([]);
  const [isCommentsLoading, setIsCommentsLoading] = useState(false);
  const [isCommentsError, setIsCommentsError] = useState(false);

  const fetchInnerComments = async (ids: number[]) => {
    try {
      setIsCommentsLoading(true);
      setIsCommentsError(false);
      const results = await Promise.all(
        ids.map(async (id: number) => {
          const res = await axios.get(`${BACKEND_URL}/item/${id}.json`);
          console.log(res.data);
          return res.data;
        })
      );

      setComments(results);
    } catch {
      setIsCommentsError(true);
      setIsCommentsLoading(false);
    } finally {
      setIsCommentsLoading(false);
    }
  };

  const handleShowAnswersClick = (
    evt: React.SyntheticEvent<HTMLElement>,
    ids: number[]
  ) => {
    evt.preventDefault();
    const id = Number(evt.currentTarget?.dataset?.id) as number;
    fetchInnerComments(ids);
    setActiveCommentId((prev: number) => (prev === id ? 0 : id));
  };

  const showInnerComments =
    !isCommentsLoading && !isCommentsError && comments.length !== 0;

  return (
    <div key={comment.id}>
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
              onClick={(evt) =>
                handleShowAnswersClick(evt, comment.kids as number[])
              }
            >
              {activeCommentId === comment.id ? "Hide answers" : "Show answers"}
            </Link>
          )}
        </span>
      </Paragraph>

      {activeCommentId === comment.id && (
        <div className={styles.innerComments}>
          {isCommentsLoading && <Loader />}
          {isCommentsError && (
            <ErrorMessage text="Some error have occured while loading comments." />
          )}
          {showInnerComments &&
            comments.map((comment: Comment) => (
              <CommentItem comment={comment} key={comment.id} />
            ))}
        </div>
      )}
    </div>
  );
};

export default CommentItem;
