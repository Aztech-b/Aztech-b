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
 */

/**
 * @type {(rawPoemData && note)[] }
 */
export const data = [
    {
        id: 1,
        title: "Менің бірінші өлеңім",
        content:
            'Күн бүгінгі өтті әдемі, \nАлихан жаттады тағы бір сүрені \nБолмаса да күлкінің көлемі \nҰмытпадым мен тәубені. \nОсы жолдардың әуені \nӨзгертер бүкіл әлемді \nБірақ әрине әуелі \nАллаға тек болу керекпін тәуелді. \nҮйрену керекпін әдепті \nЗикр, фикр, шүкір менен құрметті\nОқылса Абайдың қара сөздері\nПайдалы болар әркімге өздері\nОтқа толар оның көздері\nАдам екенін сезеді\nНе болмайтынын түйеді\nӨмірді отдуши сүреді\nБерілген нығметті көреді\nҚызығып тарихты көреді\nМұсылман бауырамыз кешкені\nСадақа жасап бергені\nӨзі аз тамақ ішкені\nБілім менен ғылымды ол түйгені\nЫсырап етпеген түймені\nҚинамаған тіпті түйені\nСондай болу керек өйткені \nӨмірің құлшылықпен өткені. \n\nРенжіме ойлап "Олар мені күтпеді" \nОларда бар өздерінің себебі\nЖүрегің себепті саған береді\nБіліп қой, олар сені сүйеді. \n\nЖалғастыра берсем ұзаққа созылып кетеді, \nОсылай Бақдаулет бітіреді бұл өлеңді',
        preview: { startLine: 0, endLine: 2, ending: "..." },
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
        notes: [{ type: "draft", startLine: 0, endLine: 6 }],
    },
    {
        id: 4,
        title: "Менің бірінші өлеңім",
        content:
            'Өміріңде болса бәрі онша емес, \nМенде бар саған берер кеңес. \nКөзілдірігіңді сен ауыстырып көр, \nБарлық тамашаны көретін кез. \nОйлап көр, жүрегің сенің тоқтамай ұрады\nАзаннан кешке дейін ол ұыйқтамай тұрады\nСол жүрегіңмен ойлап көрсең\nТамашаның барлығын көресің сен\nАл бұны ары ала тұрайық\nБіз одан да ауыр бір затқа қарайық. \n\nЕртең ұйқыдан тұрамын деген кепілдік бар ма\nТұрмай қалсаң сенде жеңілдік бар ма, \nБұл өмірдегі сенің мақсатың қайда, \nБақытсыз өткізсең, одан не пайда. \n\nҚарасаң болады нығмет саны таусылмас\nНаның, отырған диваның менен унитаз\nОл нығметтерге кіреді тіпті баллы= пен саз, \nКіреді тіпті ешкімге керегі жоқ қаз. \n\nСен одан да рақмет айтуды үйрен, \nМейірімділіктерді сен көруді үйрен. \nОл нығметтерді көресің сен әр жерде\nТіпті қазатын болсаң өте терең. \n\nСен осы әлемде өте терең қазсаң\nАйтсаң "Осы әлемде барлығын ұғам" \nТіпті айды сен ортасынын қисаң\nОраласың сен бір жерге - ол ислам. \n\nӨзің іздеп көрсең болады барлығын\n"Қайтып келдің сен маған, қарағым" \n"Кеш мені, басқа жаққа қараппын, \nЖүрегімде мәңгіге сені сақтадым\nӨмірімді өткіземін енді сәждеде, қиямда\nЖаттаймын сүрені Ал-Қария\nНамаз оқимын қыста, жазда, наурызда\nТастамаймын сені ешқайда" \n\nБұндай адамның өмірі жаман болмайды\nБұндай адам құмырсқаны да қимайды\nБолғың келсе сен сондай\nҚадам бас, көп қиялдамай',
        preview: { startLine: 0, endLine: 3, ending: "..." },
    },
];

export function GetFormattedPoemContentById(id) {
    return data.content.split("\n");
}

export const poemsContentFormattedArray = data.map((poem) => ({
    content: poem.content.split("\n"),
    id: poem.id,
    title: poem.title,
    notes: poem.notes ? poem.notes : null,
}));
export const poemsPreviewFormattedArray = data.map((poem) =>
    poem.content.split("\n").filter((poemContentLine, index) => {
        return index >= poem.preview.startLine && index <= poem.preview.endLine;
    }),
);

export const poemsAllFormatted = data.map((poem) => ({
    id: poem.id,
    title: poem.title,
    content: poem.content.split("\n"),
    preview: poem.content.split("\n").filter((_, index) => {
        return index >= poem.preview.startLine && index <= poem.preview.endLine;
    }),
    notes: poem.notes ? poem.notes : null,
}));

/**
 * @param {Number} id
 * @returns {rawPoemData} with the raw srting in content
 */
export function GetPoemById(id) {
    return data.find((poem) => poem.id === id);
}

/**
 * @param {Number} id
 * @returns {primitiveFormattedPoemData} with the formatted content to array of strings
 */
export function GetFormattedPoemById(id) {
    return poemsContentFormattedArray.find((poem) => poem.id === id);
}

export function GetSegmentedFormattedPoemById(id) {
    const poem = GetFormattedPoemById(id);
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
            console.log("pushed note");
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
        console.log("pushed plain");
    }

    return segments;
}

export const length = data.length;

// export function
