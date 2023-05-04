import React, { useEffect } from "react";
import { useActions } from "../../hooks/use-actions";
import StoriesList from "../../components/StoriesList/StoriesList";
import { REFRESH_TIMEOUT } from "../../const";
import { Button, Typography } from "antd";
import { getStoriesLoading } from "../../store/reducers/stories/selectors";
import useAppSelector from "../../hooks/use-app-selector";
import styles from "./stories.module.scss";

const { Title } = Typography;

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
        <Title className={styles.title} level={2}>
          Stories
        </Title>
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
