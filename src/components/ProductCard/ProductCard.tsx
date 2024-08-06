import { useState } from "react";

import "./productCard.css";
import producuCardImage from "./../../assets/productCard.png";
import wishlistImage from "./../../assets/wishlist.png";

const productArray = [
  {
    id: 1,
    imgSrc: producuCardImage,
    title:
      "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
    price: 2599.00,
    description: "em até 10x de R$ 259,90 sem juros",
  },
  {
    id: 2,
    imgSrc: producuCardImage,
    title:
      "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
    price: 2599.00,
    description: "em até 10x de R$ 259,90 sem juros",
  },
];

function ProductCard() {
  const [addedProducts, setAddedProducts] = useState<number[]>([]);
  const [wishlistProducts, setWishlistProducts] = useState<number[]>([]);

  const handleAddClick = (id: number) => {
    setAddedProducts((prevState) => {
      if (prevState.includes(id)) {
        return prevState.filter((productId) => productId !== id);
      } else {
        return [...prevState, id];
      }
    });
  };

  const handleWishlistClick = (id: number) => {
    setWishlistProducts((prevState) => {
      if (prevState.includes(id)) {
        return prevState.filter((productId) => productId !== id);
      } else {
        return [...prevState, id];
      }
    });
  };

  const isProductAdded = (id: number) => addedProducts.includes(id);
  const isProductInWishlist = (id: number) => wishlistProducts.includes(id);

  return (
    <div className="product-card__container">
      {productArray.map((item) => (
        <div key={item.id} className="product-card__item">
          <div className="product-card__image">
            <img src={item.imgSrc} alt={item.title} />
          </div>

          <div className="product-card__title">
            <h3>{item.title}</h3>
          </div>
          <div className="product-card__price">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(item.price)}
          </div>

          <div className="product-card__description">
            <h3>{item.description}</h3>
          </div>

          <div className="product-card__buttons">
            <button
              className={`product-card__button ${
                isProductAdded(item.id) ? "added" : ""
              }`}
              onClick={() => handleAddClick(item.id)}
            >
              {isProductAdded(item.id) ? "Adicionado" : "Adicionar"}
            </button>

            <button
              className={`wishlist-button ${
                isProductInWishlist(item.id) ? "favorited" : ""
              }`}
              onClick={() => handleWishlistClick(item.id)}
            >
              <img src={wishlistImage} alt="Wishlist Icon" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
