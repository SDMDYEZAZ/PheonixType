/* ========================================= */
/* LEVELS */
/* ========================================= */

const levels = {

    1: {
        name: "Beginner",
        sentences: [
            "The sun is bright today.",
            "I like reading books.",
            "Practice makes us better.",
            "Every day brings new hope.",
            "Small steps lead to success.",
            "The sky looks beautiful.",
            "Keep learning every day.",
            "Good habits take time.",
            "Always believe in yourself.",
            "Hard work brings good results."
        ]
    },

    2: {
        name: "Easy",
        sentences: [
            "Learning new skills can be exciting.",
            "A calm mind helps us think clearly.",
            "Regular practice improves our ability.",
            "Kind words can make someone happy.",
            "Time becomes valuable when we use it wisely.",
            "Reading regularly improves our knowledge.",
            "A positive attitude can change your day.",
            "Good preparation makes difficult tasks easier.",
            "Patience helps us overcome many challenges.",
            "Success usually comes from consistent effort."
        ]
    },

    3: {
        name: "Normal",
        sentences: [
            "Learning becomes easier when we practice something every day.",
            "People often achieve great results through patience and determination.",
            "The best way to improve a skill is to practice it consistently.",
            "Technology has changed the way people communicate with each other.",
            "A clear goal gives us direction when we face difficult situations.",
            "Good communication helps people understand different ideas and opinions.",
            "Taking small steps every day can create meaningful progress over time.",
            "Experience teaches valuable lessons that cannot always be learned from books.",
            "Staying focused becomes easier when we remove unnecessary distractions.",
            "Confidence grows when we continue working despite occasional mistakes."
        ]
    },

    4: {
        name: "Intermediate",
        sentences: [
            "Although progress may seem slow at first, consistent effort eventually produces excellent results.",
            "When people learn from their mistakes, they become better prepared for future challenges.",
            "Managing time effectively allows us to complete important tasks without unnecessary stress.",
            "A person who remains patient during difficult situations can often find better solutions.",
            "Modern technology provides many useful opportunities for education, communication, and creativity.",
            "Developing strong habits requires discipline, patience, and a willingness to improve.",
            "Clear thinking becomes especially important when several problems need to be solved at once.",
            "Successful people understand that meaningful progress rarely happens without continuous effort.",
            "Good decisions are usually based on careful observation rather than quick assumptions.",
            "The ability to adapt to changing situations is an important skill in everyday life."
        ]
    },

    5: {
        name: "Advanced",
        sentences: [
            "When circumstances become unexpectedly difficult, maintaining concentration can help us respond more effectively.",
            "People who consistently challenge themselves often discover abilities they never realized they possessed.",
            "Understanding complex information requires patience, careful observation, and the ability to connect different ideas.",
            "Even when immediate results are disappointing, continued effort can eventually lead to significant improvement.",
            "Effective communication depends not only on speaking clearly but also on listening carefully to others.",
            "A thoughtful approach to problem solving allows us to examine possibilities before making important decisions.",
            "The ability to remain calm under pressure often determines how successfully a challenging situation is handled.",
            "Continuous learning helps individuals remain adaptable in a world that changes faster than ever before.",
            "Developing expertise in any field requires curiosity, discipline, practical experience, and long-term commitment.",
            "Careful planning can reduce mistakes while providing a clearer path toward achieving ambitious goals."
        ]
    },

    6: {
        name: "Expert",
        sentences: [
            "When unexpected obstacles interrupt a carefully planned process, adaptability becomes essential for maintaining progress.",
            "Complex problems often require individuals to examine multiple perspectives before choosing the most appropriate solution.",
            "Although advanced knowledge can provide significant advantages, practical experience frequently determines how effectively it is applied.",
            "Successful communication becomes increasingly challenging when people have different expectations, experiences, and interpretations.",
            "The ability to distinguish reliable information from misleading assumptions is particularly valuable in the modern digital environment.",
            "Long term improvement depends upon recognizing weaknesses, evaluating mistakes honestly, and deliberately developing better strategies.",
            "Individuals who remain curious throughout their lives are more likely to discover opportunities hidden within unfamiliar situations.",
            "Effective decision making requires balancing available evidence, potential consequences, personal priorities, and changing circumstances.",
            "Meaningful achievements are rarely the result of a single moment; they usually emerge from countless deliberate actions.",
            "Maintaining accuracy while gradually increasing speed requires concentration, coordination, patience, and repeated exposure to challenging tasks."
        ]
    },

    7: {
        name: "Master",
        sentences: [
            "Exceptional performance emerges when concentration, experience, discipline, and adaptability operate together without unnecessary hesitation.",
            "When faced with incomplete information and competing priorities, a thoughtful individual must evaluate consequences before committing to a decision.",
            "The continuous development of expertise requires not merely repetition, but also reflection, experimentation, correction, and deliberate refinement.",
            "People frequently underestimate how much progress can be achieved when seemingly insignificant improvements are maintained consistently over an extended period.",
            "In an environment characterized by rapid technological advancement, the ability to learn unfamiliar concepts independently has become increasingly important.",
            "Complex challenges become more manageable when they are divided into smaller components that can be analyzed systematically and solved independently.",
            "Precision becomes particularly valuable when a minor misunderstanding can influence an entire sequence of decisions and produce unexpectedly significant consequences.",
            "True mastery involves maintaining accuracy and composure even when circumstances become unfamiliar, demanding, unpredictable, or mentally exhausting.",
            "The most effective learners continuously compare their current performance with previous results, identify weaknesses, and adjust their approach accordingly.",
            "Developing exceptional typing ability requires more than speed; it demands consistent accuracy, sustained concentration, efficient movement, and confidence."
        ]
    },

    8: {
        name: "Legend",
        sentences: [
            "Extraordinary results are usually created through countless deliberate decisions that appear insignificant individually but become powerful when accumulated over time.",
            "When complex circumstances demand immediate attention, maintaining clarity of thought while evaluating competing possibilities can significantly influence the eventual outcome.",
            "The pursuit of excellence requires individuals to recognize their limitations without allowing those limitations to prevent them from attempting increasingly difficult challenges.",
            "Advanced problem solving involves identifying relationships between seemingly unrelated pieces of information and transforming those observations into practical strategies.",
            "A highly skilled typist must coordinate visual recognition, mental processing, and precise finger movement while simultaneously maintaining consistent rhythm and accuracy.",
            "Regardless of how sophisticated a particular skill becomes, meaningful improvement remains possible whenever a person approaches practice with curiosity and deliberate attention.",
            "In situations where uncertainty cannot be completely eliminated, effective decision makers focus on available evidence, probable consequences, and the information that remains unknown.",
            "Long term mastery is achieved when correct performance becomes reliable even under pressure, distraction, fatigue, unfamiliar conditions, and increasingly demanding expectations.",
            "The difference between temporary improvement and genuine expertise often depends upon whether a person continues refining fundamental abilities after achieving an apparently satisfactory level of performance.",
            "Exceptional typing speed combined with outstanding accuracy is ultimately the result of thousands of carefully practiced movements becoming increasingly automatic through sustained and purposeful repetition."
        ]
    },

    9: {
        name: "Grandmaster",
        sentences: [
            "Grandmaster level typists demonstrate an almost effortless synchronization between perception, cognition, and motor execution, even when confronted with unfamiliar vocabulary, irregular punctuation, or unexpectedly long compound sentences.",
            "Sustaining flawless accuracy across paragraphs filled with technical terminology, nested clauses, and abrupt shifts in subject matter separates genuinely elite performers from those who merely type quickly.",
            "When a challenging passage contains numerals, symbols, capitalized abbreviations, and unusual proper nouns, disciplined preparation matters far more than raw, unrefined mechanical speed.",
            "Consistent, deliberate practice under realistic pressure gradually transforms hesitant, error prone typing into a fluid, almost subconscious skill that withstands fatigue and distraction.",
            "The most demanding typing challenges intentionally combine lengthy sentences, subordinate clauses, and infrequent letter combinations to test whether accuracy degrades as fatigue accumulates.",
            "Exceptional composure under a strict time constraint, rather than isolated bursts of speed, ultimately determines whether a typist can be considered a genuine grandmaster.",
            "Recognizing subtle patterns in awkward phrasing, unconventional capitalization, and inconsistent spacing allows an experienced typist to maintain rhythm where others would inevitably stumble.",
            "A true grandmaster treats every difficult passage as an opportunity to refine timing, correct micro hesitations, and eliminate unnecessary corrective keystrokes entirely.",
            "Even brief lapses in concentration during unusually long, information dense sentences can quietly erode both measured speed and overall accuracy across an entire session.",
            "Mastery at this level requires unwavering focus, refined finger placement, and the mental endurance to remain precise long after less experienced typists would have already slowed down."
        ]
    },

    10: {
        name: "Immortal",
        sentences: [
            "Immortal tier challenges deliberately merge extraordinarily long, densely structured sentences with irregular vocabulary, uncommon punctuation, and abrupt tonal shifts that punish even momentary lapses in concentration.",
            "Only a typist who has internalized rhythm, timing, and accuracy so completely that conscious thought about individual keystrokes has essentially disappeared can reliably conquer passages of this extreme difficulty.",
            "At the highest conceivable level of mastery, sustained precision across hundreds of consecutive characters becomes indistinguishable from instinct, requiring years of deliberate, uncompromising, and reflective practice.",
            "The difference between a merely advanced typist and an immortal one lies in the ability to remain composed while a sentence grows increasingly convoluted, unpredictable, and demanding without warning.",
            "Extreme endurance, unshakable concentration, and an almost mechanical consistency across long, uninterrupted stretches of unfamiliar and syntactically complex text define genuinely immortal typing performance.",
            "When every remaining error threatens to undo an otherwise flawless run, an immortal typist calmly maintains the exact rhythm established many sentences earlier without a single hesitation.",
            "Passages engineered for immortal difficulty intentionally avoid predictable patterns, forcing the fingers to react instantly to unusual letter sequences rather than relying on memorized habits.",
            "True immortals treat fatigue, distraction, and mounting pressure as irrelevant variables, because their accuracy and rhythm remain essentially unaffected regardless of how demanding the surrounding circumstances become.",
            "Achieving this level of consistency demands relentless self correction, brutally honest review of every mistake, and the patience to rebuild fundamentals long after most typists would consider themselves finished improving.",
            "Ultimately, immortal status is earned not through a single extraordinary performance but through the quiet, repeated demonstration of flawless composure across countless demanding and unforgiving sentences."
        ]
    }

};


/* ========================================= */
/* LEVEL DISPLAY DATA */
/* ========================================= */

const levelDisplayData = {

    1: {
        name: "Beginner",
        image: "🌱"
    },

    2: {
        name: "Easy",
        image: "📘"
    },

    3: {
        name: "Normal",
        image: "⚡"
    },

    4: {
        name: "Intermediate",
        image: "🔥"
    },

    5: {
        name: "Advanced",
        image: "🚀"
    },

    6: {
        name: "Expert",
        image: "💎"
    },

    7: {
        name: "Master",
        image: "👑"
    },

    8: {
        name: "Legend",
        image: "🏆"
    },

    9: {
        name: "Grandmaster",
        image: "🌌"
    },

    10: {
        name: "Immortal",
        image: "♾️"
    }

};


/* ========================================= */
/* SETTINGS */
/* ========================================= */

const DAILY_GOAL = 20;
const TOTAL_LEVELS = 1000;

/* NEW FEATURE: total levels in the Phoenix Rebirth typing game -
   declared early since sanitizeSavedData() (called during initial
   load, further down) needs it to validate saved progress.
   Originally 50 levels; extended with 450 additional levels
   (levels 51-500) for a much longer progression. */
const PHOENIX_TOTAL_LEVELS = 500;

/* NEW FEATURE: total exams in the Typing Test mode - declared
   early for the same reason as PHOENIX_TOTAL_LEVELS above (must
   match EXAM_TOPICS.length further down). */
const TOTAL_EXAMS = 50;

/* NEW FEATURE: minimum accuracy required on an exam to unlock the
   next one - mirrors the "clear a level to unlock the next" idea,
   but scoped to a performance bar instead of just finishing. */
const EXAM_UNLOCK_ACCURACY = 90;


/* ========================================= */
/* NEW FEATURE: PROCEDURAL LEVELS 11-1000 */
/* ========================================= */

/*
 * Levels 1-10 stay exactly as hand-written above. Levels
 * 11-1000 are generated here so the level count can scale up
 * to 1000 without needing thousands of manually typed
 * sentences. Every 10 levels forms a named "tier" (99 tiers
 * covering levels 11-1000), and both the tier names and the
 * sentence generator scale in complexity the entire way up:
 * more clauses, richer/rarer connectors, and - in the higher
 * tiers - numbers, semicolons, parentheticals, and quoted
 * fragments get mixed in so difficulty keeps climbing all the
 * way to level 1000 instead of flattening out early.
 */

/* Tier names are built by combining an adjective with a noun so
   99 tiers can have distinct names without typing 99 of them by
   hand. adjectives.length * nouns.length = 100 unique
   combinations, which comfortably covers all 99 tiers. */
const TIER_ADJECTIVES = [
    "Elite", "Champion", "Mythic", "Ascendant", "Celestial",
    "Ethereal", "Sovereign", "Transcendent", "Radiant", "Infernal"
];

const TIER_NOUNS = [
    "Vanguard", "Paragon", "Conqueror", "Overlord", "Wraith",
    "Sentinel", "Oracle", "Warlord", "Herald", "Titan"
];

const TIER_ICONS = [
    "🔷", "⚔️", "🐉", "🌠", "☄️", "🌈", "👁️", "🌀", "🕊️", "🔥",
    "⚡", "🌌", "👑", "🏆", "💠", "🧿", "🌋", "🛡️", "🗡️", "🌙",
    "☀️", "❄️", "🌪️", "🔱", "🪐", "🌟", "💫", "🦅", "🐲", "🎇"
];

function buildTierName(tierIndex) {

    const adjective =
        TIER_ADJECTIVES[tierIndex % TIER_ADJECTIVES.length];

    const noun =
        TIER_NOUNS[
            Math.floor(tierIndex / TIER_ADJECTIVES.length) %
            TIER_NOUNS.length
        ];

    /* Once every combination has been used once (past tier 99),
       loop back around with an "Omega" marker so extremely high
       tiers still read as distinct rather than silently repeating
       an earlier tier's name. This is future-proofing only - with
       990 generated levels in groups of 10, tiers only reach 98. */
    const cycle =
        Math.floor(
            tierIndex / (TIER_ADJECTIVES.length * TIER_NOUNS.length)
        );

    return (
        cycle > 0 ?
            `Omega ${adjective} ${noun}` :
            `${adjective} ${noun}`
    );

}

function buildTierIcon(tierIndex) {

    return TIER_ICONS[tierIndex % TIER_ICONS.length];

}

const ROMAN_NUMERALS =
    ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

const CLAUSE_BANK = [
    "the dedicated typist warms up with a few slow, careful lines",
    "skilled programmers debug tricky problems with patience and focus",
    "a confident writer revises every paragraph until it reads smoothly",
    "steady practice turns hesitant keystrokes into a fluid rhythm",
    "the curious student researches unfamiliar words before typing them",
    "an experienced coach reminds beginners to keep their wrists relaxed",
    "quick fingers mean little if the accuracy keeps slipping",
    "a calm mind helps the hands move without unnecessary tension",
    "every champion typist once struggled through the very first lesson",
    "long training sessions build muscle memory over many quiet weeks",
    "the determined athlete tracks small improvements after every attempt",
    "reliable habits matter more than any single burst of speed",
    "a careful proofreader catches mistakes that quick typists often miss",
    "modern keyboards reward light, even pressure across every finger",
    "the night shift editor finishes each article without wasting a second",
    "clear thinking under pressure separates good typists from great ones",
    "regular breaks keep the fingers fresh during a long practice session",
    "an ambitious learner sets a slightly higher goal after every round",
    "the seasoned professional never looks down at the keyboard while typing",
    "steady breathing keeps the shoulders loose during a difficult passage",
    "a thoughtful mentor explains why rhythm matters more than raw speed",
    "the patient student repeats the same drill until it feels effortless",
    "well organized practice turns a difficult skill into a natural habit",
    "a sharp memory helps recall tricky spelling without slowing down",
    "the focused competitor blocks out every distraction in the room",
    "small corrections early on prevent much bigger habits later",
    "a graceful typist barely seems to move while flying across the keys",
    "honest self review reveals exactly which fingers need more practice",
    "the diligent apprentice studies every mistake from the previous test",
    "consistent daily practice beats a single long session every time",
    "a resourceful learner finds new drills whenever progress slows down",
    "the observant teacher notices tension building in a tired student",
    "every difficult sentence becomes easier after a dozen repetitions",
    "a disciplined routine keeps bad habits from creeping back in",
    "the enthusiastic beginner celebrates even the smallest improvement",
    "careful posture prevents strain during especially long sessions",
    "a determined mind pushes through frustration toward real mastery",
    "the meticulous editor double checks every line before submitting it",
    "fresh eyes often catch errors that tired ones read straight past",
    "a confident competitor trusts months of quiet preparation"
];

/* Higher-tier clause pools reuse the same sentence-building
   machinery below, but draw on longer, denser phrasing so
   difficulty keeps rising well past what CLAUSE_BANK alone can
   provide. These mirror the tone of the hand-written level 6-10
   sentences above. */
const CLAUSE_BANK_ADVANCED = [
    "the seasoned analyst cross references dozens of conflicting reports before drawing any firm conclusion",
    "an unforgiving deadline forces the whole team to prioritize ruthlessly and communicate with total clarity",
    "subtle inconsistencies in the original manuscript only become visible after several careful readings",
    "a well calibrated instrument still requires a skilled operator to interpret its readings correctly",
    "veteran negotiators know that silence can communicate more than an eager, hurried response ever could",
    "the architect reconciles structural constraints, budget limitations, and the client's shifting ambitions simultaneously",
    "identifying a recurring pattern buried inside noisy, inconsistent data demands both patience and skepticism",
    "an experienced editor trims unnecessary qualifiers without weakening the author's original intent",
    "the surgeon's steady hands betray none of the intense concentration required during a delicate procedure",
    "translating technical jargon into plain language remains one of the hardest parts of teaching",
    "a resilient organization adapts its strategy quickly when circumstances shift without warning",
    "meticulous record keeping allows investigators to reconstruct events long after memories have faded",
    "the orchestra's conductor coordinates dozens of musicians into a single, unified interpretation",
    "genuine expertise reveals itself in how gracefully someone handles an unexpected complication",
    "a rigorous peer review process catches flawed assumptions before they reach publication",
    "diplomats spend years cultivating the trust required to resolve a single tense negotiation",
    "the cartographer's painstaking measurements eventually produced a remarkably accurate map",
    "sound judgment under uncertainty separates capable leaders from merely confident ones",
    "an overlooked footnote occasionally contains the single most important detail in the entire document",
    "restoring an aging manuscript requires chemistry, patience, and an almost archaeological sense of care",
    "the pilot calmly worked through the emergency checklist despite the deteriorating conditions outside",
    "quantifying an intangible quality like trust challenges even experienced researchers",
    "a courtroom argument succeeds only when evidence, timing, and delivery align precisely",
    "compiling a comprehensive bibliography demands relentless attention to obscure citation formats",
    "the chess grandmaster calculated several unlikely lines before committing to an unconventional move",
    "reconciling two independently maintained ledgers exposed a discrepancy nobody had previously noticed",
    "an inexperienced climber underestimates how quickly weather conditions can change at altitude",
    "the linguist traced the word's unusual etymology through three separate, poorly documented languages",
    "balancing competing stakeholder interests requires equal parts patience, tact, and firm boundaries",
    "a well designed experiment isolates a single variable while carefully controlling everything else",
    "the archivist digitized thousands of fragile documents before they could deteriorate any further",
    "recognizing your own cognitive biases is considerably harder than recognizing them in someone else",
    "the astronomer refined the calculation after accounting for a previously ignored gravitational effect",
    "an effective mediator listens for the unstated concern beneath an openly stated demand",
    "the vintner's decades of experience allowed her to detect a flaw the instruments missed entirely",
    "cross disciplinary collaboration often produces insights that no single specialist could reach alone",
    "the watchmaker assembled hundreds of microscopic components with a steadiness that seemed almost inhuman",
    "an unpolished first draft frequently contains the seed of an idea worth developing further",
    "quiet persistence, rather than dramatic breakthroughs, ultimately resolved the decade long research question",
    "the field biologist documented the migration pattern across three consecutive, brutally cold winters"
];

const CLAUSE_BANK_EXTREME = [
    "notwithstanding the committee's repeated objections, the proposal advanced through 3 separate review stages before final approval",
    "the encryption algorithm, first published in 1987, still underpins roughly 12% of legacy financial infrastructure worldwide",
    "researchers cataloged 4,208 previously undocumented specimens during a single, meticulously planned expedition",
    "the treaty's ambiguous 7th clause has been reinterpreted by no fewer than nine separate tribunals since 1963",
    "a single mistyped decimal point turned a modest $1,500 refund into an erroneous $150,000 transfer",
    "the manuscript, dated to roughly 1420 AD, contains marginal annotations in at least three distinct hands",
    "engineers rebuilt the bridge's suspension system using 42 tons of reinforced cable rated for extreme torsion",
    "the algorithm's worst case complexity, O(n^2), only becomes noticeable once inputs exceed 10,000 elements",
    "after 26 failed prototypes, the team finally achieved a stable, repeatable 94% success rate",
    "the excavation site yielded pottery fragments dated between 850 BCE and 620 BCE, according to isotope analysis",
    "quarterly revenue climbed 18.4%, yet operating margins narrowed sharply once logistics costs were included",
    "the satellite's orbit decays by roughly 0.3 kilometers per year, necessitating periodic boost maneuvers",
    "of the 1,024 participants surveyed, only 37 reported using the feature more than once per week",
    "the compiler flagged 211 warnings, 6 of which later proved to be genuine, latent bugs",
    "the negotiation, spanning 14 rounds over nearly two years, finally concluded with a narrowly ratified accord",
    "seismographs across the region recorded a magnitude 5.6 tremor at exactly 03:47 local time",
    "the recipe, handed down through five generations, calls for a precise 2:1 ratio that no substitute replicates",
    "auditors discovered that 3 of the 40 invoices had been duplicated across two separate fiscal quarters",
    "the spacecraft's onboard computer, running at a mere 1.4 MHz, still executed the entire landing sequence flawlessly",
    "linguists estimate that the dialect diverged from its parent language sometime around the 9th century",
    "the marathon route, altered twice since 1998, now climbs a cumulative 612 meters over its final 10 kilometers",
    "a peer reviewer's single, terse comment (\"insufficient sample size\") delayed publication by nearly a year",
    "the vault's mechanism requires a 6-digit code entered within an 8-second window to avoid triggering the alarm",
    "customs officials seized 17 crates mislabeled as \"machine parts\" during a routine inspection",
    "the glacier has retreated approximately 1.2 kilometers since measurements began in 1952",
    "only 2 of the 15 candidates correctly answered every question in the final, notoriously difficult round",
    "the orchestra rehearsed the 47-minute symphony nightly for three straight weeks before opening night",
    "geneticists identified a single nucleotide difference responsible for the trait observed in 0.04% of the population",
    "the ledger's final entry, dated 11/03/1889, remains illegible except for a partial signature",
    "after the merger, the combined workforce exceeded 8,600 employees across 14 countries"
];

const CONNECTOR_BANK = [
    "because",
    "while",
    "although",
    "since",
    "so that",
    "even though",
    "whenever",
    "provided that",
    "as soon as",
    "given that",
    "before",
    "after"
];

/* Richer connectors reserved for higher tiers - rarer words and
   phrases that are noticeably harder to type accurately than the
   short, common ones above. */
const CONNECTOR_BANK_ADVANCED = [
    "nevertheless",
    "consequently",
    "moreover",
    "whereas",
    "notwithstanding",
    "in spite of the fact that",
    "insofar as",
    "regardless of whether",
    "to the extent that",
    "on the condition that",
    "as a direct result of which",
    "which is precisely why"
];

function capitalizeFirst(str) {

    return (
        str.charAt(0).toUpperCase() +
        str.slice(1)
    );

}


function seededRandomValue(seed) {

    let t =
        seed += 0x6D2B79F5;

    t =
        Math.imul(
            t ^ (t >>> 15),
            t | 1
        );

    t ^=
        t + Math.imul(
            t ^ (t >>> 7),
            t | 61
        );

    return (
        (t ^ (t >>> 14)) >>> 0
    ) / 4294967296;

}


function buildGeneratedSentence(level, index) {

    /* tierIndex runs 0-98 across the generated range (levels
       11-1000, 10 levels per tier). Both the clause count and
       the vocabulary/punctuation pool scale off of it, so
       difficulty keeps climbing steadily all the way to the
       final tier instead of maxing out early. */
    const tierIndex =
        Math.max(
            0,
            Math.floor((level - 11) / 10)
        );

    const clauseCount =
        Math.min(
            9,
            1 + Math.floor(tierIndex / 11)
        );

    let clausePool;
    let connectorPool;

    if (tierIndex < 33) {

        /* Tiers 0-32 (levels 11-330): everyday vocabulary only. */
        clausePool = CLAUSE_BANK;
        connectorPool = CONNECTOR_BANK;

    }

    else if (tierIndex < 66) {

        /* Tiers 33-65 (levels 331-660): denser phrasing and rarer
           connectors get mixed in alongside the familiar ones. */
        clausePool =
            CLAUSE_BANK.concat(CLAUSE_BANK_ADVANCED);

        connectorPool =
            CONNECTOR_BANK.concat(CONNECTOR_BANK_ADVANCED);

    }

    else {

        /* Tiers 66-98 (levels 661-1000): the hardest material -
           long, information dense clauses, numbers, decimals,
           and quoted fragments, linked almost exclusively with
           rarer connectors. */
        clausePool =
            CLAUSE_BANK_ADVANCED.concat(CLAUSE_BANK_EXTREME);

        connectorPool = CONNECTOR_BANK_ADVANCED;

    }

    const seedBase =
        (level * 97) + (index * 13);

    const usedClauses = [];

    let sentence = "";

    for (
        let c = 0;
        c < clauseCount;
        c++
    ) {

        const rand =
            seededRandomValue(
                seedBase + (c * 7)
            );

        let clauseIndex =
            Math.floor(
                rand * clausePool.length
            );

        let attempts = 0;

        while (
            usedClauses.includes(clauseIndex) &&
            attempts < 5
        ) {

            clauseIndex =
                (clauseIndex + 1) % clausePool.length;

            attempts++;

        }

        usedClauses.push(clauseIndex);

        const clause =
            clausePool[clauseIndex];

        if (c === 0) {

            sentence +=
                capitalizeFirst(clause);

        }

        else {

            /* At the hardest tiers, occasionally join clauses
               with a semicolon instead of a connector word - a
               different, harder-to-autopilot typing pattern. */
            const linkRand =
                seededRandomValue(seedBase + (c * 3) + 2);

            const useSemicolon =
                tierIndex >= 66 && linkRand < 0.2;

            if (useSemicolon) {

                sentence +=
                    "; " + clause;

            }

            else {

                const connectorIndex =
                    Math.floor(
                        seededRandomValue(seedBase + (c * 3) + 1) *
                        connectorPool.length
                    );

                sentence +=
                    " " +
                    connectorPool[connectorIndex] +
                    " " +
                    clause;

            }

        }

    }

    return sentence + ".";

}


function generateExtendedLevels() {

    for (
        let level = 11;
        level <= TOTAL_LEVELS;
        level++
    ) {

        const tierIndex =
            Math.floor((level - 11) / 10);

        const subIndex =
            (level - 11) % 10;

        const tierName =
            buildTierName(tierIndex);

        const tierIcon =
            buildTierIcon(tierIndex);

        const displayName =
            `${tierName} ${ROMAN_NUMERALS[subIndex]}`;

        const sentences = [];

        for (
            let i = 0;
            i < 10;
            i++
        ) {

            sentences.push(
                buildGeneratedSentence(level, i)
            );

        }

        levels[level] = {
            name: displayName,
            sentences: sentences
        };

        levelDisplayData[level] = {
            name: displayName,
            image: tierIcon
        };

    }

}


generateExtendedLevels();


/* ========================================= */
/* DOM ELEMENTS */
/* ========================================= */

const textElement =
    document.getElementById("text");

const input =
    document.getElementById("input");

const sentenceBox =
    document.getElementById("sentenceBox");

const wpmElement =
    document.getElementById("wpm");

const accuracyElement =
    document.getElementById("accuracy");

const streakElement =
    document.getElementById("streak");

const timerElement =
    document.getElementById("timer");

const bigWpmElement =
    document.getElementById("bigWpm");

const levelElement =
    document.getElementById("level");

const levelDifficultyElement =
    document.getElementById("levelDifficulty");

/* NEW FEATURE: label shown just before the level/mode value in the
   level-display strip - switched between "Level" and "Mode" so
   practice modes and exams don't read as if they were levels. */
const levelLabelElement =
    document.getElementById("levelLabel");

/* NEW FEATURE: reset button that lives right in the level-display
   strip, only shown while a Typing Test exam is active - see
   resetExamProgress() further down for what it does. */
const examResetProgressButton =
    document.getElementById("examResetProgressButton");


const bigStreakElement =
    document.getElementById("bigStreak");

const challengeElement =
    document.getElementById("challenge");

const progressElement =
    document.getElementById("progress");

const sentenceNumberElement =
    document.getElementById("sentenceNumber");

const totalSentencesElement =
    document.getElementById("totalSentences");

const rightCurrentStreak =
    document.getElementById("rightCurrentStreak");

const rightCurrentTest =
    document.getElementById("rightCurrentTest");

const dailyStreakElement =
    document.getElementById("dailyStreak");

const dailyCompletedElement =
    document.getElementById("dailyCompleted");

const dailyProgressElement =
    document.getElementById("dailyProgress");

const dailyGoalText =
    document.getElementById("dailyGoalText");

const achievementList =
    document.getElementById("achievementList");

const achievementCount =
    document.getElementById("achievementCount");

const achievementPopup =
    document.getElementById("achievementPopup");

const achievementName =
    document.getElementById("achievementName");

const results =
    document.getElementById("results");

const finalWpm =
    document.getElementById("finalWpm");

const finalAccuracy =
    document.getElementById("finalAccuracy");

const finalStreak =
    document.getElementById("finalStreak");

const finalCharacters =
    document.getElementById("finalCharacters");

const finalTime =
    document.getElementById("finalTime");

const finalDailyGoal =
    document.getElementById("finalDailyGoal");

const performanceMessage =
    document.getElementById("performanceMessage");

const wpmChartElement =
    document.getElementById("wpmChart");

/* NEW FEATURE: live monkeytype-style summary (big wpm/acc numbers
   plus the test type / raw / characters / consistency / time row)
   that sits next to the graph on the main page. */
const liveBigWpmElement =
    document.getElementById("liveBigWpm");

const liveBigAccElement =
    document.getElementById("liveBigAcc");

const metaTestTypeElement =
    document.getElementById("metaTestType");

const metaRawElement =
    document.getElementById("metaRaw");

const metaCharactersElement =
    document.getElementById("metaCharacters");

const metaConsistencyElement =
    document.getElementById("metaConsistency");

const metaTimeElement =
    document.getElementById("metaTime");

const restartButton =
    document.getElementById("restartButton");

const tryAgainButton =
    document.getElementById("tryAgainButton");


/* ========================================= */
/* NEW FEATURE ELEMENTS */
/* ========================================= */

const bestWpmElement =
    document.getElementById("bestWpm");

const totalTestsCompletedElement =
    document.getElementById("totalTestsCompleted");

const rightBestWpm =
    document.getElementById("rightBestWpm");

const rightTotalTests =
    document.getElementById("rightTotalTests");

const topLevelNameElement =
    document.getElementById("topLevelName");

const levelImageElement =
    document.getElementById("levelImage");

/* NEW FEATURE: the roadmap cards are now generated dynamically
   (see populateLevelRoadmap) since there can be up to 1000 of
   them, so this is re-queried fresh instead of being a single
   snapshot taken before they exist. */
function getLevelCards() {

    return document.querySelectorAll(".level-card");

}


const levelScrollElement =
    document.getElementById("levelScroll");


function populateLevelRoadmap() {

    if (!levelScrollElement) {

        return;

    }

    levelScrollElement.innerHTML = "";

    for (
        let level = 1;
        level <= TOTAL_LEVELS;
        level++
    ) {

        const data =
            levelDisplayData[level];

        if (!data) {

            continue;

        }

        const card =
            document.createElement("div");

        card.className = "level-card";

        card.dataset.level = level;


        const image =
            document.createElement("div");

        image.className =
            "level-card-image";

        image.textContent =
            data.image;


        const info =
            document.createElement("div");

        info.className =
            "level-card-info";

        const strong =
            document.createElement("strong");

        strong.textContent =
            `Level ${level}`;

        const span =
            document.createElement("span");

        span.textContent =
            data.name;

        info.appendChild(strong);
        info.appendChild(span);


        const status =
            document.createElement("div");

        status.className =
            "level-status";

        status.textContent =
            level === 1 ?
                "▶" :
                "🔒";


        card.appendChild(image);
        card.appendChild(info);
        card.appendChild(status);

        levelScrollElement.appendChild(card);

    }

}


populateLevelRoadmap();

const weeklyChartElement =
    document.getElementById("weeklyChart");

const weeklySummaryElement =
    document.getElementById("weeklySummary");

const leaderboardListElement =
    document.getElementById("leaderboardList");

const progressChartElement =
    document.getElementById("progressChart");

const progressTrendElement =
    document.getElementById("progressTrend");

const monthlyReportLabelElement =
    document.getElementById("monthlyReportLabel");

const virtualKeyboard =
    document.getElementById("virtualKeyboard");


/* ========================================= */
/* BEST STREAK ELEMENTS */
/* ========================================= */

const bestStreakTopElement =
    document.getElementById("bestStreakTop");

const rightBestStreak =
    document.getElementById("rightBestStreak");


/* ========================================= */
/* INTRO SCREEN ELEMENTS */
/* ========================================= */

const introScreen =
    document.getElementById("introScreen");

const introTextBlock =
    document.getElementById("introText");

const introContinueButton =
    document.getElementById("introContinueButton");

const introMotivationElement =
    document.getElementById("introMotivation");

const levelSelectScreen =
    document.getElementById("levelSelectScreen");

const levelSelectGrid =
    document.getElementById("levelSelectGrid");

const modeSelectGrid =
    document.getElementById("modeSelectGrid");

const backToSelectButton =
    document.getElementById("backToSelectButton");

/* NEW FEATURE: TOP NAVIGATION BAR ON THE INTRO SCREEN */
const navHomeButton =
    document.getElementById("navHomeButton");

const navTutorialsButton =
    document.getElementById("navTutorialsButton");

const navLevelsButton =
    document.getElementById("navLevelsButton");

const navProfileButton =
    document.getElementById("navProfileButton");

/* NEW FEATURE: GLOBAL HOVER NAV - shown on every screen except the
   home/intro screen, revealed by moving the cursor to the top
   edge of the page. */
const globalHoverNav =
    document.getElementById("globalHoverNav");

const globalHoverNavZone =
    document.getElementById("globalHoverNavZone");

const hoverNavHomeButton =
    document.getElementById("hoverNavHomeButton");

const hoverNavTutorialsButton =
    document.getElementById("hoverNavTutorialsButton");

const hoverNavLevelsButton =
    document.getElementById("hoverNavLevelsButton");


/* ========================================= */
/* NEW FEATURE: TUTORIAL SCREEN ELEMENTS */
/* ========================================= */

const tutorialScreen =
    document.getElementById("tutorialScreen");

const tutorialProgressDots =
    document.getElementById("tutorialProgressDots");

const tutorialKeyboard =
    document.getElementById("tutorialKeyboard");

const tutorialTaskLabel =
    document.getElementById("tutorialTaskLabel");

const tutorialTaskTitle =
    document.getElementById("tutorialTaskTitle");

const tutorialTaskDesc =
    document.getElementById("tutorialTaskDesc");

const tutorialTargetText =
    document.getElementById("tutorialTargetText");

const tutorialInput =
    document.getElementById("tutorialInput");

const tutorialSkipButton =
    document.getElementById("tutorialSkipButton");

const tutorialNextButton =
    document.getElementById("tutorialNextButton");

const tutorialFingerCallout =
    document.getElementById("tutorialFingerCallout");

const tutorialHands =
    document.getElementById("tutorialHands");

/* NEW FEATURE: lets the player reopen the tutorial voluntarily
   from the main practice screen, any time - not just before their
   first level. */
const openTutorialButton =
    document.getElementById("openTutorialButton");


/* ========================================= */
/* NEW FEATURE: TYPING TEST + PHOENIX GAME ELEMENTS */
/* ========================================= */

const typingTestGrid =
    document.getElementById("typingTestGrid");

const phoenixGameGrid =
    document.getElementById("phoenixGameGrid");

/* NEW FEATURE: scoped reset button that lives in the Phoenix
   Rebirth panel itself, not the profile modal - locks every
   Phoenix level above 1 back up without touching classic levels,
   achievements, the leaderboard, or best stats. */
const phoenixResetProgressButton =
    document.getElementById("phoenixResetProgressButton");

const phoenixGameScreen =
    document.getElementById("phoenixGameScreen");

const phoenixBackButton =
    document.getElementById("phoenixBackButton");

const phoenixHudLevel =
    document.getElementById("phoenixHudLevel");

const phoenixHudTotalLevels =
    document.getElementById("phoenixHudTotalLevels");

if (phoenixHudTotalLevels) {

    phoenixHudTotalLevels.textContent =
        PHOENIX_TOTAL_LEVELS;

}

const phoenixHudWpm =
    document.getElementById("phoenixHudWpm");

const phoenixHudAccuracy =
    document.getElementById("phoenixHudAccuracy");

const phoenixHudTarget =
    document.getElementById("phoenixHudTarget");

const phoenixSky =
    document.getElementById("phoenixSky");

const phoenixAltitudeFill =
    document.getElementById("phoenixAltitudeFill");

const phoenixFlyBanner =
    document.getElementById("phoenixFlyBanner");

const phoenixActor =
    document.getElementById("phoenixActor");

const phoenixEgg =
    document.getElementById("phoenixEgg");

const phoenixBird =
    document.getElementById("phoenixBird");

const phoenixVolcano =
    document.getElementById("phoenixVolcano");

const phoenixTargetText =
    document.getElementById("phoenixTargetText");

const phoenixInput =
    document.getElementById("phoenixInput");

const phoenixFailOverlay =
    document.getElementById("phoenixFailOverlay");

const phoenixFailLevel =
    document.getElementById("phoenixFailLevel");

const phoenixRetryButton =
    document.getElementById("phoenixRetryButton");

const phoenixFailBackButton =
    document.getElementById("phoenixFailBackButton");


/* ========================================= */
/* MIDDLE CARD MAXIMIZE / MINIMIZE ELEMENTS */
/* ========================================= */

const appContainer =
    document.getElementById("appContainer");

const mainPanelToggleButton =
    document.getElementById("mainPanelToggleButton");


/* ========================================= */
/* PLAYER PROFILE ELEMENTS */
/* ========================================= */

const openProfileButton =
    document.getElementById("openProfileButton");

const openProfileButtonSide =
    document.getElementById("openProfileButtonSide");

const profileModal =
    document.getElementById("profileModal");

const closeProfileButton =
    document.getElementById("closeProfileButton");

const profileAvatarPreview =
    document.getElementById("profileAvatarPreview");

const profileAvatarInput =
    document.getElementById("profileAvatarInput");

const profileNameInput =
    document.getElementById("profileNameInput");

const profileNameWrap =
    document.querySelector(".profile-name-wrap");

const profileNameEditButton =
    document.getElementById("profileNameEditButton");

const profileNameSaveButton =
    document.getElementById("profileNameSaveButton");

const profileEmailDisplay =
    document.getElementById("profileEmailDisplay");

const profileLevelElement =
    document.getElementById("profileLevel");

const profileBestWpmElement =
    document.getElementById("profileBestWpm");

const profileBestStreakElement =
    document.getElementById("profileBestStreak");

const profileTotalTestsElement =
    document.getElementById("profileTotalTests");

const profileTotalTimeElement =
    document.getElementById("profileTotalTime");

/* NEW FEATURE: scoped reset button + its dynamic label, shown next
   to "Total Time Spent" in the profile modal. */
const profileResetProgressButton =
    document.getElementById("profileResetProgressButton");

const profileResetTargetElement =
    document.getElementById("profileResetTarget");


/* ========================================= */
/* KEYBOARD THEME ELEMENTS */
/* ========================================= */

const themeSwatches =
    document.querySelectorAll(".theme-swatch");

const DEFAULT_AVATAR_IMAGE =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">' +
        '<rect width="100" height="100" rx="50" fill="#334155"/>' +
        '<circle cx="50" cy="38" r="18" fill="#cbd5e1"/>' +
        '<path d="M18 88c4-22 24-32 32-32s28 10 32 32" fill="#cbd5e1"/>' +
        '</svg>'
    );


/* ========================================= */
/* TEST VARIABLES */
/* ========================================= */

let currentLevel = 1;

let levelSentenceIndex = 0;

let typedCharacters = 0;

let correctCharacters = 0;

let currentStreak = 0;

let highestStreak = 0;

let testStartTime = null;

let timer = null;

let testRunning = false;

let sentenceCompleted = false;

let nextSentenceTimer = null;

let previousTypedLength = 0;

let totalCorrectCharacters = 0;

let sentenceStats = [];

/* NEW FEATURE: WPM-over-time samples for the current test, used to
   draw the live-performance graph on the results screen (one point
   recorded per elapsed second, reset at the start of every test). */
let wpmHistory = [];

/* NEW FEATURE: active practice mode (15/30/60/120 Sec, Endless,
   word-count modes, Zen) chosen from the level select screen.
   null means the classic level-by-level mode. */
let currentTestMode = null;

/* NEW FEATURE: pool of generated sentences used when the active
   practice mode is a "content" mode (letters only, numbers,
   symbols, etc) or a Typing Test exam. Regenerated each time a
   content mode or exam starts. */
let customModeSentences = [];

/* NEW FEATURE: single source of truth for which sentence pool is
   active right now, used everywhere the code needs "the current
   sentence list" so content modes and exams never fall back to
   showing the wrong text. */
function getActiveSentencePool() {

    if (
        currentTestMode &&
        (currentTestMode.type === "content" || currentTestMode.type === "exam") &&
        customModeSentences.length
    ) {

        return customModeSentences;

    }

    return levels[currentLevel].sentences;

}


/* ========================================= */
/* ACHIEVEMENTS */
/* ========================================= */

const achievements = [];

for (
    let i = 1;
    i <= 100;
    i++
) {

    achievements.push({

        id: i,

        name:
            i <= 20
                ? `Sentence Explorer ${i}`
                : i <= 40
                    ? `Typing Champion ${i - 20}`
                    : i <= 60
                        ? `Speed Builder ${i - 40}`
                        : i <= 80
                            ? `Accuracy Master ${i - 60}`
                            : `TypeRush Legend ${i - 80}`,

        requirement: i

    });

}


/* ========================================= */
/* STORAGE KEY */
/* ========================================= */

function getStorageKey() {

    return "typeRushData";

}


/* ========================================= */
/* LOCAL STORAGE */
/* ========================================= */

function defaultSavedData() {

    return {

        unlockedAchievements: [],

        bestAccuracy: 0,

        bestWpm: 0,

        /* NEW FEATURE: persisted best streak */
        bestStreak: 0,

        totalSentences: 0,

        totalCharacters: 0,

        totalTests: 0,

        /* NEW FEATURE: total time spent practicing overall,
           in seconds, shown in the player profile. */
        totalTimeSeconds: 0,

        dailyStreak: 0,

        lastActiveDate: "",

        dailyCompleted: 0,

        weeklyActivity: {},

        leaderboard: [],

        /* NEW FEATURE: recent test-by-test performance,
           used to draw the "Your Progress" line chart. */
        progressHistory: [],

        /* BUG FIX: level + sentence progress is now saved
           so the app no longer resets to Level 1 on reload */
        currentLevel: 1,

        levelSentenceIndex: 0,

        /* NEW FEATURE: highest level ever unlocked, used to
           decide which levels are open on the level select
           screen - kept separate from currentLevel so
           replaying an earlier level never locks progress. */
        highestLevelReached: 1,

        /* NEW FEATURE: player profile personal details */
        profileName: "",

        profileAvatar: "",

        /* NEW FEATURE: whether the finger-placement tutorial has
           already been shown once. */
        tutorialCompleted: false,

        /* BUG FIX: tracks which version of the tutorial flow the
           player has seen. Older saved data (from before this
           field existed) will read as 0, which never matches
           TUTORIAL_FLOW_VERSION below - so anyone with a stale
           "tutorialCompleted: true" from an earlier build sees the
           tutorial again once, instead of it being skipped forever
           by a flag that got set before the tutorial screen was
           ever wired up correctly. */
        tutorialFlowVersion: 0,

        /* NEW FEATURE: highest Phoenix Rebirth game level ever
           unlocked - mirrors highestLevelReached but for the game. */
        phoenixHighestLevel: 1,

        /* NEW FEATURE: highest Typing Test exam ever unlocked -
           mirrors highestLevelReached but for the exam grid. */
        highestExamReached: 1

    };

}


/* ========================================= */
/* STORAGE SAFETY */
/* ========================================= */

function sanitizeSavedData(data) {

    if (!Number.isFinite(Number(data.bestWpm))) {

        data.bestWpm = 0;

    }


    if (!Number.isFinite(Number(data.bestStreak))) {

        data.bestStreak = 0;

    }


    if (!Number.isFinite(Number(data.totalTests))) {

        data.totalTests = 0;

    }


    if (!Number.isFinite(Number(data.totalTimeSeconds))) {

        data.totalTimeSeconds = 0;

    }


    if (!Array.isArray(data.unlockedAchievements)) {

        data.unlockedAchievements = [];

    }


    if (
        typeof data.weeklyActivity !== "object" ||
        data.weeklyActivity === null ||
        Array.isArray(data.weeklyActivity)
    ) {

        data.weeklyActivity = {};

    }


    if (!Array.isArray(data.leaderboard)) {

        data.leaderboard = [];

    }


    if (!Array.isArray(data.progressHistory)) {

        data.progressHistory = [];

    }


    if (
        !Number.isFinite(Number(data.currentLevel)) ||
        Number(data.currentLevel) < 1 ||
        Number(data.currentLevel) > TOTAL_LEVELS
    ) {

        data.currentLevel = 1;

    }


    if (
        !Number.isFinite(Number(data.levelSentenceIndex)) ||
        Number(data.levelSentenceIndex) < 0
    ) {

        data.levelSentenceIndex = 0;

    }


    if (
        !Number.isFinite(Number(data.highestLevelReached)) ||
        Number(data.highestLevelReached) < Number(data.currentLevel) ||
        Number(data.highestLevelReached) > TOTAL_LEVELS
    ) {

        data.highestLevelReached =
            Number(data.currentLevel) || 1;

    }


    if (typeof data.profileName !== "string") {

        data.profileName = "";

    }


    if (typeof data.profileAvatar !== "string") {

        data.profileAvatar = "";

    }


    if (typeof data.tutorialCompleted !== "boolean") {

        data.tutorialCompleted = false;

    }


    if (!Number.isFinite(Number(data.tutorialFlowVersion))) {

        data.tutorialFlowVersion = 0;

    }


    if (
        !Number.isFinite(Number(data.phoenixHighestLevel)) ||
        Number(data.phoenixHighestLevel) < 1 ||
        Number(data.phoenixHighestLevel) > PHOENIX_TOTAL_LEVELS
    ) {

        data.phoenixHighestLevel = 1;

    }


    /* NEW FEATURE: highest Typing Test exam ever unlocked - same
       validation pattern as phoenixHighestLevel above. */
    if (
        !Number.isFinite(Number(data.highestExamReached)) ||
        Number(data.highestExamReached) < 1 ||
        Number(data.highestExamReached) > TOTAL_EXAMS
    ) {

        data.highestExamReached = 1;

    }


    return data;

}


function loadSavedDataForKey(key) {

    let parsed = null;

    try {

        parsed =
            JSON.parse(
                localStorage.getItem(key)
            );

    }

    catch (e) {

        parsed = null;

    }


    if (!parsed || typeof parsed !== "object") {

        parsed = defaultSavedData();

    }


    return sanitizeSavedData(parsed);

}


let savedData =
    loadSavedDataForKey(
        getStorageKey()
    );


saveData();


/* ========================================= */
/* SAVE DATA */
/* ========================================= */

function saveData() {

    localStorage.setItem(
        getStorageKey(),
        JSON.stringify(savedData)
    );

}


/* ========================================= */
/* BUG FIX: RESTORE LEVEL PROGRESS */
/* ========================================= */

/*
 * Previously currentLevel / levelSentenceIndex only ever
 * lived in memory, so refreshing the page (or coming back
 * later) silently reset the player back to Level 1. They
 * are now restored from savedData here.
 */

currentLevel =
    Number(savedData.currentLevel) || 1;

if (!levels[currentLevel]) {

    currentLevel = 1;

}


levelSentenceIndex =
    Number(savedData.levelSentenceIndex) || 0;

if (
    levelSentenceIndex >=
    levels[currentLevel].sentences.length
) {

    levelSentenceIndex = 0;

}


function saveLevelProgress() {

    savedData.currentLevel =
        currentLevel;

    savedData.levelSentenceIndex =
        levelSentenceIndex;

    savedData.highestLevelReached =
        Math.max(
            Number(savedData.highestLevelReached) || 1,
            currentLevel
        );

    saveData();

}


/* ========================================= */
/* PLAYER SUMMARY */
/* ========================================= */

function updatePlayerSummary() {

    const best =
        Number(savedData.bestWpm) || 0;

    const tests =
        Number(savedData.totalTests) || 0;

    const bestStreakValue =
        Number(savedData.bestStreak) || 0;


    if (bestWpmElement) {

        bestWpmElement.textContent =
            best;

    }


    if (totalTestsCompletedElement) {

        totalTestsCompletedElement.textContent =
            tests;

    }


    if (rightBestWpm) {

        rightBestWpm.textContent =
            best;

    }


    if (rightTotalTests) {

        rightTotalTests.textContent =
            tests;

    }


    /* NEW FEATURE: BEST STREAK DISPLAY */

    if (bestStreakTopElement) {

        bestStreakTopElement.textContent =
            bestStreakValue;

    }


    if (rightBestStreak) {

        rightBestStreak.textContent =
            bestStreakValue;

    }


    updateLevelDisplay();

}


/* ========================================= */
/* UPDATE LEVEL DISPLAY */
/* ========================================= */

function updateLevelDisplay() {

    const data =
        levelDisplayData[currentLevel];

    if (!data) {

        return;

    }


    /* TOP LEVEL */

    if (topLevelNameElement) {

        topLevelNameElement.textContent =
            `Level ${currentLevel} — ${data.name}`;

    }


    /* TOP IMAGE */

    if (levelImageElement) {

        levelImageElement.textContent =
            data.image;

    }


    /* LEVEL CARDS */

    getLevelCards().forEach(
        card => {

            const cardLevel =
                Number(
                    card.dataset.level
                );


            card.classList.remove(
                "active",
                "unlocked",
                "locked"
            );


            if (
                cardLevel ===
                currentLevel
            ) {

                card.classList.add(
                    "active"
                );

            }

            else if (
                cardLevel <=
                Number(savedData.highestLevelReached)
            ) {

                card.classList.add(
                    "unlocked"
                );

            }

            else {

                card.classList.add(
                    "locked"
                );

            }

        }
    );


    /* SCROLL CURRENT LEVEL */

    const activeCard =
        document.querySelector(
            `.level-card[data-level="${currentLevel}"]`
        );


    if (activeCard) {

        activeCard.scrollIntoView({

            behavior: "smooth",

            block: "nearest"

        });

    }

}


/* ========================================= */
/* DATE */
/* ========================================= */

function getDateString(
    date = new Date()
) {

    return date
        .toISOString()
        .split("T")[0];

}


function getYesterdayString() {

    const yesterday =
        new Date();

    yesterday.setDate(
        yesterday.getDate() - 1
    );

    return getDateString(
        yesterday
    );

}


/* ========================================= */
/* DAILY DATA */
/* ========================================= */

function loadDailyData() {

    const today =
        getDateString();


    if (
        savedData.lastActiveDate !==
        today
    ) {

        if (
            savedData.lastActiveDate !==
            getYesterdayString()
        ) {

            savedData.dailyCompleted =
                0;

        }

        saveData();

    }


    dailyStreakElement.textContent =
        savedData.dailyStreak;

    dailyCompletedElement.textContent =
        savedData.dailyCompleted;

    updateDailyProgress();

    updateWeeklyReport();

    updateLeaderboard();

    updateProgressChart();

}


/* ========================================= */
/* REGISTER DAILY ACTIVITY */
/* ========================================= */

function registerDailyActivity() {

    const today =
        getDateString();


    if (
        savedData.lastActiveDate !==
        today
    ) {

        if (
            savedData.lastActiveDate ===
            getYesterdayString()
        ) {

            savedData.dailyStreak++;

        }

        else {

            savedData.dailyStreak = 1;

        }


        savedData.lastActiveDate =
            today;

        savedData.dailyCompleted = 0;

    }


    savedData.dailyCompleted++;


    if (
        savedData.dailyCompleted >
        DAILY_GOAL
    ) {

        savedData.dailyCompleted =
            DAILY_GOAL;

    }


    saveData();


    dailyStreakElement.textContent =
        savedData.dailyStreak;

    dailyCompletedElement.textContent =
        savedData.dailyCompleted;


    updateDailyProgress();

    checkDailyGoal();

}


/* ========================================= */
/* DAILY PROGRESS */
/* ========================================= */

function updateDailyProgress() {

    const percent =
        Math.min(
            100,
            (
                savedData.dailyCompleted /
                DAILY_GOAL
            ) * 100
        );


    dailyProgressElement.style.width =
        percent + "%";


    if (
        savedData.dailyCompleted >=
        DAILY_GOAL
    ) {

        dailyGoalText.textContent =
            "🎉 Daily goal completed!";

    }

    else {

        dailyGoalText.textContent =
            `${DAILY_GOAL - savedData.dailyCompleted} sentences remaining today.`;

    }

}


/* ========================================= */
/* WEEKLY REPORT */
/* ========================================= */

function updateWeeklyReport() {

    if (
        !weeklyChartElement ||
        !weeklySummaryElement
    ) {

        return;

    }


    const dayLabels =
        [
            "S", "M", "T", "W",
            "T", "F", "S"
        ];

    const todayKey =
        getDateString();

    let weekTotal = 0;

    let maxCount = 1;

    const days = [];


    for (
        let i = 6;
        i >= 0;
        i--
    ) {

        const d =
            new Date();

        d.setDate(
            d.getDate() - i
        );

        const key =
            getDateString(d);

        const count =
            Number(
                savedData.weeklyActivity[key]
            ) || 0;

        days.push({

            key: key,

            label:
                dayLabels[d.getDay()],

            count: count,

            isToday:
                key === todayKey

        });


        weekTotal += count;


        if (
            count > maxCount
        ) {

            maxCount = count;

        }

    }


    weeklyChartElement.innerHTML = "";


    days.forEach(
        day => {

            const column =
                document.createElement(
                    "div"
                );

            column.className =
                "weekly-bar-column" +
                (
                    day.isToday
                        ? " is-today"
                        : ""
                );


            const track =
                document.createElement(
                    "div"
                );

            track.className =
                "weekly-bar-track";


            const fill =
                document.createElement(
                    "div"
                );

            fill.className =
                "weekly-bar-fill";

            fill.style.height =
                Math.max(
                    4,
                    (
                        day.count /
                        maxCount
                    ) * 100
                ) + "%";


            track.appendChild(fill);


            const label =
                document.createElement(
                    "div"
                );

            label.className =
                "weekly-bar-label";

            label.textContent =
                day.label;


            const count =
                document.createElement(
                    "div"
                );

            count.className =
                "weekly-bar-count";

            count.textContent =
                day.count;


            column.appendChild(track);
            column.appendChild(label);
            column.appendChild(count);


            weeklyChartElement.appendChild(
                column
            );

        }
    );


    weeklySummaryElement.textContent =
        `${weekTotal} sentence${weekTotal === 1 ? "" : "s"} this week`;

}


/* ========================================= */
/* NEW FEATURE: "YOUR PROGRESS" LINE CHART */
/* ========================================= */

/*
 * Tracks a composite performance score after every finished
 * test - built from WPM, accuracy, and total achievements
 * unlocked - so the chart's line visibly rises or falls with
 * how the player is actually doing overall, not just one stat.
 */

const PROGRESS_HISTORY_LIMIT = 12;

function computeProgressScore(wpmValue, accuracyValue) {

    const achievementBonus =
        savedData.unlockedAchievements.length * 5;

    return Math.round(
        wpmValue +
        accuracyValue +
        achievementBonus
    );

}


function recordProgressPoint(wpmValue, accuracyValue) {

    if (!Array.isArray(savedData.progressHistory)) {

        savedData.progressHistory = [];

    }


    savedData.progressHistory.push({

        score:
            computeProgressScore(
                wpmValue,
                accuracyValue
            ),

        wpm: wpmValue,

        accuracy: accuracyValue,

        date: getDateString()

    });


    savedData.progressHistory =
        savedData.progressHistory.slice(
            -PROGRESS_HISTORY_LIMIT
        );

}


/*
 * NEW FEATURE: this used to draw a "Your Progress" line chart
 * from progressHistory. It's now replaced with a Monthly Report
 * calendar that colors each day of the current month green
 * (a test was completed that day) or red (it wasn't), reusing
 * the same activity map the Weekly Report already tracks. The
 * function name and DOM elements are kept as-is so every
 * existing call site still works unchanged.
 */
function updateProgressChart() {

    if (
        !progressChartElement ||
        !progressTrendElement
    ) {

        return;

    }


    const now =
        new Date();

    const year =
        now.getFullYear();

    const month =
        now.getMonth();

    const monthNames =
        [
            "January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"
        ];


    if (monthlyReportLabelElement) {

        monthlyReportLabelElement.textContent =
            `${monthNames[month]} ${year}`;

    }


    const daysInMonth =
        new Date(year, month + 1, 0).getDate();

    const firstWeekday =
        new Date(year, month, 1).getDay();

    const todayKey =
        getDateString();

    const activity =
        savedData.weeklyActivity || {};


    progressChartElement.innerHTML = "";


    const weekdayLabels =
        ["S", "M", "T", "W", "T", "F", "S"];

    weekdayLabels.forEach(
        label => {

            const head =
                document.createElement("div");

            head.className =
                "monthly-day-head";

            head.textContent =
                label;

            progressChartElement.appendChild(head);

        }
    );


    for (
        let i = 0;
        i < firstWeekday;
        i++
    ) {

        const blank =
            document.createElement("div");

        blank.className =
            "monthly-day-cell empty";

        progressChartElement.appendChild(blank);

    }


    let completedCount = 0;

    let missedCount = 0;


    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {

        const cellDate =
            new Date(year, month, day);

        const key =
            getDateString(cellDate);

        const completed =
            Number(activity[key]) > 0;

        const isToday =
            key === todayKey;

        const isFuture =
            cellDate > now && !isToday;


        const cell =
            document.createElement("div");

        cell.className =
            "monthly-day-cell" +
            (
                isFuture ?
                    " future" :
                    (
                        completed ?
                            " completed" :
                            " missed"
                    )
            ) +
            (
                isToday ?
                    " today" :
                    ""
            );

        cell.textContent =
            day;

        cell.title =
            isFuture ?
                key :
                (
                    completed ?
                        `${key}: completed` :
                        `${key}: missed`
                );


        if (!isFuture) {

            if (completed) {

                completedCount++;

            }

            else {

                missedCount++;

            }

        }


        progressChartElement.appendChild(cell);

    }


    progressTrendElement.textContent =
        `${completedCount} day${completedCount === 1 ? "" : "s"} completed, ` +
        `${missedCount} missed this month`;

    progressTrendElement.className =
        "progress-trend-text";

}


/* ========================================= */
/* NEW FEATURE: WPM-OVER-TIME GRAPH (RESULTS SCREEN) */
/* Draws an SVG line graph from this test's wpmHistory samples -   */
/* a lighter "raw" line plus the main "wpm" line, same idea as the */
/* speed-over-time graph shown on typing-test result screens.      */
/* ========================================= */

/* NEW FEATURE: shared consistency calculation - 100 minus the
   sample-to-sample variation in a list of wpm values, as a
   percentage. Returns null when there isn't enough data yet (fewer
   than 2 samples, or a zero/negative average). Used both to plot
   the live consistency line on the graph and to fill in the
   "consistency" figure in the meta row, so the two always agree. */
function computeConsistency(wpmValues) {

    if (wpmValues.length < 2) {

        return null;

    }

    const mean =
        wpmValues.reduce(
            (sum, value) => sum + value,
            0
        ) / wpmValues.length;

    if (mean <= 0) {

        return null;

    }

    const variance =
        wpmValues.reduce(
            (sum, value) =>
                sum + Math.pow(value - mean, 2),
            0
        ) / wpmValues.length;

    const stdDev =
        Math.sqrt(variance);

    return Math.max(
        0,
        Math.min(
            100,
            Math.round(
                100 - ((stdDev / mean) * 100)
            )
        )
    );

}


function renderWpmChart() {

    if (!wpmChartElement) {

        return;

    }


    if (wpmHistory.length < 2) {

        wpmChartElement.innerHTML =
            '<div class="wpm-chart-empty">Start typing to see your live graph</div>';

        return;

    }


    const width = 600;

    const height = 180;

    const paddingLeft = 34;

    /* Widened from the original 10px so there's room for the
       right-hand 0/50/100% axis labels used by the accuracy and
       consistency lines. */
    const paddingRight = 34;

    const paddingTop = 12;

    const paddingBottom = 22;


    const maxTime =
        wpmHistory[wpmHistory.length - 1].time;

    const maxWpmValue =
        Math.max(
            10,
            ...wpmHistory.map((point) => point.wpm),
            ...wpmHistory.map((point) => point.raw)
        );


    const chartX = (time) =>
        paddingLeft +
        (
            (time / maxTime) *
            (width - paddingLeft - paddingRight)
        );

    /* Left axis: wpm / raw, scaled 0..maxWpmValue. */
    const chartYWpm = (value) =>
        (height - paddingBottom) -
        (
            (value / maxWpmValue) *
            (height - paddingTop - paddingBottom)
        );

    /* NEW FEATURE: right axis for the percentage-based metrics
       (accuracy, consistency) - fixed 0..100 scale, sharing the
       same plot area as the wpm/raw lines so all four series draw
       on one graph instead of accuracy/consistency being squashed
       flat or blown off the top by the wpm scale. */
    const chartYPercent = (value) =>
        (height - paddingBottom) -
        (
            (value / 100) *
            (height - paddingTop - paddingBottom)
        );


    /* Builds an SVG path for one series. Points where that key
       isn't a number yet (e.g. consistency needs 2+ samples) are
       skipped rather than plotted as zero. */
    const buildLinePath = (key, yFn) => {

        const points =
            wpmHistory.filter(
                (point) => typeof point[key] === "number"
            );

        return points.map(
            (point, index) =>
                `${index === 0 ? "M" : "L"} ${chartX(point.time).toFixed(1)} ${yFn(point[key]).toFixed(1)}`
        ).join(" ");

    };


    const buildDots = (key, yFn, cssClass) => {

        const points =
            wpmHistory.filter(
                (point) => typeof point[key] === "number"
            );

        return points.map(
            (point) =>
                `<circle class="${cssClass}" cx="${chartX(point.time).toFixed(1)}" cy="${yFn(point[key]).toFixed(1)}" r="2.5"></circle>`
        ).join("");

    };


    /* Three horizontal grid lines with WPM labels (left), evenly
       spaced between 0 and the rounded-up max. */
    const gridSteps = 3;

    let gridLines = "";

    for (let step = 0; step <= gridSteps; step++) {

        const value =
            Math.round(
                (maxWpmValue / gridSteps) * step
            );

        const y =
            chartYWpm(value);

        gridLines +=
            `<line x1="${paddingLeft}" y1="${y.toFixed(1)}" x2="${width - paddingRight}" y2="${y.toFixed(1)}" class="wpm-chart-grid-line"></line>` +
            `<text x="${paddingLeft - 8}" y="${(y + 3).toFixed(1)}" class="wpm-chart-axis-label" text-anchor="end">${value}</text>`;

    }


    /* NEW FEATURE: matching 0/50/100% labels on the right for the
       accuracy/consistency lines. No extra grid lines drawn for
       these - they share the left axis's gridlines visually, this
       just labels what the percent scale means. */
    let percentLabels = "";

    for (let step = 0; step <= gridSteps; step++) {

        const value =
            Math.round(
                (100 / gridSteps) * step
            );

        const y =
            chartYPercent(value);

        percentLabels +=
            `<text x="${width - paddingRight + 8}" y="${(y + 3).toFixed(1)}" class="wpm-chart-axis-label wpm-chart-axis-label-right">${value}%</text>`;

    }


    const svg =
        `<svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">` +
        gridLines +
        percentLabels +
        `<path d="${buildLinePath("raw", chartYWpm)}" class="wpm-chart-line-raw"></path>` +
        `<path d="${buildLinePath("accuracy", chartYPercent)}" class="wpm-chart-line-accuracy"></path>` +
        `<path d="${buildLinePath("consistency", chartYPercent)}" class="wpm-chart-line-consistency"></path>` +
        `<path d="${buildLinePath("wpm", chartYWpm)}" class="wpm-chart-line-wpm"></path>` +
        buildDots("wpm", chartYWpm, "wpm-chart-dot-wpm") +
        `</svg>`;


    wpmChartElement.innerHTML =
        svg;

}


/* ========================================= */
/* NEW FEATURE: LIVE SUMMARY (MAIN PAGE) */
/* Fills in the big wpm/acc numbers and the test type / raw /      */
/* characters / consistency / time row next to the graph, all      */
/* recalculated live from the same counters the rest of the app    */
/* already tracks while typing. */
/* ========================================= */

function updateLiveSummary() {

    const elapsedSeconds =
        getElapsedSeconds();


    /* WPM (net) - mirrors updateWPM()'s own calculation */

    let liveWpm = 0;

    if (elapsedSeconds >= 1) {

        liveWpm =
            Math.round(
                (totalCorrectCharacters / 5) /
                (elapsedSeconds / 60)
            );

    }

    if (liveBigWpmElement) {

        liveBigWpmElement.textContent =
            liveWpm;

    }


    /* ACCURACY */

    let liveAccuracy = 100;

    if (typedCharacters > 0) {

        liveAccuracy =
            Math.round(
                (correctCharacters / typedCharacters) * 100
            );

    }

    if (liveBigAccElement) {

        liveBigAccElement.textContent =
            liveAccuracy + "%";

    }


    /* TEST TYPE */

    if (metaTestTypeElement) {

        metaTestTypeElement.textContent =
            currentTestMode ?
                currentTestMode.label :
                `Level ${currentLevel}`;

    }


    /* RAW WPM (includes mistyped characters) */

    let liveRaw = 0;

    if (elapsedSeconds >= 1) {

        liveRaw =
            Math.round(
                (typedCharacters / 5) /
                (elapsedSeconds / 60)
            );

    }

    if (metaRawElement) {

        metaRawElement.textContent =
            liveRaw;

    }


    /* CHARACTERS (correct/incorrect) */

    if (metaCharactersElement) {

        const incorrectCharacters =
            Math.max(
                0,
                typedCharacters - correctCharacters
            );

        metaCharactersElement.textContent =
            `${correctCharacters}/${incorrectCharacters}`;

    }


    /* CONSISTENCY - how steady the wpm samples have been so far,
       expressed the same way typing tests usually do: 100 minus the
       sample-to-sample variation, as a percentage. */

    if (metaConsistencyElement) {

        const consistency =
            computeConsistency(
                wpmHistory.map((point) => point.wpm)
            );

        metaConsistencyElement.textContent =
            consistency === null ?
                "-" :
                consistency + "%";

    }


    /* TIME */

    if (metaTimeElement) {

        metaTimeElement.textContent =
            formatTimer(
                Math.floor(elapsedSeconds)
            );

    }

}


/* ========================================= */
/* LEADERBOARD */
/* ========================================= */

function updateLeaderboard() {

    if (!leaderboardListElement) {

        return;

    }


    leaderboardListElement.innerHTML =
        "";


    const entries =
        savedData.leaderboard;


    if (
        !entries ||
        entries.length === 0
    ) {

        const empty =
            document.createElement(
                "div"
            );

        empty.className =
            "leaderboard-empty";

        empty.textContent =
            "Finish a full test to enter the leaderboard.";

        leaderboardListElement.appendChild(
            empty
        );

        return;

    }


    entries.forEach(
        (entry, index) => {

            const rank =
                index + 1;

            const item =
                document.createElement(
                    "div"
                );

            const isCurrentPlayerRow =
                (entry.name || "Guest") ===
                getProfileDisplayName();

            item.className =
                "leaderboard-item" +
                (
                    rank <= 3
                        ? " rank-" + rank
                        : ""
                ) +
                (
                    isCurrentPlayerRow
                        ? " leaderboard-item-you"
                        : ""
                );


            const rankBadge =
                document.createElement(
                    "div"
                );

            rankBadge.className =
                "leaderboard-rank";

            rankBadge.textContent =
                rank;


            const info =
                document.createElement(
                    "div"
                );

            info.className =
                "leaderboard-info";


            const nameEl =
                document.createElement(
                    "strong"
                );

            const isCurrentPlayer =
                (entry.name || "Guest") ===
                getProfileDisplayName();

            nameEl.textContent =
                (entry.name || "Guest") +
                (
                    isCurrentPlayer
                        ? " (You)"
                        : ""
                );


            const dateEl =
                document.createElement(
                    "span"
                );

            dateEl.textContent =
                entry.date || "";


            info.appendChild(nameEl);
            info.appendChild(dateEl);


            const wpmBox =
                document.createElement(
                    "div"
                );

            wpmBox.className =
                "leaderboard-wpm";


            const wpmValue =
                document.createElement(
                    "strong"
                );

            wpmValue.textContent =
                entry.wpm + " WPM";


            const accValue =
                document.createElement(
                    "span"
                );

            accValue.textContent =
                entry.accuracy + "% acc";


            wpmBox.appendChild(wpmValue);
            wpmBox.appendChild(accValue);


            item.appendChild(rankBadge);
            item.appendChild(info);
            item.appendChild(wpmBox);


            leaderboardListElement.appendChild(
                item
            );

        }
    );

}


/* ========================================= */
/* DAILY GOAL */
/* ========================================= */

function checkDailyGoal() {

    if (
        savedData.dailyCompleted ===
        DAILY_GOAL
    ) {

        challengeElement.textContent =
            "🎉 Daily goal completed! Amazing work!";

    }

}


/* ========================================= */
/* TIMER FORMAT */
/* ========================================= */

function formatTimer(
    totalSeconds
) {

    const hours =
        Math.floor(
            totalSeconds / 3600
        );


    const minutes =
        Math.floor(
            (
                totalSeconds % 3600
            ) / 60
        );


    const seconds =
        totalSeconds % 60;


    return (

        String(hours)
            .padStart(2, "0") +

        ":" +

        String(minutes)
            .padStart(2, "0") +

        ":" +

        String(seconds)
            .padStart(2, "0")

    );

}


/* ========================================= */
/* LOAD SENTENCE */
/* ========================================= */

/* NEW FEATURE: short subtitle shown under the mode name in the
   level-display strip when a practice mode (rather than a level)
   is active. Exams show their topic title instead, handled where
   currentTestMode is built. */
function getModeSubtitle(mode) {

    switch (mode.type) {

        case "time":
            return "Timed Practice";

        case "endless":
            return "Endless Practice";

        case "words":
            return "Word Count";

        case "zen":
            return "Zen Practice";

        case "content":
            return "Content Practice";

        case "exam":
            return "Typing Exam";

        default:
            return "Practice Mode";

    }

}


function loadSentence() {

    sentenceCompleted =
        false;

    previousTypedLength =
        0;


    /* NEW FEATURE: while a practice mode or exam is active, the
       level-display strip shows the mode's name instead of a level
       number - it was previously always showing "Level N" even
       inside modes, which read as if modes were just more levels. */
    if (currentTestMode) {

        if (levelLabelElement) {

            levelLabelElement.textContent =
                "Mode";

        }

        levelElement.textContent =
            currentTestMode.label;

        levelDifficultyElement.textContent =
            currentTestMode.title ||
            getModeSubtitle(currentTestMode);

    }

    else {

        if (levelLabelElement) {

            levelLabelElement.textContent =
                "Level";

        }

        levelElement.textContent =
            currentLevel;

        levelDifficultyElement.textContent =
            levels[currentLevel].name;

    }


    /* NEW FEATURE: the exam-scoped reset button only makes sense
       while an exam is actually active - hidden the rest of the
       time (classic levels, other practice modes, Phoenix). */
    if (examResetProgressButton) {

        examResetProgressButton.style.display =
            (
                currentTestMode &&
                currentTestMode.type === "exam"
            ) ?
                "inline-flex" :
                "none";

    }


    updateLevelDisplay();


    input.value = "";

    textElement.innerHTML = "";


    /* NEW FEATURE: content-based practice modes (letters only,
       numbers, symbols, home row, etc.) pull from a generated
       pool instead of the current level's sentences. */
    const levelSentences =
        getActiveSentencePool();


    const sentence =
        levelSentences[
            levelSentenceIndex % levelSentences.length
        ];


    /* CREATE CHARACTER SPANS */

    for (
        let i = 0;
        i < sentence.length;
        i++
    ) {

        const span =
            document.createElement(
                "span"
            );


        span.textContent =
            sentence[i];

        textElement.appendChild(
            span
        );

    }


    /* CURRENT CHARACTER */

    const firstCharacter =
        textElement.querySelector(
            "span"
        );


    if (firstCharacter) {

        firstCharacter.classList.add(
            "current"
        );

    }


    /* PROGRESS */

    sentenceNumberElement.textContent =
        levelSentenceIndex + 1;

    totalSentencesElement.textContent =
        levelSentences.length;

    rightCurrentTest.textContent =
        `${levelSentenceIndex + 1} / ${levelSentences.length}`;


    const progress =
        (
            levelSentenceIndex /
            levelSentences.length
        ) * 100;


    progressElement.style.width =
        progress + "%";


    if (currentTestMode) {

        const modeMessages = {
            time: `⏱️ ${currentTestMode.value} Sec Mode — type as much as you can!`,
            words: `🔤 ${currentTestMode.value} Word Mode — reach the target!`,
            endless: "♾️ Endless Mode — keep going as long as you like!",
            zen: "🧘 Zen Mode — relax and type at your own pace.",
            content: `⌨️ ${currentTestMode.label} Mode — practice this content type!`,
            exam: `📝 ${currentTestMode.label} — ${currentTestMode.value}s exam, do your best!`
        };

        challengeElement.textContent =
            modeMessages[currentTestMode.type] ||
            "⌨️ Type correctly to build your streak.";

    }

    else {

        challengeElement.textContent =
            "⌨️ Type correctly to build your streak.";

    }


    streakElement.textContent =
        currentStreak;

    bigStreakElement.textContent =
        currentStreak;

    rightCurrentStreak.textContent =
        currentStreak;


    setTimeout(
        () => {

            input.focus();

        },
        50
    );


    highlightNextKey();

}


/* ========================================= */
/* START TIMER */
/* ========================================= */

function startTimer() {

    if (testRunning) {

        return;

    }


    testRunning = true;

    testStartTime =
        Date.now();

    wpmHistory = [];

    renderWpmChart();

    updateLiveSummary();


    timer =
        setInterval(
            updateTimer,
            100
        );

}


/* ========================================= */
/* UPDATE TIMER */
/* ========================================= */

function updateTimer() {

    if (!testStartTime) {

        return;

    }


    const elapsed =
        Math.floor(
            (
                Date.now() -
                testStartTime
            ) / 1000
        );


    timerElement.textContent =
        formatTimer(elapsed);


    updateWPM();

    updateLiveSummary();


    /* NEW FEATURE: record one WPM sample per elapsed second so the
       results screen can plot how speed changed over the course of
       the test, the same way the timer/WPM readout is updated. */
    if (
        elapsed > 0 &&
        (
            wpmHistory.length === 0 ||
            wpmHistory[wpmHistory.length - 1].time !== elapsed
        )
    ) {

        const minutesSoFar =
            elapsed / 60;

        const rawWpmSoFar =
            Math.round(
                (typedCharacters / 5) / minutesSoFar
            );

        const netWpmSoFar =
            Math.round(
                (totalCorrectCharacters / 5) / minutesSoFar
            );

        /* NEW FEATURE: accuracy at this instant, same calculation
           updateLiveSummary() uses for the live accuracy readout -
           recorded per sample so accuracy can be plotted live too. */
        const accuracySoFar =
            typedCharacters > 0 ?
                Math.round(
                    (correctCharacters / typedCharacters) * 100
                ) :
                100;

        wpmHistory.push({

            time: elapsed,

            raw: rawWpmSoFar,

            wpm: netWpmSoFar,

            accuracy: accuracySoFar

        });

        /* NEW FEATURE: running consistency, recalculated from every
           wpm sample recorded so far (including the one just
           pushed) so it can be plotted alongside wpm/raw/accuracy. */
        wpmHistory[wpmHistory.length - 1].consistency =
            computeConsistency(
                wpmHistory.map((point) => point.wpm)
            );


        renderWpmChart();

    }


    /* NEW FEATURE: practice modes with a time or word target
       end the test automatically once that target is hit. */
    if (currentTestMode) {

        if (
            (currentTestMode.type === "time" || currentTestMode.type === "exam") &&
            elapsed >= currentTestMode.value
        ) {

            showFinalResults();

            return;

        }


        if (currentTestMode.type === "words") {

            const wordsTyped =
                totalCorrectCharacters / 5;

            if (wordsTyped >= currentTestMode.value) {

                showFinalResults();

                return;

            }

        }

    }

}


/* ========================================= */
/* GET ELAPSED TIME */
/* ========================================= */

function getElapsedSeconds() {

    if (!testStartTime) {

        return 0;

    }


    return (
        Date.now() -
        testStartTime
    ) / 1000;

}


/* ========================================= */
/* UPDATE WPM */
/* ========================================= */

function updateWPM() {

    if (
        !testStartTime ||
        !testRunning
    ) {

        wpmElement.textContent =
            "0";

        bigWpmElement.textContent =
            "0";

        return;

    }


    const elapsedSeconds =
        getElapsedSeconds();


    if (
        elapsedSeconds < 1
    ) {

        wpmElement.textContent =
            "0";

        bigWpmElement.textContent =
            "0";

        return;

    }


    const minutes =
        elapsedSeconds / 60;


    const wpm =
        Math.round(
            (
                totalCorrectCharacters / 5
            ) / minutes
        );


    wpmElement.textContent =
        wpm;

    bigWpmElement.textContent =
        wpm;

    /*
     * NOTE: Best WPM is intentionally NOT updated here.
     * See evaluateBestWpm() - it is only checked at stable
     * checkpoints (when a sentence or the full test
     * completes) so a short early burst of typing can't
     * permanently inflate the saved Best WPM.
     */

}


/* ========================================= */
/* BUG FIX: BEST WPM CHECKPOINT */
/* ========================================= */

function evaluateBestWpm(wpm) {

    if (!Number.isFinite(wpm)) {

        return false;

    }


    if (
        wpm >
        Number(savedData.bestWpm)
    ) {

        savedData.bestWpm =
            wpm;

        saveData();

        updatePlayerSummary();

        return true;

    }


    return false;

}


/* ========================================= */
/* UPDATE ACCURACY */
/* ========================================= */

function updateAccuracy() {

    if (
        typedCharacters <= 0
    ) {

        accuracyElement.textContent =
            "100%";

        return;

    }


    const accuracy =
        Math.round(
            (
                correctCharacters /
                typedCharacters
            ) * 100
        );


    accuracyElement.textContent =
        accuracy + "%";

}


/* ========================================= */
/* INPUT HANDLING */
/* ========================================= */

input.addEventListener(
    "input",
    function () {

        startTimer();


        const typed =
            input.value;


        const sentence =
            getActiveSentencePool()[
                levelSentenceIndex % getActiveSentencePool().length
            ];


        const spans =
            textElement.querySelectorAll(
                "span"
            );


        /* PREVENT EXTRA CHARACTERS */

        if (
            typed.length >
            sentence.length
        ) {

            input.value =
                typed.substring(
                    0,
                    sentence.length
                );

            return;

        }


        /* REMOVE OLD CLASSES */

        spans.forEach(
            span => {

                span.classList.remove(
                    "correct",
                    "wrong",
                    "current"
                );

            }
        );


        let currentCorrect = 0;


        /* CHECK CHARACTERS */

        for (
            let i = 0;
            i < typed.length;
            i++
        ) {

            if (
                typed[i] ===
                sentence[i]
            ) {

                spans[i].classList.add(
                    "correct"
                );

                currentCorrect++;

            }

            else {

                spans[i].classList.add(
                    "wrong"
                );

            }

        }


        /* CURRENT CURSOR */

        if (
            typed.length <
            sentence.length
        ) {

            spans[
                typed.length
            ].classList.add(
                "current"
            );

        }


        /* SENTENCE TOTALS */

        let previousTyped = 0;

        let previousCorrect = 0;


        for (
            let i = 0;
            i < sentenceStats.length;
            i++
        ) {

            previousTyped +=
                sentenceStats[i].typed;

            previousCorrect +=
                sentenceStats[i].correct;

        }


        typedCharacters =
            previousTyped +
            typed.length;


        correctCharacters =
            previousCorrect +
            currentCorrect;


        totalCorrectCharacters =
            correctCharacters;


        /* RUNNING STREAK */

        if (
            typed.length >
            previousTypedLength
        ) {

            const newIndex =
                typed.length - 1;


            if (
                typed[newIndex] ===
                sentence[newIndex]
            ) {

                currentStreak++;

            }

            else {

                currentStreak = 0;

            }

        }


        previousTypedLength =
            typed.length;


        /* HIGHEST STREAK */

        if (
            currentStreak >
            highestStreak
        ) {

            highestStreak =
                currentStreak;

        }


        /* NEW FEATURE: BEST STREAK (persisted) */

        if (
            currentStreak >
            Number(savedData.bestStreak)
        ) {

            savedData.bestStreak =
                currentStreak;

            saveData();

            updatePlayerSummary();

        }


        /* DISPLAY STREAK */

        streakElement.textContent =
            currentStreak;

        bigStreakElement.textContent =
            currentStreak;

        rightCurrentStreak.textContent =
            currentStreak;


        /* UPDATE STATS */

        updateWPM();

        updateAccuracy();

        updateChallenge();


        /* COMPLETE SENTENCE */

        if (
            typed.length ===
            sentence.length
        ) {

            if (
                !sentenceCompleted
            ) {

                completeSentence();

            }

        }

    }
);


/* ========================================= */
/* CHALLENGE MESSAGE */
/* ========================================= */

function updateChallenge() {

    const accuracy =
        parseInt(
            accuracyElement.textContent
        );


    if (
        currentStreak >= 20
    ) {

        challengeElement.textContent =
            "🔥 Amazing streak! Keep going!";

    }

    else if (
        currentStreak >= 5
    ) {

        challengeElement.textContent =
            "⚡ Great streak! Keep typing correctly.";

    }

    else if (
        accuracy < 75
    ) {

        challengeElement.textContent =
            "💪 Slow down and focus on accuracy.";

    }

    else if (
        accuracy < 90
    ) {

        challengeElement.textContent =
            "🎯 Try to improve your accuracy.";

    }

    else {

        challengeElement.textContent =
            "⌨️ Type correctly to build your streak.";

    }

}


/* ========================================= */
/* COMPLETE SENTENCE */
/* ========================================= */

function completeSentence() {

    sentenceCompleted =
        true;


    const sentence =
        getActiveSentencePool()[
            levelSentenceIndex % getActiveSentencePool().length
        ];


    const typed =
        input.value;


    let correct = 0;


    for (
        let i = 0;
        i < sentence.length;
        i++
    ) {

        if (
            typed[i] ===
            sentence[i]
        ) {

            correct++;

        }

    }


    /* SAVE SENTENCE STATS */

    sentenceStats.push({

        typed:
            typed.length,

        correct:
            correct

    });


    totalCorrectCharacters =
        correctCharacters;


    /* BUG FIX: BEST WPM CHECKPOINT */

    const bestWpmElapsedSeconds =
        getElapsedSeconds();

    if (
        bestWpmElapsedSeconds >=
        3
    ) {

        const bestWpmMinutes =
            bestWpmElapsedSeconds / 60;

        const checkpointWpm =
            Math.round(
                (
                    totalCorrectCharacters / 5
                ) / bestWpmMinutes
            );

        evaluateBestWpm(
            checkpointWpm
        );

    }


    /* LIFETIME STATISTICS */

    savedData.totalSentences++;

    savedData.totalCharacters +=
        typed.length;


    /* ========================================= */
    /* FIX 2: TESTS COMPLETED */
    /* ========================================= */

    savedData.totalTests++;


    /* WEEKLY REPORT TRACKING */

    const activityKey =
        getDateString();

    savedData.weeklyActivity[activityKey] =
        (
            Number(
                savedData.weeklyActivity[activityKey]
            ) || 0
        ) + 1;


    saveData();

    updatePlayerSummary();

    updateWeeklyReport();


    registerDailyActivity();


    /* ACHIEVEMENTS */

    const completed =
        savedData.totalSentences;


    if (
        completed >= 5
    ) {

        checkAchievements(
            completed
        );

    }


    challengeElement.textContent =
        "✅ Sentence completed!";


    /* PROGRESS */

    const levelTotal =
        getActiveSentencePool().length;


    progressElement.style.width =
        (
            (
                levelSentenceIndex + 1
            ) /
            levelTotal
        ) * 100 + "%";


    streakElement.textContent =
        currentStreak;

    bigStreakElement.textContent =
        currentStreak;

    rightCurrentStreak.textContent =
        currentStreak;


    /* NEXT SENTENCE */

    nextSentenceTimer =
        setTimeout(
            () => {

                nextSentenceTimer =
                    null;

                nextSentence();

            },
            600
        );

}


/* ========================================= */
/* NEXT SENTENCE */
/* ========================================= */

function nextSentence() {

    const levelSentences =
        getActiveSentencePool();


    /* NEW FEATURE: practice modes (timed, word-count, endless,
       zen) never run out of sentences or advance a level - they
       just loop the current level's sentences until the mode's
       own end condition fires, or the player hits Restart. */
    if (currentTestMode) {

        levelSentenceIndex =
            (levelSentenceIndex + 1) %
            levelSentences.length;

        saveLevelProgress();

        loadSentence();

        return;

    }


    /* NEXT SENTENCE */

    if (
        levelSentenceIndex <
        levelSentences.length - 1
    ) {

        levelSentenceIndex++;

        saveLevelProgress();

        loadSentence();

        return;

    }


    /* NEXT LEVEL */

    if (
        currentLevel <
        TOTAL_LEVELS
    ) {

        currentLevel++;

        levelSentenceIndex = 0;

        saveLevelProgress();

        updateLevelDisplay();

        loadSentence();

        return;

    }


    /* ALL LEVELS FINISHED */

    showFinalResults();

}


/* ========================================= */
/* ACHIEVEMENT CHECK */
/* ========================================= */

function checkAchievements(
    completedSentences
) {

    if (
        completedSentences % 5 !== 0
    ) {

        return;

    }


    const milestone =
        completedSentences / 5;


    const achievementIndex =
        Math.min(
            milestone - 1,
            achievements.length - 1
        );


    const achievement =
        achievements[
            achievementIndex
        ];


    if (
        savedData.unlockedAchievements
            .includes(
                achievement.id
            )
    ) {

        updateAchievementList();

        return;

    }


    savedData.unlockedAchievements.push(
        achievement.id
    );


    saveData();


    updateAchievementList();


    showAchievement(
        achievement.name
    );

}


/* ========================================= */
/* SHOW ACHIEVEMENT */
/* ========================================= */

function showAchievement(
    name
) {

    achievementName.textContent =
        name;


    achievementPopup.style.display =
        "flex";


    setTimeout(
        () => {

            achievementPopup.style.display =
                "none";

        },
        2500
    );

}


/* ========================================= */
/* ACHIEVEMENT LIST */
/* ========================================= */

function updateAchievementList() {

    achievementList.innerHTML =
        "";


    const unlocked =
        savedData.unlockedAchievements;


    achievementCount.textContent =
        unlocked.length;


    achievements.forEach(
        achievement => {

            const div =
                document.createElement(
                    "div"
                );


            const isUnlocked =
                unlocked.includes(
                    achievement.id
                );


            if (isUnlocked) {

                div.className =
                    "achievement unlocked";

                div.textContent =
                    "🏆 " +
                    achievement.name;

            }

            else {

                div.className =
                    "achievement locked";

                div.textContent =
                    "🔒 " +
                    achievement.name;

            }


            achievementList.appendChild(
                div
            );

        }
    );

}


/* ========================================= */
/* FINAL RESULTS */
/* ========================================= */

function showFinalResults() {

    clearInterval(timer);

    timer = null;

    testRunning = false;

    input.blur();


    const elapsed =
        getElapsedSeconds();


    const minutes =
        elapsed / 60;


    let finalWpmValue = 0;


    if (
        minutes > 0
    ) {

        finalWpmValue =
            Math.round(
                (
                    totalCorrectCharacters / 5
                ) / minutes
            );

    }


    let finalAccuracyValue = 0;


    if (
        typedCharacters > 0
    ) {

        finalAccuracyValue =
            Math.round(
                (
                    correctCharacters /
                    typedCharacters
                ) * 100
            );

    }

    else {

        finalAccuracyValue =
            100;

    }


    /* RESULTS */

    finalWpm.textContent =
        finalWpmValue;

    finalAccuracy.textContent =
        finalAccuracyValue +
        "%";

    finalStreak.textContent =
        highestStreak;

    finalCharacters.textContent =
        typedCharacters;

    finalTime.textContent =
        formatTimer(
            Math.floor(elapsed)
        );


    /* TOTAL TIME SPENT (OVERALL, ACROSS ALL TESTS) */

    savedData.totalTimeSeconds =
        (Number(savedData.totalTimeSeconds) || 0) +
        Math.floor(elapsed);


    /* NEW FEATURE: finishing an exam only unlocks the next one once
       accuracy is at least EXAM_UNLOCK_ACCURACY - a plain finish is
       no longer enough, matching how the reset lock/unlock pattern
       works elsewhere but gated on performance for exams. Builds a
       message either way, shown below via the results screen. */
    let examUnlockMessage = null;

    if (
        currentTestMode &&
        currentTestMode.type === "exam"
    ) {

        const examNumber =
            parseInt(
                String(currentTestMode.id).replace("exam", ""),
                10
            );

        if (
            Number.isFinite(examNumber) &&
            examNumber < TOTAL_EXAMS
        ) {

            const nextExamNumber =
                examNumber + 1;

            const alreadyUnlocked =
                (Number(savedData.highestExamReached) || 1) >=
                nextExamNumber;

            if (finalAccuracyValue >= EXAM_UNLOCK_ACCURACY) {

                savedData.highestExamReached =
                    Math.max(
                        Number(savedData.highestExamReached) || 1,
                        nextExamNumber
                    );

                if (!alreadyUnlocked) {

                    examUnlockMessage =
                        `🎉 ${EXAM_UNLOCK_ACCURACY}%+ accuracy - Exam ${nextExamNumber} unlocked!`;

                }

            }

            else if (!alreadyUnlocked) {

                examUnlockMessage =
                    `🔒 Score at least ${EXAM_UNLOCK_ACCURACY}% accuracy to unlock Exam ${nextExamNumber}. You got ${finalAccuracyValue}% - try again!`;

            }

        }

    }


    finalDailyGoal.textContent =
        `${savedData.dailyCompleted} / ${DAILY_GOAL}`;


    /* BEST ACCURACY */

    if (
        finalAccuracyValue >
        savedData.bestAccuracy
    ) {

        savedData.bestAccuracy =
            finalAccuracyValue;

    }


    /* BEST WPM */

    const newBestWpm =
        evaluateBestWpm(
            finalWpmValue
        );


    /*
     * TOTAL TESTS IS UPDATED IN completeSentence()
     * SO IT IS NOT UPDATED HERE AGAIN.
     */


    /* LEADERBOARD ENTRY
     *
     * The leaderboard is shared across every player who uses this
     * app/device, keyed by their profile name. Each player only ever
     * occupies ONE row - their personal best run - so the board is
     * a true "who is the top player" ranking instead of a history of
     * a single player's last few runs. A new run only replaces that
     * player's row when it beats their existing best WPM.
     */

    const leaderboardPlayerName =
        getProfileDisplayName();

    const existingPlayerEntry =
        savedData.leaderboard.find(
            (entry) =>
                (entry.name || "Guest") ===
                leaderboardPlayerName
        );

    if (!existingPlayerEntry) {

        savedData.leaderboard.push({

            name: leaderboardPlayerName,

            wpm: finalWpmValue,

            accuracy: finalAccuracyValue,

            date: getDateString()

        });

    }

    else if (
        finalWpmValue >
        existingPlayerEntry.wpm
    ) {

        existingPlayerEntry.wpm =
            finalWpmValue;

        existingPlayerEntry.accuracy =
            finalAccuracyValue;

        existingPlayerEntry.date =
            getDateString();

    }


    /* Rank every player by best WPM so the top performer always
     * shows first. Nothing is sliced off here anymore - the whole
     * board is kept and the card itself scrolls instead of growing,
     * so adding more players never changes the leaderboard card's
     * size. */
    savedData.leaderboard.sort(
        (a, b) => b.wpm - a.wpm
    );


    /* YOUR PROGRESS ENTRY */

    recordProgressPoint(
        finalWpmValue,
        finalAccuracyValue
    );


    saveData();


    /* UPDATE TOP DISPLAY */

    updatePlayerSummary();

    updateLeaderboard();

    updateProgressChart();

    /* Refresh the exam grid immediately so a newly unlocked exam
       shows up unlocked right away instead of only after the next
       visit to the hub. */
    populateTypingTestGrid();


    /* NEW BEST MESSAGE */

    if (newBestWpm) {

        challengeElement.textContent =
            `🏆 New Best WPM: ${finalWpmValue}!`;

    }


    /* PERFORMANCE MESSAGE */

    if (
        finalWpmValue >= 60 &&
        finalAccuracyValue >= 95
    ) {

        performanceMessage.textContent =
            "🔥 Incredible! You are a typing master!";

    }

    else if (
        finalWpmValue >= 40 &&
        finalAccuracyValue >= 90
    ) {

        performanceMessage.textContent =
            "⚡ Excellent performance!";

    }

    else if (
        finalAccuracyValue >= 90
    ) {

        performanceMessage.textContent =
            "🎯 Great accuracy! Keep building speed.";

    }

    else {

        performanceMessage.textContent =
            "💪 Keep practicing. You will improve!";

    }


    /* NEW FEATURE: for exams, the unlock/no-unlock message takes
       priority over the generic tiered message above, since it's
       the more actionable thing to tell the player right now. */
    if (examUnlockMessage) {

        performanceMessage.textContent =
            examUnlockMessage;

    }


    /* NEW FEATURE: WPM-over-time graph for this test */

    renderWpmChart();

    updateLiveSummary();


    results.style.display =
        "flex";

}


/* ========================================= */
/* RESTART TEST */
/* ========================================= */

/* Shared by the full "Restart Test"/"Try Again" buttons and the
   scoped "Reset Progress" button in the profile modal. With
   forceLevelOne it always exits back to Level 1 (the original
   restart behavior). Without it, the reset is scoped to whatever
   is currently active: Level 1 if no practice mode is running, or
   just that one mode/exam restarted from its first sentence if one
   is - currentTestMode and currentLevel are left alone in that
   case, so nothing outside the active mode is touched. */
function performReset(options) {

    options =
        options || {};


    clearInterval(timer);

    timer = null;


    clearTimeout(
        nextSentenceTimer
    );

    nextSentenceTimer =
        null;


    if (
        options.forceLevelOne ||
        !currentTestMode
    ) {

        currentTestMode = null;

        currentLevel = 1;

        /* NEW FEATURE FIX: a real progress reset (options.lockLevels)
           also locks every level above 1 back up, so Level 2+ don't
           stay clickable in the level grid after "Reset Progress".
           Plain restarts (restartTest -> forceLevelOne, no
           lockLevels) still just jump back to Level 1 without
           touching what's already unlocked. */
        if (options.lockLevels) {

            savedData.highestLevelReached = 1;

        }

    }

    /* else: a practice mode/exam stays active - only its sentence
       position and this session's stats reset below. */

    levelSentenceIndex = 0;

    saveLevelProgress();

    /* Refresh the level grid immediately (in case it's still in the
       DOM behind the profile modal) so newly re-locked levels show
       up locked right away instead of only after the next visit. */
    populateLevelSelectScreen();

    typedCharacters = 0;

    correctCharacters = 0;

    currentStreak = 0;

    highestStreak = 0;

    testStartTime = null;

    testRunning = false;

    sentenceCompleted = false;

    previousTypedLength = 0;

    totalCorrectCharacters = 0;

    sentenceStats = [];

    wpmHistory = [];

    renderWpmChart();

    updateLiveSummary();


    input.value = "";


    results.style.display =
        "none";


    timerElement.textContent =
        "00:00:00";


    wpmElement.textContent =
        "0";


    accuracyElement.textContent =
        "100%";


    streakElement.textContent =
        "0";


    bigWpmElement.textContent =
        "0";


    bigStreakElement.textContent =
        "0";


    rightCurrentStreak.textContent =
        "0";


    progressElement.style.width =
        "0%";


    challengeElement.textContent =
        "⌨️ Type correctly to build your streak.";


    updatePlayerSummary();


    loadSentence();


    setTimeout(
        () => {

            input.focus();

        },
        100
    );

}


/* BUG FIX: "Restart Test"/"Try Again" used to always force
   forceLevelOne:true, which cleared currentTestMode and jumped back
   to Level 1 - so retrying an exam (or any practice mode) after
   finishing it incorrectly dumped the player onto the classic level
   screen instead of just replaying the exam/mode they were just on.
   Only fall back to Level 1 when there's no active mode to replay in
   the first place (the classic-level "Restart Test" case, unchanged
   from before). */
function restartTest() {

    performReset({ forceLevelOne: !currentTestMode });

}


/* NEW FEATURE: scoped reset used by the "Reset Progress" button in
   the profile modal - see performReset() above for what it does
   and doesn't touch. */
function resetCurrentProgress() {

    performReset({ forceLevelOne: false, lockLevels: true });

}


/* NEW FEATURE: "Reset Progress" for the Typing Test exams - mirrors
   resetCurrentProgress()/resetPhoenixProgress(). Locks every exam
   above 1 back up and sends the player back to the hub, without
   touching classic levels, Phoenix Rebirth, achievements, the
   leaderboard, or best stats. */
function resetExamProgress() {

    savedData.highestExamReached = 1;

    saveData();

    populateTypingTestGrid();

    goBackToLevelSelect();

}


/* NEW FEATURE: click handler for the in-strip exam reset button -
   see resetExamProgress() above for what it does and doesn't
   touch. */
if (examResetProgressButton) {

    examResetProgressButton.addEventListener(
        "click",
        () => {

            const confirmed =
                window.confirm(
                    "Reset your Typing Test progress back to Exam 1? All other exams will be locked again. Your achievements, leaderboard, and best stats stay unaffected."
                );

            if (!confirmed) {

                return;

            }


            resetExamProgress();

        }
    );

}


/* ========================================= */
/* CLICK TYPING AREA */
/* ========================================= */

sentenceBox.addEventListener(
    "click",
    () => {

        if (
            results.style.display !==
            "flex"
        ) {

            input.focus();

        }

    }
);


/* ========================================= */
/* KEYBOARD FOCUS */
/* ========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            results.style.display ===
            "flex"
        ) {

            return;

        }


        /* BUG FIX: don't steal focus while the player is
           typing into the Profile modal (name field, etc.)
           or into any other text input/textarea on the
           page - only the game's own hidden input should
           get auto-refocused. */

        if (
            profileModal &&
            profileModal.classList.contains("show")
        ) {

            return;

        }


        /* Same fix as above, but for the new theme/font picker
           modals - don't steal focus back to the game while
           either of them is open. */

        if (
            (
                themeModal &&
                themeModal.classList.contains("show")
            ) ||
            (
                fontModal &&
                fontModal.classList.contains("show")
            )
        ) {

            return;

        }


        const target =
            event.target;

        if (
            target &&
            target !== input &&
            (
                target.tagName === "INPUT" ||
                target.tagName === "TEXTAREA" ||
                target.isContentEditable
            )
        ) {

            return;

        }


        if (
            event.ctrlKey ||
            event.altKey ||
            event.metaKey
        ) {

            return;

        }


        input.focus();

    }
);


/* ========================================= */
/* PREVENT PASTE */
/* ========================================= */

input.addEventListener(
    "paste",
    function (event) {

        event.preventDefault();

    }
);


input.addEventListener(
    "drop",
    function (event) {

        event.preventDefault();

    }
);


input.addEventListener(
    "cut",
    function (event) {

        event.preventDefault();

    }
);


/* ========================================= */
/* BUTTONS */
/* ========================================= */

restartButton.addEventListener(
    "click",
    restartTest
);


tryAgainButton.addEventListener(
    "click",
    restartTest
);


/* ========================================= */
/* VIRTUAL KEYBOARD */
/* ========================================= */

const kbKeyElements =
    virtualKeyboard
        ? virtualKeyboard.querySelectorAll(".kb-key")
        : [];

const kbKeyMap = {};

kbKeyElements.forEach(
    keyEl => {

        const keyName =
            keyEl.dataset.key;

        if (!kbKeyMap[keyName]) {

            kbKeyMap[keyName] = [];

        }

        kbKeyMap[keyName].push(keyEl);

    }
);


function getKeyboardLookup(
    rawKey
) {

    if (rawKey === " ") {

        return " ";

    }


    if (rawKey.length === 1) {

        return rawKey.toLowerCase();

    }


    return rawKey;

}


function highlightNextKey() {

    if (!virtualKeyboard) {

        return;

    }


    kbKeyElements.forEach(
        keyEl => {

            keyEl.classList.remove(
                "kb-next"
            );

        }
    );


    if (
        results.style.display ===
        "flex"
    ) {

        return;

    }


    const levelData =
        levels[currentLevel];

    if (!levelData) {

        return;

    }


    const sentence =
        levelData.sentences[
            levelSentenceIndex
        ];

    if (!sentence) {

        return;

    }


    const typedLength =
        input.value.length;

    if (
        typedLength >=
        sentence.length
    ) {

        return;

    }


    const nextChar =
        sentence[typedLength];

    const lookupKey =
        getKeyboardLookup(nextChar);

    const matches =
        kbKeyMap[lookupKey];

    if (matches) {

        matches.forEach(
            keyEl => {

                keyEl.classList.add(
                    "kb-next"
                );

            }
        );

    }


    if (
        nextChar !== " " &&
        nextChar !==
            nextChar.toLowerCase()
    ) {

        const shiftKeys =
            kbKeyMap["Shift"];

        if (shiftKeys) {

            shiftKeys.forEach(
                keyEl => {

                    keyEl.classList.add(
                        "kb-next"
                    );

                }
            );

        }

    }

}


function pressVirtualKey(
    rawKey
) {

    if (!virtualKeyboard) {

        return;

    }


    const matches =
        kbKeyMap[
            getKeyboardLookup(rawKey)
        ];

    if (matches) {

        matches.forEach(
            keyEl => {

                keyEl.classList.add(
                    "kb-active"
                );

            }
        );

    }

}


function releaseVirtualKey(
    rawKey
) {

    if (!virtualKeyboard) {

        return;

    }


    const matches =
        kbKeyMap[
            getKeyboardLookup(rawKey)
        ];

    if (matches) {

        matches.forEach(
            keyEl => {

                keyEl.classList.remove(
                    "kb-active"
                );

            }
        );

    }

}


if (virtualKeyboard) {

    input.addEventListener(
        "keydown",
        function (event) {

            pressVirtualKey(
                event.key
            );

        }
    );


    input.addEventListener(
        "keyup",
        function (event) {

            releaseVirtualKey(
                event.key
            );

        }
    );


    document.addEventListener(
        "keyup",
        function (event) {

            releaseVirtualKey(
                event.key
            );

        }
    );


    input.addEventListener(
        "input",
        function () {

            highlightNextKey();

        }
    );

}


/* ========================================= */
/* NEW FEATURE: INTRO / SPLASH SCREEN */
/* ========================================= */

/*
 * Shows the phoenix image first, then - half a second
 * later - smoothly fades/slides the "Pheonix Type" title,
 * subtitle, and greeting up from the bottom. The main app
 * stays hidden behind this screen (and then behind the level
 * select screen) until a level is chosen - there is no
 * automatic timeout.
 */

const MOTIVATIONAL_SLOGANS = [
    "Every keystroke brings you closer to mastery.",
    "Speed is earned one accurate letter at a time.",
    "Great typists are built one practice session at a time.",
    "Your fingers remember what your mind repeats.",
    "Consistency beats intensity - keep typing.",
    "Today's practice is tomorrow's speed record.",
    "Accuracy first, speed follows.",
    "Small daily gains lead to big typing wins.",
    "Champions type through the mistakes too.",
    "The keyboard rewards patience and practice.",
    "Push your WPM one sentence at a time.",
    "Discipline today, mastery tomorrow.",
    "You're one session closer to your best streak.",
    "Progress is quiet, but it's happening - keep going."
];


function showRandomMotivation() {

    if (!introMotivationElement) {

        return;

    }

    const pick =
        MOTIVATIONAL_SLOGANS[
            Math.floor(
                Math.random() *
                MOTIVATIONAL_SLOGANS.length
            )
        ];

    introMotivationElement.textContent =
        "\u201C" + pick + "\u201D";

}


showRandomMotivation();


/* ========================================= */
/* NEW FEATURE: LEVEL SELECT SCREEN */
/* ========================================= */

/*
 * Shown every time, right after the intro screen and right
 * before the main app. Only levels up to highestLevelReached
 * can be opened; the rest stay locked until earned.
 */

/* NEW FEATURE: PRACTICE MODE CATEGORIES */

/*
 * Shown below the level grid on the level select screen.
 * Picking one of these starts a quick session using the
 * player's current level's sentences, instead of the classic
 * "finish every level in order" flow.
 */

const PRACTICE_MODES = [
    { id: "time15", label: "15 Sec", icon: "⏱️", type: "time", value: 15 },
    { id: "time30", label: "30 Sec", icon: "⏱️", type: "time", value: 30 },
    { id: "time60", label: "60 Sec", icon: "⏱️", type: "time", value: 60 },
    { id: "time120", label: "120 Sec", icon: "⏱️", type: "time", value: 120 },
    { id: "endless", label: "Endless", icon: "♾️", type: "endless", value: null },
    { id: "words10", label: "10 Words", icon: "🔤", type: "words", value: 10 },
    { id: "words25", label: "25 Words", icon: "🔤", type: "words", value: 25 },
    { id: "words50", label: "50 Words", icon: "🔤", type: "words", value: 50 },
    { id: "words100", label: "100 Words", icon: "🔤", type: "words", value: 100 },
    { id: "zen", label: "Zen Mode", icon: "🧘", type: "zen", value: null }
];


/* ========================================= */
/* NEW FEATURE: 40 CONTENT-BASED PRACTICE MODES */
/* ========================================= */

/*
 * These bring the total up to 50 practice modes. Unlike the 10
 * modes above (which only change pacing/target and still use the
 * player's current level sentences), each of these has a
 * "content" key describing *what kind* of text to generate -
 * letters only, letters + numbers, symbols, home row only, and
 * so on. generateContentText() below turns that key into an
 * actual practice passage.
 */

const CONTENT_PRACTICE_MODES = [
    { id: "c_lower", label: "Lowercase", icon: "🔡", type: "content", content: "lower" },
    { id: "c_upper", label: "Uppercase", icon: "🔠", type: "content", content: "upper" },
    { id: "c_mixed", label: "Mixed Case", icon: "🔀", type: "content", content: "mixed" },
    { id: "c_numbers", label: "Numbers Only", icon: "🔢", type: "content", content: "numbers" },
    { id: "c_symbols", label: "Symbols Only", icon: "✳️", type: "content", content: "symbols" },
    { id: "c_letnum", label: "Letters + Numbers", icon: "🔡", type: "content", content: "letnum" },
    { id: "c_letsym", label: "Letters + Symbols", icon: "🔣", type: "content", content: "letsym" },
    { id: "c_numsym", label: "Numbers + Symbols", icon: "➗", type: "content", content: "numsym" },
    { id: "c_punct", label: "Punctuation", icon: "❗", type: "content", content: "punct" },
    { id: "c_homerow", label: "Home Row", icon: "🏠", type: "content", content: "homerow" },
    { id: "c_toprow", label: "Top Row", icon: "⬆️", type: "content", content: "toprow" },
    { id: "c_bottomrow", label: "Bottom Row", icon: "⬇️", type: "content", content: "bottomrow" },
    { id: "c_lefthand", label: "Left Hand Only", icon: "🤛", type: "content", content: "lefthand" },
    { id: "c_righthand", label: "Right Hand Only", icon: "🤜", type: "content", content: "righthand" },
    { id: "c_common", label: "Common Words", icon: "💬", type: "content", content: "common" },
    { id: "c_short", label: "Short Words", icon: "🔹", type: "content", content: "short" },
    { id: "c_long", label: "Long Words", icon: "🔷", type: "content", content: "long" },
    { id: "c_double", label: "Double Letters", icon: "🔁", type: "content", content: "double" },
    { id: "c_caps", label: "Capitalized Words", icon: "🔠", type: "content", content: "caps" },
    { id: "c_quotes", label: "Quotes & Apostrophes", icon: "❝", type: "content", content: "quotes" },
    { id: "c_email", label: "Email Format", icon: "📧", type: "content", content: "email" },
    { id: "c_code", label: "Code Snippets", icon: "💻", type: "content", content: "code" },
    { id: "c_math", label: "Math Expressions", icon: "➕", type: "content", content: "math" },
    { id: "c_dates", label: "Dates & Times", icon: "📅", type: "content", content: "dates" },
    { id: "c_currency", label: "Currency & Prices", icon: "💲", type: "content", content: "currency" },
    { id: "c_brackets", label: "Brackets", icon: "🗜️", type: "content", content: "brackets" },
    { id: "c_question", label: "Questions", icon: "❓", type: "content", content: "question" },
    { id: "c_exclaim", label: "Exclamations", icon: "❕", type: "content", content: "exclaim" },
    { id: "c_allcaps", label: "All Caps Words", icon: "🔠", type: "content", content: "allcaps" },
    { id: "c_alt", label: "Alternating Case", icon: "🔀", type: "content", content: "altcase" },
    { id: "c_numseq", label: "Number Sequences", icon: "🔢", type: "content", content: "numseq" },
    { id: "c_symbolheavy", label: "Symbol Heavy", icon: "🧩", type: "content", content: "symbolheavy" },
    { id: "c_hashtag", label: "Hashtags & Mentions", icon: "#️⃣", type: "content", content: "hashtag" },
    { id: "c_filepath", label: "File Paths", icon: "📁", type: "content", content: "filepath" },
    { id: "c_url", label: "URLs", icon: "🔗", type: "content", content: "url" },
    { id: "c_abbrev", label: "Abbreviations", icon: "🔤", type: "content", content: "abbrev" },
    { id: "c_twister", label: "Tongue Twisters", icon: "👅", type: "content", content: "twister" },
    { id: "c_random", label: "Random Words", icon: "🎲", type: "content", content: "random" },
    { id: "c_vowels", label: "Vowels Focus", icon: "🅰️", type: "content", content: "vowels" },
    { id: "c_consonants", label: "Consonants Focus", icon: "🅱️", type: "content", content: "consonants" }
];

Array.prototype.push.apply(
    PRACTICE_MODES,
    CONTENT_PRACTICE_MODES
);


/* ========================================= */
/* NEW FEATURE: CONTENT TEXT GENERATOR */
/* ========================================= */

const CONTENT_WORD_BANK = [
    "phoenix", "keyboard", "practice", "speed", "focus", "rhythm",
    "accuracy", "stream", "cursor", "system", "signal", "orbit",
    "canyon", "bright", "quartz", "matrix", "engine", "plasma",
    "shadow", "vortex", "island", "bridge", "garden", "meadow",
    "planet", "rocket", "puzzle", "castle", "dragon", "wander"
];

const CONTENT_COMMON_WORDS = [
    "the", "and", "you", "that", "was", "for", "are", "with",
    "his", "they", "one", "have", "this", "from", "had", "not",
    "but", "what", "all", "were", "when", "your", "can", "said"
];

const CONTENT_SHORT_WORDS = [
    "cat", "dog", "run", "sun", "sky", "red", "top", "big",
    "yes", "no", "go", "up", "in", "on", "it", "we"
];

const CONTENT_LONG_WORDS = [
    "extraordinary", "responsibility", "understanding", "communication",
    "international", "transformation", "philosophical", "unbelievable",
    "revolutionary", "sophisticated", "characteristic", "circumstances"
];

const CONTENT_DOUBLE_LETTER_WORDS = [
    "letter", "happen", "coffee", "little", "puzzle", "meeting",
    "success", "balloon", "correct", "keeper", "sudden", "sweet"
];

const CONTENT_TWISTERS = [
    "she sells seashells by the seashore",
    "peter piper picked a peck of pickled peppers",
    "how much wood would a woodchuck chuck",
    "red lorry yellow lorry red lorry yellow lorry",
    "unique new york unique new york unique new york",
    "six slippery snails slid slowly seaward"
];

const CONTENT_SYMBOLS = "!@#$%^&*()_+-=[]{};:,.<>?/~";

function randChoice(arr) {

    return arr[
        Math.floor(Math.random() * arr.length)
    ];

}

function randInt(min, max) {

    return Math.floor(
        Math.random() * (max - min + 1)
    ) + min;

}

function generateContentText(contentKey) {

    const wordCount = 14;
    const words = [];

    for (let i = 0; i < wordCount; i++) {

        let w = "";

        switch (contentKey) {

            case "lower":
                w = randChoice(CONTENT_WORD_BANK).toLowerCase();
                break;

            case "upper":
                w = randChoice(CONTENT_WORD_BANK).toUpperCase();
                break;

            case "mixed":
                w = randChoice(CONTENT_WORD_BANK)
                    .split("")
                    .map((ch, idx) => idx % 2 === 0 ? ch.toUpperCase() : ch)
                    .join("");
                break;

            case "numbers":
                w = String(randInt(0, 999999));
                break;

            case "symbols":
                w = Array.from(
                    { length: randInt(3, 6) },
                    () => randChoice(CONTENT_SYMBOLS.split(""))
                ).join("");
                break;

            case "letnum":
                w = randChoice(CONTENT_WORD_BANK) + randInt(1, 999);
                break;

            case "letsym":
                w = randChoice(CONTENT_WORD_BANK) + randChoice(["!", "?", "#", "@", "*", "&"]);
                break;

            case "numsym":
                w = randInt(1, 999) + randChoice(["+", "-", "=", "%", "*", "/"]);
                break;

            case "punct":
                w = randChoice(CONTENT_WORD_BANK) + randChoice([",", ".", ";", ":", "!", "?"]);
                break;

            case "homerow":
                w = Array.from(
                    { length: randInt(3, 6) },
                    () => randChoice("asdfjkl;".split(""))
                ).join("");
                break;

            case "toprow":
                w = Array.from(
                    { length: randInt(3, 6) },
                    () => randChoice("qwertyuiop".split(""))
                ).join("");
                break;

            case "bottomrow":
                w = Array.from(
                    { length: randInt(3, 6) },
                    () => randChoice("zxcvbnm".split(""))
                ).join("");
                break;

            case "lefthand":
                w = Array.from(
                    { length: randInt(3, 6) },
                    () => randChoice("qwertasdfgzxcvb".split(""))
                ).join("");
                break;

            case "righthand":
                w = Array.from(
                    { length: randInt(3, 6) },
                    () => randChoice("yuiophjklnm".split(""))
                ).join("");
                break;

            case "common":
                w = randChoice(CONTENT_COMMON_WORDS);
                break;

            case "short":
                w = randChoice(CONTENT_SHORT_WORDS);
                break;

            case "long":
                w = randChoice(CONTENT_LONG_WORDS);
                break;

            case "double":
                w = randChoice(CONTENT_DOUBLE_LETTER_WORDS);
                break;

            case "caps":
                w = randChoice(CONTENT_WORD_BANK).replace(/^./, c => c.toUpperCase());
                break;

            case "quotes":
                w = "\"" + randChoice(CONTENT_WORD_BANK) + "'s\"";
                break;

            case "email":
                w = randChoice(CONTENT_WORD_BANK) + "." + randChoice(CONTENT_WORD_BANK) + "@example.com";
                break;

            case "code":
                w = randChoice(["const", "let", "function", "return", "if", "else"]) +
                    " " + randChoice(CONTENT_WORD_BANK) + "()";
                break;

            case "math":
                w = randInt(1, 99) + randChoice(["+", "-", "*", "/"]) + randInt(1, 99) + "=" + randInt(1, 99);
                break;

            case "dates":
                w = randInt(1, 12) + "/" + randInt(1, 28) + "/" + randInt(2020, 2030);
                break;

            case "currency":
                w = "$" + randInt(1, 999) + "." + randInt(10, 99);
                break;

            case "brackets":
                w = randChoice(["(", "[", "{"]) + randChoice(CONTENT_WORD_BANK) + randChoice([")", "]", "}"]);
                break;

            case "question":
                w = randChoice(CONTENT_WORD_BANK) + "?";
                break;

            case "exclaim":
                w = randChoice(CONTENT_WORD_BANK) + "!";
                break;

            case "allcaps":
                w = randChoice(CONTENT_LONG_WORDS).toUpperCase();
                break;

            case "altcase":
                w = randChoice(CONTENT_WORD_BANK)
                    .split("")
                    .map((ch, idx) => idx % 2 === 0 ? ch.toLowerCase() : ch.toUpperCase())
                    .join("");
                break;

            case "numseq":
                w = Array.from({ length: 4 }, () => randInt(0, 9)).join("");
                break;

            case "symbolheavy":
                w = Array.from(
                    { length: randInt(4, 7) },
                    () => randChoice(CONTENT_SYMBOLS.split(""))
                ).join("");
                break;

            case "hashtag":
                w = randChoice(["#", "@"]) + randChoice(CONTENT_WORD_BANK);
                break;

            case "filepath":
                w = "/" + randChoice(CONTENT_WORD_BANK) + "/" + randChoice(CONTENT_WORD_BANK) + ".js";
                break;

            case "url":
                w = "https://" + randChoice(CONTENT_WORD_BANK) + ".com/" + randChoice(CONTENT_WORD_BANK);
                break;

            case "abbrev":
                w = randChoice(["WPM", "CPU", "HTML", "CSS", "URL", "API", "USB", "PDF"]);
                break;

            case "twister":
                return randChoice(CONTENT_TWISTERS);

            case "random":
                w = randChoice(CONTENT_WORD_BANK);
                break;

            case "vowels":
                w = randChoice(["aeiou", "oui", "eia", "aoe", "iouea", "aeiouaeiou"]);
                break;

            case "consonants":
                w = randChoice(["bcdfg", "rstlmn", "krpvz", "sthgd", "mnbvc"]);
                break;

            default:
                w = randChoice(CONTENT_WORD_BANK);

        }

        words.push(w);

    }

    return words.join(" ") + ".";

}


function populatePracticeModes() {

    if (!modeSelectGrid) {

        return;

    }

    modeSelectGrid.innerHTML = "";

    PRACTICE_MODES.forEach(
        mode => {

            const card =
                document.createElement("button");

            card.type = "button";

            card.className =
                "mode-select-card" +
                (
                    currentTestMode &&
                    currentTestMode.id === mode.id ?
                        " active" :
                        ""
                );


            const icon =
                document.createElement("div");

            icon.className =
                "mode-select-icon";

            icon.textContent =
                mode.icon;


            const name =
                document.createElement("div");

            name.className =
                "mode-select-name";

            name.textContent =
                mode.label;


            card.appendChild(icon);
            card.appendChild(name);


            card.addEventListener(
                "click",
                () => startPracticeMode(mode)
            );


            modeSelectGrid.appendChild(card);

        }
    );

}


function startPracticeMode(mode) {

    currentTestMode = mode;

    currentLevel =
        Number(savedData.currentLevel) || 1;

    levelSentenceIndex = 0;


    /* NEW FEATURE: content-based modes generate their own pool
       of practice sentences instead of using the level's. */
    if (mode.type === "content") {

        customModeSentences = Array.from(
            { length: 20 },
            () => generateContentText(mode.content)
        );

    }

    else {

        customModeSentences = [];

    }


    saveLevelProgress();

    updateLevelDisplay();

    loadSentence();

    enterMainApp();

}


/* ========================================= */
/* NEW FEATURE: TYPING TEST — 50 EXAMS */
/* ========================================= */

/*
 * Each exam is a fixed passage with its own topic, built once
 * when the page loads so the same 50 exams appear every time.
 * Picking one starts a normal timed test using that passage
 * instead of the current level's sentences.
 */

const EXAM_TOPICS = [
    { title: "Deep Space Voyage", icon: "🚀", bank: ["rocket", "orbit", "galaxy", "nebula", "asteroid", "comet", "station", "gravity", "capsule", "horizon"] },
    { title: "Ocean Depths", icon: "🌊", bank: ["current", "coral", "tide", "abyss", "reef", "voyage", "current", "whale", "pressure", "surface"] },
    { title: "Ancient Ruins", icon: "🏛️", bank: ["temple", "column", "empire", "relic", "legend", "carving", "kingdom", "artifact", "scroll", "dust"] },
    { title: "City at Night", icon: "🌃", bank: ["neon", "traffic", "skyline", "alley", "rooftop", "signal", "subway", "shadow", "avenue", "glow"] },
    { title: "Mountain Trail", icon: "⛰️", bank: ["ridge", "summit", "trail", "cliff", "boulder", "valley", "compass", "altitude", "granite", "wind"] },
    { title: "Desert Storm", icon: "🏜️", bank: ["dune", "mirage", "oasis", "sandstorm", "horizon", "caravan", "heat", "compass", "shelter", "wind"] },
    { title: "Robot Uprising", icon: "🤖", bank: ["circuit", "engine", "sensor", "protocol", "override", "signal", "chassis", "network", "command", "core"] },
    { title: "Wizard's Library", icon: "📚", bank: ["scroll", "spell", "potion", "grimoire", "candle", "rune", "archive", "shelf", "whisper", "ink"] },
    { title: "Formula One Race", icon: "🏎️", bank: ["throttle", "corner", "pitstop", "engine", "circuit", "tyre", "podium", "lap", "grid", "velocity"] },
    { title: "Jungle Expedition", icon: "🌴", bank: ["canopy", "vine", "river", "insect", "clearing", "machete", "humidity", "trail", "wildlife", "compass"] },
    { title: "Startup Pitch", icon: "💡", bank: ["investor", "pitch", "revenue", "growth", "market", "product", "funding", "founder", "traction", "vision"] },
    { title: "Detective Case", icon: "🕵️", bank: ["clue", "suspect", "alibi", "evidence", "witness", "motive", "shadow", "notebook", "footprint", "silence"] },
    { title: "Volcano Eruption", icon: "🌋", bank: ["magma", "ash", "crater", "tremor", "lava", "smoke", "eruption", "vent", "ridge", "heat"] },
    { title: "Arctic Expedition", icon: "🧊", bank: ["glacier", "frost", "aurora", "blizzard", "sled", "iceberg", "compass", "tundra", "shelter", "wind"] },
    { title: "Coding All Night", icon: "💻", bank: ["function", "variable", "compile", "debug", "terminal", "server", "syntax", "loop", "commit", "deploy"] },
    { title: "Culinary Contest", icon: "👨‍🍳", bank: ["recipe", "flavor", "simmer", "garnish", "kitchen", "aroma", "spice", "plate", "whisk", "timer"] },
    { title: "Music Festival", icon: "🎸", bank: ["rhythm", "melody", "encore", "chorus", "amplifier", "crowd", "stage", "harmony", "beat", "spotlight"] },
    { title: "Haunted Mansion", icon: "🏚️", bank: ["shadow", "creak", "candle", "whisper", "attic", "portrait", "hallway", "chill", "echo", "silence"] },
    { title: "Marathon Morning", icon: "🏃", bank: ["stride", "pace", "finish", "endurance", "checkpoint", "breath", "route", "crowd", "sprint", "medal"] },
    { title: "Underwater Lab", icon: "🔬", bank: ["pressure", "sample", "current", "sonar", "hatch", "corridor", "oxygen", "reading", "depth", "signal"] },
    { title: "Time Traveler's Log", icon: "⏳", bank: ["paradox", "timeline", "device", "anomaly", "portal", "century", "echo", "sequence", "origin", "drift"] },
    { title: "Stormy Sea Voyage", icon: "⛵", bank: ["mast", "wave", "compass", "deck", "horizon", "anchor", "gale", "current", "harbor", "tide"] },
    { title: "Cybersecurity Alert", icon: "🛡️", bank: ["firewall", "breach", "encryption", "protocol", "server", "patch", "malware", "network", "access", "alert"] },
    { title: "Wildlife Safari", icon: "🦁", bank: ["savanna", "herd", "predator", "trail", "horizon", "watering", "camouflage", "ranger", "dust", "roar"] },
    { title: "Space Station Repair", icon: "🛰️", bank: ["module", "airlock", "gravity", "circuit", "capsule", "oxygen", "panel", "orbit", "signal", "hatch"] },
    { title: "Medieval Tournament", icon: "🏰", bank: ["joust", "banner", "armor", "castle", "knight", "shield", "arena", "crest", "trumpet", "crowd"] },
    { title: "Rainforest Rescue", icon: "🐒", bank: ["canopy", "habitat", "rescue", "species", "rainfall", "trail", "reserve", "wildlife", "vine", "shelter"] },
    { title: "Chess Grandmaster", icon: "♟️", bank: ["opening", "gambit", "tempo", "endgame", "tactic", "position", "clock", "strategy", "board", "checkmate"] },
    { title: "Photography Walk", icon: "📷", bank: ["aperture", "exposure", "shutter", "frame", "contrast", "focus", "lighting", "lens", "capture", "angle"] },
    { title: "Deep Sea Mining", icon: "⚓", bank: ["depth", "mineral", "current", "vessel", "cable", "pressure", "sonar", "extraction", "seabed", "hatch"] },
    { title: "Comic Book Origin", icon: "🦸", bank: ["origin", "villain", "power", "cape", "city", "secret", "identity", "rescue", "shadow", "legend"] },
    { title: "Wine Country Tour", icon: "🍇", bank: ["vineyard", "harvest", "barrel", "aroma", "terrace", "cellar", "grape", "tasting", "valley", "sunset"] },
    { title: "Formula Rocket Launch", icon: "🛸", bank: ["countdown", "thrust", "payload", "trajectory", "ignition", "capsule", "orbit", "booster", "control", "liftoff"] },
    { title: "Antique Bookshop", icon: "📖", bank: ["binding", "parchment", "shelf", "dust", "ink", "spine", "archive", "edition", "cover", "chapter"] },
    { title: "Mystery Train", icon: "🚂", bank: ["carriage", "conductor", "platform", "ticket", "corridor", "compartment", "whistle", "cargo", "rail", "journey"] },
    { title: "Skyscraper Construction", icon: "🏗️", bank: ["girder", "crane", "blueprint", "scaffold", "concrete", "elevator", "foundation", "skyline", "steel", "level"] },
    { title: "Coral Reef Diving", icon: "🐠", bank: ["reef", "current", "coral", "snorkel", "current", "visibility", "depth", "school", "anemone", "surface"] },
    { title: "Board Game Night", icon: "🎲", bank: ["dice", "token", "strategy", "turn", "board", "card", "score", "rules", "player", "victory"] },
    { title: "Autumn Harvest", icon: "🍂", bank: ["harvest", "orchard", "pumpkin", "breeze", "meadow", "barn", "wagon", "farmer", "season", "field"] },
    { title: "Night Sky Astronomy", icon: "🔭", bank: ["telescope", "constellation", "comet", "orbit", "galaxy", "eclipse", "nebula", "horizon", "star", "lens"] },
    { title: "Fashion Runway", icon: "👗", bank: ["designer", "fabric", "runway", "collection", "silhouette", "trend", "tailor", "spotlight", "season", "pattern"] },
    { title: "Underground Cave", icon: "🕳️", bank: ["stalactite", "echo", "tunnel", "torch", "chamber", "passage", "darkness", "crystal", "depth", "path"] },
    { title: "Airport Departure", icon: "✈️", bank: ["gate", "runway", "boarding", "luggage", "terminal", "cabin", "altitude", "ticket", "departure", "cockpit"] },
    { title: "Farmers Market", icon: "🥕", bank: ["stall", "produce", "harvest", "basket", "vendor", "market", "crate", "fresh", "morning", "season"] },
    { title: "Lighthouse Keeper", icon: "🏮", bank: ["beacon", "shoreline", "fog", "tide", "lantern", "cliff", "horizon", "signal", "wave", "keeper"] },
    { title: "Ninja Training", icon: "🥷", bank: ["stealth", "shadow", "technique", "discipline", "reflex", "silence", "balance", "focus", "strike", "shrine"] },
    { title: "Vintage Car Rally", icon: "🚗", bank: ["engine", "chrome", "gauge", "throttle", "chassis", "gasket", "highway", "vintage", "gear", "route"] },
    { title: "Robotics Competition", icon: "🦾", bank: ["actuator", "sensor", "circuit", "chassis", "algorithm", "battery", "gear", "control", "prototype", "arena"] },
    { title: "Sandcastle Building", icon: "🏖️", bank: ["shovel", "bucket", "tide", "sculpture", "shoreline", "castle", "moat", "sunshine", "breeze", "sand"] },
    { title: "Northern Lights Chase", icon: "🌌", bank: ["aurora", "horizon", "twilight", "camera", "tundra", "glow", "silence", "chill", "sky", "wonder"] }
];

/* NEW FEATURE: builds the exam's practice text as an array of
   separate sentences (rather than one long joined paragraph), so
   an exam plays back exactly like a level - one sentence shown at
   a time - instead of dumping the whole paragraph on screen at
   once. */
function buildExamSentences(bank) {

    const templates = [
        w => `The ${w[0]} moved quietly as the ${w[1]} shifted beyond the ${w[2]}.`,
        w => `Every ${w[3]} depended on the ${w[4]}, and nobody wanted to risk the ${w[5]}.`,
        w => `Somewhere near the ${w[6]}, a faint ${w[7]} carried across the ${w[8]}.`,
        w => `It took real ${w[9] || w[0]} to keep going once the ${w[1]} began to change.`,
        w => `Nothing about the ${w[2]} felt ordinary once the ${w[3]} came into view.`
    ];

    const sentences = [];

    for (let i = 0; i < 5; i++) {

        sentences.push(
            templates[i](bank)
        );

    }

    return sentences;

}

const EXAMS = EXAM_TOPICS.map(
    (topic, index) => ({
        id: "exam" + (index + 1),
        number: index + 1,
        title: topic.title,
        icon: topic.icon,
        duration: 45 + (index % 5) * 15,
        sentences: buildExamSentences(topic.bank)
    })
);


function populateTypingTestGrid() {

    if (!typingTestGrid) {

        return;

    }

    typingTestGrid.innerHTML = "";

    /* NEW FEATURE: exams unlock progressively, just like the
       classic levels and Phoenix Rebirth - only exams up to
       highestExamReached are playable, the rest show locked. */
    const highestExamUnlocked =
        Number(savedData.highestExamReached) || 1;

    EXAMS.forEach(
        exam => {

            const locked =
                exam.number > highestExamUnlocked;

            const card =
                document.createElement("button");

            card.type = "button";

            card.className =
                "mode-select-card" +
                (locked ? " locked" : "") +
                (
                    currentTestMode &&
                    currentTestMode.id === exam.id ?
                        " active" :
                        ""
                );

            card.disabled =
                locked;


            const icon =
                document.createElement("div");

            icon.className =
                "mode-select-icon";

            icon.textContent =
                locked ? "🔒" : exam.icon;


            const name =
                document.createElement("div");

            name.className =
                "mode-select-name";

            name.textContent =
                "Exam " + exam.number;


            const tag =
                document.createElement("div");

            tag.className =
                "mode-select-tag";

            tag.textContent =
                locked ? "🔒 Locked" : exam.title;


            card.appendChild(icon);
            card.appendChild(name);
            card.appendChild(tag);


            if (!locked) {

                card.addEventListener(
                    "click",
                    () => startExam(exam)
                );

            }


            typingTestGrid.appendChild(card);

        }
    );

}


function startExam(exam) {

    currentTestMode = {
        id: exam.id,
        label: "Exam " + exam.number,
        type: "exam",
        value: exam.duration,
        /* NEW FEATURE: carried through so the level-display strip
           can show the exam's topic instead of a generic subtitle. */
        title: exam.title
    };

    customModeSentences =
        exam.sentences;

    currentLevel =
        Number(savedData.currentLevel) || 1;

    levelSentenceIndex = 0;

    saveLevelProgress();

    updateLevelDisplay();

    loadSentence();

    enterMainApp();

}


function populateLevelSelectScreen() {

    if (!levelSelectGrid) {

        return;

    }


    const highestReached =
        Number(savedData.highestLevelReached) || 1;

    const lastPlayedLevel =
        Number(savedData.currentLevel) || 1;


    levelSelectGrid.innerHTML =
        "";


    for (
        let level = 1;
        level <= TOTAL_LEVELS;
        level++
    ) {

        const data =
            levelDisplayData[level];

        if (!data) {

            continue;

        }


        const isUnlocked =
            level <= highestReached;

        const isActive =
            level === lastPlayedLevel;


        const card =
            document.createElement("button");

        card.type =
            "button";

        card.className =
            "level-select-card " +
            (
                isUnlocked ?
                    "unlocked" :
                    "locked"
            ) +
            (
                isActive ?
                    " active" :
                    ""
            );

        card.disabled =
            !isUnlocked;


        const icon =
            document.createElement("div");

        icon.className =
            "level-select-icon";

        icon.textContent =
            data.image;


        const name =
            document.createElement("div");

        name.className =
            "level-select-name";

        name.textContent =
            `Lv ${level} · ${data.name}`;


        const status =
            document.createElement("div");

        status.className =
            "level-select-status";

        status.textContent =
            isUnlocked ?
                (
                    isActive ?
                        "Continue here" :
                        "Completed"
                ) :
                "🔒 Locked";


        card.appendChild(icon);
        card.appendChild(name);
        card.appendChild(status);


        if (isUnlocked) {

            card.addEventListener(
                "click",
                () => selectLevelAndEnter(level)
            );

        }


        levelSelectGrid.appendChild(card);

    }

}


function selectLevelAndEnter(level) {

    /* Picking a level card directly always means the classic,
       finish-every-level mode - not one of the practice modes. */
    currentTestMode = null;

    currentLevel =
        level;

    levelSentenceIndex =
        level === Number(savedData.currentLevel) ?
            (Number(savedData.levelSentenceIndex) || 0) :
            0;

    saveLevelProgress();

    updateLevelDisplay();

    loadSentence();

    enterMainApp();

}


function enterMainApp() {

    /* BUG FIX: reveal the dashboard and re-enable page scrolling
       only now, right as the level-select overlay starts fading
       out over it - this is the one place the dashboard should
       become visible/scrollable again. */
    if (appContainer) {

        appContainer.style.display =
            "grid";

    }

    document.body.classList.remove(
        "app-locked"
    );

    if (levelSelectScreen) {

        levelSelectScreen.classList.add(
            "fade-out"
        );

        setTimeout(
            () => {

                levelSelectScreen.style.display =
                    "none";

            },
            650
        );

    }


    setTimeout(
        () => {

            input.focus();

        },
        700
    );

}


/* ========================================= */
/* NEW FEATURE: FINGER-PLACEMENT TUTORIAL */
/* ========================================= */

/*
 * Shown once, right after the intro screen and before the level /
 * mode select screen. Teaches home-row finger placement with a
 * small keyboard diagram, then walks the player through 10 short
 * warm-up tasks that get progressively harder - single letters,
 * then letters with spaces, then short words, numbers and
 * punctuation, finishing with a full sentence.
 */

/* BUG FIX: bump this whenever the tutorial flow changes in a way
   that means everyone should see it again (e.g. it wasn't actually
   reachable before, or its content changed significantly). Saved
   data with an older (or missing) version won't count as
   "completed" even if the old tutorialCompleted flag is true. */
const TUTORIAL_FLOW_VERSION = 2;

const TUTORIAL_TASKS = [
    {
        title: "Home Row Warm-Up",
        desc: "Rest your fingers on A S D F and J K L ; - the home row. Type it exactly as shown.",
        text: "asdf jkl;"
    },
    {
        title: "Single Letters",
        desc: "One letter at a time. No rush - just get used to reaching each key.",
        text: "a s d f g h j k l"
    },
    {
        title: "Letters & Spaces",
        desc: "Now with a space between every pair of letters.",
        text: "aa bb cc dd ee ff"
    },
    {
        title: "Top Row Letters",
        desc: "Reach up to the row above the home row.",
        text: "q w e r t y u i o p"
    },
    {
        title: "Bottom Row Letters",
        desc: "Now reach down to the bottom row.",
        text: "z x c v b n m"
    },
    {
        title: "Short Words",
        desc: "Put letters together into tiny words.",
        text: "cat dog run sun sky"
    },
    {
        title: "Capitalized Words",
        desc: "Use your pinky for Shift to capitalize the first letter.",
        text: "The Cat Ran Fast"
    },
    {
        title: "Numbers",
        desc: "Move up to the number row and type each digit in order.",
        text: "1 2 3 4 5 6 7 8 9 0"
    },
    {
        title: "Punctuation",
        desc: "Commas, exclamation marks and question marks - all in one line.",
        text: "Hello, world! How are you?"
    },
    {
        title: "Full Sentence",
        desc: "Put it all together - the classic typing warm-up sentence.",
        text: "the quick brown fox jumps over the lazy dog"
    }
];

let tutorialTaskIndex = 0;

/* NEW FEATURE: tracks whether the tutorial was opened as part of
   the normal first-time intro flow ("intro") or reopened
   voluntarily from the main practice screen ("app"). Finishing or
   skipping the tutorial behaves differently depending on which:
   from the intro it continues on to Levels & Modes as before; from
   the main screen it just closes the overlay and leaves whatever
   was already on screen untouched. */
let tutorialLaunchSource = "intro";

/* Rows now include the punctuation keys and both Shift keys so
   every character used in the 10 tasks (letters, digits, space,
   , . ; / and shifted symbols like ! ? and capitals) can be
   found and highlighted on the diagram - important for someone
   who has never looked at a keyboard layout before. */
const TUTORIAL_KB_ROWS = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"],
    ["shift-left", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "shift-right"],
    ["space"]
];

/* NEW: maps every physical key to the finger that should press
   it, using the standard touch-typing home-row layout. */
const KEY_FINGER_MAP = {
    "1": "left-pinky", "q": "left-pinky", "a": "left-pinky", "z": "left-pinky",
    "2": "left-ring", "w": "left-ring", "s": "left-ring", "x": "left-ring",
    "3": "left-middle", "e": "left-middle", "d": "left-middle", "c": "left-middle",
    "4": "left-index", "r": "left-index", "f": "left-index", "v": "left-index",
    "5": "left-index", "t": "left-index", "g": "left-index", "b": "left-index",
    "6": "right-index", "y": "right-index", "h": "right-index", "n": "right-index",
    "7": "right-index", "u": "right-index", "j": "right-index", "m": "right-index",
    "8": "right-middle", "i": "right-middle", "k": "right-middle", ",": "right-middle",
    "9": "right-ring", "o": "right-ring", "l": "right-ring", ".": "right-ring",
    "0": "right-pinky", "p": "right-pinky", ";": "right-pinky", "/": "right-pinky",
    "space": "left-thumb"
};

const FINGER_LABELS = {
    "left-pinky": "left pinky",
    "left-ring": "left ring finger",
    "left-middle": "left middle finger",
    "left-index": "left index finger",
    "right-index": "right index finger",
    "right-middle": "right middle finger",
    "right-ring": "right ring finger",
    "right-pinky": "right pinky",
    "left-thumb": "thumb",
    "right-thumb": "thumb"
};

/* Figures out which physical key + finger a given character in
   the target text needs, including whether Shift must be held
   (capital letters, ! and ?). Returns null for characters that
   have no key on this simplified diagram. */
function getKeySpecForChar(ch) {

    if (ch === " ") {

        return { key: "space", shift: false };

    }

    if (ch === "!") {

        return { key: "1", shift: true };

    }

    if (ch === "?") {

        return { key: "/", shift: true };

    }

    if (ch === "," || ch === "." || ch === ";") {

        return { key: ch, shift: false };

    }

    if (/[0-9]/.test(ch)) {

        return { key: ch, shift: false };

    }

    if (/[a-zA-Z]/.test(ch)) {

        const lower =
            ch.toLowerCase();

        return { key: lower, shift: ch !== lower };

    }

    return null;

}

function renderTutorialKeyboard() {

    if (!tutorialKeyboard) {

        return;

    }

    tutorialKeyboard.innerHTML = "";

    TUTORIAL_KB_ROWS.forEach(
        row => {

            const rowEl =
                document.createElement("div");

            rowEl.className =
                "tutorial-kb-row";

            row.forEach(
                key => {

                    const keyEl =
                        document.createElement("div");

                    keyEl.className =
                        "tutorial-kb-key";

                    keyEl.dataset.key =
                        key;

                    if (key === "a" || key === "s" || key === "d" || key === "f") {

                        keyEl.classList.add("home-left");

                    }

                    if (key === "j" || key === "k" || key === "l" || key === ";") {

                        keyEl.classList.add("home-right");

                    }

                    if (key === "space") {

                        keyEl.classList.add("tutorial-kb-space");

                        keyEl.textContent =
                            "Space";

                    }

                    else if (key === "shift-left" || key === "shift-right") {

                        keyEl.classList.add("tutorial-kb-shift");

                        keyEl.textContent =
                            "Shift";

                    }

                    else {

                        keyEl.textContent =
                            key;

                    }

                    rowEl.appendChild(keyEl);

                }
            );

            tutorialKeyboard.appendChild(rowEl);

        }
    );

}

/* NEW: highlights the exact key (and Shift key, if needed) for
   the very next character the learner has to type, lights up
   the matching finger on the hand diagram, and writes a plain
   -language callout like "Next key: H - press with your right
   index finger". Called every time the task loads or the
   learner types a character. */
function updateTutorialFingerGuide(typed) {

    const task =
        TUTORIAL_TASKS[tutorialTaskIndex];

    if (!task) {

        return;

    }

    if (tutorialKeyboard) {

        tutorialKeyboard.querySelectorAll(".current-key").forEach(
            el => el.classList.remove("current-key")
        );

        tutorialKeyboard.querySelectorAll(".current-shift").forEach(
            el => el.classList.remove("current-shift")
        );

    }

    if (tutorialHands) {

        tutorialHands.querySelectorAll(".active").forEach(
            el => el.classList.remove("active")
        );

        tutorialHands.querySelectorAll(".active-shift").forEach(
            el => el.classList.remove("active-shift")
        );

    }

    if (typed.length >= task.text.length) {

        if (tutorialFingerCallout) {

            tutorialFingerCallout.textContent =
                "All done - press \"Next Task\" to continue.";

        }

        return;

    }

    const nextChar =
        task.text[typed.length];

    const spec =
        getKeySpecForChar(nextChar);

    if (!spec) {

        if (tutorialFingerCallout) {

            tutorialFingerCallout.textContent = "";

        }

        return;

    }

    const fingerId =
        KEY_FINGER_MAP[spec.key];

    if (tutorialKeyboard) {

        const keyEl =
            tutorialKeyboard.querySelector(`[data-key="${spec.key}"]`);

        if (keyEl) {

            keyEl.classList.add("current-key");

        }

    }

    let shiftHand = null;

    if (spec.shift && fingerId) {

        shiftHand =
            fingerId.startsWith("left") ? "right" : "left";

        if (tutorialKeyboard) {

            const shiftKeyEl =
                tutorialKeyboard.querySelector(`[data-key="shift-${shiftHand}"]`);

            if (shiftKeyEl) {

                shiftKeyEl.classList.add("current-shift");

            }

        }

    }

    if (tutorialHands && fingerId) {

        const fingerEl =
            tutorialHands.querySelector(`[data-finger="${fingerId}"]`);

        if (fingerEl) {

            fingerEl.classList.add("active");

        }

        if (shiftHand) {

            const shiftFingerEl =
                tutorialHands.querySelector(`[data-finger="${shiftHand}-pinky"]`);

            if (shiftFingerEl) {

                shiftFingerEl.classList.add("active-shift");

            }

        }

    }

    if (tutorialFingerCallout && fingerId) {

        const displayChar =
            nextChar === " " ? "Space" : nextChar;

        const label =
            FINGER_LABELS[fingerId];

        tutorialFingerCallout.innerHTML =
            spec.shift ?
                `Next key: <strong>${displayChar}</strong> — hold <strong>Shift</strong> with your other hand's pinky, press with your <strong>${label}</strong>` :
                `Next key: <strong>${displayChar}</strong> — press with your <strong>${label}</strong>`;

    }

}

function renderTutorialDots() {

    if (!tutorialProgressDots) {

        return;

    }

    tutorialProgressDots.innerHTML = "";

    TUTORIAL_TASKS.forEach(
        (task, index) => {

            const dot =
                document.createElement("div");

            dot.className =
                "tutorial-dot" +
                (index < tutorialTaskIndex ? " done" : "") +
                (index === tutorialTaskIndex ? " active" : "");

            tutorialProgressDots.appendChild(dot);

        }
    );

}

function renderTutorialTargetText(typed) {

    if (!tutorialTargetText) {

        return;

    }

    const task =
        TUTORIAL_TASKS[tutorialTaskIndex];

    tutorialTargetText.innerHTML = "";

    task.text.split("").forEach(
        (ch, index) => {

            const span =
                document.createElement("span");

            span.textContent =
                ch;

            if (index < typed.length) {

                span.className =
                    typed[index] === ch ?
                        "tt-correct" :
                        "tt-incorrect";

            }

            else if (index === typed.length) {

                span.className =
                    "tt-current";

            }

            tutorialTargetText.appendChild(span);

        }
    );

}

function loadTutorialTask(index) {

    tutorialTaskIndex =
        index;

    const task =
        TUTORIAL_TASKS[index];

    if (tutorialTaskLabel) {

        tutorialTaskLabel.textContent =
            `Task ${index + 1} / ${TUTORIAL_TASKS.length}`;

    }

    if (tutorialTaskTitle) {

        tutorialTaskTitle.textContent =
            task.title;

    }

    if (tutorialTaskDesc) {

        tutorialTaskDesc.textContent =
            task.desc;

    }

    if (tutorialInput) {

        tutorialInput.value = "";

        setTimeout(
            () => tutorialInput.focus(),
            50
        );

    }

    if (tutorialNextButton) {

        tutorialNextButton.disabled = true;

        tutorialNextButton.textContent =
            index === TUTORIAL_TASKS.length - 1 ?
                "Finish Tutorial →" :
                "Next Task →";

    }

    renderTutorialTargetText("");

    updateTutorialFingerGuide("");

    renderTutorialDots();

}

function finishTutorial() {

    savedData.tutorialCompleted = true;

    savedData.tutorialFlowVersion = TUTORIAL_FLOW_VERSION;

    saveData();

    if (tutorialScreen) {

        tutorialScreen.classList.add("fade-out");

        setTimeout(
            () => {

                tutorialScreen.style.display = "none";

            },
            500
        );

    }

    /* Reopened voluntarily from the main practice screen - just
       close the overlay and leave whatever was already showing
       (the in-progress typing test, current level, etc.) exactly
       as it was, instead of jumping to Levels & Modes. */
    if (tutorialLaunchSource === "app") {

        tutorialLaunchSource = "intro";

        return;

    }

    openLevelSelectScreen();

}

function openTutorialOrLevelSelect() {

    tutorialLaunchSource = "intro";

    if (
        savedData.tutorialCompleted &&
        savedData.tutorialFlowVersion === TUTORIAL_FLOW_VERSION
    ) {

        openLevelSelectScreen();

        return;

    }

    if (introScreen) {

        introScreen.classList.add("fade-out");

        setTimeout(
            () => {

                introScreen.style.display = "none";

            },
            650
        );

    }

    renderTutorialKeyboard();

    loadTutorialTask(0);

    if (tutorialScreen) {

        tutorialScreen.classList.remove("fade-out");

        tutorialScreen.style.display = "flex";

    }

}

/* NEW FEATURE: reopens the tutorial on demand from the "📘
   Tutorials" button in the middle practice card - available any
   time, whether or not the first-time tutorial has already been
   completed. Doesn't touch the intro screen or the main app
   underneath; it just overlays the tutorial on top and, on finish
   or skip, closes back to whatever was already there. */
function replayTutorialFromApp() {

    tutorialLaunchSource = "app";

    renderTutorialKeyboard();

    loadTutorialTask(0);

    if (tutorialScreen) {

        tutorialScreen.classList.remove("fade-out");

        tutorialScreen.style.display = "flex";

    }

}

if (openTutorialButton) {

    openTutorialButton.addEventListener(
        "click",
        replayTutorialFromApp
    );

}

/* NEW FEATURE: opens the tutorial straight from the intro screen's
   top nav bar, regardless of whether it's already been completed -
   unlike openTutorialOrLevelSelect(), this always shows the
   tutorial rather than skipping to level select. */
function openTutorialFromNav() {

    tutorialLaunchSource = "intro";

    if (introScreen) {

        introScreen.classList.add("fade-out");

        setTimeout(
            () => {

                introScreen.style.display = "none";

            },
            650
        );

    }

    renderTutorialKeyboard();

    loadTutorialTask(0);

    if (tutorialScreen) {

        tutorialScreen.classList.remove("fade-out");

        tutorialScreen.style.display = "flex";

    }

}

if (navTutorialsButton) {

    navTutorialsButton.addEventListener(
        "click",
        openTutorialFromNav
    );

}

if (navLevelsButton) {

    navLevelsButton.addEventListener(
        "click",
        openLevelSelectScreen
    );

}

if (navHomeButton) {

    navHomeButton.addEventListener(
        "click",
        () => {

            if (introScreen) {

                introScreen.classList.remove("fade-out");

                introScreen.style.display = "flex";

            }

        }
    );

}


/* ========================================= */
/* NEW FEATURE: PLAYER PROFILE BUTTON ON INTRO NAVBAR */
/* ========================================= */

if (navProfileButton) {

    navProfileButton.addEventListener(
        "click",
        openProfileModal
    );

}


/* ========================================= */
/* NEW FEATURE: GLOBAL HOVER NAV LOGIC */
/* ========================================= */

/* Keeps a "home screen is active" flag on <body> in sync with the
   intro screen's actual visibility, by watching its class/style
   attributes - rather than hooking every function that shows or
   hides the intro screen individually. The hover nav's CSS reads
   this class to hide itself completely while on the home page. */
function isHomeScreenActive() {

    if (!introScreen) {

        return false;

    }

    return (
        introScreen.style.display !== "none" &&
        !introScreen.classList.contains("fade-out")
    );

}

function syncHomeScreenBodyClass() {

    if (isHomeScreenActive()) {

        document.body.classList.add("on-home-screen");

    }

    else {

        document.body.classList.remove("on-home-screen");

    }

}

if (introScreen) {

    const homeScreenObserver =
        new MutationObserver(syncHomeScreenBodyClass);

    homeScreenObserver.observe(
        introScreen,
        { attributes: true, attributeFilter: ["class", "style"] }
    );

}

syncHomeScreenBodyClass();

let hoverNavHideTimer = null;

function showGlobalHoverNav() {

    if (!globalHoverNav) {

        return;

    }

    if (hoverNavHideTimer) {

        clearTimeout(hoverNavHideTimer);

        hoverNavHideTimer = null;

    }

    globalHoverNav.classList.add("show");

}

function scheduleHideGlobalHoverNav() {

    if (!globalHoverNav) {

        return;

    }

    hoverNavHideTimer = setTimeout(
        () => {

            globalHoverNav.classList.remove("show");

        },
        260
    );

}

if (globalHoverNavZone) {

    globalHoverNavZone.addEventListener("mouseenter", showGlobalHoverNav);

    globalHoverNavZone.addEventListener("mouseleave", scheduleHideGlobalHoverNav);

}

if (globalHoverNav) {

    globalHoverNav.addEventListener("mouseenter", showGlobalHoverNav);

    globalHoverNav.addEventListener("mouseleave", scheduleHideGlobalHoverNav);

}

/* Takes the player back to the home/intro screen from any other
   screen in the app (level select, tutorial, Phoenix game, or the
   main typing app). */
function goToHomeScreen() {

    [levelSelectScreen, tutorialScreen, phoenixGameScreen].forEach(
        screen => {

            if (!screen) {

                return;

            }

            screen.classList.add("fade-out");

            setTimeout(
                () => {

                    screen.style.display = "none";

                },
                400
            );

        }
    );

    if (appContainer) {

        appContainer.style.display = "none";

    }

    document.body.classList.add("app-locked");

    if (introScreen) {

        introScreen.classList.remove("fade-out");

        introScreen.style.display = "flex";

    }

}

if (hoverNavHomeButton) {

    hoverNavHomeButton.addEventListener("click", goToHomeScreen);

}

if (hoverNavTutorialsButton) {

    hoverNavTutorialsButton.addEventListener("click", openTutorialFromNav);

}

if (hoverNavLevelsButton) {

    hoverNavLevelsButton.addEventListener("click", openLevelSelectScreen);

}

if (tutorialInput) {

    tutorialInput.addEventListener(
        "input",
        () => {

            const task =
                TUTORIAL_TASKS[tutorialTaskIndex];

            const typed =
                tutorialInput.value;

            renderTutorialTargetText(typed);

            updateTutorialFingerGuide(typed);

            if (tutorialNextButton) {

                tutorialNextButton.disabled =
                    typed !== task.text;

            }

        }
    );

    tutorialInput.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter" &&
                tutorialNextButton &&
                !tutorialNextButton.disabled
            ) {

                tutorialNextButton.click();

            }

        }
    );

}

if (tutorialNextButton) {

    tutorialNextButton.addEventListener(
        "click",
        () => {

            if (tutorialNextButton.disabled) {

                return;

            }

            if (tutorialTaskIndex >= TUTORIAL_TASKS.length - 1) {

                finishTutorial();

            }

            else {

                loadTutorialTask(tutorialTaskIndex + 1);

            }

        }
    );

}

if (tutorialSkipButton) {

    tutorialSkipButton.addEventListener(
        "click",
        finishTutorial
    );

}


function openLevelSelectScreen() {

    /* BUG FIX: the main dashboard used to stay visible (and
       scrollable) underneath this screen. Hide it outright and
       lock page scrolling so only the 4 level-select panels show,
       whether we're arriving here from the intro, the tutorial,
       or backing out of the main app / Phoenix game. */
    if (appContainer) {

        appContainer.style.display =
            "none";

    }

    document.body.classList.add(
        "app-locked"
    );

    if (introScreen) {

        introScreen.classList.add(
            "fade-out"
        );

        setTimeout(
            () => {

                introScreen.style.display =
                    "none";

            },
            650
        );

    }


    populateLevelSelectScreen();

    populatePracticeModes();

    populateTypingTestGrid();

    populatePhoenixGrid();


    if (levelSelectScreen) {

        levelSelectScreen.classList.remove(
            "fade-out"
        );

        levelSelectScreen.style.display =
            "grid";

    }

}


/* ========================================= */
/* NEW FEATURE: BACK TO LEVEL / MODE SELECT */
/* ========================================= */

/*
 * Previously, once a player entered the main typing app there was
 * no way back to the level/mode select screen short of reloading
 * the page. This pauses whatever test is running and re-opens the
 * same select screen so the player can pick a different level or
 * practice mode.
 */
function goBackToLevelSelect() {

    if (timer) {

        clearInterval(timer);

        timer = null;

    }

    testRunning = false;


    if (appContainer &&
        (
            appContainer.classList.contains("main-panel-maximized") ||
            appContainer.classList.contains("panel-sliding-out")
        )) {

        appContainer.classList.remove(
            "main-panel-maximized"
        );

        appContainer.classList.remove(
            "panel-sliding-out"
        );

        if (mainPanelToggleButton) {

            mainPanelToggleButton.textContent =
                "⛶";

            mainPanelToggleButton.title =
                "Maximize";

        }

    }


    openLevelSelectScreen();

}


if (backToSelectButton) {

    backToSelectButton.addEventListener(
        "click",
        goBackToLevelSelect
    );

}


/* ========================================= */
/* NEW FEATURE: MAXIMIZE / MINIMIZE MIDDLE CARD */
/* ========================================= */

/*
 * Only the middle (typing) card can be maximized. When maximized
 * it fills the whole screen; the left and right cards slide away
 * (left card to the left, right card to the right) instead of just
 * vanishing - they never maximize themselves. Minimizing reverses
 * the slide so they glide straight back in from the same side.
 */

/* How long the left/right slide animation takes (ms). Kept in sync
 * with the transition duration set on .left-panel / .right-panel. */
const PANEL_SLIDE_DURATION_MS = 450;

function toggleMainPanelMaximize() {

    if (!appContainer ||
        !mainPanelToggleButton) {

        return;

    }

    const isCurrentlyMaximized =
        appContainer.classList.contains(
            "main-panel-maximized"
        );

    if (!isCurrentlyMaximized) {

        /* MAXIMIZING: slide the left/right cards away first, then
         * expand the middle card once they're clear of the screen
         * so the slide animation is actually visible instead of
         * being hidden underneath the middle card's instant jump
         * to fullscreen. */

        appContainer.classList.add(
            "panel-sliding-out"
        );

        mainPanelToggleButton.textContent =
            "🗗";

        mainPanelToggleButton.title =
            "Minimize";

        setTimeout(
            () => {

                appContainer.classList.remove(
                    "panel-sliding-out"
                );

                appContainer.classList.add(
                    "main-panel-maximized"
                );

            },
            PANEL_SLIDE_DURATION_MS
        );

    }

    else {

        /* MINIMIZING: drop the middle card back to its normal size
         * right away - the left/right cards automatically glide
         * back in (left from the left, right from the right) since
         * they share the same slide transition. */

        appContainer.classList.remove(
            "main-panel-maximized"
        );

        mainPanelToggleButton.textContent =
            "⛶";

        mainPanelToggleButton.title =
            "Maximize";

    }

}


if (mainPanelToggleButton) {

    mainPanelToggleButton.addEventListener(
        "click",
        toggleMainPanelMaximize
    );

}


if (introScreen) {

    setTimeout(
        () => {

            if (introTextBlock) {

                introTextBlock.classList.add(
                    "show"
                );

            }

        },
        500
    );


    if (introContinueButton) {

        introContinueButton.addEventListener(
            "click",
            openTutorialOrLevelSelect
        );

    }

    /* NOTE: there is intentionally no auto-continue timer
       here anymore - the level select screen only opens once
       the person clicks "Continue", never on its own. */

}


/* ========================================= */
/* NEW FEATURE: PLAYER PROFILE MODAL */
/* ========================================= */

/*
 * A small modal where personal details are shown/edited:
 * a custom profile photo, a display name, and a quick
 * snapshot of stats. Data is stored inside savedData.
 */

function getProfileDisplayName() {

    return savedData.profileName || "Guest";

}


function getProfileAvatarSrc() {

    return (
        savedData.profileAvatar ||
        DEFAULT_AVATAR_IMAGE
    );

}


function updateProfileStatsDisplay() {

    if (profileLevelElement) {

        profileLevelElement.textContent =
            currentLevel;

    }


    if (profileBestWpmElement) {

        profileBestWpmElement.textContent =
            Number(savedData.bestWpm) || 0;

    }


    if (profileBestStreakElement) {

        profileBestStreakElement.textContent =
            Number(savedData.bestStreak) || 0;

    }


    if (profileTotalTestsElement) {

        profileTotalTestsElement.textContent =
            Number(savedData.totalTests) || 0;

    }


    if (profileTotalTimeElement) {

        profileTotalTimeElement.textContent =
            formatTimer(
                Math.floor(
                    Number(savedData.totalTimeSeconds) || 0
                )
            );

    }


    /* NEW FEATURE: label the reset button with exactly what it's
       about to reset, so it's never a surprise what "Reset
       Progress" does. */
    if (profileResetTargetElement) {

        profileResetTargetElement.textContent =
            currentTestMode ?
                currentTestMode.label :
                `Level ${currentLevel}`;

    }

}


function refreshProfileModalFields() {

    if (profileAvatarPreview) {

        profileAvatarPreview.src =
            getProfileAvatarSrc();

    }


    if (profileNameInput) {

        profileNameInput.value =
            savedData.profileName || "";

        profileNameInput.placeholder =
            "Type your name";

        /* Reopen the modal in read-only "view" state - the
           player must press Edit before typing, and Save to
           commit the change, instead of it auto-saving on
           every keystroke. */
        profileNameInput.readOnly =
            true;

    }


    if (profileNameWrap) {

        profileNameWrap.classList.remove(
            "editing"
        );

    }


    if (profileEmailDisplay) {

        profileEmailDisplay.textContent =
            "Playing as guest";

    }


    updateProfileStatsDisplay();

}


function openProfileModal() {

    refreshProfileModalFields();

    if (profileModal) {

        profileModal.classList.add("show");

    }

}


function closeProfileModal() {

    if (profileModal) {

        profileModal.classList.remove("show");

    }

}


if (openProfileButton) {

    openProfileButton.addEventListener(
        "click",
        openProfileModal
    );

}


if (openProfileButtonSide) {

    openProfileButtonSide.addEventListener(
        "click",
        openProfileModal
    );

}


if (closeProfileButton) {

    closeProfileButton.addEventListener(
        "click",
        closeProfileModal
    );

}


/* NEW FEATURE: "Reset Progress" in the profile modal - scoped to
   whatever is currently active (see performReset()/
   resetCurrentProgress() above). Confirms first and names exactly
   what's about to reset, since it can't be undone. */
if (profileResetProgressButton) {

    profileResetProgressButton.addEventListener(
        "click",
        () => {

            const confirmMessage =
                currentTestMode ?
                    `Restart the "${currentTestMode.label}" mode from the beginning? Your achievements, leaderboard, and best stats stay unaffected.` :
                    "Reset your progress back to Level 1? Your achievements, leaderboard, and best stats stay unaffected.";

            const confirmed =
                window.confirm(confirmMessage);

            if (!confirmed) {

                return;

            }


            resetCurrentProgress();

            closeProfileModal();

        }
    );

}


if (profileModal) {

    profileModal.addEventListener(
        "click",
        event => {

            if (event.target === profileModal) {

                closeProfileModal();

            }

        }
    );

}


/* ========================================= */
/* NEW FEATURE: EDIT / SAVE DISPLAY NAME */
/* ========================================= */

function enterProfileNameEditMode() {

    if (!profileNameInput) {

        return;

    }

    profileNameInput.readOnly =
        false;

    profileNameInput.focus();

    profileNameInput.select();


    if (profileNameWrap) {

        profileNameWrap.classList.add(
            "editing"
        );

    }

}


function saveProfileName() {

    if (!profileNameInput) {

        return;

    }

    savedData.profileName =
        profileNameInput.value
            .slice(0, 24);

    saveData();

    profileNameInput.readOnly =
        true;


    if (profileNameWrap) {

        profileNameWrap.classList.remove(
            "editing"
        );

    }

}


if (profileNameEditButton) {

    profileNameEditButton.addEventListener(
        "click",
        enterProfileNameEditMode
    );

}


if (profileNameSaveButton) {

    profileNameSaveButton.addEventListener(
        "click",
        saveProfileName
    );

}


if (profileNameInput) {

    profileNameInput.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter" &&
                !profileNameInput.readOnly) {

                event.preventDefault();

                saveProfileName();

            }

        }
    );

}


if (profileAvatarInput) {

    profileAvatarInput.addEventListener(
        "change",
        () => {

            const file =
                profileAvatarInput.files &&
                profileAvatarInput.files[0];

            if (!file) {

                return;

            }


            const reader = new FileReader();

            reader.onload = () => {

                savedData.profileAvatar =
                    String(reader.result || "");

                saveData();

                if (profileAvatarPreview) {

                    profileAvatarPreview.src =
                        getProfileAvatarSrc();

                }

            };

            reader.readAsDataURL(file);

        }
    );

}


/* ========================================= */
/* NEW FEATURE: KEYBOARD / ACCENT THEMES */
/* ========================================= */

/*
 * Lets the person pick a color theme from the left-panel
 * "Customize" card. The theme swaps the virtual keyboard's
 * highlight colors as well as the right-panel card accents,
 * via CSS variables set on <body data-theme="...">.
 */

const VALID_THEMES = [
    "classic",
    "neon",
    "sunset",
    "ocean",
    "crimson",
    "forest",
    "galaxy",
    "gold",
    "ice",
    "mono",
    "rose",
    "lime",
    "cyberpunk",
    "mint",
    "lava",
    "arctic",
    "berry",
    "amber",
    "steel",
    "candy",
    "sapphire",
    "emerald",
    "ruby",
    "topaz",
    "amethyst",
    "obsidian",
    "coral",
    "peach",
    "lavender",
    "slate",
    "midnight",
    "sakura",
    "autumn",
    "glacier",
    "volcano",
    "jade",
    "plum",
    "citrus",
    "storm",
    "desert",
    "neonblue",
    "neonpink",
    "neongreen",
    "copper",
    "onyx",
    "blossom",
    "tidal",
    "royal",
    "inferno",
    "frostbite"
];


const THEME_LABELS = {
    classic: "Classic",
    neon: "Neon",
    sunset: "Sunset",
    ocean: "Ocean",
    crimson: "Crimson",
    forest: "Forest",
    galaxy: "Galaxy",
    gold: "Gold",
    ice: "Ice",
    mono: "Monochrome",
    rose: "Rose",
    lime: "Lime",
    cyberpunk: "Cyberpunk",
    mint: "Mint",
    lava: "Lava",
    arctic: "Arctic",
    berry: "Berry",
    amber: "Amber",
    steel: "Steel",
    candy: "Candy",
    sapphire: "Sapphire",
    emerald: "Emerald",
    ruby: "Ruby",
    topaz: "Topaz",
    amethyst: "Amethyst",
    obsidian: "Obsidian",
    coral: "Coral",
    peach: "Peach",
    lavender: "Lavender",
    slate: "Slate",
    midnight: "Midnight",
    sakura: "Sakura",
    autumn: "Autumn",
    glacier: "Glacier",
    volcano: "Volcano",
    jade: "Jade",
    plum: "Plum",
    citrus: "Citrus",
    storm: "Storm",
    desert: "Desert",
    neonblue: "Neon Blue",
    neonpink: "Neon Pink",
    neongreen: "Neon Green",
    copper: "Copper",
    onyx: "Onyx",
    blossom: "Blossom",
    tidal: "Tidal",
    royal: "Royal",
    inferno: "Inferno",
    frostbite: "Frostbite"
};


const activeThemeLabel =
    document.getElementById("activeThemeLabel");

const activeThemePreview =
    document.getElementById("activeThemePreview");


function applyTheme(theme) {

    const safeTheme =
        VALID_THEMES.includes(theme) ?
            theme :
            "classic";

    document.body.setAttribute(
        "data-theme",
        safeTheme
    );


    themeSwatches.forEach(
        swatch => {

            swatch.classList.toggle(
                "active",
                swatch.dataset.theme === safeTheme
            );

        }
    );


    if (activeThemeLabel) {

        activeThemeLabel.textContent =
            THEME_LABELS[safeTheme] ||
            "Classic";

    }


    if (activeThemePreview) {

        activeThemePreview.className =
            "customize-open-btn-preview swatch-" +
            safeTheme;

    }


    try {

        localStorage.setItem(
            "typeRushTheme",
            safeTheme
        );

    }

    catch (e) {}

}


function loadStoredTheme() {

    let stored = "classic";

    try {

        stored =
            localStorage.getItem("typeRushTheme") ||
            "classic";

    }

    catch (e) {

        stored = "classic";

    }


    applyTheme(stored);

}


themeSwatches.forEach(
    swatch => {

        swatch.addEventListener(
            "click",
            () => {

                applyTheme(swatch.dataset.theme);

            }
        );

    }
);


loadStoredTheme();


/* ========================================= */
/* NEW FEATURE: TYPING FONTS (20 fonts) */
/* ========================================= */

/*
 * Lets the person pick the font used for the sentence text, the
 * typing input, and the on-screen keyboard, from the "Fonts"
 * button in the left-panel "Customize" card. Works the same way
 * as applyTheme()/loadStoredTheme() above, but sets
 * <body data-font="..."> instead, which drives the --app-font
 * CSS variable.
 */

const fontSwatches =
    document.querySelectorAll(".font-swatch");

const activeFontLabel =
    document.getElementById("activeFontLabel");

const VALID_FONTS = [
    "classic",
    "robotomono",
    "firacode",
    "jetbrainsmono",
    "sourcecodepro",
    "ibmplexmono",
    "spacemono",
    "inconsolata",
    "courierprime",
    "ubuntumono",
    "poppins",
    "montserrat",
    "nunito",
    "quicksand",
    "raleway",
    "rubik",
    "worksans",
    "lato",
    "opensans",
    "inter",
    "merriweather",
    "playfairdisplay",
    "lora",
    "ptserif",
    "crimsontext",
    "ebgaramond",
    "librebaskerville",
    "notoserif",
    "robotoslab",
    "bitter",
    "oswald",
    "bebasneue",
    "anton",
    "archivo",
    "barlow",
    "cabin",
    "karla",
    "manrope",
    "mulish",
    "dmsans",
    "josefinsans",
    "comfortaa",
    "dancingscript",
    "pacifico",
    "caveat",
    "indieflower",
    "shadowsintolight",
    "permanentmarker",
    "vt323",
    "pressstart2p"
];


const FONT_LABELS = {
    classic: "Classic",
    robotomono: "Roboto Mono",
    firacode: "Fira Code",
    jetbrainsmono: "JetBrains Mono",
    sourcecodepro: "Source Code Pro",
    ibmplexmono: "IBM Plex Mono",
    spacemono: "Space Mono",
    inconsolata: "Inconsolata",
    courierprime: "Courier Prime",
    ubuntumono: "Ubuntu Mono",
    poppins: "Poppins",
    montserrat: "Montserrat",
    nunito: "Nunito",
    quicksand: "Quicksand",
    raleway: "Raleway",
    rubik: "Rubik",
    worksans: "Work Sans",
    lato: "Lato",
    opensans: "Open Sans",
    inter: "Inter",
    merriweather: "Merriweather",
    playfairdisplay: "Playfair Display",
    lora: "Lora",
    ptserif: "PT Serif",
    crimsontext: "Crimson Text",
    ebgaramond: "EB Garamond",
    librebaskerville: "Libre Baskerville",
    notoserif: "Noto Serif",
    robotoslab: "Roboto Slab",
    bitter: "Bitter",
    oswald: "Oswald",
    bebasneue: "Bebas Neue",
    anton: "Anton",
    archivo: "Archivo",
    barlow: "Barlow",
    cabin: "Cabin",
    karla: "Karla",
    manrope: "Manrope",
    mulish: "Mulish",
    dmsans: "DM Sans",
    josefinsans: "Josefin Sans",
    comfortaa: "Comfortaa",
    dancingscript: "Dancing Script",
    pacifico: "Pacifico",
    caveat: "Caveat",
    indieflower: "Indie Flower",
    shadowsintolight: "Shadows Into Light",
    permanentmarker: "Permanent Marker",
    vt323: "VT323",
    pressstart2p: "Press Start 2P"
};


function applyFont(font) {

    const safeFont =
        VALID_FONTS.includes(font) ?
            font :
            "classic";

    document.body.setAttribute(
        "data-font",
        safeFont
    );


    fontSwatches.forEach(
        swatch => {

            swatch.classList.toggle(
                "active",
                swatch.dataset.font === safeFont
            );

        }
    );


    if (activeFontLabel) {

        activeFontLabel.textContent =
            FONT_LABELS[safeFont] ||
            "Classic";

    }


    try {

        localStorage.setItem(
            "typeRushFont",
            safeFont
        );

    }

    catch (e) {}

}


function loadStoredFont() {

    let stored = "classic";

    try {

        stored =
            localStorage.getItem("typeRushFont") ||
            "classic";

    }

    catch (e) {

        stored = "classic";

    }


    applyFont(stored);

}


fontSwatches.forEach(
    swatch => {

        swatch.addEventListener(
            "click",
            () => {

                applyFont(swatch.dataset.font);

            }
        );

    }
);


loadStoredFont();


/* ========================================= */
/* NEW FEATURE: KEYBOARD STYLES (50 styles) */
/* ========================================= */

/*
 * Lets the person pick a visual "skin" for the on-screen keyboard
 * keys from the "Keyboard Styles" button in the left-panel
 * "Customize" card. Works the same way as applyTheme()/applyFont()
 * above, but sets <body data-kbstyle="..."> instead, which drives
 * the --kb-bg / --kb-border-color / --kb-radius / --kb-shadow /
 * --kb-color / --kb-weight variables consumed by .kb-key.
 */

const kbStyleSwatches =
    document.querySelectorAll(".kbstyle-swatch");

const activeKbStyleLabel =
    document.getElementById("activeKbStyleLabel");

const VALID_KB_STYLES = [
    "classic",
    "flatdark",
    "flatlight",
    "glass",
    "neumorphlight",
    "neumorphdark",
    "retrobeige",
    "retrocream",
    "mechblack",
    "mechgrey",
    "gamingrgb",
    "wood",
    "metal",
    "chalkboard",
    "paper",
    "neoncyan",
    "neonpink",
    "neongreen",
    "pastelpink",
    "pastelblue",
    "pastelmint",
    "pastellavender",
    "bubble",
    "pixelart",
    "origami",
    "carbonfiber",
    "marble",
    "leather",
    "denim",
    "chrome",
    "goldplated",
    "rosegold",
    "copperkey",
    "bronze",
    "steelblue",
    "midnightglass",
    "frostedglass",
    "sunsetglass",
    "terminalgreen",
    "terminalamber",
    "holographic",
    "icecube",
    "lavarock",
    "sand",
    "emeraldgem",
    "rubygem",
    "sapphiregem",
    "onyxgem",
    "cottoncandy",
    "galaxynebula"
];


const KB_STYLE_LABELS = {
    classic: "Classic",
    flatdark: "Flat Dark",
    flatlight: "Flat Light",
    glass: "Glass",
    neumorphlight: "Neumorphic Light",
    neumorphdark: "Neumorphic Dark",
    retrobeige: "Retro Beige",
    retrocream: "Retro Cream",
    mechblack: "Mechanical Black",
    mechgrey: "Mechanical Grey",
    gamingrgb: "Gaming RGB",
    wood: "Wood",
    metal: "Brushed Metal",
    chalkboard: "Chalkboard",
    paper: "Paper",
    neoncyan: "Neon Cyan",
    neonpink: "Neon Pink",
    neongreen: "Neon Green",
    pastelpink: "Pastel Pink",
    pastelblue: "Pastel Blue",
    pastelmint: "Pastel Mint",
    pastellavender: "Pastel Lavender",
    bubble: "Bubble",
    pixelart: "Pixel Art",
    origami: "Origami",
    carbonfiber: "Carbon Fiber",
    marble: "Marble",
    leather: "Leather",
    denim: "Denim",
    chrome: "Chrome",
    goldplated: "Gold Plated",
    rosegold: "Rose Gold",
    copperkey: "Copper",
    bronze: "Bronze",
    steelblue: "Steel Blue",
    midnightglass: "Midnight Glass",
    frostedglass: "Frosted Glass",
    sunsetglass: "Sunset Glass",
    terminalgreen: "Terminal Green",
    terminalamber: "Terminal Amber",
    holographic: "Holographic",
    icecube: "Ice Cube",
    lavarock: "Lava Rock",
    sand: "Sand",
    emeraldgem: "Emerald Gem",
    rubygem: "Ruby Gem",
    sapphiregem: "Sapphire Gem",
    onyxgem: "Onyx Gem",
    cottoncandy: "Cotton Candy",
    galaxynebula: "Galaxy Nebula"
};


function applyKbStyle(kbStyle) {

    const safeKbStyle =
        VALID_KB_STYLES.includes(kbStyle) ?
            kbStyle :
            "classic";

    document.body.setAttribute(
        "data-kbstyle",
        safeKbStyle
    );


    kbStyleSwatches.forEach(
        swatch => {

            swatch.classList.toggle(
                "active",
                swatch.dataset.kbstyle === safeKbStyle
            );

        }
    );


    if (activeKbStyleLabel) {

        activeKbStyleLabel.textContent =
            KB_STYLE_LABELS[safeKbStyle] ||
            "Classic";

    }


    try {

        localStorage.setItem(
            "typeRushKbStyle",
            safeKbStyle
        );

    }

    catch (e) {}

}


function loadStoredKbStyle() {

    let stored = "classic";

    try {

        stored =
            localStorage.getItem("typeRushKbStyle") ||
            "classic";

    }

    catch (e) {

        stored = "classic";

    }


    applyKbStyle(stored);

}


kbStyleSwatches.forEach(
    swatch => {

        swatch.addEventListener(
            "click",
            () => {

                applyKbStyle(swatch.dataset.kbstyle);

            }
        );

    }
);


loadStoredKbStyle();


/* ========================================= */
/* NEW FEATURE: RESET SETTINGS BUTTON (RIGHT PANEL) */
/* ========================================= */
/* Resets only the Customize preferences (theme, font, keyboard
   style) back to their "Classic" defaults - it deliberately does
   not touch savedData at all, so level/mode progress, achievements,
   streaks, and the leaderboard are left exactly as they were. */

const resetSettingsButton =
    document.getElementById("resetSettingsButton");

if (resetSettingsButton) {

    resetSettingsButton.addEventListener(
        "click",
        () => {

            const confirmed =
                window.confirm(
                    "Reset theme, font, and keyboard style back to default? Your progress and stats won't be touched."
                );

            if (!confirmed) {

                return;

            }


            applyTheme("classic");

            applyFont("classic");

            applyKbStyle("classic");


            resetSettingsButton.classList.add(
                "panel-reset-btn-done"
            );

            setTimeout(
                () => {

                    resetSettingsButton.classList.remove(
                        "panel-reset-btn-done"
                    );

                },
                1500
            );

        }
    );

}

const openThemeModalButton =
    document.getElementById("openThemeModalButton");

const themeModal =
    document.getElementById("themeModal");

const closeThemeModalButton =
    document.getElementById("closeThemeModalButton");

const openFontModalButton =
    document.getElementById("openFontModalButton");

const fontModal =
    document.getElementById("fontModal");

const closeFontModalButton =
    document.getElementById("closeFontModalButton");

const openKeyboardStyleModalButton =
    document.getElementById("openKeyboardStyleModalButton");

const keyboardStyleModal =
    document.getElementById("keyboardStyleModal");

const closeKeyboardStyleModalButton =
    document.getElementById("closeKeyboardStyleModalButton");


function openPickerModal(modal) {

    if (modal) {

        modal.classList.add("show");

    }

}


function closePickerModal(modal) {

    if (modal) {

        modal.classList.remove("show");

    }

}


if (openThemeModalButton) {

    openThemeModalButton.addEventListener(
        "click",
        () => openPickerModal(themeModal)
    );

}


if (closeThemeModalButton) {

    closeThemeModalButton.addEventListener(
        "click",
        () => closePickerModal(themeModal)
    );

}


if (themeModal) {

    themeModal.addEventListener(
        "click",
        event => {

            if (event.target === themeModal) {

                closePickerModal(themeModal);

            }

        }
    );

}


if (openFontModalButton) {

    openFontModalButton.addEventListener(
        "click",
        () => openPickerModal(fontModal)
    );

}


if (closeFontModalButton) {

    closeFontModalButton.addEventListener(
        "click",
        () => closePickerModal(fontModal)
    );

}


if (fontModal) {

    fontModal.addEventListener(
        "click",
        event => {

            if (event.target === fontModal) {

                closePickerModal(fontModal);

            }

        }
    );

}


if (openKeyboardStyleModalButton) {

    openKeyboardStyleModalButton.addEventListener(
        "click",
        () => openPickerModal(keyboardStyleModal)
    );

}


if (closeKeyboardStyleModalButton) {

    closeKeyboardStyleModalButton.addEventListener(
        "click",
        () => closePickerModal(keyboardStyleModal)
    );

}


if (keyboardStyleModal) {

    keyboardStyleModal.addEventListener(
        "click",
        event => {

            if (event.target === keyboardStyleModal) {

                closePickerModal(keyboardStyleModal);

            }

        }
    );

}


/* ========================================= */
/* NEW FEATURE: PHOENIX REBIRTH TYPING GAME */
/* ========================================= */

/*
 * A 50-level typing game. An egg cracks open as you type
 * correctly, a phoenix hatches, and from level 3 onward it takes
 * flight - climbing higher the faster and more accurately you
 * type, and sinking toward a volcano if your speed drops too
 * far. Finish a level's passage while keeping your speed near
 * the target to clear it and unlock the next; let the phoenix
 * fall in the lava and you'll have to retry the level.
 */

const PHOENIX_TOPIC_BANKS = [
    ["ember", "spark", "flame", "rise", "wing"],
    ["cloud", "storm", "flight", "gust", "soar"],
    ["dawn", "light", "glow", "shine", "horizon"],
    ["nest", "feather", "sky", "cry", "circle"],
    ["ash", "rebirth", "cycle", "legend", "myth"]
];

function buildPhoenixPassage(level) {

    const bank =
        PHOENIX_TOPIC_BANKS[level % PHOENIX_TOPIC_BANKS.length];

    const wordCount =
        Math.min(6 + Math.floor(level / 3), 22);

    const words = [];

    for (let i = 0; i < wordCount; i++) {

        words.push(
            randChoice(bank)
        );

    }

    return words.join(" ");

}

/* Required WPM curve for the Phoenix Rebirth levels. Levels 1-50
   keep the original pacing (12 + level * 1.15 WPM) so existing
   progress feels identical. Beyond level 50 the 450 newly added
   levels keep climbing but with diminishing returns (a square-root
   ramp) so the target eases toward a realistic ceiling of 130 WPM
   by level 500 instead of extrapolating the old straight line to
   an unreachable ~587 WPM. */
function getPhoenixRequiredWpm(level) {

    const BASE_LEVEL_CAP = 50;
    const baseWpmAtCap = Math.round(12 + BASE_LEVEL_CAP * 1.15);

    if (level <= BASE_LEVEL_CAP) {

        return Math.round(12 + level * 1.15);

    }

    const levelsBeyondCap =
        level - BASE_LEVEL_CAP;

    const maxLevelsBeyondCap =
        Math.max(1, PHOENIX_TOTAL_LEVELS - BASE_LEVEL_CAP);

    const extraWpmCeiling = 60;

    const extraWpm =
        extraWpmCeiling *
        Math.sqrt(levelsBeyondCap / maxLevelsBeyondCap);

    return Math.round(baseWpmAtCap + extraWpm);

}

const PHOENIX_LEVELS = Array.from(
    { length: PHOENIX_TOTAL_LEVELS },
    (_, i) => {

        const level =
            i + 1;

        return {
            level: level,
            requiredWpm: getPhoenixRequiredWpm(level),
            requiredAccuracy: Math.min(97, Math.round(78 + level * 0.35)),
            text: buildPhoenixPassage(level)
        };

    }
);


/* ---------- GAME STATE ---------- */

const PHOENIX_FLY_START_LEVEL = 5;
const PHOENIX_FLIGHT_TARGET_WPM = 40;

let phoenixCurrentLevel = 1;
let phoenixTyped = "";
let phoenixStartTime = null;
let phoenixTickTimer = null;
let phoenixLowAltitudeTicks = 0;
let phoenixHatched = false;
let phoenixGameOver = false;

/* Smoothed altitude (0-100). Persists across the automatic
   level-to-level transition so the phoenix doesn't snap back
   down to the ground every time a level is cleared - it only
   resets when the level is entered fresh (from the level grid,
   or after a retry). */
let phoenixAltitude = 0;

/* ---------- CONTINUOUS SPEED TRACKING ----------
   The old approach measured WPM from the start of the current
   level's passage, which meant it snapped back to 0 every time
   a new level began (even mid-flight) and the bird would dip
   for no reason. Instead we track a smoothed "characters per
   second" figure that updates on every keystroke and decays
   gently when the player pauses - it only gets reset to zero
   on a genuinely fresh attempt (from the level grid, or after
   a retry), never on the automatic level-to-level handoff while
   already flying. */
let phoenixSmoothedCps = 0;
let phoenixLastCharTime = null;
let phoenixCharCounter = 0;
let phoenixLastTickCharCounter = 0;

/* Horizontal drift, so the bird actually roams the sky instead
   of bobbing in one static spot - the higher the level, the
   wider it wanders. */
let phoenixDriftPhase = 0;


function populatePhoenixGrid() {

    if (!phoenixGameGrid) {

        return;

    }

    phoenixGameGrid.innerHTML = "";

    const highestReached =
        Number(savedData.phoenixHighestLevel) || 1;

    PHOENIX_LEVELS.forEach(
        levelData => {

            const locked =
                levelData.level > highestReached;

            const cleared =
                levelData.level < highestReached;

            const card =
                document.createElement("button");

            card.type = "button";

            card.className =
                "mode-select-card phoenix-level-card" +
                (locked ? " locked" : "") +
                (cleared ? " cleared" : "");

            card.disabled =
                locked;


            const icon =
                document.createElement("div");

            icon.className =
                "mode-select-icon";

            icon.textContent =
                locked ? "🔒" : (cleared ? "✅" : "🥚");


            const name =
                document.createElement("div");

            name.className =
                "mode-select-name";

            name.textContent =
                "Level " + levelData.level;


            const tag =
                document.createElement("div");

            tag.className =
                "mode-select-tag";

            tag.textContent =
                levelData.requiredWpm + " WPM target";


            card.appendChild(icon);
            card.appendChild(name);
            card.appendChild(tag);

            if (!locked) {

                card.addEventListener(
                    "click",
                    () => startPhoenixLevel(levelData.level)
                );

            }

            phoenixGameGrid.appendChild(card);

        }
    );

}


/* Returns the egg crack stage (0-3) to show while the phoenix is
   still inside its egg, one stage per level 1-4:
   level 1 = 0 (uncracked), level 2 = 1 (25%), level 3 = 2 (50%),
   level 4 = 3 (75%). From level 5 onward the egg is gone and the
   bird itself is on screen. */
function getPhoenixEggStage(level) {

    return Math.max(0, Math.min(3, level - 1));

}

/* A short, level-specific message shown in the banner right
   after a level is cleared, so the learner clearly sees the
   hatching milestones (25% / 50% / 75% / fully hatched) instead
   of the same generic text every time. */
function getPhoenixClearMessage(level) {

    if (level === 1) {

        return "🥚 Egg 25% hatched!";

    }

    if (level === 2) {

        return "🥚 Egg 50% hatched!";

    }

    if (level === 3) {

        return "🐣 Egg 75% hatched!";

    }

    if (level === 4) {

        return "🐣 Fully hatched! Get ready to fly!";

    }

    if (level === PHOENIX_FLY_START_LEVEL) {

        return "🕊️ Your phoenix takes flight!";

    }

    return "🔥 Level cleared! Fly on!";

}

/* Grows and re-colours the bird a little more with every level
   once it's flying, so it visibly "evolves" as the player
   progresses instead of looking identical from level 5 to 50.
   Its fire also gets bigger and brighter the further the player
   gets - a growing drop-shadow "halo" layered under the hue
   shift, plus the in-SVG flame licks getting a stronger glow. */
function applyPhoenixEvolution(level) {

    if (!phoenixBird) {

        return;

    }

    const levelsIntoFlight =
        Math.max(0, level - PHOENIX_FLY_START_LEVEL);

    const size =
        92 + Math.min(40, levelsIntoFlight * 0.9);

    phoenixBird.style.width = size + "px";
    phoenixBird.style.height = size + "px";

    const hue =
        Math.min(300, levelsIntoFlight * 7);

    /* Fire intensity: starts subtle, grows into a large, hot
       glow by the final levels. */
    const fireBlur =
        6 + Math.min(26, levelsIntoFlight * 0.6);

    const fireSpread =
        Math.min(14, levelsIntoFlight * 0.3);

    const fireOpacity =
        Math.min(0.95, 0.35 + levelsIntoFlight * 0.014);

    const glow =
        `drop-shadow(0 0 ${fireBlur}px rgba(255, 140, 40, ${fireOpacity})) ` +
        `drop-shadow(0 0 ${fireSpread}px rgba(255, 60, 20, ${fireOpacity * 0.8}))`;

    phoenixBird.style.filter =
        hue > 0 ? `hue-rotate(${hue}deg) ${glow}` : glow;

}


/* Cycles the whole scene - sky colour, mountains, and treeline -
   through a season each tier as the player climbs through the
   levels, instead of one static backdrop for the whole game:
   spring, then summer (sunny), autumn, winter (snow), and a
   final aurora tier near level 50. */
const PHOENIX_SEASONS =
    ["spring", "summer", "autumn", "winter", "aurora"];

function applyPhoenixSeason(level) {

    if (!phoenixSky) {

        return;

    }

    const flightSpan =
        Math.max(1, PHOENIX_TOTAL_LEVELS - PHOENIX_FLY_START_LEVEL);

    const levelsIntoFlight =
        Math.max(0, level - PHOENIX_FLY_START_LEVEL);

    const seasonIndex =
        Math.min(
            PHOENIX_SEASONS.length - 1,
            Math.floor((levelsIntoFlight / flightSpan) * PHOENIX_SEASONS.length)
        );

    phoenixSky.dataset.season =
        PHOENIX_SEASONS[seasonIndex];

}


/* Makes the phoenix actually roam the sky side to side while
   flying rather than idling in one spot and only bobbing up and
   down - the higher the level, the wider its wandering range.
   Called every flight tick; has no effect on the egg levels. */
function applyPhoenixDrift(level) {

    if (!phoenixActor) {

        return;

    }

    const levelsIntoFlight =
        Math.max(0, level - PHOENIX_FLY_START_LEVEL);

    const amplitude =
        Math.min(20, 4 + levelsIntoFlight * 0.4);

    phoenixDriftPhase +=
        0.12 + Math.min(0.1, levelsIntoFlight * 0.003);

    const basePercent = 72;

    const offset =
        Math.sin(phoenixDriftPhase) * amplitude;

    const clampedPercent =
        Math.max(30, Math.min(88, basePercent + offset));

    phoenixActor.style.left =
        clampedPercent + "%";

}

/* Moves the phoenix (or the altitude meter) to a given height,
   0 = resting on the ground next to the volcano, 100 = top of
   the sky. Shared by level start and the flight tick so the
   visuals always agree with phoenixAltitude. */
function applyPhoenixAltitude(percent) {

    const clamped =
        Math.max(0, Math.min(100, percent));

    if (phoenixAltitudeFill) {

        phoenixAltitudeFill.style.height =
            clamped + "%";

    }

    if (phoenixActor) {

        phoenixActor.style.bottom =
            (90 + clamped * 1.4) + "px";

    }

    return clamped;

}


function startPhoenixLevel(level, continueFlight) {

    phoenixCurrentLevel = level;
    phoenixTyped = "";
    phoenixLowAltitudeTicks = 0;
    phoenixGameOver = false;

    const flying =
        level >= PHOENIX_FLY_START_LEVEL;

    phoenixHatched =
        flying;

    /* Only keep the current altitude - and the current typing
       momentum - when we're continuing straight on from clearing
       the previous level while already flying. A brand new
       attempt (from the level grid, or a retry after falling)
       always starts fresh: mid-air hover, and speed back at 0
       until the player starts typing again. */
    const keepMomentum =
        flying && continueFlight;

    if (!keepMomentum) {

        phoenixStartTime = null;
        phoenixSmoothedCps = 0;
        phoenixLastCharTime = null;
        phoenixCharCounter = 0;
        phoenixLastTickCharCounter = 0;

    }

    if (!flying) {

        phoenixAltitude = 0;

    }

    else if (!continueFlight) {

        phoenixAltitude = 50;

    }

    applyPhoenixSeason(level);

    if (phoenixTickTimer) {

        clearInterval(phoenixTickTimer);

        phoenixTickTimer = null;

    }


    if (phoenixFailOverlay) {

        phoenixFailOverlay.classList.remove("show");

    }

    if (phoenixVolcano) {

        phoenixVolcano.classList.remove("erupting");

    }

    if (phoenixEgg) {

        if (flying) {

            phoenixEgg.className = "phoenix-egg";
            phoenixEgg.style.display = "none";

        }

        else {

            phoenixEgg.className =
                "phoenix-egg crack-" + getPhoenixEggStage(level) + " shaking";

            phoenixEgg.style.display = "block";

        }

    }

    if (phoenixBird) {

        if (flying) {

            phoenixBird.className =
                "phoenix-bird visible flying evolved";

            applyPhoenixEvolution(level);

        }

        else {

            phoenixBird.className = "phoenix-bird";
            phoenixBird.style.width = "";
            phoenixBird.style.height = "";
            phoenixBird.style.filter = "";

        }

    }

    applyPhoenixAltitude(
        flying ? phoenixAltitude : 0
    );

    /* Recentre the horizontal drift at the start of every
       attempt so the bird doesn't appear mid-wander the instant
       the level loads. */
    if (phoenixActor) {

        phoenixActor.style.left =
            "72%";

    }

    phoenixDriftPhase = 0;

    if (phoenixFlyBanner) {

        phoenixFlyBanner.classList.remove("show");

    }

    if (phoenixInput) {

        phoenixInput.value = "";

    }


    const levelData =
        PHOENIX_LEVELS[level - 1];

    if (phoenixHudLevel) {

        phoenixHudLevel.textContent =
            level;

    }

    if (phoenixHudTarget) {

        phoenixHudTarget.textContent =
            flying ?
                PHOENIX_FLIGHT_TARGET_WPM + " WPM" :
                levelData.requiredWpm + " WPM";

    }

    if (phoenixHudWpm) {

        phoenixHudWpm.textContent =
            "0";

    }

    if (phoenixHudAccuracy) {

        phoenixHudAccuracy.textContent =
            "100%";

    }


    renderPhoenixTargetText();


    /* BUG FIX: keep the dashboard hidden/scroll-locked while the
       Phoenix game overlay is up too (it's reached straight from
       the level-select screen, never through enterMainApp()). */
    if (appContainer) {

        appContainer.style.display =
            "none";

    }

    document.body.classList.add(
        "app-locked"
    );


    if (levelSelectScreen) {

        levelSelectScreen.classList.add("fade-out");

        setTimeout(
            () => {

                levelSelectScreen.style.display = "none";

            },
            500
        );

    }

    if (phoenixGameScreen) {

        phoenixGameScreen.classList.remove("fade-out");

        phoenixGameScreen.style.display = "flex";

    }


    setTimeout(
        () => {

            if (phoenixInput) {

                phoenixInput.focus();

            }

        },
        500
    );


    phoenixTickTimer = setInterval(
        updatePhoenixFlight,
        500
    );

}


function exitPhoenixGame() {

    if (phoenixTickTimer) {

        clearInterval(phoenixTickTimer);

        phoenixTickTimer = null;

    }

    if (phoenixGameScreen) {

        phoenixGameScreen.classList.add("fade-out");

        setTimeout(
            () => {

                phoenixGameScreen.style.display = "none";

            },
            500
        );

    }

    if (phoenixFailOverlay) {

        phoenixFailOverlay.classList.remove("show");

    }

    openLevelSelectScreen();

}


/* NEW FEATURE: "Reset Phoenix Progress" - mirrors
   resetCurrentProgress() for the classic levels. Locks every
   Phoenix Rebirth level above 1 back up and sends the player back
   to Level 1, without touching classic levels, achievements, the
   leaderboard, or best stats. */
function resetPhoenixProgress() {

    if (phoenixTickTimer) {

        exitPhoenixGame();

    }

    savedData.phoenixHighestLevel = 1;

    saveData();

    phoenixCurrentLevel = 1;

    populatePhoenixGrid();

}


/* NEW FEATURE: click handler for the Phoenix Rebirth panel's own
   "Reset Progress" button - see resetPhoenixProgress() above for
   what it does and doesn't touch. */
if (phoenixResetProgressButton) {

    phoenixResetProgressButton.addEventListener(
        "click",
        () => {

            const confirmed =
                window.confirm(
                    "Reset your Phoenix Rebirth progress back to Level 1? All other Phoenix levels will be locked again. Your achievements, leaderboard, and best stats stay unaffected."
                );

            if (!confirmed) {

                return;

            }


            resetPhoenixProgress();

        }
    );

}


function renderPhoenixTargetText() {

    if (!phoenixTargetText) {

        return;

    }

    const levelData =
        PHOENIX_LEVELS[phoenixCurrentLevel - 1];

    phoenixTargetText.innerHTML = "";

    levelData.text.split("").forEach(
        (ch, index) => {

            const span =
                document.createElement("span");

            span.textContent =
                ch;

            if (index < phoenixTyped.length) {

                span.className =
                    phoenixTyped[index] === ch ?
                        "pt-correct" :
                        "pt-incorrect";

            }

            else if (index === phoenixTyped.length) {

                span.className =
                    "pt-current";

            }

            phoenixTargetText.appendChild(span);

        }
    );

}


function phoenixAccuracy() {

    if (!phoenixTyped.length) {

        return 100;

    }

    const levelData =
        PHOENIX_LEVELS[phoenixCurrentLevel - 1];

    let correct = 0;

    for (let i = 0; i < phoenixTyped.length; i++) {

        if (phoenixTyped[i] === levelData.text[i]) {

            correct++;

        }

    }

    return Math.round((correct / phoenixTyped.length) * 100);

}


/* Call this once per character actually typed (not on every
   "input" event blindly - backspaces/pastes are normalised to a
   simple added-characters count first). Updates a smoothed
   characters-per-second figure via an exponential moving
   average, so a single fast or slow keystroke doesn't cause a
   jarring jump, but the speed still reacts quickly and never
   snaps back to zero just because a new level started. */
function registerPhoenixKeystroke(charsAdded) {

    if (charsAdded <= 0) {

        return;

    }

    const now =
        Date.now();

    if (phoenixLastCharTime) {

        const deltaMs =
            now - phoenixLastCharTime;

        if (deltaMs > 0) {

            const instantCps =
                (charsAdded * 1000) / deltaMs;

            const alpha = 0.3;

            phoenixSmoothedCps =
                phoenixSmoothedCps ?
                    (phoenixSmoothedCps * (1 - alpha) + instantCps * alpha) :
                    instantCps;

        }

    }

    phoenixLastCharTime = now;
    phoenixCharCounter += charsAdded;

}


/* Runs once per flight tick. If nothing new has been typed since
   the last tick, the smoothed speed decays toward 0 instead of
   staying frozen - so pausing mid-level realistically shows the
   bird slowing down and sinking, the same as if you'd actually
   started typing slower. */
function decayPhoenixSpeedIfIdle() {

    if (phoenixCharCounter === phoenixLastTickCharCounter) {

        phoenixSmoothedCps *= 0.75;

        if (phoenixSmoothedCps < 0.05) {

            phoenixSmoothedCps = 0;

        }

    }

    phoenixLastTickCharCounter = phoenixCharCounter;

}


function phoenixLiveWpm() {

    return Math.max(
        0,
        Math.round((phoenixSmoothedCps * 60) / 5)
    );

}


function killPhoenix() {

    phoenixGameOver = true;

    if (phoenixTickTimer) {

        clearInterval(phoenixTickTimer);

        phoenixTickTimer = null;

    }

    if (phoenixVolcano) {

        phoenixVolcano.classList.add("erupting");

    }

    if (phoenixActor) {

        phoenixActor.style.bottom = "10px";

        /* Snap back to the crater's own position for the fall so
           the bird visibly drops into the volcano rather than
           landing off to one side of it. */
        phoenixActor.style.left = "72%";

    }

    if (phoenixFailLevel) {

        phoenixFailLevel.textContent =
            phoenixCurrentLevel;

    }

    if (phoenixFailOverlay) {

        setTimeout(
            () => phoenixFailOverlay.classList.add("show"),
            500
        );

    }

}


function updatePhoenixFlight() {

    if (phoenixGameOver) {

        return;

    }

    decayPhoenixSpeedIfIdle();

    const wpm =
        phoenixLiveWpm();

    const accuracy =
        phoenixAccuracy();

    if (phoenixHudWpm) {

        phoenixHudWpm.textContent =
            String(wpm);

    }

    if (phoenixHudAccuracy) {

        phoenixHudAccuracy.textContent =
            accuracy + "%";

    }


    /* Levels 1-4: the phoenix is still inside the egg. There's no
       flight or volcano risk yet - the egg's crack stage is fixed
       for the whole level (see getPhoenixEggStage) and only moves
       forward once the level is cleared, so nothing to update here
       every tick. */
    if (!phoenixHatched) {

        return;

    }


    /* Level 5+: airborne. Don't start moving the phoenix until the
       learner actually starts typing this attempt - otherwise it
       would read 0 WPM and immediately start sinking before they've
       pressed a single key. */
    if (!phoenixStartTime) {

        return;

    }

    const wpmDelta =
        wpm - PHOENIX_FLIGHT_TARGET_WPM;

    /* Move altitude up or down a step each tick based on how far
       above/below the 40 WPM target the current speed is, rather
       than snapping straight to a computed height - this is what
       gives the "slowly sinks / slowly climbs" feel instead of an
       instant jump, and (unlike easing toward a ratio) it can
       actually reach 0 and let the phoenix hit the volcano when
       typing stays slow. */
    phoenixAltitude =
        Math.max(0, Math.min(100, phoenixAltitude + wpmDelta * 0.6));

    const clampedAltitude =
        applyPhoenixAltitude(phoenixAltitude);

    /* Keeps the phoenix actively roaming side to side instead of
       idling in one spot - wider swings at higher levels. */
    applyPhoenixDrift(phoenixCurrentLevel);


    if (clampedAltitude <= 1) {

        phoenixLowAltitudeTicks++;

    }

    else {

        phoenixLowAltitudeTicks = 0;

    }

    /* Give the player a couple of seconds at the bottom to speed
       back up past the 40 WPM target before the phoenix actually
       falls into the volcano. */
    if (phoenixLowAltitudeTicks >= 3) {

        killPhoenix();

    }

}


function completePhoenixLevel() {

    const levelData =
        PHOENIX_LEVELS[phoenixCurrentLevel - 1];

    const wpm =
        phoenixLiveWpm();

    const accuracy =
        phoenixAccuracy();


    if (wpm < levelData.requiredWpm * 0.7 || accuracy < levelData.requiredAccuracy - 15) {

        killPhoenix();

        return;

    }


    phoenixGameOver = true;

    if (phoenixTickTimer) {

        clearInterval(phoenixTickTimer);

        phoenixTickTimer = null;

    }


    if (phoenixCurrentLevel >= Number(savedData.phoenixHighestLevel || 1)) {

        savedData.phoenixHighestLevel =
            Math.min(
                PHOENIX_TOTAL_LEVELS,
                phoenixCurrentLevel + 1
            );

        saveData();

    }


    if (phoenixFlyBanner) {

        phoenixFlyBanner.textContent =
            getPhoenixClearMessage(phoenixCurrentLevel);

        phoenixFlyBanner.classList.add("show");

    }


    setTimeout(
        () => {

            if (phoenixFlyBanner) {

                phoenixFlyBanner.textContent =
                    "🕊️ It's time to fly!";

                phoenixFlyBanner.classList.remove("show");

            }

            if (phoenixCurrentLevel < PHOENIX_TOTAL_LEVELS) {

                /* "continueFlight = true" - if the phoenix is
                   already airborne, keep its current altitude
                   instead of resetting it back to a mid-air hover
                   for the next level. */
                startPhoenixLevel(phoenixCurrentLevel + 1, true);

            }

            else {

                exitPhoenixGame();

            }

        },
        1600
    );

}


if (phoenixInput) {

    phoenixInput.addEventListener(
        "input",
        () => {

            if (phoenixGameOver) {

                phoenixInput.value = "";

                return;

            }

            if (!phoenixStartTime) {

                phoenixStartTime = Date.now();

            }

            const levelData =
                PHOENIX_LEVELS[phoenixCurrentLevel - 1];

            const newTyped =
                phoenixInput.value.slice(0, levelData.text.length);

            /* Feed the rolling speed tracker only the characters
               that were actually just added (ignores backspaces,
               so deleting text doesn't fake a speed boost). */
            const charsAdded =
                newTyped.length - phoenixTyped.length;

            registerPhoenixKeystroke(charsAdded);

            phoenixTyped =
                newTyped;

            renderPhoenixTargetText();

            if (phoenixTyped.length >= levelData.text.length) {

                completePhoenixLevel();

            }

        }
    );

}

if (phoenixBackButton) {

    phoenixBackButton.addEventListener(
        "click",
        exitPhoenixGame
    );

}

if (phoenixRetryButton) {

    phoenixRetryButton.addEventListener(
        "click",
        () => startPhoenixLevel(phoenixCurrentLevel)
    );

}

/* "Go Back" on the fail overlay - takes the player straight back
   to the level select grid instead of retrying the level that
   just killed the phoenix. Only this attempt's progress is
   discarded; startPhoenixLevel() always resets phoenixAltitude,
   phoenixTyped, etc. from scratch, so nothing needs clearing
   here beyond hiding the overlay itself (exitPhoenixGame does
   that already). */
if (phoenixFailBackButton) {

    phoenixFailBackButton.addEventListener(
        "click",
        exitPhoenixGame
    );

}


/* ========================================= */
/* INITIAL LOAD */
/* ========================================= */

loadDailyData();

updateAchievementList();

updatePlayerSummary();

loadSentence();

renderWpmChart();

updateLiveSummary();


setTimeout(
    () => {

        input.focus();

    },
    100
);
/* =========================================
   WELCOME SCREEN - 2 SECONDS
========================================= */

window.addEventListener("load", function () {

    const welcomeScreen = document.getElementById("welcomeScreen");
    const introScreen = document.getElementById("introScreen");

    if (welcomeScreen && introScreen) {

        // Hide intro while welcome screen is showing
        introScreen.style.display = "none";

        setTimeout(function () {

            // Slowly fade the welcome screen
            welcomeScreen.classList.add("fade-out");

            // After fade-out, show the existing intro page
            setTimeout(function () {
                welcomeScreen.style.display = "none";
                introScreen.style.display = "flex";
            }, 1200);

        }, 3000);
    }

});