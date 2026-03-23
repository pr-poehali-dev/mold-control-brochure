const Index = () => {
  return (
    <div className="booklet-wrapper">
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #e8e4df;
          font-family: 'IBM Plex Sans', sans-serif;
        }

        .booklet-wrapper {
          background: #e8e4df;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 40px 20px;
          gap: 32px;
        }

        .booklet-title-area {
          text-align: center;
          color: #2c2820;
        }

        .booklet-title-area .label {
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #7a6f63;
          font-weight: 500;
          margin-bottom: 8px;
        }

        .booklet-title-area h1 {
          font-family: 'IBM Plex Serif', serif;
          font-size: 22px;
          font-weight: 600;
          color: #2c2820;
          line-height: 1.3;
        }

        .booklet-a4 {
          width: 297mm;
          height: 210mm;
          background: #faf8f5;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          box-shadow: 0 8px 40px rgba(0,0,0,0.13);
          position: relative;
          overflow: hidden;
        }

        .panel {
          padding: 18mm 13mm;
          border-right: 0.5px solid #d5cfc7;
          display: flex;
          flex-direction: column;
          gap: 14px;
          position: relative;
        }

        .panel:last-child {
          border-right: none;
        }

        .panel-cover {
          background: #2c2820;
          color: #faf8f5;
          justify-content: space-between;
        }

        .cover-top .school-info {
          font-size: 7.5px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #a09282;
          line-height: 1.8;
          font-weight: 300;
        }

        .cover-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 20px;
        }

        .cover-icon {
          font-size: 52px;
          line-height: 1;
        }

        .cover-label {
          font-size: 8px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #7a6f63;
          font-weight: 500;
        }

        .cover-title {
          font-family: 'IBM Plex Serif', serif;
          font-size: 22px;
          font-weight: 600;
          line-height: 1.25;
          color: #faf8f5;
        }

        .cover-title span {
          color: #c4a87a;
        }

        .cover-subtitle {
          font-size: 10px;
          color: #a09282;
          line-height: 1.6;
          font-weight: 300;
          border-top: 0.5px solid #3d3830;
          padding-top: 12px;
          margin-top: 4px;
        }

        .cover-bottom {
          font-size: 7.5px;
          color: #5a5248;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .cover-bottom .year {
          font-family: 'IBM Plex Serif', serif;
          font-size: 18px;
          color: #3d3830;
          font-weight: 600;
        }

        .section-label {
          font-size: 7.5px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #a09282;
          font-weight: 500;
        }

        .section-title {
          font-family: 'IBM Plex Serif', serif;
          font-size: 13px;
          font-weight: 600;
          color: #2c2820;
          line-height: 1.3;
          border-bottom: 1.5px solid #2c2820;
          padding-bottom: 7px;
          margin-bottom: 2px;
        }

        .section-intro {
          font-size: 8.5px;
          color: #4a4238;
          line-height: 1.65;
          font-style: italic;
          font-family: 'IBM Plex Serif', serif;
        }

        .reason-list {
          display: flex;
          flex-direction: column;
          gap: 9px;
          margin-top: 2px;
        }

        .reason-item {
          display: flex;
          gap: 9px;
          align-items: flex-start;
        }

        .reason-num {
          width: 18px;
          height: 18px;
          min-width: 18px;
          background: #2c2820;
          color: #faf8f5;
          font-size: 7.5px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin-top: 1px;
        }

        .reason-text strong {
          display: block;
          font-size: 8.5px;
          font-weight: 600;
          color: #2c2820;
          margin-bottom: 2px;
        }

        .reason-text span {
          font-size: 7.5px;
          color: #6a5e54;
          line-height: 1.55;
        }

        .signs-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .sign-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          background: #f3efe9;
          padding: 7px 9px;
          border-radius: 4px;
          border-left: 2.5px solid #c4a87a;
        }

        .sign-emoji {
          font-size: 14px;
          line-height: 1;
          margin-top: 1px;
        }

        .sign-text strong {
          display: block;
          font-size: 8px;
          font-weight: 600;
          color: #2c2820;
          margin-bottom: 2px;
        }

        .sign-text span {
          font-size: 7.5px;
          color: #6a5e54;
          line-height: 1.5;
        }

        .divider {
          width: 100%;
          height: 0.5px;
          background: #d5cfc7;
          margin: 4px 0;
        }

        .booklet-back {
          width: 297mm;
          height: 210mm;
          background: #faf8f5;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          box-shadow: 0 8px 40px rgba(0,0,0,0.13);
          overflow: hidden;
        }

        .storage-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .storage-item {
          display: flex;
          gap: 9px;
          align-items: flex-start;
        }

        .storage-icon {
          font-size: 15px;
          line-height: 1;
          margin-top: 1px;
          min-width: 20px;
        }

        .storage-text strong {
          display: block;
          font-size: 8.5px;
          font-weight: 600;
          color: #2c2820;
          margin-bottom: 2px;
        }

        .storage-text span {
          font-size: 7.5px;
          color: #6a5e54;
          line-height: 1.55;
        }

        .tips-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .tip-item {
          display: flex;
          gap: 8px;
          align-items: flex-start;
        }

        .tip-dot {
          width: 5px;
          height: 5px;
          min-width: 5px;
          background: #c4a87a;
          border-radius: 50%;
          margin-top: 5px;
        }

        .tip-text {
          font-size: 7.5px;
          color: #4a4238;
          line-height: 1.6;
        }

        .tip-text strong {
          color: #2c2820;
          font-weight: 600;
        }

        .panel-back-cover {
          background: #f3efe9;
          justify-content: space-between;
        }

        .fact-box {
          background: #2c2820;
          color: #faf8f5;
          padding: 14px;
          border-radius: 6px;
        }

        .fact-box .fact-label {
          font-size: 7px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #c4a87a;
          font-weight: 500;
          margin-bottom: 6px;
        }

        .fact-box p {
          font-family: 'IBM Plex Serif', serif;
          font-size: 8.5px;
          line-height: 1.65;
          color: #d5cfc7;
          font-style: italic;
        }

        .back-cover-bottom {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .author-info {
          font-size: 7px;
          color: #7a6f63;
          line-height: 1.8;
        }

        .prevention-items {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .prev-item {
          background: #faf8f5;
          border-radius: 5px;
          padding: 8px 10px;
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }

        .prev-emoji {
          font-size: 16px;
          line-height: 1;
        }

        .prev-text strong {
          display: block;
          font-size: 8.5px;
          font-weight: 600;
          color: #2c2820;
          margin-bottom: 2px;
        }

        .prev-text span {
          font-size: 7.5px;
          color: #6a5e54;
          line-height: 1.55;
        }

        .warning-bar {
          background: #f5e6c8;
          border: 1px solid #e8c97a;
          border-radius: 5px;
          padding: 8px 10px;
          display: flex;
          align-items: flex-start;
          gap: 8px;
          margin-top: 4px;
        }

        .warning-bar .warn-icon {
          font-size: 13px;
        }

        .warning-bar p {
          font-size: 7.5px;
          color: #5a4a1a;
          line-height: 1.55;
        }

        .warning-bar strong {
          font-weight: 600;
        }

        .page-hint {
          font-size: 11px;
          color: #7a6f63;
          text-align: center;
          letter-spacing: 0.05em;
        }

        @media print {
          .booklet-wrapper { padding: 0; background: white; gap: 0; }
          .booklet-a4, .booklet-back { box-shadow: none; page-break-after: always; width: 297mm; height: 210mm; }
          .booklet-title-area, .page-hint { display: none; }
        }
      `}</style>

      <div className="booklet-title-area">
        <div className="label">Школьный проект · 7 класс · Биология</div>
        <h1>Плесень на хлебе — буклет-памятка</h1>
      </div>

      {/* ЛИЦЕВАЯ СТОРОНА */}
      <div className="page-hint">— Лицевая сторона —</div>
      <div className="booklet-a4">

        {/* Панель 1 — Обложка */}
        <div className="panel panel-cover">
          <div className="cover-top">
            <div className="school-info">
              Исследовательский проект<br/>
              Биология · 7 класс<br/>
              2025–2026 учебный год
            </div>
          </div>
          <div className="cover-main">
            <div className="cover-icon">🍞</div>
            <div>
              <div className="cover-label">Буклет-памятка</div>
              <div className="cover-title">
                Плесень<br/>на <span>хлебе</span>
              </div>
            </div>
            <div className="cover-subtitle">
              Причины появления, признаки заражения
              и правила правильного хранения хлеба
              в домашних условиях
            </div>
          </div>
          <div className="cover-bottom">
            <div>
              Подготовлено<br/>в рамках проекта<br/>по биологии
            </div>
            <div className="year">2026</div>
          </div>
        </div>

        {/* Панель 2 — Что такое плесень */}
        <div className="panel">
          <div className="section-label">Раздел 01</div>
          <div className="section-title">Что такое плесень?</div>
          <div className="section-intro">
            Плесень — это микроскопические грибки, споры которых постоянно присутствуют в воздухе вокруг нас.
          </div>
          <div className="reason-list">
            <div style={{ fontSize: '7.5px', color: '#4a4238', lineHeight: 1.65 }}>
              При попадании на влажную и питательную среду — например, на хлеб — споры прорастают и образуют колонии, которые видны как пушистый налёт серого, зелёного или чёрного цвета.
            </div>
            <div className="divider" />
            <div style={{ fontFamily: "'IBM Plex Serif', serif", fontSize: '8.5px', fontStyle: 'italic', color: '#5a5248', lineHeight: 1.6 }}>
              «Плесень на хлебе — это не просто косметический дефект. Грибки выделяют токсины (микотоксины), опасные для здоровья человека.»
            </div>
            <div className="divider" />
            <div style={{ fontSize: '8.5px', fontWeight: 600, color: '#2c2820', marginBottom: '4px' }}>
              Распространённые виды:
            </div>
            <div className="signs-grid">
              <div className="sign-item">
                <div className="sign-emoji">⚫</div>
                <div className="sign-text">
                  <strong>Aspergillus niger</strong>
                  <span>Чёрная плесень — самый частый вид на хлебе</span>
                </div>
              </div>
              <div className="sign-item">
                <div className="sign-emoji">🟢</div>
                <div className="sign-text">
                  <strong>Penicillium</strong>
                  <span>Зелёная плесень — выделяет антибиотик пенициллин</span>
                </div>
              </div>
              <div className="sign-item">
                <div className="sign-emoji">⬜</div>
                <div className="sign-text">
                  <strong>Rhizopus stolonifer</strong>
                  <span>Белый пушистый налёт, быстро распространяется</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Панель 3 — Причины */}
        <div className="panel">
          <div className="section-label">Раздел 02</div>
          <div className="section-title">Причины появления плесени</div>
          <div className="section-intro">
            Для роста плесени необходимы определённые условия — устраните их, и хлеб сохранится дольше.
          </div>
          <div className="reason-list">
            <div className="reason-item">
              <div className="reason-num">1</div>
              <div className="reason-text">
                <strong>Повышенная влажность</strong>
                <span>Споры прорастают при влажности выше 70–80%. Влажный хлеб — идеальная среда.</span>
              </div>
            </div>
            <div className="reason-item">
              <div className="reason-num">2</div>
              <div className="reason-text">
                <strong>Тепло и комнатная температура</strong>
                <span>Оптимальная температура для роста — 20–30°C, это обычная температура кухни.</span>
              </div>
            </div>
            <div className="reason-item">
              <div className="reason-num">3</div>
              <div className="reason-text">
                <strong>Споры в воздухе</strong>
                <span>Споры грибков постоянно присутствуют в воздухе и оседают на поверхность.</span>
              </div>
            </div>
            <div className="reason-item">
              <div className="reason-num">4</div>
              <div className="reason-text">
                <strong>Хранение в полиэтиленовом пакете</strong>
                <span>Задерживает влагу и создаёт «парниковый эффект» — идеальные условия для грибка.</span>
              </div>
            </div>
            <div className="reason-item">
              <div className="reason-num">5</div>
              <div className="reason-text">
                <strong>Контакт с заражённым хлебом</strong>
                <span>Споры переходят от заплесневелого куска к свежему при хранении рядом.</span>
              </div>
            </div>
            <div className="reason-item">
              <div className="reason-num">6</div>
              <div className="reason-text">
                <strong>Отсутствие консервантов</strong>
                <span>Домашний хлеб без добавок плесневеет значительно быстрее магазинного.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ОБОРОТНАЯ СТОРОНА */}
      <div className="page-hint">— Оборотная сторона —</div>
      <div className="booklet-back">

        {/* Панель 4 — Признаки */}
        <div className="panel">
          <div className="section-label">Раздел 03</div>
          <div className="section-title">Признаки заплесневелого хлеба</div>
          <div className="section-intro">
            Как распознать, что хлеб испорчен, прежде чем его есть?
          </div>
          <div className="signs-grid">
            <div className="sign-item">
              <div className="sign-emoji">👁️</div>
              <div className="sign-text">
                <strong>Видимый налёт</strong>
                <span>Пятна белого, серого, зелёного или чёрного цвета на поверхности хлеба</span>
              </div>
            </div>
            <div className="sign-item">
              <div className="sign-emoji">👃</div>
              <div className="sign-text">
                <strong>Неприятный запах</strong>
                <span>Кислый, затхлый или землистый запах — грибки выделяют летучие вещества</span>
              </div>
            </div>
            <div className="sign-item">
              <div className="sign-emoji">🤚</div>
              <div className="sign-text">
                <strong>Изменение текстуры</strong>
                <span>Хлеб становится липким, слишком мягким или необычно крошится</span>
              </div>
            </div>
            <div className="sign-item">
              <div className="sign-emoji">🎨</div>
              <div className="sign-text">
                <strong>Цветные пятна в мякише</strong>
                <span>Тёмные или цветные пятна внутри указывают на глубокое заражение</span>
              </div>
            </div>
          </div>
          <div className="warning-bar">
            <div className="warn-icon">⚠️</div>
            <p><strong>Важно!</strong> Нельзя срезать плесень и есть оставшуюся часть — невидимый мицелий грибка проникает глубоко в мякиш. Весь хлеб необходимо выбросить.</p>
          </div>
        </div>

        {/* Панель 5 — Хранение */}
        <div className="panel">
          <div className="section-label">Раздел 04</div>
          <div className="section-title">Правильное хранение хлеба</div>
          <div className="section-intro">
            Простые правила позволяют сохранить хлеб свежим в 2–3 раза дольше обычного.
          </div>
          <div className="storage-grid">
            <div className="storage-item">
              <div className="storage-icon">🫙</div>
              <div className="storage-text">
                <strong>Хлебница с вентиляцией</strong>
                <span>Деревянная хлебница с отверстиями поддерживает нужный уровень влажности и даёт хлебу «дышать»</span>
              </div>
            </div>
            <div className="storage-item">
              <div className="storage-icon">❄️</div>
              <div className="storage-text">
                <strong>Холодильник или морозилка</strong>
                <span>При +4°C плесень почти не растёт. Нарезанный хлеб можно замораживать порциями до 3 месяцев</span>
              </div>
            </div>
            <div className="storage-item">
              <div className="storage-icon">🧺</div>
              <div className="storage-text">
                <strong>Тканевый или бумажный пакет</strong>
                <span>Натуральные материалы не задерживают влагу, в отличие от полиэтилена</span>
              </div>
            </div>
            <div className="storage-item">
              <div className="storage-icon">🌡️</div>
              <div className="storage-text">
                <strong>Прохладное место</strong>
                <span>Оптимальная температура — 15–18°C. Не храните рядом с плитой или батареей</span>
              </div>
            </div>
            <div className="storage-item">
              <div className="storage-icon">🔪</div>
              <div className="storage-text">
                <strong>Нарезайте только перед едой</strong>
                <span>Нарезанный хлеб теряет влагу быстрее и плесневеет интенсивнее целой буханки</span>
              </div>
            </div>
          </div>
        </div>

        {/* Панель 6 — Профилактика + задняя обложка */}
        <div className="panel panel-back-cover">
          <div>
            <div className="section-label">Разделы 05–06</div>
            <div className="section-title">Профилактика и советы</div>
          </div>
          <div className="prevention-items">
            <div className="prev-item">
              <div className="prev-emoji">🫧</div>
              <div className="prev-text">
                <strong>Мойте хлебницу регулярно</strong>
                <span>Раз в неделю протирайте уксусом или раствором соды — уничтожает споры грибка</span>
              </div>
            </div>
            <div className="prev-item">
              <div className="prev-emoji">🧂</div>
              <div className="prev-text">
                <strong>Мешочек с солью</strong>
                <span>Небольшой мешочек соли в хлебнице впитывает лишнюю влагу из воздуха</span>
              </div>
            </div>
            <div className="prev-item">
              <div className="prev-emoji">🍏</div>
              <div className="prev-text">
                <strong>Долька яблока</strong>
                <span>Помогает сохранить мягкость хлеба и немного задержать его черствение</span>
              </div>
            </div>
          </div>
          <div className="fact-box">
            <div className="fact-label">Интересный факт</div>
            <p>
              Плесень Penicillium была открыта Александром Флемингом в 1928 году случайно — на заражённой чашке Петри. Это открытие привело к созданию пенициллина и спасло миллионы жизней.
            </p>
          </div>
          <div className="back-cover-bottom">
            <div className="tips-list">
              <div className="tip-item">
                <div className="tip-dot" />
                <div className="tip-text"><strong>Покупайте меньше, но чаще</strong> — свежий хлеб лучше хранится</div>
              </div>
              <div className="tip-item">
                <div className="tip-dot" />
                <div className="tip-text"><strong>Не храните разные виды хлеба</strong> вместе без разделителя</div>
              </div>
              <div className="tip-item">
                <div className="tip-dot" />
                <div className="tip-text"><strong>Проветривайте кухню</strong> — снижает концентрацию спор в воздухе</div>
              </div>
            </div>
            <div className="author-info">
              Исследовательский проект по биологии<br/>
              7 класс · 2025–2026 учебный год<br/>
              <span style={{ color: '#c4a87a', fontWeight: 600 }}>Берегите здоровье — выбирайте свежее 🍞</span>
            </div>
          </div>
        </div>
      </div>

      <div className="page-hint">Для печати: Ctrl+P → A4 → горизонтальная ориентация → без полей</div>
    </div>
  );
};

export default Index;
