const PrimaryCurators = () => (
  <div className="primaryCurators">
    <div className="primaryCuratorsName">
      <h5>КУРАТОР</h5>
    </div>
    <a className="cooking" href="/cooking">
      <div className="curatorsImg cookingImg">
        <img alt="cooking" src="./img/primaryCurators/img1.svg" />
      </div>
      <div className="curatorsName">Дмитрий Левов</div>
      <div className="curatorsDescription">Архитектор о современных тендециях сферы</div>
    </a>
    <a className="cosiness" href="/cosiness">
      <div className="curatorsImg cosinessImg">
        <img alt="cosiness" src="./img/primaryCurators/img2.svg" />
      </div>
      <div className="curatorsName">Мария Серединкова</div>
      <div className="curatorsDescription">Самый популярный шеф-повар страны делится кулинарными секретами </div>
    </a>
    <a className="fashion" href="/fashion">
      <div className="curatorsImg fashionImg">
        <img alt="fashion" src="./img/primaryCurators/img3.svg" />
      </div>
      <div className="curatorsName">Изольда Правова</div>
      <div className="curatorsDescription">Дизайнер одежды рассказывает про моду человеческим языком</div>
    </a>
  </div>
);

export default PrimaryCurators;
