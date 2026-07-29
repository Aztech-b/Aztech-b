/**
 * @typedef {Object} rawPoemData
 * @property {Number} id
 * @property {String} title
 * @property {String} content
 * @property {previewData} preview
 *
 * @typedef {Object} previewData
 * @property {Number} startLine
 * @property {Number} endLine
 * @property {String} ending
 */

/**
 * @typedef {Object} primitiveRawPoemData
 * @property {String} content raw string
 * @property {Number} id
 */

/**
 * @typedef {Object} primitiveFormattedPoemData
 * @property {String[]} content formatted string
 * @property {Number} id
 * @property {string} title
 * @property {note[]} notes
 */

/**
 * @typedef {Object} note
 * @property {"draft" | String} type
 * @property {Number} startLine
 * @property {Number} endLine
 * @property {String} text
 */

export const data = [
    {
        id: 1,
        title: "Менің бірінші өлеңім",
        content:
            'Күн бүгінгі өтті әдемі, \nАлихан жаттады тағы бір сүрені \nБолмаса да күлкінің көлемі \nҰмытпадым мен тәубені. \nОсы жолдардың әуені \nӨзгертер бүкіл әлемді \nБірақ әрине әуелі \nАллаға тек болу керекпін тәуелді. \nҮйрену керекпін әдепті \nЗикр, фикр, шүкір менен құрметті\nОқылса Абайдың қара сөздері\nПайдалы болар әркімге өздері\nОтқа толар оның көздері\nАдам екенін сезеді\nНе болмайтынын түйеді\nӨмірді отдуши сүреді\nБерілген нығметті көреді\nҚызығып тарихты көреді\nМұсылман бауырамыз кешкені\nСадақа жасап бергені\nӨзі аз тамақ ішкені\nБілім менен ғылымды ол түйгені\nЫсырап етпеген түймені\nҚинамаған тіпті түйені\nСондай болу керек өйткені \nӨмірің құлшылықпен өткені. \n\nРенжіме ойлап "Олар мені күтпеді" \nОларда бар өздерінің себебі\nЖүрегің себепті саған береді\nБіліп қой, олар сені сүйеді. \n\nЖалғастыра берсем ұзаққа созылып кетеді, \nОсыпай Бақдаулет бітіреді бұл өлеңді',

        preview: { startLine: 0, endLine: 2, ending: "..." },
        notes: [
            {
                startLine: 0,
                endLine: 0,
                type: "explanation",
                text: "Осы өлеңді жазған кездерде әр күні күнделік сияқты өлеңдер жазамын деп ойлағанмын, осылай әр күнімді өлең форматында жазып дүремін деген ой болған",
            },
            {
                startLine: 1,
                endLine: 1,
                type: "explanation",
                text: "Алихан деген бауырым денге енді кірген, мен сол қасында көмектесіп жүрдім",
            },
            {
                startLine: 7,
                endLine: 7,
                type: "explanation",
                text: 'Басында "Тек Аллаға болу керекпін тәуелді" деп жазғанмын. Алланың аты екінші тараны дұрыс емес сияқты көрінді, кейін "Алла" және "Тек" сөздерінің орнын ауыстырып қойдым. \n \n Негізі бұндай логикамен бүкіл өлеңді Алланың атымен бастау керек сияқты.',
            },
            {
                startLine: 9,
                endLine: 9,
                type: "explanation",
                text: 'Рисале-и Нур еңбектерінде жазылған "Зікр, шүкір және пікір',
            },
            {
                startLine: 10,
                endLine: 10,
                type: "explanaition",
                text: "Қазақ жерінде мықты мықты адамдарды да жазу керек сияқты болды, ең танымалы Абай Құнанбай атамызды таңдадым",
            },
            { startLine: 20, endLine: 20, type: "explanation", text: "Ораза" },
            {
                startLine: 10,
                endLine: 10,
                type: "explanaition",
                text: "Қазақ жерінде мықты мықты адамдарды да жазу керек сияқты болды, ең танымалы Абай Құнанбай атамызды таңдадым",
            },
        ],
    },
    {
        id: 2,
        title: "Көркем мінез 2",
        content:
            "Ең керек зат не екенін көп адам білмес\nЖауабын айтайын мен саған, ол көркем мінез\nӨміріңе сен енгізіп алсаң,ешкім аяғыңнан теппес\nШалынып құламайсың дұрыс жолда, қате емес\n\nАлла тыйым салған нәрселерге\nАса жауапкершілікпен қарайсың сондай қателерге\nКөркем мінезбен жетесің сен биіктерге\nҚұл болмайсың сен ешқандай күдіктерге\n\nАдам құлауы мүмкін өте терең\nЖақсы істері кейін саналмайды\nМінезің болса сенің көркем\nЖаман істерін тіпті қаралмайды",
        preview: { startLine: 0, endLine: 3, ending: "..." },
    },
    {
        id: 3,
        title: "Көркем мінез",
        content:
            'Қоғамды құлатпай ұстап тұратын\nБір болсын іргетас болатын\nОсы сұрақ менің басымнан кетпес\nЖауабын алсам ғой осы тез-тез\nҚоғамды ғана ұстап тұратын емес\nИбн Аббас айтқан еді бір кеңес\n"Исламның негізі - көркем мінез"\n\nҚалай болады егер бір-екі сөз саған айтсам \nАвторы олардың Пайғамбарымыз салляллаху \'алейхи уассаллам \nКөркем мінездің маңыздылығын білдіріп қойған \nАл, мені тыңда, біреуін саған айтам \n \n"Мүміндердің ішінде иманы ең күштілері - \nМінез-құлқы көркем болғандар"  \nОл ереже ешқашан үзілмеді \nАлладан барлықтарың қорқыңдар',
        preview: { startLine: 8, endLine: 11, ending: "..." },
        notes: [{ type: "draft", startLine: 0, endLine: 6, text: "unfinished draft" }],
    },
    {
        id: 4,
        title: "Менің бірінші өлеңім",
        content:
            'Өміріңде болса бәрі онша емес, \nМенде бар саған берер кеңес. \nКөзілдірігіңді сен ауыстырып көр, \nБарлық тамашаны көретін кез. \nОйлап көр, жүрегің сенің тоқтамай ұрады\nАзаннан кешке дейін ол ұыйқтамай тұрады\nСол жүрегіңмен ойлап көрсең\nТамашаның барлығын көресің сен\nАл бұны ары ала тұрайық\nБіз одан да ауыр бір затқа қарайық. \n\nЕртең ұйқыдан тұрамын деген кепілдік бар ма\nТұрмай қалсаң сенде жеңілдік бар ма, \nБұл өмірдегі сенің мақсатың қайда, \nБақытсыз өткізсең, одан не пайда. \n\nҚарасаң болады нығмет саны таусылмас\nНаның, отырған диваның менен унитаз\nОл нығметтерге кіреді тіпті балшық пен саз, \nКіреді тіпті ешкімге керегі жоқ қаз. \n\nСен одан да рақмет айтуды үйрен, \nМейірімділіктерді сен көруді үйрен. \nОл нығметтерді көресің сен әр жерде\nТіпті қазатын болсаң өте терең. \n\nСен осы әлемде өте терең қазсаң\nАйтсаң "Осы әлемде барлығын ұғам" \nТіпті айды сен ортасынын қисаң\nОраласың сен бір жерге - ол ислам. \n\nӨзің іздеп көрсең болады барлығын\n"Қайтып келдің сен маған, қарағым" \n"Кеш мені, басқа жаққа қараппын, \nЖүрегімде мәңгіге сені сақтадым\nӨмірімді өткіземін енді сәждеде, қиямда\nЖаттаймын сүрені Ал-Қария\nНамаз оқимын қыста, жазда, наурызда\nТастамаймын сені ешқайда" \n\nБұндай адамның өмірі жаман болмайды\nБұндай адам құмырсқаны да қимайды\nБолғың келсе сен сондай\nҚадам бас, көп қиялдамай',
        preview: { startLine: 0, endLine: 3, ending: "..." },
    },
];

export const contentFormattedPoems = data.map((poem) => ({ ...poem, content: poem.content.split("\n") }));
export const previewFormattedPoems = data.map((poem) => ({
    ...poem,
    preview: poem.content
        .split("\n")
        .filter((poemContentLine, index) => index >= poem.preview.startLine && index <= poem.preview.endLine),
}));

export const poemsAllFormatted = data.map((poem) => ({
    id: poem.id,
    title: poem.title,
    content: contentFormattedPoems.find((contentFormattedPoem) => contentFormattedPoem.id === poem.id).content,
    preview: previewFormattedPoems.find((previewFormattedPoem) => previewFormattedPoem.id === poem.id).preview,
    notes: poem.notes ? poem.notes : null,
}));

export function GetFormattedPoemById(id) {
    return poemsAllFormatted.find((poem) => poem.id === id);
}

export function GetFormattedPreviewById(id) {
    return poemsAllFormatted.find((poem) => poem.id === id).preview;
}

export function GetSegmentedFormattedPoemById(id) {
    const poem = GetFormattedPoemById(id);
    if (!poem.notes) {
        return null;
    }
    const sortedNotes = poem.notes.sort((a, b) => a.startLine - b.startLine);
    const segments = [];

    let currentIndex = 0;

    for (const note of sortedNotes) {
        const start = Math.max(0, note.startLine);
        const end = Math.min(poem.content.length - 1, note.endLine);

        if (start > currentIndex) {
            segments.push({
                id: `plain-${currentIndex}`,
                type: "plain",
                lines: poem.content.slice(currentIndex, start),
                startLine: currentIndex,
            });
        }

        if (end >= start && start >= currentIndex) {
            segments.push({
                id: `note-${start}-${end}`,
                type: note.type,
                lines: poem.content.slice(start, end + 1),
                startLine: start,
                note,
            });
            currentIndex = end + 1;
        }
    }

    if (currentIndex < poem.content.length) {
        segments.push({
            id: `plain-${currentIndex}`,
            type: "plain",
            lines: poem.content.slice(currentIndex),
            startLine: currentIndex,
        });
    }

    return segments;
}

export const length = data.length;

// export function
