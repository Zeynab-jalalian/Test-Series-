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
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
      {
        text: "تیر و کمان",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
      {
        text: "تبر",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
      {
        text: "شمشیر",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
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
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
      {
        text: "با تیمی که جمع می‌کنم وارد ساختمان می‌شوم و حمله می‌کنم",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
      {
        text: "بدون هیچ مکثی وارد ساختمان می‌شوم و هرکاری می‌کنم تا او را نجات دهم حتی به قیمت مرگ خودم",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
      {
        text: "شرایط بسیار ریسکی است پس وارد عمل نمی‌شوم و تسلیم از دست دادن او می‌شوم چون می‌دانم کاری از دستم بر نمی‌آید",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
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
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
      {
        text: "دزدی از دیگر گروه‌ها",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
      {
        text: "از گروه خارج می‌شوم و سعی می‌کنم خودم تکروی کنم و راه خودم را پیدا کنم",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
      {
        text: "به همراه گروهم به دنبال منابع غذایی می‌رویم",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
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
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
      {
        text: "سعی می‌کنم بین طرفین صلح ایجاد کنم",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
      {
        text: "عصبی می‌شوم و سعی می‌کنم خیلی رک و صریح دعوا را متوقف کنم",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
      {
        text: "تلاش می‌کنم کناره‌گیری کنم و درگیری را نادیده بگیرم",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
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
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
      {
        text: "بی‌درنگ وارد عمل می‌شوم",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
      {
        text: "با دیگران مشورت می‌کنم و طبق نظر جمع عمل می‌کنم",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
      {
        text: "از موقعیت فاصله می‌گیرم و منتظر می‌مانم",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
    ],
  },
  {
    question: "آیا وقتی گروهی نیاز به کمک دارد، واکنش تو چیست؟",
    options: [
      {
        text: "فورا به او کمک می‌کنم و حتی وارد اعضای تیم و اردوگاه خودمان می‌کنم",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
      {
        text: "با احتیاط وارد عمل می‌شوم و شرایط را می‌سنجم",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
      {
        text: "سعی می‌کنم کمک کنم اما با ریسک کم",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
      {
        text: "کمک نمی‌کنم و تمرکز روی خودم است",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
    ],
  },
  {
    question: "در مواجهه با تهدید قوی، چه رفتاری داری؟",
    options: [
      {
        text: "با تیم می‌جنگم و تا آخر ایستادگی می‌کنم",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
      {
        text: "سعی می‌کنم شر تهدید را کم کنم و عقب‌نشینی کنم",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
      {
        text: "دور می‌شوم و منتظر فرصت مناسب می‌مانم",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
      {
        text: "سعی می‌کنم شرش را کم کنم و با او مستقیما وارد جنگ می‌شوم",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
    ],
  },
  {
    question: "آیا حاضر به فداکاری برای اعضای گروه هستی؟",
    options: [
      {
        text: "بله، هر کاری لازم باشد انجام می‌دهم",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
      {
        text: "سعی می‌کنم کمک کنم اما محدودیت دارم",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
      {
        text: "امکان ندارد خودم قربانی کنم",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
      {
        text: "تنها در صورت لزوم بسیار محدود",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
    ],
  },
  {
    question: "در شرایطی که کسی نیاز فوری به کمک دارد، چه تصمیمی می‌گیری؟",
    options: [
      {
        text: "به سرعت کمک می‌کنم و برنامه‌ریزی می‌کنم",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
      {
        text: "از دیگران کمک می‌گیرم و اقدام می‌کنم",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
      {
        text: "با ریسک کم کمک می‌کنم و محتاط عمل می‌کنم",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
      {
        text: "کمک نمی‌کنم و شرایط را نادیده می‌گیرم",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
    ],
  },
  {
    question: "اگر در موقعیت زندگی یا مرگ قرار بگیری، چه واکنشی داری؟",
    options: [
      {
        text: "با شجاعت مقابله می‌کنم و تا آخر می‌ایستم",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
      {
        text: "با احتیاط حرکت می‌کنم و جان خودم را حفظ می‌کنم",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
      {
        text: "فقط در صورتی خطر می‌کنم که دیگران را نجات دهم",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
      {
        text: "از موقعیت دوری می‌کنم و خودم را نجات می‌دهم",
        scores: {
          Rick: 0,
          Daryl: 0,
          Carol: 0,
          Negan: 0,
          Maggie: 0,
          Michonne: 0,
          Shane: 0,
          Glenn: 0,
        },
      },
    ],
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
const GOTAudio = new Audio("Musics/GOT.mp3");
GOTAudio.loop = true;
GOTAudio.volume = 0.2;
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

    for (let i in selectedAnswers) {
      const answerIndex = selectedAnswers[i];
      const scores = questions[i].options[answerIndex].scores;

      for (let character in scores) {
        scoreTotalsDexter[character] += scores[character];
      }
    }

    maxScore = 0;
    winner = "";

    for (let c in scoreTotalsDexter) {
      if (scoreTotalsDexter[c] > maxScore) {
        maxScore = scoreTotalsDexter[c];
        winner = c;
      }
    }

    resultContainer.innerHTML = "";

    const winnerData = results.find((item) => item.key === winner);

    const imgBox = document.createElement("div");
    imgBox.className = "img-box";
    imgBox.innerHTML = `
  <img src="${winnerData.image}" alt="${winnerData.name}">
`;

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
