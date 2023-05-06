import React from "react";
import StoriesList from "../../components/StoriesList/StoriesList";
import { Button, Typography } from "antd";
import styles from "./stories.module.scss";
import { useGetAllStoriesQuery } from "../../services/newsApi";
import { MAX_STORIES_COUNT } from "../../const";

const { Title } = Typography;

interface StoriesProps {}

const Stories: React.FunctionComponent<StoriesProps> = () => {
  const {
    data: storiesIds,
    isError,
    isFetching,
    refetch,
  } = useGetAllStoriesQuery(MAX_STORIES_COUNT, {
    pollingInterval: 60000,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
  });

  const handleRefreshBtnClick = () => refetch();

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <Title className={styles.title} level={2}>
          Stories
        </Title>
        <Button
          type="primary"
          loading={isFetching}
          onClick={handleRefreshBtnClick}
        >
          {isFetching ? "Refreshing..." : "Refresh"}
        </Button>
      </div>

      <StoriesList
        storiesIds={storiesIds}
        isStoriesIdsLoading={isFetching}
        isStoriesIdsError={isError}
      />
    </div>
  );
};

export default Stories;
