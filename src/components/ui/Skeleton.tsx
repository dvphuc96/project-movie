import {
  AvatarProps,
  ImageProps,
  Skeleton as SkeletonAntd,
  SkeletonProps as SkeletonPropsAntd,
} from "antd";
import { SkeletonButtonProps } from "antd/es/skeleton/Button";
import { SkeletonInputProps } from "antd/es/skeleton/Input";

type SkeletonObject = {
  (props: SkeletonPropsAntd): JSX.Element;
  Avatar: React.FC<AvatarProps>;
  Button: React.FC<SkeletonButtonProps>;
  Input: React.FC<SkeletonInputProps>;
  Image: React.FC<ImageProps>;
};

export const Skeleton: SkeletonObject = (props) => {
  return <SkeletonAntd {...props} />;
};
Skeleton.Avatar = SkeletonAntd.Avatar;
Skeleton.Input = SkeletonAntd.Input;
Skeleton.Button = SkeletonAntd.Button;
Skeleton.Image = SkeletonAntd.Image;
