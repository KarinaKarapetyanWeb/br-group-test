import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RollbackOutlined } from "@ant-design/icons";
import { Button } from "antd";
import useAppSelector from "../../hooks/use-app-selector";
import {
  getStory,
  getStoryError,
  getStoryLoading,
} from "../../store/reducers/story/selectors";
import ErrorMessage from "../../components/Common/ErrorMessage/ErrorMessage";
import Loader from "../../components/Common/Loader/Loader";
import { useActions } from "../../hooks/use-actions";
import styles from "./story.module.scss";
import StoryInfo from "../../components/StoryInfo/StoryInfo";

interface StoryProps {}

const Story: React.FunctionComponent<StoryProps> = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { fetchFullStory } = useActions();
  const story = useAppSelector(getStory);
  const isStoryLoading = useAppSelector(getStoryLoading);
  const isStoryError = useAppSelector(getStoryError);
  const showStory = !isStoryLoading && !isStoryError && story;

  useEffect(() => {
    if (id) {
      fetchFullStory(Number(id));
    }
  }, [id]);

  return (
    <div className="container">
      <Button className={styles.backBtn} onClick={() => navigate(-1)}>
        <RollbackOutlined /> Back
      </Button>
      {isStoryLoading && <Loader />}
      {isStoryError && (
        <ErrorMessage text="Some error have occured. Please try refresh the page." />
      )}
      {showStory && <StoryInfo story={story} />}
    </div>
  );
};

export default Story;
