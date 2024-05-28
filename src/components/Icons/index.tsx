import React from "react";
import {
  StyledIconLink,
  StyledIconFileLines,
  StyledIconCircleChevronRight,
  StyledIconHeart,
  StyledIconThumbsUp,
  StyledIconsShareNodes,
  StyledIconStar,
  StyledIconThumbTack,
  StyledIconSun,
  StyledIconMoon,
  StyledIconCirclePlus,
} from "./styles";

type IconComponentProps = {
  className?: string;
};

type IconComponent = React.ComponentType<IconComponentProps>;

const createIconComponent = (Component: IconComponent) => () => <Component />;

export const IconLink = createIconComponent(StyledIconLink);
export const IconFileLines = createIconComponent(StyledIconFileLines);
export const IconCircleChevronRight = createIconComponent(
  StyledIconCircleChevronRight
);
export const IconHeart = createIconComponent(StyledIconHeart);
export const IconLike = createIconComponent(StyledIconThumbsUp);
export const IconShare = createIconComponent(StyledIconsShareNodes);
export const IconStar = createIconComponent(StyledIconStar);
export const IconThumbTack = createIconComponent(StyledIconThumbTack);
export const IconSun = createIconComponent(StyledIconSun);
export const IconMoon = createIconComponent(StyledIconMoon);
export const IconCirclePlus = createIconComponent(StyledIconCirclePlus);
