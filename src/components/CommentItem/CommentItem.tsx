import React, { SetStateAction } from "react";
import he from "he";
import { Typography } from "antd";
import useAppSelector from "../../hooks/useAppSelector";
import { useActions } from "../../hooks/useActions";
import {
  getInnerComments,
  getInnerCommentsError,
  getInnerCommentsLoading,
} from "../../store/reducers/story/selectors";
import { Comment } from "../../types/comment";
import styles from "./CommentItem.module.scss";
import Loader from "../Common/Loader/Loader";
import ErrorMessage from "../Common/ErrorMessage/ErrorMessage";

const { Text, Paragraph, Link } = Typography;

interface CommentItemProps {
  comment: Comment;
  activeCommentId: number;
  setActiveCommentId: React.Dispatch<SetStateAction<number>>;
}

const CommentItem: React.FunctionComponent<CommentItemProps> = ({
  comment,
  activeCommentId,
  setActiveCommentId,
}) => {
  const { fetchInnerComments } = useActions();
  const innerComments = useAppSelector(getInnerComments);
  const isInnerCommentsLoading = useAppSelector(getInnerCommentsLoading);
  const isInnerCommentsError = useAppSelector(getInnerCommentsError);

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
    !isInnerCommentsLoading &&
    !isInnerCommentsError &&
    innerComments.length !== 0;

  return (
    <div key={comment.id}>
      <Paragraph className={styles.comment}>
        {he.encode(comment.text)}
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
          {isInnerCommentsLoading && <Loader />}
          {isInnerCommentsError && (
            <ErrorMessage text="Some error have occured while loading comments." />
          )}
          {showInnerComments &&
            innerComments.map((comment: Comment) => (
              <Paragraph key={comment.id} className={styles.innerComment}>
                {he.encode(comment.text)}
                <br />
                <Text italic strong>
                  {comment.by}
                </Text>
              </Paragraph>
            ))}
        </div>
      )}
    </div>
  );
};

export default CommentItem;
