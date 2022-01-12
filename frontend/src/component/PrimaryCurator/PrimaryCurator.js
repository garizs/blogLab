import './PrimaryCurator.scss';
import img1 from '../../common/img/primaryCurator/img1.png';
import img2 from '../../common/img/primaryCurator/img2.png';
import img3 from '../../common/img/primaryCurator/img3.png';

const PrimaryCurator = () => (
  <div id="primaryCurator" className="primaryCurator">
    <div className="primaryCuratorName">
      <h5>КУРАТОР</h5>
    </div>
    <a className="curator first" href="/curatorFirst">
      <div className="curatorImg firstImg">
        <img alt="first" src={img1} />
      </div>
      <div className="curatorName">
        <h4>Дмитрий Левов</h4>
      </div>
      <div className="curatorDescription">
        <h2>Архитектор о современных тендециях сферы</h2>
      </div>
    </a>
    <a className="curator second" href="/curatorSecond">
      <div className="curatorImg secondImg">
        <img alt="second" src={img2} />
      </div>
      <div className="curatorName">
        <h4>Мария Серединкова</h4>
      </div>
      <div className="curatorDescription">
        <h2>Самый популярный шеф-повар страны делится кулинарными секретами</h2>
      </div>
    </a>
    <a className="curator third" href="/curatorThird">
      <div className="curatorImg thirdImg">
        <img alt="third" src={img3} />
      </div>
      <div className="curatorName">
        <h4>Изольда Правова</h4>
      </div>
      <div className="curatorDescription">
        <h2>Дизайнер одежды рассказывает про моду человеческим языком</h2>
      </div>
    </a>
  </div>
);

export default PrimaryCurator;
