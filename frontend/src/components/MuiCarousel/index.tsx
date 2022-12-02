import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";

export const MuiCarousel = () => {
  var items = [
    {
      link: "https://media-cdn.tripadvisor.com/media/photo-s/03/01/e0/c5/art-restaurant.jpg",
    },
  ];

  return (
    <Carousel
      height="290px"
      activeIndicatorIconButtonProps={{
        style: {
          color: "red",
        },
      }}
    >
      {items.map((item, i) => (
        <Box height="100%" width="100%" component="img" src={item.link} key={i} />
      ))}
    </Carousel>
  );
};
