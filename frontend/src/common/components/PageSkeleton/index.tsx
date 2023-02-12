import { Box, Skeleton } from "@mui/material";

export const PageSkeleton = () => {
  return (
    <Box marginTop="10px">
      <Skeleton variant="circular" height={50} width={50} />
      <Skeleton variant="rectangular" height={60} sx={{ m: "10px 0" }} />
      <Skeleton variant="rectangular" height={50} sx={{ m: "10px 0" }} />
      <Skeleton variant="rectangular" height={50} sx={{ m: "10px 0" }} />
      <Skeleton variant="rectangular" height={50} sx={{ m: "10px 0" }} />
      <Skeleton variant="rectangular" height={50} sx={{ m: "10px 0" }} />
      <Skeleton variant="rectangular" height={50} sx={{ m: "10px 0" }} />
    </Box>
  );
};
