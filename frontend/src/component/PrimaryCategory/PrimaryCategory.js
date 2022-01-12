import { NavLink } from 'react-router-dom';
import './PrimaryCategory.scss';
import cooking from '../../common/img/primaryCategory/img1.png';
import cosines from '../../common/img/primaryCategory/img2.png';
import fashion from '../../common/img/primaryCategory/img3.png';

const PrimaryCategory = () => (
  <div id="primaryCategory" className="primaryCategory">
    <div className="primaryCategoryName">
      <h5>РУБРИКА</h5>
    </div>
    <NavLink className="category cooking" to="/cooking">
      <div className="categoryImg cookingImg">
        <img alt="cooking" src={cooking} />
      </div>
      <div className="categoryName">
        <h4>Кулинария</h4>
      </div>
      <div className="categoryDescription">
        <h2>Рецепты и не только</h2>
      </div>
    </NavLink>
    <a className="category cosiness" href="/cosines">
      <div className="categoryImg cosinessImg">
        <img alt="cosines" src={cosines} />
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
        <img alt="fashion" src={fashion} />
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
