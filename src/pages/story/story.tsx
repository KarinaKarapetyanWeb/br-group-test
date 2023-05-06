import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RollbackOutlined } from "@ant-design/icons";
import { Button } from "antd";
import ErrorMessage from "../../components/Common/ErrorMessage/ErrorMessage";
import Loader from "../../components/Common/Loader/Loader";
import styles from "./story.module.scss";
import StoryInfo from "../../components/StoryInfo/StoryInfo";
import { useGetStoryQuery } from "../../services/newsApi";

interface StoryProps {}

const Story: React.FunctionComponent<StoryProps> = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    data: story,
    isFetching: isStoryLoading,
    isError: isStoryError,
  } = useGetStoryQuery(Number(id) || 0, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  const showStory = !isStoryLoading && !isStoryError && story;

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
