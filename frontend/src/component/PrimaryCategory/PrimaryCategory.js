import './PrimaryCategory.scss';

const PrimaryCategory = () => (
  <div id="primaryCategory" className="primaryCategory">
    <div className="primaryCategoryName">
      <h5>РУБРИКА</h5>
    </div>
    <a className="category cooking" href="/cooking">
      <div className="categoryImg cookingImg">
        <img alt="cooking" src="./img/primaryCategory/img1.png" />
      </div>
      <div className="categoryName">
        <h4>Кулинария</h4>
      </div>
      <div className="categoryDescription">
        <h2>Рецепты и не только</h2>
      </div>
    </a>
    <a className="category cosiness" href="/cosines">
      <div className="categoryImg cosinessImg">
        <img alt="cosines" src="./img/primaryCategory/img2.png" />
      </div>
      <div className="categoryName">
        <h4>Уют</h4>
      </div>
      <div className="categoryDescription">
        <h2>Лайфхаки для дома</h2>
      </div>
    </a>
    <a className="category fashion" href="/fashion">
      <div className="categoryImg fashionImg">
        <img alt="fashion" src="./img/primaryCategory/img3.png" />
      </div>
      <div className="categoryName">
        <h4>Мода</h4>
      </div>
      <div className="categoryDescription">
        <h2>Последние новости</h2>
      </div>
    </a>
  </div>
);

export default PrimaryCategory;
