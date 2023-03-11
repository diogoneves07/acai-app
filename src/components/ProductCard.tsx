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

interface ProductCardProps {
  name: string;
  imageLink: string;
  desc: string;
  cardWidth?: number;
  onChoose?: () => void;
  isSelected?: boolean;
}

export default function ProductCard({
  name,
  imageLink,
  desc,
  cardWidth = 345,
  isSelected = false,
  onChoose,
}: ProductCardProps): JSX.Element {
  const [expanded, setExpanded] = useState(false);

  function handleGetProductClick(): void {
    if (onChoose !== undefined) onChoose();
  }

  function handleExpandClick(): void {
    setExpanded(!expanded);
  }

  return (
    <Card
      sx={{
        width: cardWidth,
        margin: "20px 30px",
        bgcolor: "#1c1b22",
        color: "#fff",
        cursor: "pointer",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{
              bgcolor: "purple",
            }}
            aria-label="recipe"
          >
            {name.trim()[0]}
          </Avatar>
        }
        title={name}
      />
      <CardMedia
        component="img"
        height="194"
        image={typeof imageLink === "string" ? imageLink : ""}
        alt="Paella dish"
        sx={{ padding: "10px" }}
      />

      <CardActions disableSpacing>
        <IconButton
          onClick={handleGetProductClick}
          aria-label="Adicionar ao pedido"
        >
          <FavoriteIcon sx={{ fill: isSelected ? "red" : "white" }} />
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
          <Typography paragraph>{desc}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
