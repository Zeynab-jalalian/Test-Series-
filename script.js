const questions = [
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
        text: "منعطف عمل میکنم",
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

const start_container = document.querySelector(".start-container");
const startGame = document.querySelector(".startGame");
const category = document.querySelector(".category");
const Dexter = document.querySelector(".Dexter");
const questionBox = document.querySelector(".question-box");
const questionTitle = document.querySelector(".question h2");
const answers = document.querySelector(".answers");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const currentQ = document.querySelector(".current-q");

currentQuestion = 0;
const selectedAnswers = [];
const dexterAudio = new Audio("Musics/dexter.mp3");
dexterAudio.loop = true;
dexterAudio.volume = 0.2;

startGame.addEventListener("click", () => {
  start_container.classList.add("hidden");
  category.classList.remove("hidden");
});

function ShowQuestionBox() {
  currentQ.innerHTML = `${currentQuestion + 1}`;

  questionTitle.innerHTML = questions[currentQuestion].question;
  answers.innerHTML = "";

  questions[currentQuestion].options.forEach((option, index) => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="q${
      currentQuestion + 1
    }" value="${index}"> ${option.text}`;
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
          ShowQuestionBox();
          updateButtons();
        }, 500);
      }
    });
  });
}

Dexter.addEventListener("click", () => {
  dexterAudio.play();

  category.classList.add("hidden");
  questionBox.classList.remove("hidden");

  ShowQuestionBox();
  updateButtons();
});
next.addEventListener("click", () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    ShowQuestionBox();
    updateButtons();
    return;
  }

  const answeredAll = questions.every(
    (_, i) => selectedAnswers[i] !== undefined
  );

  if (!answeredAll) {
    alert("شما به تمامی سوالات پاسخ نداده‌اید!");
    return;
  }
});

prev.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    ShowQuestionBox();
    updateButtons();
  }
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
