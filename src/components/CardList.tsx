import Card from "./Card";
import { GitHubCard } from '../App';

type CardListProps = {
  cards: GitHubCard[];
}

const CardList = (props: CardListProps) => (
  <div id="container" className="mt-10">
    {props.cards.map((card) => (
      <Card {...card} />
    ))}
  </div>
);

export default CardList;