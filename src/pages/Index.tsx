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
          overflow: hidden;
        }

        .panel {
          padding: 16mm 12mm;
          border-right: 0.5px solid #d5cfc7;
          display: flex;
          flex-direction: column;
          gap: 10px;
          overflow: hidden;
        }

        .panel:last-child { border-right: none; }

        .panel-cover {
          background: #2c2820;
          color: #faf8f5;
          justify-content: space-between;
        }

        .cover-top .school-info {
          font-size: 7px;
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
          gap: 16px;
        }

        .cover-bread {
          width: 48px;
          height: 32px;
          background: #c4a87a;
          border-radius: 50% 50% 8px 8px;
          position: relative;
        }

        .cover-bread::after {
          content: '';
          position: absolute;
          top: -6px;
          left: 8px;
          width: 32px;
          height: 14px;
          background: #d4b88a;
          border-radius: 50%;
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

        .cover-title span { color: #c4a87a; }

        .cover-subtitle {
          font-size: 9.5px;
          color: #a09282;
          line-height: 1.6;
          font-weight: 300;
          border-top: 0.5px solid #3d3830;
          padding-top: 10px;
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
          font-size: 7px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #a09282;
          font-weight: 500;
        }

        .section-title {
          font-family: 'IBM Plex Serif', serif;
          font-size: 12.5px;
          font-weight: 600;
          color: #2c2820;
          line-height: 1.3;
          border-bottom: 1.5px solid #2c2820;
          padding-bottom: 6px;
        }

        .section-intro {
          font-size: 8px;
          color: #4a4238;
          line-height: 1.6;
          font-style: italic;
          font-family: 'IBM Plex Serif', serif;
        }

        .reason-list {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .reason-item {
          display: flex;
          gap: 8px;
          align-items: flex-start;
        }

        .reason-num {
          width: 16px;
          height: 16px;
          min-width: 16px;
          background: #2c2820;
          color: #faf8f5;
          font-size: 7px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin-top: 1px;
        }

        .reason-text strong {
          display: block;
          font-size: 8px;
          font-weight: 600;
          color: #2c2820;
          margin-bottom: 2px;
        }

        .reason-text span {
          font-size: 7px;
          color: #6a5e54;
          line-height: 1.5;
        }

        .signs-grid {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .sign-item {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          background: #f3efe9;
          padding: 6px 8px;
          border-radius: 3px;
          border-left: 2.5px solid #c4a87a;
        }

        .sign-dot {
          width: 10px;
          height: 10px;
          min-width: 10px;
          border-radius: 50%;
          margin-top: 2px;
        }

        .sign-dot-black { background: #2c2820; }
        .sign-dot-green { background: #5a8a4a; }
        .sign-dot-white { background: #d5cfc7; border: 1px solid #b0a898; }
        .sign-dot-eye { background: #c4a87a; }
        .sign-dot-nose { background: #8a6a5a; }
        .sign-dot-hand { background: #d4a888; }
        .sign-dot-spot { background: #7a5a3a; }

        .sign-text strong {
          display: block;
          font-size: 7.5px;
          font-weight: 600;
          color: #2c2820;
          margin-bottom: 2px;
        }

        .sign-text span {
          font-size: 7px;
          color: #6a5e54;
          line-height: 1.45;
        }

        .divider {
          width: 100%;
          height: 0.5px;
          background: #d5cfc7;
          margin: 2px 0;
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
          gap: 7px;
        }

        .storage-item {
          display: flex;
          gap: 8px;
          align-items: flex-start;
        }

        .storage-mark {
          width: 18px;
          height: 18px;
          min-width: 18px;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 7px;
          font-weight: 700;
          color: #faf8f5;
          margin-top: 1px;
        }

        .storage-text strong {
          display: block;
          font-size: 8px;
          font-weight: 600;
          color: #2c2820;
          margin-bottom: 2px;
        }

        .storage-text span {
          font-size: 7px;
          color: #6a5e54;
          line-height: 1.5;
        }

        .tips-list {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .tip-item {
          display: flex;
          gap: 7px;
          align-items: flex-start;
        }

        .tip-dot {
          width: 5px;
          height: 5px;
          min-width: 5px;
          background: #c4a87a;
          border-radius: 50%;
          margin-top: 4px;
        }

        .tip-text {
          font-size: 7px;
          color: #4a4238;
          line-height: 1.55;
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
          padding: 12px;
          border-radius: 4px;
        }

        .fact-box .fact-label {
          font-size: 6.5px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #c4a87a;
          font-weight: 500;
          margin-bottom: 5px;
        }

        .fact-box p {
          font-family: 'IBM Plex Serif', serif;
          font-size: 8px;
          line-height: 1.6;
          color: #d5cfc7;
          font-style: italic;
        }

        .back-cover-bottom {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .author-info {
          font-size: 7px;
          color: #7a6f63;
          line-height: 1.8;
        }

        .author-info span {
          color: #c4a87a;
          font-weight: 600;
        }

        .prevention-items {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .prev-item {
          background: #faf8f5;
          border-radius: 4px;
          padding: 7px 9px;
          display: flex;
          gap: 9px;
          align-items: flex-start;
        }

        .prev-mark {
          width: 18px;
          height: 18px;
          min-width: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          font-weight: 700;
          color: #faf8f5;
          margin-top: 1px;
          background: #5a7a5a;
        }

        .prev-text strong {
          display: block;
          font-size: 8px;
          font-weight: 600;
          color: #2c2820;
          margin-bottom: 2px;
        }

        .prev-text span {
          font-size: 7px;
          color: #6a5e54;
          line-height: 1.5;
        }

        .warning-bar {
          background: #f5e6c8;
          border: 1px solid #e8c97a;
          border-radius: 4px;
          padding: 7px 9px;
          display: flex;
          align-items: flex-start;
          gap: 7px;
          margin-top: 3px;
        }

        .warn-mark {
          width: 14px;
          height: 14px;
          min-width: 14px;
          background: #c4a87a;
          color: #2c2820;
          font-size: 8px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin-top: 1px;
          flex-shrink: 0;
        }

        .warning-bar p {
          font-size: 7px;
          color: #5a4a1a;
          line-height: 1.55;
        }

        .warning-bar strong { font-weight: 600; }

        .page-hint {
          font-size: 11px;
          color: #7a6f63;
          text-align: center;
          letter-spacing: 0.05em;
        }

        .print-btn {
          background: #2c2820;
          color: #faf8f5;
          border: none;
          padding: 12px 32px;
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          border-radius: 4px;
          cursor: pointer;
        }

        @media print {
          @page { size: A4 landscape; margin: 0; }
          html, body { margin: 0 !important; padding: 0 !important; background: white !important; }
          .booklet-wrapper {
            padding: 0 !important;
            background: white !important;
            gap: 0 !important;
            display: block !important;
            min-height: unset !important;
          }
          .booklet-a4, .booklet-back {
            box-shadow: none !important;
            page-break-after: always !important;
            break-after: page !important;
            width: 297mm !important;
            height: 210mm !important;
            overflow: hidden !important;
            display: grid !important;
            grid-template-columns: 1fr 1fr 1fr !important;
          }
          .booklet-title-area, .page-hint, .print-btn { display: none !important; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
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
            <div className="cover-bread" />
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
            <div style={{ fontSize: '7px', color: '#4a4238', lineHeight: 1.6 }}>
              При попадании на влажную и питательную среду — например, на хлеб — споры прорастают и образуют колонии, которые видны как пушистый налёт серого, зелёного или чёрного цвета.
            </div>
            <div className="divider" />
            <div style={{ fontFamily: "'IBM Plex Serif', serif", fontSize: '8px', fontStyle: 'italic', color: '#5a5248', lineHeight: 1.55 }}>
              «Грибки выделяют токсины (микотоксины), опасные для здоровья человека — это не просто косметический дефект.»
            </div>
            <div className="divider" />
            <div style={{ fontSize: '8px', fontWeight: 600, color: '#2c2820', marginBottom: '3px' }}>
              Распространённые виды:
            </div>
            <div className="signs-grid">
              <div className="sign-item">
                <div className="sign-dot sign-dot-black" />
                <div className="sign-text">
                  <strong>Aspergillus niger</strong>
                  <span>Чёрная плесень — самый частый вид на хлебе</span>
                </div>
              </div>
              <div className="sign-item">
                <div className="sign-dot sign-dot-green" />
                <div className="sign-text">
                  <strong>Penicillium</strong>
                  <span>Зелёная плесень — выделяет антибиотик пенициллин</span>
                </div>
              </div>
              <div className="sign-item">
                <div className="sign-dot sign-dot-white" />
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
            {[
              ['Повышенная влажность', 'Споры прорастают при влажности выше 70–80%. Влажный хлеб — идеальная среда.'],
              ['Тепло и комнатная температура', 'Оптимальная температура для роста — 20–30°C, это обычная температура кухни.'],
              ['Споры в воздухе', 'Споры грибков постоянно присутствуют в воздухе и оседают на поверхность.'],
              ['Хранение в полиэтиленовом пакете', 'Задерживает влагу и создаёт «парниковый эффект» — идеальные условия для грибка.'],
              ['Контакт с заражённым хлебом', 'Споры переходят от заплесневелого куска к свежему при хранении рядом.'],
              ['Отсутствие консервантов', 'Домашний хлеб без добавок плесневеет значительно быстрее магазинного.'],
            ].map(([title, desc], i) => (
              <div className="reason-item" key={i}>
                <div className="reason-num">{i + 1}</div>
                <div className="reason-text">
                  <strong>{title}</strong>
                  <span>{desc}</span>
                </div>
              </div>
            ))}
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
              <div className="sign-dot sign-dot-spot" />
              <div className="sign-text">
                <strong>Видимый налёт</strong>
                <span>Пятна белого, серого, зелёного или чёрного цвета на поверхности хлеба</span>
              </div>
            </div>
            <div className="sign-item">
              <div className="sign-dot sign-dot-nose" />
              <div className="sign-text">
                <strong>Неприятный запах</strong>
                <span>Кислый, затхлый или землистый запах — грибки выделяют летучие вещества</span>
              </div>
            </div>
            <div className="sign-item">
              <div className="sign-dot sign-dot-hand" />
              <div className="sign-text">
                <strong>Изменение текстуры</strong>
                <span>Хлеб становится липким, слишком мягким или необычно крошится</span>
              </div>
            </div>
            <div className="sign-item">
              <div className="sign-dot sign-dot-green" />
              <div className="sign-text">
                <strong>Цветные пятна в мякише</strong>
                <span>Тёмные или цветные пятна внутри указывают на глубокое заражение</span>
              </div>
            </div>
          </div>
          <div className="warning-bar">
            <div className="warn-mark">!</div>
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
            {[
              ['#8a6a3a', 'Хлб', 'Хлебница с вентиляцией', 'Деревянная хлебница с отверстиями поддерживает нужный уровень влажности'],
              ['#4a7a9a', '−4°', 'Холодильник или морозилка', 'При +4°C плесень почти не растёт. Хлеб можно замораживать до 3 месяцев'],
              ['#7a8a5a', 'Ткн', 'Тканевый или бумажный пакет', 'Натуральные материалы не задерживают влагу, в отличие от полиэтилена'],
              ['#5a7a7a', '18°', 'Прохладное место', 'Оптимальная температура — 15–18°C. Не храните рядом с плитой или батареей'],
              ['#8a5a3a', 'Нрз', 'Нарезайте только перед едой', 'Нарезанный хлеб теряет влагу быстрее и плесневеет интенсивнее целой буханки'],
            ].map(([color, label, title, desc], i) => (
              <div className="storage-item" key={i}>
                <div className="storage-mark" style={{ background: color as string }}>{label}</div>
                <div className="storage-text">
                  <strong>{title}</strong>
                  <span>{desc}</span>
                </div>
              </div>
            ))}
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
              <div className="prev-mark" style={{ background: '#5a7a8a' }}>М</div>
              <div className="prev-text">
                <strong>Мойте хлебницу регулярно</strong>
                <span>Раз в неделю протирайте уксусом или раствором соды — уничтожает споры грибка</span>
              </div>
            </div>
            <div className="prev-item">
              <div className="prev-mark" style={{ background: '#7a7a8a' }}>С</div>
              <div className="prev-text">
                <strong>Мешочек с солью</strong>
                <span>Небольшой мешочек соли в хлебнице впитывает лишнюю влагу из воздуха</span>
              </div>
            </div>
            <div className="prev-item">
              <div className="prev-mark" style={{ background: '#6a8a5a' }}>Я</div>
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
              <span>Берегите здоровье — выбирайте свежее</span>
            </div>
          </div>
        </div>
      </div>

      <button className="print-btn" onClick={() => window.print()}>
        Распечатать буклет
      </button>
      <div className="page-hint">A4 · горизонтальная ориентация · без полей</div>
    </div>
  );
};

export default Index;
