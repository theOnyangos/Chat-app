import { Stack } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";

const ChatLoading = () => {
  return (
    <div>
      <Stack>
        <Skeleton height={"60px"} />
        <Skeleton height={"60px"} />
        <Skeleton height={"60px"} />
        <Skeleton height={"60px"} />
        <Skeleton height={"60px"} />
        <Skeleton height={"60px"} />
        <Skeleton height={"60px"} />
        <Skeleton height={"60px"} />
        <Skeleton height={"60px"} />
        <Skeleton height={"60px"} />
        <Skeleton height={"60px"} />
      </Stack>
    </div>
  );
};

export default ChatLoading;
