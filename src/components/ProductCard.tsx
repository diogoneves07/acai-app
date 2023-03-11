import React, { useState } from "react";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import type { IconButtonProps } from "@mui/material/IconButton";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductCard({
  title,
  imageLink,
  desc,
  price,
  createdAt,
}: any): JSX.Element {
  const [expanded, setExpanded] = useState(false);

  function handleExpandClick(): void {
    setExpanded(!expanded);
  }

  return (
    <Card
      sx={{
        width: 345,
        margin: "20px 30px",
        bgcolor: "#1c1b22",
        color: "#fff",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
      />
      <CardMedia
        component="img"
        height="194"
        image={typeof imageLink === "string" ? imageLink : ""}
        alt="Paella dish"
        sx={{ padding: "10px" }}
      />
      <CardContent>
        <Typography variant="body2">{title}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{ fill: "red" }} />
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Desc:</Typography>

          <Typography paragraph>{desc}</Typography>

          <Typography>{price}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
