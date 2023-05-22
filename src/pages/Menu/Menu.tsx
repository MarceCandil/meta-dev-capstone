import Card from 'components/Card/Card';
import { SPECIALS } from 'helpers/statics';
import './Menu.css';

function MenuPage() {

  return (
    <section className="menu__container">
      <h1>Menu</h1>
      <section className='menu wrapper'>
        {SPECIALS.map((special) => (
            <Card key={special.title} img={special.img} title={special.title} price={special.price} description={special.description}/>)
        )}
      </section>
    </section>
  );
}
export default MenuPage;