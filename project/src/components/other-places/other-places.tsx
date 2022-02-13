import OtherPlacesCard from '../other-places-card/other-places-card';

function OtherPlaces(): JSX.Element {

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        <OtherPlacesCard />
        <OtherPlacesCard />
        <OtherPlacesCard />
      </div>
    </section>
  );
}

export default OtherPlaces;
