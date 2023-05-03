import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import StoriesList from "../../components/StoriesList/StoriesList";
import { REFRESH_TIMEOUT } from "../../const";
import { Button } from "antd";
import { getStoriesLoading } from "../../store/reducers/stories/selectors";
import useAppSelector from "../../hooks/useAppSelector";
import styles from "./Stories.module.scss";

interface StoriesProps {}

const Stories: React.FunctionComponent<StoriesProps> = () => {
  const { fetchStories } = useActions();

  const isStoriesLoading = useAppSelector(getStoriesLoading);

  useEffect(() => {
    fetchStories();

    const interval = setInterval(() => fetchStories(), REFRESH_TIMEOUT);

    return () => clearInterval(interval);
  }, []);

  const handleRefreshBtnClick = () => fetchStories();

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <h2>Stories</h2>
        <Button
          type="primary"
          loading={isStoriesLoading}
          onClick={handleRefreshBtnClick}
        >
          {isStoriesLoading ? "Refreshing..." : "Refresh"}
        </Button>
      </div>

      <StoriesList />
    </div>
  );
};

export default Stories;
