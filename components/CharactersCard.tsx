import { Card, StyledImage } from "../styles/styles";

const CharactersCard = ({ character }) => {
  return (
    <Card>
      <StyledImage
        src={character.image}
        alt={character.name}
        width={250}
        height={215}
      />
      <h2>{character.name}</h2>
      <h4>{character.species}</h4>
    </Card>
  );
};

export default CharactersCard;
