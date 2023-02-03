//Constructor
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabıKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};

let sorular = [
  new Soru(
    "JavaScript'i kim icat etmiştir?",
    {
      A: "Brendan Eich",
      B: "Thomas Java",
      C: "James Gosling",
      D: "Linus Helsinki",
    },
    "A"
  ),
  new Soru(
    "Javascript'in alternatif adı nedir ?",
    {
      A: "LimeScript",
      B: "JXXScript",
      C: "ECMScript",
      D: "ECMAScript",
    },
    "D"
  ),
  new Soru(
    "Java ve JavaScript neden benzer ada sahiptir ?",
    {
      A: "Javascript, Java'nın soyulmuş (stripped down) bir sürümüdür.",
      B: "JavaScript sözdizimi (syntax) benzer bir şekilde Java sözdizimine dayanmaktadır.",
      C: "İkisi de Nesneye Yönelik Programlamayı destekler.",
      D: "Hiçbiri",
    },
    "B"
  ),
  new Soru(
    "Bir isim ve bir değere sahip olan sırasız özellik koleksiyonuna ne denir ?",
    {
      A: "String",
      B: "Serileştirilmiş Nesne (Serialized Object)",
      C: "Nesne (Object)",
      D: "Hiçbiri",
    },
    "C"
  ),
  new Soru(
    "JavaScript, _____ laboratuvarlarında icat edilmiştir.",
    {
      A: "Java",
      B: "Google",
      C: "Bell",
      D: "Netscape",
    },
    "D"
  ),
  new Soru(
    "Aşağıdakilerden hangisi sunucu tarafı (server-side) Javascript nesnesidir ?",
    {
      A: "Function",
      B: "File",
      C: "FileUpload",
      D: "Date",
    },
    "B"
  ),
  new Soru(
    "JavaScript'deki yorum satırları, _______ tarafından yok sayılır.",
    {
      A: "bilgisayar",
      B: "işletim sistemi",
      C: "derleyici",
      D: "tarayıcı",
    },
    "D"
  ),
  new Soru(
    "Öğelerin görünmez olabilmesi için hangi özelliğin (attribute) kullanılması gerekir ?",
    {
      A: "visibilty",
      B: "visible",
      C: "invisibility",
      D: "invisible",
    },
    "A"
  ),
  new Soru(
    "JavaScript, hangi yorum tiplerini destekler.",
    {
      A: "Çok satırlı yorumları",
      B: "Tek satırlı yorumları",
      C: "Hiçbiri",
      D: "Hepsi",
    },
    "D"
  ),
];
