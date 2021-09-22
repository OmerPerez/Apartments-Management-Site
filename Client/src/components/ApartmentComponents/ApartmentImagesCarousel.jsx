import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ApartmentImagesCarousel({ images }) {
  const classes = useStyles();

  if (images.length < 1) return "";

  return (
    <div className="col-10">
      <div className={classes.root}>
        <ImageList rowHeight="250" className={classes.imageList} cols={3.5}>
          {images.map((image, key) => (
            <ImageListItem
              key={`https://drive.google.com/uc?export=view&id=${image}`}
            >
              <img
                src={`https://drive.google.com/uc?export=view&id=${image}`}
                alt={""}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));
