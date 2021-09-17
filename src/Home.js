import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://miro.medium.com/max/3840/1*PM0PARQ8y7C1XhUyhCCFiQ.png"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Red Dice"
            price={"0.12 BTC"}
            image="https://th.bing.com/th/id/R.04f770b84292c183ad0656ed319928e4?rik=F9wU6Dj5F9%2bZvg&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f7ia%2foBj%2f7iaoBjnaT.jpeg&ehk=xi3GKRSHnv4OxUjpa6A%2fo%2fM12G628rTSrhlr%2bVNxtXw%3d&risl=&pid=ImgRaw&r=0"
          />
          <Product
            id="49538094"
            title="Blue Dice"
            price={"0.2 BTC"}
            image="https://m.media-amazon.com/images/I/6112ajBKekL._AC_UX679_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Blue Board"
            price={"0.01 BTC"}
            image="https://thumbs.dreamstime.com/z/game-dice-hundred-dollar-bills-blue-background-board-game-gambling-casino-concept-game-dice-hundred-dollar-bills-183565190.jpg"
          />
          <Product
            id="23445930"
            title="Red Board"
            price={"0.1 BTC"}
            image="https://thumbs.dreamstime.com/z/poker-cards-pocker-chips-money-pocker-dice-poker-cards-pocker-chips-money-pocker-dice-red-background-gambling-board-games-154811208.jpg"
          />

        </div>

        <div className="home__row">

        </div>
      </div>
    </div>
  );
}

export default Home;
