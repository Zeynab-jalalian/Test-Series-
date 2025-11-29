/*dexter start*/
const questionsDexter = [
  {
    id: 1,
    question:
      "وقتی در یک جمع هستی و ناگهان همه سکوت می‌کنند، چه کاری انجام می‌دهی؟",
    options: [
      {
        text: "از سکوت استقبال می‌کنم و در افکار خودم غرق می‌شوم.",
        scores: {
          dexter: 4,
          brian: 1,
          harry: 2,
          matthews: 0,
          doakes: 0,
          rita: 0,
          laguerta: 1,
          debra: 0,
          batista: 0,
          masuka: 0,
          quinn: 0,
        },
      },
      {
        text: "سعی می‌کنم با شوخی و شیطنت دوباره فضا را گرم کنم.",
        scores: {
          masuka: 4,
          quinn: 2,
          batista: 2,
          debra: 1,
          dexter: 0,
          brian: 0,
          harry: 0,
          matthews: 0,
          doakes: 0,
          rita: 0,
          laguerta: 0,
        },
      },
      {
        text: "کمی کسل می‌شوم و یک بحثی را شروع می‌کنم.",
        scores: {
          debra: 4,
          batista: 3,
          quinn: 1,
          masuka: 0,
          dexter: 0,
          brian: 0,
          harry: 0,
          matthews: 0,
          doakes: 0,
          rita: 0,
          laguerta: 0,
        },
      },
      {
        text: "فقط بقیه را تماشا می‌کنم و به شکل مختصر واکنش نشان می‌دهم.",
        scores: {
          brian: 4,
          harry: 2,
          doakes: 2,
          matthews: 1,
          rita: 1,
          dexter: 0,
          laguerta: 0,
          debra: 0,
          batista: 0,
          masuka: 0,
          quinn: 0,
        },
      },
    ],
  },

  {
    id: 2,
    question: "وقتی در یک موقعیت بحرانی قرار می‌گیری، چه واکنشی نشان می‌دهی؟",
    options: [
      {
        text: "تحت تأثیر قرار می‌گیرم و استرسی می‌شوم.",
        scores: {
          debra: 4,
          quinn: 2,
          batista: 1,
          rita: 1,
          dexter: 0,
          brian: 0,
          harry: 0,
          matthews: 0,
          doakes: 0,
          laguerta: 0,
          masuka: 0,
        },
      },
      {
        text: "آرامش خودم را حفظ می‌کنم و واکنش شدیدی نشان نمی‌دهم.",
        scores: {
          dexter: 4,
          harry: 3,
          laguerta: 3,
          brian: 2,
          matthews: 0,
          doakes: 0,
          rita: 0,
          debra: 0,
          batista: 0,
          masuka: 0,
          quinn: 0,
        },
      },
      {
        text: "کمی آشفته می‌شوم ولی سعی می‌کنم خودم را کنترل کنم.",
        scores: {
          batista: 4,
          masuka: 2,
          debra: 1,
          quinn: 0,
          dexter: 0,
          brian: 0,
          harry: 0,
          matthews: 0,
          doakes: 0,
          rita: 0,
          laguerta: 0,
        },
      },
      {
        text: "به آرامی به وضعیت نگاه می‌کنم و قدم به قدم تصمیم می‌گیرم.",
        scores: {
          matthews: 4,
          brian: 4,
          masuka: 3,
          harry: 2,
          dexter: 1,
          doakes: 0,
          rita: 0,
          laguerta: 1,
          debra: 0,
          batista: 0,
          quinn: 0,
        },
      },
    ],
  },

  {
    id: 3,
    question: "وقتی با مشکلات شخصی‌ات روبه‌رو می‌شوی، معمولاً چه واکنشی داری؟",
    options: [
      {
        text: "دوست دارم راجع به آن با افرادی که به آن‌ها اعتماد دارم صحبت کنم.",
        scores: {
          debra: 4,
          batista: 4,
          rita: 2,
          masuka: 1,
          dexter: 0,
          brian: 0,
          harry: 0,
          matthews: 0,
          doakes: 0,
          laguerta: 0,
          quinn: 0,
        },
      },
      {
        text: "دلم نمی‌خواهد کسی از آن باخبر شود و ترجیح می‌دهم خودم آن را حل کنم.",
        scores: {
          dexter: 4,
          brian: 3,
          doakes: 4,
          laguerta: 2,
          matthews: 0,
          debra: 0,
          batista: 0,
          masuka: 0,
          quinn: 0,
          rita: 0,
          harry: 0,
        },
      },
      {
        text: "فقط در مواقع بحرانی و دشوار، از دیگران کمک می‌خواهم.",
        scores: {
          harry: 4,
          matthews: 4,
          quinn: 3,
          doakes: 2,
          laguerta: 1,
          debra: 0,
          batista: 0,
          masuka: 0,
          dexter: 0,
          rita: 0,
          brian: 0,
        },
      },
      {
        text: "به سرعت با دیگران صحبت می‌کنم و نظر یا راهنمایی آن‌ها را می‌پرسم.",
        scores: {
          masuka: 4,
          batista: 3,
          rita: 4,
          debra: 2,
          laguerta: 0,
          dexter: 0,
          brian: 0,
          harry: 0,
          matthews: 0,
          doakes: 0,
          quinn: 0,
        },
      },
    ],
  },

  {
    id: 4,
    question: "وقتی تصمیمی می‌گیری، معمولاً چه رویکردی داری؟",
    options: [
      {
        text: "به تأثیر تصمیمم روی احساسات دیگران فکر می‌کنم.",
        scores: {
          debra: 4,
          rita: 3,
          quinn: 2,
          batista: 1,
          dexter: 0,
          brian: 0,
          harry: 0,
          matthews: 0,
          doakes: 0,
          laguerta: 0,
          masuka: 0,
        },
      },
      {
        text: "منافع شخصی خودم را در اولویت قرار می‌دهم.",
        scores: {
          brian: 4,
          matthews: 3,
          laguerta: 3,
          dexter: 0,
          debra: 0,
          batista: 0,
          masuka: 0,
          quinn: 0,
          harry: 0,
          doakes: 0,
          rita: 0,
        },
      },
      {
        text: "علیرغم احساساتم، در نهایت تصمیمم بر پایه منطق است.",
        scores: {
          dexter: 4,
          harry: 3,
          batista: 3,
          masuka: 2,
          debra: 0,
          brian: 0,
          matthews: 0,
          doakes: 0,
          rita: 0,
          laguerta: 0,
          quinn: 0,
        },
      },
      {
        text: "کاملاً احساساتی عمل می‌کنم و گاهی بدون فکر تصمیم می‌گیرم.",
        scores: {
          quinn: 4,
          debra: 2,
          rita: 2,
          batista: 1,
          dexter: 0,
          brian: 0,
          harry: 1,
          matthews: 0,
          doakes: 0,
          laguerta: 0,
          masuka: 0,
        },
      },
    ],
  },

  {
    id: 5,
    question: "وقتی از چیزی ناراحت هستی، معمولاً چطور رفتار می‌کنی؟",
    options: [
      {
        text: "احساسم کاملاً مشخص است و اطرافیان سریع متوجه می‌شوند.",
        scores: {
          rita: 4,
          debra: 4,
          quinn: 2,
          batista: 1,
          masuka: 1,
          doakes: 0,
          dexter: 0,
          brian: 0,
          harry: 0,
          matthews: 0,
          laguerta: 0,
        },
      },
      {
        text: "هیچ چیز بروز نمی‌دهم و ناراحتی‌ام را در خودم نگه می‌دارم.",
        scores: {
          dexter: 4,
          harry: 3,
          matthews: 3,
          laguerta: 4,
          brian: 2,
          debra: 0,
          batista: 0,
          masuka: 0,
          doakes: 0,
          rita: 0,
          quinn: 0,
        },
      },
      {
        text: "رفتارم تغییر می‌کند، اما مستقیماً چیزی نمی‌گویم.",
        scores: {
          masuka: 4,
          quinn: 4,
          batista: 2,
          debra: 0,
          dexter: 0,
          brian: 0,
          harry: 0,
          matthews: 0,
          doakes: 0,
          rita: 0,
          laguerta: 0,
        },
      },
      {
        text: "ناراحتی‌ام را بیان می‌کنم و درباره‌اش توضیح می‌دهم.",
        scores: {
          debra: 4,
          batista: 4,
          rita: 3,
          masuka: 1,
          quinn: 0,
          dexter: 0,
          brian: 0,
          harry: 0,
          matthews: 0,
          doakes: 0,
          laguerta: 0,
        },
      },
    ],
  },

  {
    id: 6,
    question: "از انجام کدام کار بیشتر لذت می‌بری؟",
    options: [
      {
        text: "تماشا کردن افراد و تحلیل رفتارشان",
        scores: {
          dexter: 4,
          harry: 3,
          doakes: 4,
          brian: 2,
          debra: 0,
          batista: 0,
          masuka: 0,
          matthews: 0,
          rita: 0,
          laguerta: 0,
          quinn: 0,
        },
      },
      {
        text: "شوخی کردن و مرکز توجه قرار گرفتن",
        scores: {
          masuka: 4,
          quinn: 3,
          batista: 2,
          debra: 1,
          dexter: 0,
          brian: 0,
          harry: 0,
          matthews: 0,
          doakes: 0,
          rita: 0,
          laguerta: 0,
        },
      },
      {
        text: "صحبت کردن و همراهی کردن با دیگران",
        scores: {
          debra: 4,
          batista: 4,
          rita: 3,
          masuka: 1,
          quinn: 2,
          dexter: 0,
          brian: 0,
          harry: 0,
          matthews: 0,
          doakes: 0,
          laguerta: 0,
        },
      },
      {
        text: "غرق شدن در افکار و فعالیت‌های شخصی خود.",
        scores: {
          dexter: 3,
          harry: 4,
          matthews: 2,
          laguerta: 2,
          batista: 0,
          debra: 0,
          masuka: 0,
          quinn: 0,
          doakes: 0,
          rita: 0,
          brian: 0,
        },
      },
    ],
  },

  {
    id: 7,
    question:
      "وقتی حقیقت چیزی را می‌فهمی، معمولاً این اتفاق از چه راهی رخ می‌دهد؟",
    options: [
      {
        text: "یک حس درونی به من می‌گوید که این حقیقت ماجرا است.",
        scores: {
          dexter: 4,
          harry: 3,
          doakes: 4,
          quinn: 2,
          debra: 0,
          brian: 0,
          batista: 0,
          masuka: 0,
          matthews: 0,
          rita: 0,
          laguerta: 0,
        },
      },
      {
        text: "با فکر کردن و کنار هم گذاشتن اطلاعات به پاسخ می‌رسم.",
        scores: {
          masuka: 4,
          debra: 3,
          batista: 2,
          dexter: 2,
          harry: 1,
          brian: 0,
          matthews: 0,
          doakes: 0,
          rita: 0,
          laguerta: 0,
          quinn: 0,
        },
      },
      {
        text: "گاهی خواب یا یک احساس ناگهانی باعث می‌شود حقیقت را بفهمم.",
        scores: {
          quinn: 4,
          dexter: 2,
          harry: 1,
          doakes: 1,
          debra: 0,
          batista: 0,
          masuka: 0,
          matthews: 0,
          rita: 0,
          laguerta: 0,
          brian: 0,
        },
      },
      {
        text: "با آزمودن و مشاهده مستقیم چیزها به حقیقت می‌رسم.",
        scores: {
          matthews: 4,
          batista: 3,
          debra: 2,
          laguerta: 2,
          dexter: 0,
          harry: 0,
          masuka: 0,
          brian: 0,
          doakes: 0,
          rita: 0,
          quinn: 0,
        },
      },
    ],
  },

  {
    id: 8,
    question: "در مورد راستگویی و دروغ گفتن، کدام یک بیشتر با تو همخوانی دارد؟",
    options: [
      {
        text: "دروغ گفتن برایم سخت است و همیشه سعی می‌کنم صادق باشم.",
        scores: {
          batista: 4,
          debra: 3,
          rita: 3,
          doakes: 2,
          harry: 1,
          dexter: 0,
          brian: 0,
          laguerta: 0,
          masuka: 0,
          matthews: 0,
          quinn: 0,
        },
      },
      {
        text: "به راحتی می‌توانم دروغی قابل باور بگویم.",
        scores: {
          dexter: 4,
          brian: 4,
          laguerta: 4,
          harry: 0,
          debra: 0,
          batista: 0,
          masuka: 0,
          matthews: 0,
          doakes: 0,
          rita: 0,
          quinn: 0,
        },
      },
      {
        text: "صداقت انتخاب من است.",
        scores: {
          debra: 4,
          rita: 3,
          batista: 3,
          harry: 2,
          dexter: 0,
          brian: 0,
          laguerta: 0,
          masuka: 0,
          matthews: 0,
          doakes: 0,
          quinn: 0,
        },
      },
      {
        text: "در بعضی موقعیت‌ها، دروغ بخشی از زندگی من است.",
        scores: {
          laguerta: 4,
          dexter: 3,
          brian: 2,
          quinn: 1,
          debra: 0,
          batista: 0,
          masuka: 0,
          harry: 0,
          matthews: 0,
          doakes: 0,
          rita: 0,
        },
      },
    ],
  },

  {
    id: 9,
    question: "در زندگی روزمره، معمولاً چه رویکردی داری؟",
    options: [
      {
        text: "دوست دارم همه چیز دقیق و منظم باشد و طبق برنامه پیش برود.",
        scores: {
          matthews: 4,
          dexter: 4,
          brian: 3,
          laguerta: 3,
          batista: 0,
          debra: 0,
          harry: 0,
          doakes: 0,
          masuka: 0,
          quinn: 0,
          rita: 0,
        },
      },
      {
        text: "تا حد زیادی به برنامه‌ها پایبندم اما انعطاف هم دارم.",
        scores: {
          debra: 4,
          batista: 3,
          rita: 4,
          masuka: 1,
          dexter: 2,
          brian: 0,
          harry: 0,
          matthews: 0,
          doakes: 0,
          laguerta: 1,
          quinn: 0,
        },
      },
      {
        text: "از چارچوب‌ها و قوانین مشخص متنفرم و ترجیح می‌دهم آزاد عمل کنم.",
        scores: {
          quinn: 4,
          masuka: 2,
          debra: 0,
          batista: 0,
          dexter: 0,
          brian: 0,
          harry: 1,
          matthews: 0,
          doakes: 0,
          rita: 0,
          laguerta: 0,
        },
      },
      {
        text: "منعطف عمل میکنم.",
        scores: {
          debra: 4,
          batista: 4,
          quinn: 2,
          dexter: 1,
          matthews: 0,
          harry: 0,
          doakes: 0,
          rita: 0,
          laguerta: 1,
          masuka: 0,
          brian: 0,
        },
      },
    ],
  },

  {
    id: 10,
    question: "در کارهای گروهی، معمولاً چه نقش‌ای داری؟",
    options: [
      {
        text: "رهبر و هدایتگر تیم هستم.",
        scores: {
          matthews: 4,
          laguerta: 3,
          batista: 3,
          doakes: 2,
          debra: 0,
          dexter: 0,
          brian: 0,
          harry: 0,
          masuka: 0,
          quinn: 0,
          rita: 0,
        },
      },
      {
        text: "حمایت‌کننده و همراهی‌کننده اعضای تیم هستم.",
        scores: {
          debra: 4,
          batista: 4,
          masuka: 3,
          quinn: 2,
          dexter: 0,
          brian: 0,
          harry: 0,
          matthews: 0,
          doakes: 0,
          rita: 0,
          laguerta: 0,
        },
      },
      {
        text: "تمرکز روی کار خودم دارم و دخالت زیادی نمی‌کنم.",
        scores: {
          dexter: 4,
          harry: 3,
          brian: 3,
          rita: 2,
          matthews: 0,
          debra: 0,
          batista: 0,
          masuka: 0,
          doakes: 0,
          laguerta: 0,
          quinn: 0,
        },
      },
      {
        text: "نقش‌های مختلف را امتحان می‌کنم و سازگار با شرایط هستم.",
        scores: {
          quinn: 4,
          debra: 2,
          matthews: 2,
          batista: 1,
          dexter: 1,
          brian: 0,
          harry: 0,
          masuka: 0,
          doakes: 0,
          rita: 0,
          laguerta: 0,
        },
      },
    ],
  },

  {
    id: 11,
    question: "چقدر به ایده‌ها و نظرات جدید علاقه‌مندی؟",
    options: [
      {
        text: "همیشه مشتاق یادگیری و امتحان ایده‌های جدید هستم.",
        scores: {
          batista: 4,
          masuka: 3,
          debra: 3,
          quinn: 1,
          dexter: 1,
          brian: 0,
          harry: 0,
          matthews: 0,
          doakes: 0,
          rita: 0,
          laguerta: 0,
        },
      },
      {
        text: "گاهی ایده‌ها را بررسی می‌کنم اما معمولاً به تجربه گذشته اعتماد دارم.",
        scores: {
          matthews: 4,
          debra: 4,
          laguerta: 3,
          dexter: 2,
          batista: 0,
          brian: 0,
          harry: 0,
          masuka: 0,
          doakes: 0,
          rita: 0,
          quinn: 0,
        },
      },
      {
        text: "به ایده‌های جدید علاقه کمی دارم و ترجیح می‌دهم همان روش‌های آشنا را دنبال کنم.",
        scores: {
          laguerta: 4,
          dexter: 3,
          debra: 2,
          batista: 0,
          quinn: 2,
          masuka: 0,
          brian: 0,
          harry: 0,
          matthews: 0,
          doakes: 0,
          rita: 0,
        },
      },
      {
        text: "به سختی تغییر می‌کنم و کمتر نظرات جدید را می‌پذیرم.",
        scores: {
          doakes: 4,
          quinn: 3,
          dexter: 1,
          matthews: 0,
          debra: 0,
          batista: 0,
          laguerta: 0,
          brian: 0,
          harry: 0,
          masuka: 0,
          rita: 0,
        },
      },
    ],
  },

  {
    id: 12,
    question: "وقتی وارد یک محیط جدید می‌شوی، معمولاً چه می‌کنی؟",
    options: [
      {
        text: "به تمام جزئیات محیط توجه می‌کنم و چیزهای کوچک را به یاد می‌سپارم.",
        scores: {
          dexter: 4,
          doakes: 4,
          laguerta: 3,
          harry: 2,
          batista: 0,
          debra: 0,
          masuka: 0,
          quinn: 0,
          matthews: 0,
          rita: 0,
          brian: 0,
        },
      },
      {
        text: "محیط را به طور کلی می‌بینم و فقط نکات مهم را به خاطر می‌سپارم.",
        scores: {
          laguerta: 4,
          debra: 4,
          batista: 2,
          matthews: 1,
          dexter: 1,
          masuka: 0,
          quinn: 0,
          harry: 0,
          doakes: 0,
          rita: 0,
          brian: 0,
        },
      },
      {
        text: "کمتر به جزئیات توجه می‌کنم و بیشتر روی کار یا هدف خودم تمرکز دارم.",
        scores: {
          brian: 4,
          dexter: 1,
          batista: 1,
          matthews: 2,
          doakes: 2,
          debra: 0,
          masuka: 0,
          quinn: 0,
          harry: 0,
          rita: 0,
          laguerta: 0,
        },
      },
      {
        text: "معمولاً اصلاً متوجه جزئیات نمی‌شوم و فقط به محیط به شکل کلی نگاه می‌کنم.",
        scores: {
          quinn: 4,
          batista: 4,
          matthews: 3,
          rita: 4,
          dexter: 0,
          debra: 0,
          masuka: 0,
          brian: 0,
          harry: 0,
          doakes: 0,
          laguerta: 0,
        },
      },
    ],
  },

  {
    id: 13,
    question:
      "وقتی با قوانینی مواجه می‌شوی که به نظرت محدودکننده‌اند، چه واکنشی داری؟",
    options: [
      {
        text: "قوانین را رعایت می‌کنم اما همیشه دنبال راهی هستم که کمی از آن فراتر بروم.",
        scores: {
          harry: 4,
          dexter: 3,
          laguerta: 3,
          matthews: 0,
          debra: 0,
          batista: 0,
          masuka: 0,
          doakes: 0,
          quinn: 0,
          rita: 0,
          brian: 0,
        },
      },
      {
        text: "سخت به قوانین پایبندم و ترجیح می‌دهم ریسک نکنم.",
        scores: {
          doakes: 4,
          rita: 4,
          batista: 4,
          debra: 2,
          matthews: 1,
          dexter: 0,
          brian: 0,
          laguerta: 0,
          masuka: 0,
          quinn: 0,
          harry: 0,
        },
      },
      {
        text: "گاهی قوانین را نادیده می‌گیرم، به شرطی که خطری نداشته باشد.",
        scores: {
          matthews: 4,
          quinn: 4,
          dexter: 2,
          brian: 1,
          debra: 0,
          batista: 0,
          masuka: 0,
          doakes: 0,
          rita: 0,
          laguerta: 0,
          harry: 0,
        },
      },
      {
        text: "قوانین را کلاً نادیده می‌گیرم و بر اساس خواسته‌هایم عمل می‌کنم.",
        scores: {
          dexter: 4,
          brian: 4,
          quinn: 3,
          debra: 2,
          laguerta: 0,
          batista: 0,
          masuka: 0,
          harry: 0,
          matthews: 0,
          doakes: 0,
          rita: 0,
        },
      },
    ],
  },

  {
    id: 14,
    question:
      "وقتی با موقعیتی روبه‌رو می‌شوی که نیاز به شجاعت دارد، معمولاً چه می‌کنی؟",
    options: [
      {
        text: "بی‌تردید وارد می‌شوم و وظیفه‌ام را انجام می‌دهم.",
        scores: {
          debra: 4,
          batista: 4,
          doakes: 3,
          matthews: 2,
          dexter: 0,
          brian: 0,
          harry: 0,
          masuka: 0,
          rita: 0,
          laguerta: 0,
          quinn: 0,
        },
      },
      {
        text: "ابتدا وضعیت را بررسی می‌کنم و بعد اقدام می‌کنم.",
        scores: {
          brian: 4,
          harry: 3,
          matthews: 2,
          laguerta: 1,
          debra: 0,
          dexter: 0,
          batista: 0,
          masuka: 0,
          rita: 0,
          doakes: 0,
          quinn: 0,
        },
      },
      {
        text: "معمولاً محتاط عمل می‌کنم و فقط وقتی مطمئن باشم وارد می‌شوم.",
        scores: {
          rita: 4,
          masuka: 4,
          laguerta: 3,
          debra: 1,
          dexter: 0,
          batista: 0,
          brian: 0,
          harry: 0,
          matthews: 0,
          doakes: 0,
          quinn: 0,
        },
      },
      {
        text: "اغلب از موقعیت فاصله می‌گیرم یا به دیگران واگذار می‌کنم.",
        scores: {
          matthews: 4,
          laguerta: 4,
          quinn: 2,
          debra: 0,
          dexter: 0,
          batista: 0,
          brian: 0,
          harry: 0,
          masuka: 0,
          doakes: 0,
          rita: 0,
        },
      },
    ],
  },

  {
    id: 15,
    question: "چقدر راحت در جمع ایده‌ها و نظرات خودت را بیان می‌کنی؟",
    options: [
      {
        text: "بدون هیچ تردیدی همه ایده‌هایم را بیان می‌کنم.",
        scores: {
          batista: 4,
          masuka: 4,
          debra: 3,
          rita: 1,
          quinn: 1,
          dexter: 0,
          brian: 0,
          harry: 0,
          matthews: 0,
          doakes: 0,
          laguerta: 0,
        },
      },
      {
        text: "معمولاً فقط وقتی احساس راحتی کنم نظرم را می‌گویم.",
        scores: {
          rita: 4,
          debra: 4,
          batista: 2,
          masuka: 0,
          quinn: 0,
          dexter: 0,
          brian: 0,
          harry: 0,
          matthews: 0,
          doakes: 0,
          laguerta: 0,
        },
      },
      {
        text: "کمتر صحبت می‌کنم و ترجیح می‌دهم گوش دهم.",
        scores: {
          doakes: 4,
          matthews: 4,
          brian: 4,
          harry: 3,
          debra: 0,
          batista: 0,
          masuka: 0,
          quinn: 0,
          dexter: 0,
          laguerta: 0,
          rita: 0,
        },
      },
      {
        text: "تقریباً هیچ وقت در جمع نظرم را نمی‌گویم و محتاط هستم.",
        scores: {
          dexter: 4,
          quinn: 3,
          debra: 0,
          batista: 0,
          matthews: 0,
          rita: 0,
          laguerta: 0,
          harry: 0,
          doakes: 0,
          masuka: 0,
          brian: 0,
        },
      },
    ],
  },
];
const resultsDexter = [
  {
    key: "dexter",
    name: "Dexter Morgan",
    image: "images/dexter.jpg",
    description: `
    <span>شما شبیه دکستر مورگان هستید!</span>
    شخصیتی مرموز و درونی که با دقت و تحلیل بالا همه چیز را می‌سنجد. شما خونسرد، حساب‌شده و بسیار باهوش هستید و توانایی تحلیل شرایط پیچیده را دارید. فردی شهودی هستید و غالباً از حس درونی‌تان برای تصمیم‌گیری استفاده می‌کنید. در عین حال سرکشید، اما سرکشی‌تان مرزهای شخصی مشخص دارد و همیشه کنترل خود را حفظ می‌کنید. بخشی از شخصیت خود را پنهان می‌کنید و احساسات‌تان را عموماً در درون نگه می‌دارید، بنابراین دیگران همیشه شما را کامل نمی‌بینند. ضعف شما گاهی در نشان ندادن احساسات و محدودیت در درک دیگران است، اما شجاعت، تمرکز و استقلال شما در موقعیت‌های دشوار همیشه برجسته باقی می‌ماند و شما فردی پیچیده و جذاب هستید که رمز و راز در رفتارهایش موج می‌زند.
`,
  },
  {
    key: "debra",
    name: "Debra Morgan",
    image: "images/debra.jpg",
    description: `
    <span>
    شما شبیه دبرا مورگان هستید!
    </span>
    شخصیتی پرانرژی، برون‌گرا و پرشور که احساسات خود را به روشنی بیان می‌کند. شما بسیار شجاع و فداکار هستید و همیشه برای کسانی که دوستشان دارید، آماده کمک و حمایت هستید. فردی شهودی و تحلیلگر (Overthinker) هستید و غالباً با دقت و تعمق تصمیم می‌گیرید، اما گاهی احساساتتان تصمیم‌گیری‌ها را تحت تأثیر قرار می‌دهد. در کنار شجاعت و مهارت حل مسائل، گاهی حساسیت و هیجانات‌تان می‌تواند شما را آسیب‌پذیر کند، اما همین ترکیب از شجاعت، صداقت و وفاداری، شما را شخصیتی دوست‌داشتنی و الهام‌بخش می‌کند.
    `,
  },
  {
    key: "masuka",
    name: "Vince Masuka",
    image: "images/masuka.jpg",
    description: `
    <span>شما شبیه وینس ماسوکا هستید!</span>
    شخصیتی شوخ‌طبع و بی‌تکلف که معمولاً آرام و منعطف است. شما باهوش و گاهی ریزبین هستید و می‌توانید جزئیات را خوب تشخیص دهید، اما عمدتاً ساده و بی‌دغدغه رفتار می‌کنید. فضا را با انرژی مثبت خود گرم می‌کنید و گاهی با سربه‌سر گذاشتن دیگران، لبخند به جمع می‌آورید. اگرچه کمی حساس هستید و وقتی حس کنید پذیرفته نمی‌شوید یا ناراحت می‌شوید، رفتار شما تغییر می‌کند و احساساتتان را پنهان می‌کنید، اما در اغلب اوقات، همین ترکیب شوخ‌طبعی، استقلال و دقت، شما را شخصیتی جذاب و قابل اعتماد می‌کند.
    `,
  },
  {
    key: "quinn",
    name: "Joseph Quinn",
    image: "images/quinn.jpg",
    description: `
    <span>شما شبیه جویی کوئین هستید!</span>
    شخصیتی احساسی و گاهی هیجانی که گاهی بدون فکر تصمیم می‌گیرد، اما همزمان شجاع و کاربلد است. شما نامنظم و آزاد هستید، ولی شهود و حس ششم قوی‌تان به شما کمک می‌کند موقعیت‌ها را خوب درک کنید. مهربانی و فداکاری شما باعث می‌شود دیگران به شما اعتماد کنند، و با وجود این که گاهی احساسات خود را سرکوب می‌کنید، انرژی مثبت و شجاعتتان همیشه قابل توجه است.
    `,
  },
  {
    key: "batista",
    name: "Angel Batista",
    image: "images/batista.jpg",
    description: `
    <span>شما شبیه آنجل باتیستا هستید!</span>
    فردی خونسرد و منطقی که تصمیماتش همیشه با احتیاط و سنجیدگی گرفته می‌شود. احساساتتان حمایتگرانه و مهربان است و همواره صداقت و عدالت برای شما اهمیت دارد. شما ترجیح می‌دهید همه چیز روی اصول و برنامه‌ریزی‌شده پیش برود، اما در عین حال منعطف و عاقل هستید. دیگران به آرامش و تعادل شما اعتماد می‌کنند و حضور شما در جمع احساس امنیت و اطمینان ایجاد می‌کند.
    `,
  },
  {
    key: "laguerta",
    name: "María LaGuerta",
    image: "images/laguerta.jpg",
    description: `
    <span>شما شبیه ماریا لاگوئرتا هستید!</span>
    فردی باهوش و ریزبین که جاه‌طلبی و تلاش برای موفقیت همیشه در اولویت شماست. احساسات درونی خود را کنترل می‌کنید و منطق برایتان ارجحیت دارد، بنابراین تصمیماتتان سرسختانه و حساب‌شده گرفته می‌شود. شما منظم و برنامه‌ریز هستید و وقتی هدفی را در نظر می‌گیرید، با دقت و پشتکار آن را دنبال می‌کنید. گاهی محتاطانه عمل می‌کنید، اما همیشه آماده هستید تا با استراتژی درست، به خواسته‌هایتان برسید.
    `,
  },
  {
    key: "harry",
    name: "Harry Morgan",
    image: "images/harry.jpg",
    description: `
    <span>شما شبیه هری مورگان هستید!</span>
    فردی درون‌گرا، آرام و خونسرد که معمولاً با دقت و منطق عمل می‌کنید. بشدت شنونده و همراه هستید و تصمیماتتان با فکر و سنجیدگی گرفته می‌شوند. صادق، فداکار و دارای وجدان قوی هستید، اما گاهی شرایط باعث می‌شود که انعطاف لازم را نشان دهید. شما متفاوت فکر می‌کنید و دیدگاه‌های نوآورانه دارید، و حضور شما آرامش و اعتماد را در محیط اطرافتان ایجاد می‌کند.
    `,
  },
  {
    key: "matthews",
    name: "Thomas Matthews",
    image: "images/matthews.jpg",
    description: `
    <span>شما شبیه توماس متیوز هستید!</span>
    فردی خونسرد و آرام که تصمیماتش معمولاً با منطق و سنجیدگی گرفته می‌شوند. گاهی منفعت‌طلب و خودخواه هستید، اما در عین حال انعطاف‌پذیر و سازگار با شرایط هستید. جدی و محکم عمل می‌کنید و اغلب صادق هستید، اما گاهی کارهای غیرمنتظره انجام می‌دهید که دیگران را شگفت‌زده می‌کند. حضور شما حس امنیت و اعتماد ایجاد می‌کند و ترکیب منطق و عملگرایی‌تان باعث می‌شود در موقعیت‌های پیچیده موفق عمل کنید.
    `,
  },
  {
    key: "rita",
    name: "Rita Bennet",
    image: "images/rita.jpg",
    description: `
    <span>شما شبیه ریتا بنت هستید!</span>
    فردی احساسی و مهربان که همواره فداکار و همراه دیگران است. درک بالایی از اطرافیان دارید و همواره مرزهای مشخص خود را رعایت می‌کنید. منظم و خوش‌رفتار هستید و حضور شما در جمع حس آرامش ایجاد می‌کند. درونگرا هستید و به دنیای درونی خود اهمیت می‌دهید، اما گاهی تحت تأثیر هیجانات و استرس‌ها واکنش نشان می‌دهید که این بخش انسانی شما را نمایان می‌کند. حضور شما ترکیبی از مهربانی، حساسیت و قدرت درونی است.
    `,
  },
  {
    key: "brian",
    name: "Brian Moser",
    image: "images/brian.jpg",
    description: `
    <span>شما شبیه برایان موزر هستید!</span>
    فردی تحلیلگر و صبور که همیشه با دقت و برنامه‌ریزی اهداف خود را دنبال می‌کنید. خونسرد و آرام هستید و مدیریت بالایی روی احساسات خود دارید، اما بخشی از دنیای درونی‌تان را مخفی نگه می‌دارید. گاهی با کاریزما و شوخ‌طبعی، دیگران را تحت تأثیر قرار می‌دهید، اما زمانی که هدفی در پیش دارید، می‌توانید بی‌رحمانه و مصمم عمل کنید. حضور شما ترکیبی از هوش، محاسبه دقیق و جذابیت مرموز است که همگان را کنجکاو می‌کند.
    `,
  },
  {
    key: "doakes",
    name: "James Doakes",
    image: "images/doakes.jpg",
    description: `
    <span>شما شبیه جیمز دوکس هستید!</span>
    فردی باهوش، ریزبین و دارای شهود قوی که همیشه جزئیات را دقیق می‌بیند و تحلیل می‌کند. در عین حال، درونگرا هستید و گاهی استرسی و هیجانی رفتار می‌کنید، اما معمولاً جدی و محکم هستید و ترجیح می‌دهید منطقی با مسائل برخورد کنید. با اینکه قانون‌مدار هستید و به نظم اهمیت می‌دهید، گاهی احساسات پنهان و هیجانات درونی، تصمیم‌گیری را پیچیده می‌کند. این ترکیب شما را فردی جذاب، دقیق و پررمز و راز می‌سازد.
    `,
  },
];
const dexterAudio = new Audio("Musics/dexter.mp3");
dexterAudio.loop = true;
dexterAudio.volume = 0.2;

const scoreTotalsDexter = {
  dexter: 0,
  brian: 0,
  harry: 0,
  matthews: 0,
  doakes: 0,
  rita: 0,
  laguerta: 0,
  debra: 0,
  batista: 0,
  masuka: 0,
  quinn: 0,
};
/*dexter end*/

/*the walking dead start*/
const questionsTWD = [
  {
    question:
      "زامبی‌ها حمله کردند و ناگهان یک زامبی به تو نزدیک می‌شود، از کدام وسیله استفاده می‌کنی؟",
    options: [
      {
        text: "تفنگ",
        scores: {
          Rick: 4,
          Daryl: 4,
          Carol: 3,
          Negan: 2,
          Maggie: 2,
          Michonne: 2,
          Shane: 3,
          Glenn: 2,
        },
      },
      {
        text: "تیر و کمان",
        scores: {
          Rick: 2,
          Daryl: 4,
          Carol: 2,
          Negan: 1,
          Maggie: 2,
          Michonne: 2,
          Shane: 1,
          Glenn: 2,
        },
      },
      {
        text: "تبر",
        scores: {
          Rick: 1,
          Daryl: 2,
          Carol: 1,
          Negan: 3,
          Maggie: 1,
          Michonne: 2,
          Shane: 2,
          Glenn: 1,
        },
      },
      {
        text: "شمشیر",
        scores: {
          Rick: 1,
          Daryl: 1,
          Carol: 1,
          Negan: 1,
          Maggie: 1,
          Michonne: 4,
          Shane: 1,
          Glenn: 1,
        },
      },
    ],
  },
  {
    question: "یکی از اعضای گروه در ساختمانی گیر کرده، چه کاری انجام می‌دهی؟",
    options: [
      {
        text: "یک نقشه می‌ریزم تا با حیله و فکر خودم وارد شوم و نجات دهم",
        scores: {
          Rick: 2,
          Daryl: 2,
          Carol: 4,
          Negan: 1,
          Maggie: 2,
          Michonne: 3,
          Shane: 1,
          Glenn: 3,
        },
      },
      {
        text: "با تیمی که جمع می‌کنم وارد ساختمان می‌شوم و حمله می‌کنم",
        scores: {
          Rick: 4,
          Daryl: 3,
          Carol: 1,
          Negan: 3,
          Maggie: 1,
          Michonne: 2,
          Shane: 3,
          Glenn: 2,
        },
      },
      {
        text: "بدون هیچ مکثی وارد ساختمان می‌شوم و هرکاری می‌کنم تا او را نجات دهم حتی به قیمت مرگ خودم",
        scores: {
          Rick: 1,
          Daryl: 2,
          Carol: 2,
          Negan: 2,
          Maggie: 2,
          Michonne: 2,
          Shane: 2,
          Glenn: 4,
        },
      },
      {
        text: "شرایط بسیار ریسکی است پس وارد عمل نمی‌شوم و تسلیم از دست دادن او می‌شوم چون می‌دانم کاری از دستم بر نمی‌آید",
        scores: {
          Rick: 0,
          Daryl: 1,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 1,
          Shane: 3,
          Glenn: 1,
        },
      },
    ],
  },
  {
    question: "منبع غذایی محدود است، چه تصمیمی می‌گیری؟",
    options: [
      {
        text: "شکار و جمع‌آوری منابع اطراف",
        scores: {
          Rick: 3,
          Daryl: 4,
          Carol: 2,
          Negan: 2,
          Maggie: 2,
          Michonne: 3,
          Shane: 3,
          Glenn: 3,
        },
      },
      {
        text: "دزدی از دیگر گروه‌ها",
        scores: {
          Rick: 1,
          Daryl: 2,
          Carol: 1,
          Negan: 4,
          Maggie: 1,
          Michonne: 2,
          Shane: 4,
          Glenn: 1,
        },
      },
      {
        text: "از گروه خارج می‌شوم و سعی می‌کنم خودم تکروی کنم و راه خودم را پیدا کنم",
        scores: {
          Rick: 1,
          Daryl: 2,
          Carol: 1,
          Negan: 3,
          Maggie: 1,
          Michonne: 1,
          Shane: 3,
          Glenn: 2,
        },
      },
      {
        text: "به همراه گروهم به دنبال منابع غذایی می‌رویم",
        scores: {
          Rick: 4,
          Daryl: 3,
          Carol: 3,
          Negan: 1,
          Maggie: 4,
          Michonne: 3,
          Shane: 2,
          Glenn: 3,
        },
      },
    ],
  },
  {
    question: "درگیری بین اعضای گروه پیش می‌آید، واکنش تو چیست؟",
    options: [
      {
        text: "من هم وارد دعوا می‌شوم و سعی می‌کنم شر یکی‌شان را کم کنم",
        scores: {
          Rick: 2,
          Daryl: 3,
          Carol: 2,
          Negan: 4,
          Maggie: 2,
          Michonne: 2,
          Shane: 4,
          Glenn: 1,
        },
      },
      {
        text: "سعی می‌کنم بین طرفین صلح ایجاد کنم",
        scores: {
          Rick: 2,
          Daryl: 1,
          Carol: 4,
          Negan: 1,
          Maggie: 3,
          Michonne: 2,
          Shane: 1,
          Glenn: 4,
        },
      },
      {
        text: "عصبی می‌شوم و سعی می‌کنم خیلی رک و صریح دعوا را متوقف کنم",
        scores: {
          Rick: 4,
          Daryl: 2,
          Carol: 1,
          Negan: 3,
          Maggie: 1,
          Michonne: 2,
          Shane: 3,
          Glenn: 2,
        },
      },
      {
        text: "تلاش می‌کنم کناره‌گیری کنم و درگیری را نادیده بگیرم",
        scores: {
          Rick: 1,
          Daryl: 1,
          Carol: 3,
          Negan: 1,
          Maggie: 4,
          Michonne: 1,
          Shane: 1,
          Glenn: 2,
        },
      },
    ],
  },
  {
    question: "در یک موقعیت خطرناک، چه رویکردی داری؟",
    options: [
      {
        text: "با احتیاط جلو می‌روم و مراقب اطرافم هستم",
        scores: {
          Rick: 2,
          Daryl: 4,
          Carol: 3,
          Negan: 2,
          Maggie: 2,
          Michonne: 3,
          Shane: 2,
          Glenn: 3,
        },
      },
      {
        text: "بی‌درنگ وارد عمل می‌شوم",
        scores: {
          Rick: 4,
          Daryl: 2,
          Carol: 2,
          Negan: 4,
          Maggie: 1,
          Michonne: 2,
          Shane: 4,
          Glenn: 1,
        },
      },
      {
        text: "با دیگران مشورت می‌کنم و طبق نظر جمع عمل می‌کنم",
        scores: {
          Rick: 4,
          Daryl: 2,
          Carol: 4,
          Negan: 2,
          Maggie: 3,
          Michonne: 3,
          Shane: 2,
          Glenn: 3,
        },
      },
      {
        text: "از موقعیت فاصله می‌گیرم و منتظر می‌مانم",
        scores: {
          Rick: 1,
          Daryl: 1,
          Carol: 1,
          Negan: 1,
          Maggie: 3,
          Michonne: 1,
          Shane: 1,
          Glenn: 4,
        },
      },
    ],
  },
  {
    question:
      "اگر غریبه‌ای زخمی باشد و به کمک احتیاج داشته باشد، واکنش تو چیست؟",
    options: [
      {
        text: "کمک نمی‌کنم چون نمی‌توانم به راحتی اعتماد کنم و نمی‌خواهم گروه را به خطر بیندازم؛ حتی شاید برای کم‌شدن خطر، او را از منطقه دور کنم.",
        scores: {
          Rick: 1,
          Daryl: 2,
          Carol: 0,
          Negan: 4,
          Maggie: 0,
          Michonne: 1,
          Shane: 4,
          Glenn: 0,
        },
      },
      {
        text: "سعی می‌کنم شخصاً کمی کمک کنم، اما کاملاً با احتیاط و بدون نزدیک‌کردن او به گروه.",
        scores: {
          Rick: 4,
          Daryl: 3,
          Carol: 3,
          Negan: 2,
          Maggie: 2,
          Michonne: 4,
          Shane: 2,
          Glenn: 2,
        },
      },
      {
        text: "فوراً کمک می‌کنم و از تیم می‌خواهم او را به اردوگاه راه دهند؛ وجدان برای من مهم‌ترین چیز است.",
        scores: {
          Rick: 2,
          Daryl: 1,
          Carol: 4,
          Negan: 0,
          Maggie: 4,
          Michonne: 2,
          Shane: 0,
          Glenn: 4,
        },
      },
      {
        text: "خیلی سریع از او دور می‌شوم و اصلاً وارد هیچ دردسری نمی‌شوم.",
        scores: {
          Rick: 0,
          Daryl: 1,
          Carol: 0,
          Negan: 3,
          Maggie: 0,
          Michonne: 1,
          Shane: 3,
          Glenn: 0,
        },
      },
    ],
  },
  {
    question: "در مواجهه با یک گروه دشمن قوی، چه می‌کنی؟",
    options: [
      {
        text: "در کنار تیمم، وفادارانه و تا آخر می‌جنگم.",
        scores: {
          Rick: 4,
          Daryl: 4,
          Carol: 3,
          Negan: 3,
          Maggie: 3,
          Michonne: 3,
          Shane: 4,
          Glenn: 3,
        },
      },
      {
        text: "به تیم پیشنهاد عقب‌نشینی می‌دهم تا آسیبی نبینیم و موقتاً با شرایط کنار بیاییم.",
        scores: {
          Rick: 2,
          Daryl: 2,
          Carol: 2,
          Negan: 1,
          Maggie: 2,
          Michonne: 2,
          Shane: 1,
          Glenn: 2,
        },
      },
      {
        text: "یک نقشه سریع و هوشمندانه می‌کشم تا نقطه‌ضعفشان را پیدا کنیم و بدون ریسک اضافه، ضربه اول را ما بزنیم.",
        scores: {
          Rick: 4,
          Daryl: 3,
          Carol: 4,
          Negan: 4,
          Maggie: 3,
          Michonne: 4,
          Shane: 3,
          Glenn: 3,
        },
      },
      {
        text: "قبل از اینکه آنها حمله کنند، تک‌رو و سریع عمل می‌کنم؛ یک اقدام غافلگیرکننده یا جسورانه انجام می‌دهم.",
        scores: {
          Rick: 3,
          Daryl: 4,
          Carol: 3,
          Negan: 4,
          Maggie: 2,
          Michonne: 3,
          Shane: 4,
          Glenn: 2,
        },
      },
    ],
  },
  {
    question: "آیا حاضر به فداکاری برای اعضای گروه هستی؟",
    options: [
      {
        text: "بله، هر کاری لازم باشد می‌کنم تا تیم نجات پیدا کند.",
        scores: {
          Rick: 4,
          Daryl: 3,
          Carol: 4,
          Negan: 1,
          Maggie: 4,
          Michonne: 4,
          Shane: 3,
          Glenn: 4,
        },
      },
      {
        text: "امکان ندارد خودم را قربانی کنم؛ افراد ضعیف‌تر محکوم به نابودی هستند، نه من.",
        scores: {
          Rick: 1,
          Daryl: 2,
          Carol: 1,
          Negan: 4,
          Maggie: 1,
          Michonne: 1,
          Shane: 4,
          Glenn: 1,
        },
      },
      {
        text: "فقط اگر راهی نمانده باشد و چاره‌ای نباشد، ممکن است قربانی شوم.",
        scores: {
          Rick: 3,
          Daryl: 2,
          Carol: 3,
          Negan: 2,
          Maggie: 3,
          Michonne: 3,
          Shane: 2,
          Glenn: 3,
        },
      },
      {
        text: "فداکاری آخرین مرحله است؛ اول سعی می‌کنم راهی پیدا کنم که هیچ‌کس قربانی نشود.",
        scores: {
          Rick: 4,
          Daryl: 3,
          Carol: 3,
          Negan: 2,
          Maggie: 3,
          Michonne: 4,
          Shane: 2,
          Glenn: 3,
        },
      },
    ],
  },
  {
    question:
      "اگر یکی از اعضای گروه اشتباه بزرگی کند که همه را به خطر بیندازد، چه واکنشی داری؟",
    options: [
      {
        text: "به شدت با او برخورد می‌کنم و حقیقت را صریح می‌گویم؛ امنیت گروه مهم‌تر است.",
        scores: {
          Rick: 3,
          Daryl: 2,
          Carol: 3,
          Negan: 4,
          Maggie: 2,
          Michonne: 3,
          Shane: 4,
          Glenn: 2,
        },
      },
      {
        text: "اشتباهش را می‌بخشم اما او را زیرنظر می‌گیرم تا دوباره تکرار نکند؛ همه حق خطا دارند.",
        scores: {
          Rick: 4,
          Daryl: 3,
          Carol: 4,
          Negan: 2,
          Maggie: 4,
          Michonne: 3,
          Shane: 2,
          Glenn: 4,
        },
      },
      {
        text: "به او فرصت دوباره می‌دهم اما تصمیم‌گیری را به جمع می‌سپارم.",
        scores: {
          Rick: 3,
          Daryl: 3,
          Carol: 3,
          Negan: 1,
          Maggie: 3,
          Michonne: 3,
          Shane: 2,
          Glenn: 4,
        },
      },
      {
        text: "از او فاصله می‌گیرم چون دیگر نمی‌توانم اعتماد کنم، حتی اگر در گروه بماند.",
        scores: {
          Rick: 2,
          Daryl: 3,
          Carol: 2,
          Negan: 3,
          Maggie: 2,
          Michonne: 2,
          Shane: 3,
          Glenn: 1,
        },
      },
    ],
  },
  {
    question:
      "اگر در لحظه‌ای حیاتی بین نجات یک نفر مهم و مأموریت حیاتی برای بقای گروه مجبور به انتخاب شوی، چه می‌کنی؟",
    options: [
      {
        text: "فرد مهم را نجات می‌دهم؛ وفاداری و احساس برایم برتر است",
        scores: {
          Rick: 3,
          Daryl: 2,
          Carol: 4,
          Negan: 2,
          Maggie: 4,
          Michonne: 3,
          Shane: 3,
          Glenn: 4,
        },
      },
      {
        text: "مأموریت گروه را نجات می‌دهم؛ بقای جمع همیشه مقدم است",
        scores: {
          Rick: 4,
          Daryl: 4,
          Carol: 3,
          Negan: 4,
          Maggie: 2,
          Michonne: 4,
          Shane: 3,
          Glenn: 3,
        },
      },
      {
        text: "تلاش می‌کنم هر دو را نجات دهم حتی با ریسک زیاد",
        scores: {
          Rick: 4,
          Daryl: 3,
          Carol: 4,
          Negan: 3,
          Maggie: 3,
          Michonne: 4,
          Shane: 3,
          Glenn: 4,
        },
      },
      {
        text: "از موقعیت دور می‌شوم تا زنده بمانم و بعد تصمیم بگیرم",
        scores: {
          Rick: 2,
          Daryl: 2,
          Carol: 2,
          Negan: 1,
          Maggie: 2,
          Michonne: 2,
          Shane: 4,
          Glenn: 2,
        },
      },
    ],
  },
];
const resultsTWD = [
  {
    key: "Rick",
    name: "Rick Grimes",
    image: "images/rick.webp",
    description: `
    <span>شما شبیه ریک گرایمز هستید!</span>
  ریک رهبر ذاتی است؛ کسی که حتی در تاریک‌ترین لحظات می‌تواند تصمیمات درست و استراتژیک بگیرد. او باهوش و دقیق است، همیشه وضعیت گروهش را مدیریت می‌کند و با وجدان اخلاقی قوی‌اش، هر تصمیمی که می‌گیرد هم برای حفظ جان دیگران و هم برای آینده گروه است. ریک ترکیبی از شجاعت، مدیریت بحران و تفکر بلندمدت است و کسی که شبیه اوست، حس امنیت و اعتماد را در اطرافیان ایجاد می‌کند.  
    `,
  },
  {
    key: "Daryl",
    name: "Daryl Dixon",
    image: "images/daryl.webp",
    description: `
    <span>شما شبیه داریل دیکسون هستید!</span>
    دریل فردی آرام و ساکت است، اما درونش آتش شجاعت و جسارت می‌سوزد. او اهل حرف زدن نیست و قبل از اقدام، زیاد توضیح نمی‌دهد، اما در عمل فوق‌العاده کاربلد و حرفه‌ای است. تحلیلگر و باهوش است. وفاداری او نسبت به دوستان و گروهش بی‌نظیر است و احساسات عمیق قلبی دارد، هرچند آن‌ها را به راحتی نشان نمی‌دهد. کسی که شبیه دریل است، قوی، با اراده و مقاوم است و می‌تواند حتی در شرایط سخت، مسیر درست را پیدا کند.
    `,
  },
  {
    key: "Carol",
    name: "Carol Peletier",
    image: "images/carol.webp",
    description: `
    <span>شما شبیه کارول پِلِتِر هستید!</span>
   کارول فردی خودساخته و پرقدرت است که از شکست‌ها و دردهای گذشته خود، به یکی از قدرتمندترین اعضای تیم تبدیل شده است. او نجات‌بخش گروه است و همیشه با منطق و تدبیر عمل می‌کند، اما وقتی امنیت گروه در خطر باشد، گاهی بی‌رحم و قاطع می‌شود. کارول شجاع، جسور و بی‌پرواست و برای محافظت از عزیزانش، حاضر است دست به هر کاری بزند. او برنامه‌ریز و باهوش است و حتی در شرایط سخت و نامطمئن، با آرامش و استراتژی مسیر درست را انتخاب می‌کند.
    `,
  },
  {
    key: "Negan",
    name: "Negan Smith",
    image: "images/negan.webp",
    description: `
    <span>شما شبیه نیگن هستید!</span>
    نیگن شخصیتی کاریزماتیک، قاطع و بی‌رحم است که همواره با استراتژی و قدرت نفوذ خود، دیگران را تحت تأثیر قرار می‌دهد. جاه‌طلب و جسور است و در عمق وجودش، قلبی احساساتی دارد که عدالت را می‌طلبد. او شجاع و بسیار قوی است، اما گاهی بی‌رحم و حتی ترسناک می‌شود. نیگن همچنین شوخ‌طبعی تاریک دارد که جذابیت و پیچیدگی شخصیت او را دوچندان می‌کند و باعث می‌شود هیچ‌کس نتواند او را ساده پیش‌بینی کند.
    `,
  },
  {
    key: "Maggie",
    name: "Maggie Rhee",
    image: "images/maggie.webp",
    description: `
    <span>شما شبیه مگی رِی هستید!</span>
   مگی شخصیتی مهربان، احساساتی و همراه است که همواره با دلسوزی و قلبی بزرگ در کنار دیگران می‌ایستد. اما در سوی دیگر، او فردی انتقام‌جو و شجاع است که رنج‌ها و سختی‌های زندگی، او را به فردی قوی، مقاوم و در عین حال دل‌شکسته تبدیل کرده‌اند. مگی ترکیبی از لطافت قلب و قدرت اراده است که باعث می‌شود همیشه برای کسانی که دوستشان دارد، ایستادگی کند.
    `,
  },
  {
    key: "Michonne",
    name: "Michonne Hawthorne",
    image: "images/michone.webp",
    description: `
    <span>شما شبیه میشون هستید!</span>
   میشون فردی شهودی، ساکت و آرام است که همیشه با دقت و تحلیلگرانه به اطراف نگاه می‌کند. او بسیار حواس‌جمع، جدی و کاردرست است و برخوردش با مسائل کاملاً حساب‌شده و منطقی است. میشون بشدت جنگی، با جسارت و شکست‌ناپذیر است و هرچالش و تهدیدی را با قدرت و تمرکز مقابله می‌کند. او همچنین توانایی خارق‌العاده‌ای دارد که چهره‌ی درونی و نیت افراد را می‌فهمد و همیشه پشت ظاهرشان را می‌بیند.
    `,
  },
  {
    key: "Shane",
    name: "Shane Walsh",
    image: "images/shane.webp",
    description: `
    <span>شما شبیه شِین والش هستید!</span>
   شین فردی خودخواه، هیجانی و گاهی عجول است، اما پشت این ظاهر آتشین، شجاعتی بی‌حد و مرز، دقتی تیزبین و قدرتی خارق‌العاده نهفته است. او فردی است با احساسات سرکوب‌شده که به ندرت نشان می‌دهد، اما همین درونیات باعث می‌شوند تصمیماتش عمیق و استراتژیک باشند. شین گاهی تکرو و تک‌رایی است و راه خودش را پیش می‌گیرد، اما همین جسارت درونی اش مسیر گروه را شکل می‌دهد و تأثیرگذار است. او فردی است که هم الهام‌بخش و هم چالشی برای دیگران است، کسی که حضورش همیشه برجسته و غیرقابل نادیده گرفتن است.
    `,
  },
  {
    key: "Glenn",
    name: "Glenn Rhee",
    image: "images/glenn.webp",
    description: `
    <span>شما شبیه گلن رِی هستید!</span>
   گلن فردی فرز، باهوش و بامزه است که قلبی پر از مهربانی و احساسات سرشار دارد. او همیشه آماده است تا به سرعت به داد اعضای تیم برسد و با شجاعت و فداکاری از آن‌ها محافظت کند. حس شوخ‌طبعی او فضا را سبک می‌کند و در کنار آن، هوش و ذکاوتش او را به فردی کلیدی و تأثیرگذار در گروه تبدیل می‌کند. گلن کسی است که با حضورش، اعتماد و دلگرمی را به اطرافیان هدیه می‌دهد و هر حرکتش پر از انرژی و زندگی است.
    `,
  },
];
const TWDAudio = new Audio("Musics/TWD.mp3");
TWDAudio.loop = true;
TWDAudio.volume = 0.2;

const scoreTotalsTWD = {
  Rick: 0,
  Daryl: 0,
  Michonne: 0,
  Shane: 0,
  Negan: 0,
  Carol: 0,
  Glenn: 0,
  Maggie: 0,
};
/*the walking dead end*/

/* GOT start*/
const questionsGOT = [];
const resultsGOT = [
  {
    key: "ned",
    name: "Eddard Stark",
    image: "images/ned.jpg",
    description: `
    <span>شما شبیه ند استارک هستید!</span>
 فردی صادق، وفادار و قابل اعتماد هستید که همیشه سعی می‌کنید درست را از نادرست تشخیص دهید. قلب مهربان و روح جسور شما باعث می‌شود حتی در سخت‌ترین شرایط، برای عدالت و اصول خود ایستادگی کنید. شما به خانواده و عزیزانتان اهمیت زیادی می‌دهید و حاضر هستید برای آن‌ها هر کاری انجام دهید، حتی اگر راه پیش رو پرخطر و دشوار باشد. شجاعت و صداقت شما الهام‌بخش دیگران است و اغلب مردم به شما به عنوان یک ستون اعتماد و اخلاق نگاه می‌کنند.  
    `,
  },
  {
    key: "cersei",
    name: "Cersei Lannister",
    image: "images/cersei.jpg",
    description: `
    <span>شما شبیه سرسی لنیستر هستید!</span>
    فردی جاه‌طلب، زیرک و قدرتمند هستید که همواره می‌دانید چگونه به هدف‌هایتان برسید. شما برای خانواده و عزیزانتان هر کاری می‌کنید و حاضر نیستید اجازه دهید کسی آن‌ها را تهدید کند. جذابیت و کاریزمای شما باعث می‌شود دیگران به راحتی تحت تأثیر شما قرار بگیرند، و صبر و صلابتتان در مواجهه با مشکلات شما را متمایز می‌کند. گاهی تصمیم‌هایتان انتقامی و محکم است، اما همیشه با نبوغ و تدبیر برنامه‌ریزی شده عمل می‌کنید و کمتر کسی می‌تواند شما را پیش‌بینی کند.
    `,
  },
  {
    key: "jaime",
    name: "Jaime Lannister",
    image: "images/jamie.jpg",
    description: `
    <span>شما شبیه جیمی لنیستر هستید!</span>
 کسی که گذشته‌ی پر از اشتباهات و تصمیمات سخت او را شکل داده، اما حالا به فردی با احساس، مهربان و قابل اعتماد تبدیل شده‌اید. شما عاشق هستید و وفاداری برایتان ارزش بالایی دارد، اما شخصیتتان غیرقابل پیش‌بینی است و دیگران هرگز نمی‌دانند در لحظه‌ی بعد چه تصمیمی خواهید گرفت. هم توانایی جنگیدن دارید و هم قدرت تصمیم‌گیری در مسائل پیچیده، و همین ترکیب باعث می‌شود بتوانید در موقعیت‌های دشوار بدرخشید. شما کسی هستید که حتی در سخت‌ترین شرایط هم می‌تواند قلب و شجاعت را همزمان نشان دهد.
    `,
  },
  {
    key: "tyrion",
    name: "Tyrion Lannister",
    image: "images/tr.jpg",
    description: `
    <span>شما شبیه تیریون لنیستر هستید!</span>
 کسی که با هوش و زیرکی‌اش دنیا را می‌بیند و هیچگاه اجازه نمی‌دهد محدودیت‌ها شما را عقب نگه دارند. شما مهربان و دل‌رحم هستید، اما وقتی لازم باشد با سیاست و نبوغ خود، موقعیت‌ها را به نفع خود یا کسانی که دوست دارید مدیریت می‌کنید. شوخ‌طبعی و بذله‌گویی شما مثل سپری در برابر مشکلات عمل می‌کند و دیگران را جذب می‌کند. شما کسی هستید که می‌تواند با آرامش و منطق در میان آشوب و جنگ، راهی برای صلح پیدا کند و همیشه در قلب و ذهن اطرافیان جا باز می‌کنید.
    `,
  },
  {
    key: "daenerys",
    name: "Daenerys Targaryen",
    image: "images/dn.jpg",
    description: `
    <span>شما شبیه دنریس تارگرین هستید!</span>
 کسی که همیشه به دنبال عدالت و تغییر است و جاه‌طلبی‌اش او را به سمت بلندپروازی‌های بزرگ هدایت می‌کند. شما هیجانی و پرشور هستید و گاهی بدون فکر عمل می‌کنید، اما قلبتان برای رسیدن به اهداف درست و حمایت از کسانی که نیازمندند می‌تپد. شما غیرقابل پیش‌بینی و پرانرژی هستید، با برنامه‌ریزی‌های بلندمدت و رؤیاهای بزرگ، همیشه به دنبال فرصتی برای ایجاد تحول و قدرت گرفتن هستید.
    `,
  },
  {
    key: "jon",
    name: "Jon Snow",
    image: "images/jon.jpg",
    description: `
    <span>شما شبیه جان اسنو هستید!</span>
 کسی با آرامش درونی و شجاعت مثال‌زدنی که در مواجهه با خطرات، همیشه بی‌باک و مصمم عمل می‌کند. شما کاربلد و مهارت‌مند هستید و تصمیم‌هایتان اغلب با عقل و منطق همراه است، اما قلبتان هم احساساتی است و ارزش دوستی و وفاداری را می‌دانید. شما آماده‌اید برای دفاع از آنچه درست می‌دانید، حتی اگر مسیرتان پر از سختی باشد، و با شجاعت و صداقت خود، الهام‌بخش اطرافیانتان هستید.
    `,
  },
  {
    key: "arya",
    name: "Arya Stark",
    image: "images/ari.jpg",
    description: `
    <span>شما شبیه آریا استارک هستید!</span>
 کسی تیزهوش، جسور و متفاوت که هیچ‌وقت از روبه‌رو شدن با چالش‌ها نمی‌ترسد. شما خلاق و ماجراجو هستید و همیشه راه‌های غیرمتعارف برای حل مشکلات پیدا می‌کنید. سرسخت و انتقام‌جو هستید و هر کسی که به شما یا عزیزانتان آسیبی برساند، پاسخ خود را خواهد گرفت. با قلبی پر از وفاداری نسبت به کسانی که دوستشان دارید، حرکت می‌کنید و هر تجربه‌ای شما را قوی‌تر و زیرک‌تر می‌کند.
    `,
  },
  {
    key: "sansa",
    name: "Sansa Stark",
    image: "images/sansa.jpg",
    description: `
    <span>شما شبیه سانسا استارک هستید!</span>
 کسی حساس، عاطفی و در عین حال صبور که زخم‌های گذشته روی قلب‌تان اثر گذاشته است. شما عمیقاً احساس می‌کنید و روابط انسانی برایتان اهمیت زیادی دارند، اما تجربه‌های سخت باعث شده‌اند که در تصمیم‌گیری‌هایتان محتاط و با تدبیر باشید. در ظاهر آرام به نظر می‌رسید، اما در درونتان ذهنی هوشمند و اراده‌ای قوی برای محافظت از خود و عزیزانتان دارید.
    `,
  },
  {
    key: "littlefinger",
    name: "Petyr Baelish",
    image: "images/lf.jpg",
    description: `
    <span>شما شبیه لرد پیتر بیلیش هستید!</span>
 فردی باهوش، منطقی و خونسرد که همیشه یک قدم جلوتر از دیگران فکر می‌کند. شما استاد سیاست و نقشه‌کشی هستید و می‌توانید از شرایط به نفع خود بهره ببرید، حتی اگر دیگران متوجه نشوند. رازدار و مرموز هستید و اغلب با لبخندی آرام، نقشه‌های بزرگی در سر می‌پرورانید. اعتماد به شما سخت است، اما کسانی که شانسش را داشته باشند، از زیرکی و بینش شما بهره‌مند می‌شوند.
    `,
  },
];
const GOTAudio = new Audio("Musics/GOT.mp3");
GOTAudio.loop = true;
GOTAudio.volume = 0.2;

const scoreTotalsGOT = {
  ned: 0,
  cersei: 0,
  jaime: 0,
  tyrion: 0,
  daenerys: 0,
  jon: 0,
  arya: 0,
  sansa: 0,
  littlefinger: 0,
};

/* GOT end*/

/* Breaking Bad start*/

const BBAudio = new Audio("Musics/BB.mp3");
BBAudio.loop = true;
BBAudio.volume = 0.2;
/* Breaking Bad end*/

/* vars start*/
const start_container = document.querySelector(".start-container");
const startGame = document.querySelector(".startGame");
const category = document.querySelector(".category");
const Dexter = document.querySelector(".Dexter");
const TWD = document.querySelector(".TWD");
const GOT = document.querySelector(".GOT");
const BB = document.querySelector(".BB");
const questionBox = document.querySelector(".question-box");
const questionTitle = document.querySelector(".question h2");
const answers = document.querySelector(".answers");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const currentQ = document.querySelector(".current-q");
const wholeQ = document.querySelector(".whole-q");
const resultContainer = document.querySelector(".result");

currentQuestion = 0;
let selectedAnswers = [];
maxScore = 0;
winner = "";
let selectedSeries = "";
let questions = [];
let results = [];
/* vars end*/

startGame.addEventListener("click", () => {
  start_container.classList.add("hidden");
  category.classList.remove("hidden");
});
function showQuestionBox() {
  category.classList.add("hidden");
  questionBox.classList.remove("hidden");

  if (selectedSeries === "Dexter") {
    questions = questionsDexter;
    results = resultsDexter;
  } else if (selectedSeries === "TWD") {
    questions = questionsTWD;
    results = resultsTWD;
  } else if (selectedSeries === "GOT") {
    questions = questionsGOT;
    results = resultsGOT;
  }

  currentQ.textContent = currentQuestion + 1;
  wholeQ.textContent = questions.length;

  questionTitle.innerHTML = questions[currentQuestion].question;
  answers.innerHTML = "";

  questions[currentQuestion].options.forEach((option, index) => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="radio" name="q${currentQuestion}" value="${index}">
      ${option.text}
    `;
    answers.appendChild(label);

    const input = label.querySelector("input");

    if (selectedAnswers[currentQuestion] === index) {
      input.checked = true;
    }

    input.addEventListener("change", () => {
      selectedAnswers[currentQuestion] = index;
      if (currentQuestion < questions.length - 1) {
        setTimeout(() => {
          currentQuestion++;
          showQuestionBox();
        }, 500);
      }
    });
  });

  updateButtons();
}

Dexter.addEventListener("click", () => {
  selectedSeries = "Dexter";
  dexterAudio.play();
  showQuestionBox();
});
TWD.addEventListener("click", () => {
  selectedSeries = "TWD";
  TWDAudio.play();
  showQuestionBox();
});
GOT.addEventListener("click", () => {
  selectedSeries = "GOT";
  GOTAudio.play();
  showQuestionBox();
});
BB.addEventListener("click", () => {
  selectedSeries = "BB";
  BBAudio.play();

  showQuestionBox();
});

function updateButtons() {
  if (currentQuestion === 0) {
    prev.classList.add("disabled");
  } else {
    prev.classList.remove("disabled");
  }

  if (currentQuestion === questions.length - 1) {
    next.innerText = "اتمام آزمون";
  } else {
    next.innerText = "بعدی";
  }
}
next.addEventListener("click", () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestionBox();
    return;
  } else {
    const answeredAll = questions.every(
      (_, i) => selectedAnswers[i] !== undefined
    );

    if (!answeredAll) {
      alert("شما به تمامی سوالات پاسخ نداده‌اید!");
      return;
    }

    resultContainer.classList.remove("hidden");
    questionBox.classList.add("hidden");

    let scoreTotals;
    if (selectedSeries === "Dexter") scoreTotals = scoreTotalsDexter;
    else if (selectedSeries === "TWD") scoreTotals = scoreTotalsTWD;
    else if (selectedSeries === "GOT") scoreTotals = scoreTotalsGOT;
    else if (selectedSeries === "BB") scoreTotals = scoreTotalsBB;

    for (let i in selectedAnswers) {
      const answerIndex = selectedAnswers[i];
      const scores = questions[i].options[answerIndex].scores;
      for (let character in scores) {
        scoreTotals[character] += scores[character];
      }
    }

    maxScore = 0;
    winner = "";
    for (let c in scoreTotals) {
      if (scoreTotals[c] > maxScore) {
        maxScore = scoreTotals[c];
        winner = c;
      }
    }

    resultContainer.innerHTML = "";
    const winnerData = results.find((item) => item.key === winner);

    const imgBox = document.createElement("div");
    imgBox.className = "img-box";
    imgBox.innerHTML = `<img src="${winnerData.image}" alt="${winnerData.name}">`;

    const title = document.createElement("h1");
    title.textContent = winnerData.name;

    const desc = document.createElement("p");
    desc.innerHTML = winnerData.description;

    resultContainer.appendChild(imgBox);
    resultContainer.appendChild(title);
    resultContainer.appendChild(desc);
  }
});

prev.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestionBox();
  }
});
