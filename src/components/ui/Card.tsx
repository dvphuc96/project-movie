// compound component
import { Card as CardAntd, CardProps as CardPropsAntd } from "antd";
import { CardGridProps, CardMetaProps } from "antd/es/card";

type CardObject = {
  (props: CardPropsAntd): JSX.Element;
  Meta: React.FC<CardMetaProps>;
  Grid: React.FC<CardGridProps>;
};
export const Card: CardObject = (props) => {
  return <CardAntd {...props} />;
};
Card.Meta = CardAntd.Meta;
Card.Grid = CardAntd.Grid;
