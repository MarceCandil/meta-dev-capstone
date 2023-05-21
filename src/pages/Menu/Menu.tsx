import Card from 'components/Card/Card';
import { SPECIALS } from 'helpers/statics';

function MenuPage() {

  return (
    <section className="menu">
      <section className="wrapper">
        <section className="menu-category">
          {SPECIALS.map((special) => (
             <Card key={special.title} img={special.img} title={special.title} price={special.price} description={special.description}/>)
          )}
        </section>
      </section>
    </section>
  );
}
export default MenuPage;