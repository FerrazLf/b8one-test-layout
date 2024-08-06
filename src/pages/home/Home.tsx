import "./home.css";

import ProductCard from "../../components/ProductCard/ProductCard";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home__content">
          <ProductCard />
        </div>
      </div>
    </>
  );
}

export default Home;
