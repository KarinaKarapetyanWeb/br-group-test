import dayjs from "dayjs";

const formatDate = (date: number) => dayjs.unix(date).format("DD.MM.YY HH:mm");

export { formatDate };
