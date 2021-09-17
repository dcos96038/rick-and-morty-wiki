import { Card2 } from "../styles/styles";

const CardComponent = ({ list }) => {
  return (
    <Card2>
      <span>{list.name}</span>
      {list.air_date ? <span>{list.air_date}</span> : ""}
      <a>detalles</a>
    </Card2>
  );
};

export default CardComponent;
