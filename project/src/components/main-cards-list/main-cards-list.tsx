import { Offer, Offers } from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type MainCardsListProps = {
  offers: Offers;
}

function MainCardsList({ offers }: MainCardsListProps): JSX.Element {

  return (
    <>
      {offers.map((offer: Offer) => <PlaceCard offer={offer} key={offer.id} />)}
    </>
  );
}

export default MainCardsList;
