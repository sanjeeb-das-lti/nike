import {
  CustomerReviews, Footer, Hero, PopularProducts,
  Services, SpecialOffer, Subscribe, SuperQuality
} from "./sections";
import Nav from "./components/Nav";
import Nav2 from "./components/Nav2";

const App = () => {
  return (
    <main className="relative">
      <Nav2 />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x py-16 sm:py-32 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  )
};

export default App;