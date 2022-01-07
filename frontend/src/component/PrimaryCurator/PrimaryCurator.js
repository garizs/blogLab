import './PrimaryCurator.scss';

const PrimaryCurator = () => (
  <div className="primaryCurator">
    <div className="primaryCuratorName">
      <h5>КУРАТОР</h5>
    </div>
    <a className="first" href="/first">
      <div className="curatorImg firstImg">
        <img alt="first" src="./img/primaryCurator/img1.png" />
      </div>
      <div className="curatorName">Дмитрий Левов</div>
      <div className="curatorDescription">Архитектор о современных тендециях сферы</div>
    </a>
    <a className="second" href="/second">
      <div className="curatorImg secondImg">
        <img alt="second" src="./img/primaryCurator/img2.png" />
      </div>
      <div className="curatorName">Мария Серединкова</div>
      <div className="curatorDescription">Самый популярный шеф-повар страны делится кулинарными секретами </div>
    </a>
    <a className="third" href="/third">
      <div className="curatorImg thirdImg">
        <img alt="third" src="./img/primaryCurator/img3.png" />
      </div>
      <div className="curatorName">Изольда Правова</div>
      <div className="curatorDescription">Дизайнер одежды рассказывает про моду человеческим языком</div>
    </a>
  </div>
);

export default PrimaryCurator;
