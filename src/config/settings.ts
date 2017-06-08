export class Settings {
    public static ALPHABET_ARRAY = [
        "a",    "i",    "u",    "e",    "o", 
        "ka",   "ki",   "ku",   "ke",   "ko", 
        "sa",   "shi",  "su",   "se",   "so",
        "ta",   "chi",  "tsu",  "te",   "to",
        "na",   "ni",   "nu",   "ne",   "no",
        "ha",   "hi",   "fu",   "he",   "ho",
        "ma",   "mi",   "mu",   "me",   "mo",
        "ya",           "yu",           "yo",
        "ra",   "ri",   "ru",   "re",   "ro",
        "wa",                           "wo",
        "n",
        "ga",   "gi",   "gu",   "ge",   "go",
        "za",   "ji",   "zu",   "ze",   "zo",
        "da",   "ji*",  "zu*",  "de",   "do",
        "ba",   "bi",   "bu",   "be",   "bo",
        "pa",   "pi",   "pu",   "pe",   "po",
        "kya",          "kyu",          "kyo",
        "sha",          "shu",          "sho",
        "cha",          "chu",          "cho",
        "nya",          "nyu",          "nyo",
        "hya",          "hyu",          "hyo",
        "mya",          "myu",          "myo",
        "rya",          "ryu",          "ryo",
        "gya",          "gyu",          "gyo",
        "ja",           "ju",           "jo",
        "bya",          "byu",          "byo",
        "pya",          "pyu",          "pyo"
    ];

    public static ALPHABET_MAP = {
        "all": ["a", "ka", "sa", "ta", "na", "ha", "ma", "ya", "ra", "wa", "ga", "za", "da", "ba", "pa", "kya", "sha", "cha", "nya", "hya", "mya", "rya", "gya", "ja", "bya", "pya"],
        "a": {
            arr: ["a",    "i",    "u",    "e",    "o"]
        },
        "ka": {
            arr: ["ka",   "ki",   "ku",   "ke",   "ko"]
        },
        "sa": {
            arr: ["sa",   "shi",  "su",   "se",   "so"]
        },
        "ta": {
            arr: ["ta",   "chi",  "tsu",  "te",   "to"]
        },
        "na": {
            arr: ["na",   "ni",   "nu",   "ne",   "no"]
        },
        "ha": {
            arr: ["ha",   "hi",   "fu",   "he",   "ho"]
        },
        "ma": {
            arr: ["ma",   "mi",   "mu",   "me",   "mo"]
        },
        "ya": {
            arr: ["ya",           "yu",           "yo"]
        },
        "ra": {
            arr: ["ra",   "ri",   "ru",   "re",   "ro"]
        },
        "wa": {
            arr: ["wa",           "wo",           "n"]
        },
        "ga": {
            arr: ["ga",   "gi",   "gu",   "ge",   "go"]
        },
        "za": {
            arr: ["za",   "ji",   "zu",   "ze",   "zo"]
        },
        "da": {
            arr: ["da",   "ji*",  "zu*",  "de",   "do"]
        },
        "ba": {
            arr: ["ba",   "bi",   "bu",   "be",   "bo"]
        },
        "pa": {
            arr: ["pa",   "pi",   "pu",   "pe",   "po"]
        },
        "kya": {
            arr: ["kya",          "kyu",          "kyo"]
        },
        "sha": {
            arr: ["sha",          "shu",          "sho"]
        },
        "cha": {
            arr: ["cha",          "chu",          "cho"]
        },
        "nya": {
            arr: ["nya",          "nyu",          "nyo"]
        },
        "hya": {
            arr: ["hya",          "hyu",          "hyo"]
        },
        "mya": {
            arr: ["mya",          "myu",          "myo"]
        },
        "rya": {
            arr: ["rya",          "ryu",          "ryo"]
        },
        "gya": {
            arr: ["gya",          "gyu",          "gyo"]
        },
        "ja": {
            arr: ["ja",           "ju",           "jo"]
        },
        "bya": {
            arr: ["bya",          "byu",          "byo"]
        },
        "pya": {
            arr: ["pya",          "pyu",          "pyo"]
        }
    }

    public static HARAGANA_ALPHABET_MAP_DICTIONARY = {
        "a": "あ",
        "i": "い",
        "u": "う",
        "e": "え",
        "o": "お",
        "ka": "か",
        "ki": "き",
        "ku": "く",
        "ke": "け",
        "ko": "こ",
        "sa": "さ",
        "shi": "し",
        "su": "す",
        "se": "せ",
        "so": "そ",
        "ta": "た",
        "chi": "ち",
        "tsu": "つ",
        "te": "て",
        "to": "と",
        "na": "な",
        "ni": "に",
        "nu": "ぬ",
        "ne": "ね",
        "no": "の",
        "ha": "は",
        "hi": "ひ",
        "fu": "ふ",
        "he": "へ",
        "ho": "ほ",
        "ma": "ま",
        "mi": "み",
        "mu": "む",
        "me": "め",
        "mo": "も",
        "ya": "や",
        "yu": "ゆ",
        "yo": "よ",
        "ra": "ら",
        "ri": "り",
        "ru": "る",
        "re": "れ",
        "ro": "ろ",
        "wa": "わ",
        "wo": "を",
        "n": "ん",
        "ga": "が",
        "gi": "ぎ",
        "gu": "ぐ",
        "ge": "げ",
        "go": "ご",
        "za": "ざ",
        "ji": "じ",
        "zu": "ず",
        "ze": "ぜ",
        "zo": "ぞ",
        "da": "だ",
        "ji*": "ぢ",
        "zu*": "づ",
        "de": "で",
        "do": "ど",
        "ba": "ば",
        "bi": "び",
        "bu": "ぶ",
        "be": "べ",
        "bo": "ぼ",
        "pa": "ぱ",
        "pi": "ぴ",
        "pu": "ぷ",
        "pe": "ぺ",
        "po": "ぽ",
        "kya": "きゃ",
        "kyu": "きゅ",
        "kyo": "きょ",
        "sha": "しゃ",
        "shu": "しゅ",
        "sho": "しょ",
        "cha": "ちゃ",
        "chu": "ちゅ",
        "cho": "ちょ",
        "nya": "にゃ",
        "nyu": "にゅ",
        "nyo": "にょ",
        "hya": "ひゃ",
        "hyu": "ひゅ",
        "hyo": "ひょ",
        "mya": "みゃ",
        "myu": "みゅ",
        "myo": "みょ",
        "rya": "りゃ",
        "ryu": "りゅ",
        "ryo": "りょ",
        "gya": "ぎゃ",
        "gyu": "ぎゅ",
        "gyo": "ぎょ",
        "ja": "じゃ",
        "ju": "じゅ",
        "jo": "じょ",
        "bya": "びゃ",
        "byu": "びゅ",
        "byo": "びょ",
        "pya": "ぴゃ",
        "pyu": "ぴゅ",
        "pyo": "ぴょ"
    }

    public static KATAKANA_ALPHABET_MAP_DICTIONARY = {
        "a": "ア",
        "i": "イ",
        "u": "ウ",
        "e": "エ",
        "o": "オ",
        "ka": "カ",
        "ki": "キ",
        "ku": "ク",
        "ke": "ケ",
        "ko": "コ",
        "sa": "サ",
        "shi": "シ",
        "su": "ス",
        "se": "セ",
        "so": "ソ",
        "ta": "タ",
        "chi": "チ",
        "tsu": "ツ",
        "te": "テ",
        "to": "ト",
        "na": "ナ",
        "ni": "ニ",
        "nu": "ヌ",
        "ne": "ネ",
        "no": "ノ",
        "ha": "ハ",
        "hi": "ヒ",
        "fu": "フ",
        "he": "ヘ",
        "ho": "ホ",
        "ma": "マ",
        "mi": "ミ",
        "mu": "ム",
        "me": "メ",
        "mo": "モ",
        "ya": "ヤ",
        "yu": "ユ",
        "yo": "ヨ",
        "ra": "ラ",
        "ri": "リ",
        "ru": "ル",
        "re": "レ",
        "ro": "ロ",
        "wa": "ワ",
        "wo": "ヲ",
        "n": "ン",
        "ga": "ガ",
        "gi": "ギ",
        "gu": "グ",
        "ge": "ゲ",
        "go": "ゴ",
        "za": "ザ",
        "ji": "ジ",
        "zu": "ズ",
        "ze": "ゼ",
        "zo": "ゾ",
        "da": "ダ",
        "ji*": "ヂ",
        "zu*": "ヅ",
        "de": "デ",
        "do": "ド",
        "ba": "バ",
        "bi": "ビ",
        "bu": "ブ",
        "be": "ベ",
        "bo": "ボ",
        "pa": "パ",
        "pi": "ピ",
        "pu": "プ",
        "pe": "ペ",
        "po": "ポ",
        "kya": "キャ",
        "kyu": "キュ",
        "kyo": "キョ",
        "sha": "シャ",
        "shu": "シュ",
        "sho": "ショ",
        "cha": "チャ",
        "chu": "チュ",
        "cho": "チョ",
        "nya": "ニャ",
        "nyu": "ニュ",
        "nyo": "ニョ",
        "hya": "ヒャ",
        "hyu": "ヒュ",
        "hyo": "ヒョ",
        "mya": "ミャ",
        "myu": "ミュ",
        "myo": "ミョ",
        "rya": "リャ",
        "ryu": "リュ",
        "ryo": "リョ",
        "gya": "ギャ",
        "gyu": "ギュ",
        "gyo": "ギョ",
        "ja": "ジャ",
        "ju": "ジュ",
        "jo": "ジョ",
        "bya": "ビャ",
        "byu": "ビュ",
        "byo": "ビョ",
        "pya": "ピャ",
        "pyu": "ピュ",
        "pyo": "ピョ"
    }
}
