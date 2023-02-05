import { Skeleton } from "@mui/material";
import React from "react";

export const PageSkeleton = () => {
  return (
    <>
      <Skeleton variant="rectangular" height={50} sx={{ marginBottom: 1 }} />
      <Skeleton variant="rectangular" height={60} sx={{ marginBottom: 1 }} />
      <Skeleton variant="rectangular" height={30} sx={{ margin: 2 }} />
      <Skeleton variant="rectangular" height={200} sx={{ margin: 2 }} />
    </>
  );
};
