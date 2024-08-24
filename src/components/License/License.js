import "./License.css";
import file from "../../files/Language of education.pdf";
import paidService from "../../files/PaidService.pdf";
import contract from "../../files/Contract.pdf";
import forms from "../../files/Form of education.pdf";
import grammar from "../../files/programm.pdf";

function License() {
  return (
    <section className="license">
      <h4 className="license__title">
        ЯЗЫКОВОЙ ЦЕНТР STRATFORD SCHOOL ВЕДЕТ ОБРАЗОВАТЕЛЬНУЮ ДЕЯТЕЛЬНОСТЬ В
        СООТВЕТСТВИИ С ПОЛУЧЕННОЙ ЛИЦЕНЗИЕЙ НА ОБРАЗОВАТЕЛЬНУЮ ДЕЯТЕЛЬНОСТЬ ОТ
        19 ИЮЛЯ 2023 г.<br></br>
        РЕГИСТРАЦИОННЫЙ НОМЕР: №Л035-01235-74/00664716.
      </h4>
      <div className="license__container">
        <figure className="license__figure">
          <figcaption className="license__caption">
            СЕРТИФИКАТ УСТАНОВЛЕННОГО ОБРАЗЦА
          </figcaption>
          <img
            className="license__scan"
            src="https://stratford-school.ru/images/%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82_%D0%9E%D0%91%D0%A0%D0%90%D0%97%D0%95%D0%A6.jpg"
            alt="скан сертификата"
          />
        </figure>
        <div className="license__description">
          <p className="license__caption">ОСНОВНЫЕ СВЕДЕНИЯ</p>
          <ul className="license__list">
            <li>
              <span className="license__span">Дата создания:</span>
              <p>26 сентября 2012 год.</p>
            </li>
            <li>
              <span className="license__span">
                Полное наименование образовательной организации:
              </span>
              <p>ИП Пляшкун Языковой Центр Stratford School</p>
            </li>
            <li>
              <span className="license__span">
                Руководитель образовательной организациии:
              </span>
              <p>Пляшкун Ирина Владимировна</p>
            </li>
            <li>
              <span className="license__span">
                Режим и график работы образовательной организации:
              </span>
              <p>
                Понедельник-пятница - 09:00-21:00 Суббота - 10:00-18:00
                Воскресенье - выходной
              </p>
            </li>
            <li>
              <span className="license__span">
                Контактные телефоны образовательной организации:
              </span>
              <p>8-(351)-750-51-81, 8-909-069-27-00</p>
            </li>
            <li>
              <span className="license__span">
                Адрес электронной почты образовательной организации:
              </span>
              <p>stratford.study@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
      <div>
      <h4 className="license__title">ОБРАЗОВАНИЕ</h4>
          <ul className="license__list">
            <li>
              Языковой центр "Stratford School" реализует образовательные
              программы:
              <span className="license__span">
                {" "}
                дополнительного образования детей и взрослых (дополнительные
                общеразвивающие программы)
              </span>
              <li>
                Обучение слушателей ведется на{" "}
                <a
                  className="license__download"
                  href={file}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  русском и английском языках
                </a>
              </li>
              <li>
                Образовательные услуги предоставляются на{" "}
                <a
                  className="license__download"
                  href={paidService}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  платной основе,
                </a>{" "}
                на основании заявок от физических и юридических лиц.
              </li>
              <li>
                Обучение проводится круглогодично по мере комплектования групп.
              </li>
              <li>
                Платные образовательные услуги предоставляются в соответствии с
                условиями заключенного{" "}
                <a
                  className="license__download"
                  href={contract}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  договора об оказании образовательных услуг.
                </a>
              </li>
              <li>
                <a
                  className="license__download"
                  href={forms}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Формы обучения
                </a>{" "}
                определяются языковым центром «Stratford School» самостоятельно:
                сетевые формы реализации образовательных программ, дистанционные
                образовательные технологии.
              </li>
              <li>
                Реализуемые программы дополнительного образования детей и
                взрослых:
                <a
                  className="license__download"
                  href={grammar}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Элементарная грамматика
                </a>
              </li>
            </li>
          </ul>
      </div>
    </section>
  );
}

export default License;
