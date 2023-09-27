import { Avatar as AvatarAntd, AvatarProps as AvatarPropsAntd } from "antd";
import { GroupProps } from "antd/es/avatar";

type AvatarObject = {
  (props: AvatarPropsAntd): JSX.Element;
  Group: React.FC<GroupProps>;
};
export const Avatar: AvatarObject = (props) => {
  return <AvatarAntd {...props} />;
};
Avatar.Group = AvatarAntd.Group;
