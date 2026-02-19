export type Language = 'en' | 'bn'

type TranslationSchema = {
  layout: {
    navItems: Array<{ label: string; to: string; external: boolean }>
    joinNow: string
    languageOptionsLabel: string
    selectedLanguageFlagAlt: string
    englishFlagAlt: string
    banglaFlagAlt: string
    footerCopyright: string
  }
  home: {
    heroAriaLabel: string
    heroAlt: string
    promoTitle: string
    promoPeriod: string
    promoJoinNow: string
    promoBadges: {
      top1Alt: string
      top23Alt: string
      top47Alt: string
      top1Label: string
      top23Label: string
      top47Label: string
      top1Text: string
      top23Text: string
      top47Text: string
    }
    whyTitle: string
    whyIntro: string
    benefits: Array<{ title: string; text: string }>
    aboutTitle: string
    aboutP1: string
    aboutP2: string
    commissionTitle: string
    commissionIntro: string
    commissionTableAriaLabel: string
    commissionHeaders: { activePlayers: string; commission: string }
    commissionRows: Array<{ players: string; commission: string }>
    stepsTitle: string
    steps: Array<{ title: string; text: string }>
    productsTitle: string
    products: string[]
    faqTitle: string
    faqs: Array<{ q: string; a: string }>
  }
  commission: {
    pageTitle: string
    pageIntro: string
    tableAriaLabel: string
    tableHeaders: { activePlayers: string; commission: string }
    tableRows: Array<{ players: string; commission: string }>
    joinNow: string
    termsTitle: string
    terms: string[]
  }
  contact: {
    pageTitle: string
    supportImageAlt: string
    dayHours: string
    timeHours: string
    intro: string
    telegramSupport: string
    tiles: Array<{ title: string; text: string }>
  }
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    layout: {
      navItems: [
        { label: 'Home', to: '/home', external: false },
        { label: 'Commission Structure', to: '/commission', external: false },
        { label: 'Lanka Retreat Promo', to: 'https://lankaretreat.pages.dev/', external: true },
        { label: 'Contact Us', to: '/contact', external: false },
      ],
      joinNow: 'Join Now',
      languageOptionsLabel: 'Language options',
      selectedLanguageFlagAlt: 'Selected language flag',
      englishFlagAlt: 'UK flag',
      banglaFlagAlt: 'Bangladesh flag',
      footerCopyright: 'Copyright 2025 | Bhaggo Partners. All Rights Reserved | 18+',
    },
    home: {
      heroAriaLabel: 'Promote Bhaggo and Earn Premium Rewards',
      heroAlt: 'Promote Bhaggo and Earn Premium Rewards',
      promoTitle: 'Lanka Retreat Race',
      promoPeriod: 'Campaign period: 01 February 2026 - 30 April 2026',
      promoJoinNow: 'Join Now',
      promoBadges: {
        top1Alt: 'Top 1 prize',
        top23Alt: 'Top 2 to 3 prize',
        top47Alt: 'Top 4 to 7 prize',
        top1Label: 'Top 1',
        top23Label: 'Top 2-3',
        top47Label: 'Top 4-7',
        top1Text: 'Full Package',
        top23Text: 'Half Package',
        top47Text: 'Partial Package',
      },
      whyTitle: 'Why become a Bhaggo affiliate',
      whyIntro:
        'Built for long-term partners with transparent tracking, competitive payouts, and fast campaign launch support.',
      benefits: [
        {
          title: 'Easy to Join',
          text: 'Quick onboarding, instant tracking link, and immediate campaign readiness.',
        },
        {
          title: 'Big Commission',
          text: 'Up to 50% revenue share with top-performing partner slabs.',
        },
        {
          title: 'Lifetime Revenue',
          text: 'Keep earning from quality users with strong long-term retention.',
        },
        {
          title: 'Flexible Promotion',
          text: 'Run traffic from social, communities, or content properties with flexibility.',
        },
      ],
      aboutTitle: 'About Bhaggo Affiliate',
      aboutP1:
        'Bhaggo combines strong conversion flow, reliable user retention, and transparent affiliate reporting for both beginner and advanced partners.',
      aboutP2:
        'Instead of short-term campaigns, the program is built for sustainable monthly earnings backed by responsive support and clear payout structure.',
      commissionTitle: 'Highest commission in market',
      commissionIntro: 'Tier-based structure designed to reward quality traffic and long-term partner growth.',
      commissionTableAriaLabel: 'Commission structure table',
      commissionHeaders: {
        activePlayers: 'Active Players',
        commission: 'Commission',
      },
      commissionRows: [
        { players: '1 - 10 Active Players', commission: '20%' },
        { players: '10 - 19 Active Players', commission: '35%' },
        { players: '20 or more active players', commission: '50%' },
      ],
      stepsTitle: 'How to start in 4 steps',
      steps: [
        { title: 'Step 01 · Register', text: 'Submit your affiliate application and get approved fast.' },
        { title: 'Step 02 · Promote', text: 'Launch your tracking links with ready-to-use creative assets.' },
        { title: 'Step 03 · Convert', text: 'Drive first deposits with a high-converting product experience.' },
        { title: 'Step 04 · Scale', text: 'Expand campaigns with partner support and optimization.' },
      ],
      productsTitle: 'Products you can promote',
      products: ['Sportsbook', 'Live Casino', 'Slots', 'Crash Games', 'Table Games', 'Fishing Games'],
      faqTitle: 'Frequently asked questions',
      faqs: [
        {
          q: 'How fast can I start earning?',
          a: 'Most partners can start driving traffic within 24 hours after approval, with real-time performance tracking.',
        },
        {
          q: 'How often do payouts happen?',
          a: 'Payouts follow a regular cycle, supported by transparent reporting and clear commission breakdowns.',
        },
        {
          q: 'Do I get campaign support?',
          a: 'Yes. You receive dedicated support for creatives, campaign strategy, and conversion improvements.',
        },
      ],
    },
    commission: {
      pageTitle: 'Commission Structure',
      pageIntro: 'Competitive, transparent, and optimized for scalable affiliate performance.',
      tableAriaLabel: 'Commission structure table',
      tableHeaders: {
        activePlayers: 'Active Players',
        commission: 'Commission',
      },
      tableRows: [
        { players: '1 - 10 Active Players', commission: '20%' },
        { players: '10 - 19 Active Players', commission: '35%' },
        { players: '20 or more active players', commission: '50%' },
      ],
      joinNow: 'Join Now',
      termsTitle: 'Terms & Conditions',
      terms: [
        'You must be 18 years or older to become an affiliate.',
        'Agents cannot open player accounts with their own referral links.',
        'Suspicious behavior, abuse, or duplicate account activity may lead to suspension.',
        'Promotions are strictly one-person use and duplicate identity/payment data is not allowed.',
        'Draw, refund, canceled, opposite-side, or non-active bets are excluded from valid turnover.',
        'All affiliates must comply with Bhaggo’s website terms and promotional policy updates.',
        'Bhaggo reserves the right to update or discontinue promotions without prior notice.',
      ],
    },
    contact: {
      pageTitle: 'Partner Support',
      supportImageAlt: 'Support',
      dayHours: 'Monday - Saturday',
      timeHours: '10:00 AM - 7:00 PM (GMT +6)',
      intro: 'Need campaign or commission support? Our affiliate team is available on Telegram for fast response.',
      telegramSupport: 'Telegram Support',
      tiles: [
        {
          title: 'Campaign Guidance',
          text: 'Get ad-angle suggestions, promo focus, and optimization recommendations for better conversion.',
        },
        {
          title: 'Tracking & Reports',
          text: 'Need help reading reports? Our team helps validate traffic quality and commission calculations.',
        },
        {
          title: 'Urgent Help',
          text: 'For urgent affiliate issues, contact Telegram support and include your partner ID for fastest handling.',
        },
      ],
    },
  },
  bn: {
    layout: {
      navItems: [
        { label: 'হোম', to: '/home', external: false },
        { label: 'কমিশন স্ট্রাকচার', to: '/commission', external: false },
        { label: 'লঙ্কা রিট্রিট প্রোমো', to: 'https://lankaretreat.pages.dev/', external: true },
        { label: 'যোগাযোগ', to: '/contact', external: false },
      ],
      joinNow: 'এখনই যোগ দিন',
      languageOptionsLabel: 'ভাষা নির্বাচন',
      selectedLanguageFlagAlt: 'নির্বাচিত ভাষার পতাকা',
      englishFlagAlt: 'ইংরেজি পতাকা',
      banglaFlagAlt: 'বাংলা পতাকা',
      footerCopyright: 'কপিরাইট ২০২৫ | ভাগ্য পার্টনারস। সর্বস্বত্ব সংরক্ষিত | ১৮+',
    },
    home: {
      heroAriaLabel: 'Bhaggo প্রচার করুন এবং প্রিমিয়াম রিওয়ার্ড অর্জন করুন',
      heroAlt: 'Bhaggo প্রচার করুন এবং প্রিমিয়াম রিওয়ার্ড অর্জন করুন',
      promoTitle: 'লঙ্কা রিট্রিট রেস',
      promoPeriod: 'ক্যাম্পেইন সময়কাল: ০১ ফেব্রুয়ারি ২০২৬ - ৩০ এপ্রিল ২০২৬',
      promoJoinNow: 'এখনই যোগ দিন',
      promoBadges: {
        top1Alt: 'শীর্ষ ১ পুরস্কার',
        top23Alt: 'শীর্ষ ২ থেকে ৩ পুরস্কার',
        top47Alt: 'শীর্ষ ৪ থেকে ৭ পুরস্কার',
        top1Label: 'শীর্ষ ১',
        top23Label: 'শীর্ষ ২-৩',
        top47Label: 'শীর্ষ ৪-৭',
        top1Text: 'ফুল প্যাকেজ',
        top23Text: 'হাফ প্যাকেজ',
        top47Text: 'পার্শিয়াল প্যাকেজ',
      },
      whyTitle: 'কেন Bhaggo অ্যাফিলিয়েট হবেন',
      whyIntro: 'দীর্ঘমেয়াদি পার্টনারদের জন্য স্বচ্ছ ট্র্যাকিং, প্রতিযোগিতামূলক পেআউট এবং দ্রুত ক্যাম্পেইন সাপোর্ট।',
      benefits: [
        {
          title: 'সহজে যোগদান',
          text: 'দ্রুত অনবোর্ডিং, তাত্ক্ষণিক ট্র্যাকিং লিংক এবং সাথে সাথে ক্যাম্পেইন শুরু।',
        },
        {
          title: 'বড় কমিশন',
          text: 'শীর্ষ পারফর্মার পার্টনার স্ল্যাবে সর্বোচ্চ ৫০% রেভিনিউ শেয়ার।',
        },
        {
          title: 'লাইফটাইম আয়',
          text: 'উচ্চমানের ব্যবহারকারীদের থেকে দীর্ঘমেয়াদে নিয়মিত আয় করুন।',
        },
        {
          title: 'ফ্লেক্সিবল প্রোমোশন',
          text: 'সোশ্যাল, কমিউনিটি বা কনটেন্ট প্ল্যাটফর্ম থেকে ফ্লেক্সিবলি ট্রাফিক আনুন।',
        },
      ],
      aboutTitle: 'Bhaggo অ্যাফিলিয়েট সম্পর্কে',
      aboutP1:
        'Bhaggo শক্তিশালী কনভার্সন ফ্লো, নির্ভরযোগ্য ইউজার রিটেনশন এবং স্বচ্ছ অ্যাফিলিয়েট রিপোর্টিং একসাথে প্রদান করে।',
      aboutP2:
        'স্বল্পমেয়াদি ক্যাম্পেইনের বদলে, এই প্রোগ্রামটি রেসপনসিভ সাপোর্ট ও পরিষ্কার পেআউট স্ট্রাকচারের মাধ্যমে টেকসই মাসিক আয়ের জন্য তৈরি।',
      commissionTitle: 'বাজারের সর্বোচ্চ কমিশন',
      commissionIntro: 'কোয়ালিটি ট্রাফিক ও দীর্ঘমেয়াদি পার্টনার গ্রোথকে পুরস্কৃত করার জন্য টিয়ার-ভিত্তিক স্ট্রাকচার।',
      commissionTableAriaLabel: 'কমিশন স্ট্রাকচার টেবিল',
      commissionHeaders: {
        activePlayers: 'সক্রিয় প্লেয়ার',
        commission: 'কমিশন',
      },
      commissionRows: [
        { players: '১ - ১০ সক্রিয় প্লেয়ার', commission: '২০%' },
        { players: '১০ - ১৯ সক্রিয় প্লেয়ার', commission: '৩৫%' },
        { players: '২০ বা তার বেশি সক্রিয় প্লেয়ার', commission: '৫০%' },
      ],
      stepsTitle: '৪ ধাপে কীভাবে শুরু করবেন',
      steps: [
        { title: 'ধাপ ০১ · রেজিস্টার', text: 'অ্যাফিলিয়েট আবেদন জমা দিন এবং দ্রুত অনুমোদন পান।' },
        { title: 'ধাপ ০২ · প্রোমোট', text: 'রেডি-টু-ইউজ ক্রিয়েটিভ দিয়ে আপনার ট্র্যাকিং লিংক চালু করুন।' },
        { title: 'ধাপ ০৩ · কনভার্ট', text: 'উচ্চ কনভার্টিং প্রোডাক্ট অভিজ্ঞতার মাধ্যমে প্রথম ডিপোজিট আনুন।' },
        { title: 'ধাপ ০৪ · স্কেল', text: 'পার্টনার সাপোর্ট ও অপ্টিমাইজেশনের মাধ্যমে ক্যাম্পেইন বড় করুন।' },
      ],
      productsTitle: 'যেসব প্রোডাক্ট আপনি প্রোমোট করতে পারবেন',
      products: ['স্পোর্টসবুক', 'লাইভ ক্যাসিনো', 'স্লটস', 'ক্র্যাশ গেমস', 'টেবিল গেমস', 'ফিশিং গেমস'],
      faqTitle: 'প্রায়শই জিজ্ঞাসিত প্রশ্ন',
      faqs: [
        {
          q: 'কত দ্রুত আমি আয় শুরু করতে পারি?',
          a: 'অনুমোদনের ২৪ ঘণ্টার মধ্যে বেশিরভাগ পার্টনার ট্রাফিক চালু করতে পারেন এবং রিয়েল-টাইম পারফরম্যান্স ট্র্যাক করতে পারেন।',
        },
        {
          q: 'পেআউটের সময়?',
          a: 'পেআউট নিয়মিত সাইকেল অনুসরণ করে, স্বচ্ছ রিপোর্টিং এবং পরিষ্কার কমিশন ব্রেকডাউনসহ।',
        },
        {
          q: 'ক্যাম্পেইন সাপোর্ট কি পাওয়া যায়?',
          a: 'হ্যাঁ। ক্রিয়েটিভ, ক্যাম্পেইন স্ট্র্যাটেজি এবং কনভার্সন উন্নত করতে ডেডিকেটেড সাপোর্ট দেওয়া হয়।',
        },
      ],
    },
    commission: {
      pageTitle: 'কমিশন স্ট্রাকচার',
      pageIntro: 'প্রতিযোগিতামূলক, স্বচ্ছ এবং স্কেলযোগ্য অ্যাফিলিয়েট পারফরম্যান্সের জন্য অপ্টিমাইজড।',
      tableAriaLabel: 'কমিশন স্ট্রাকচার টেবিল',
      tableHeaders: {
        activePlayers: 'সক্রিয় প্লেয়ার',
        commission: 'কমিশন',
      },
      tableRows: [
        { players: '১ - ১০ সক্রিয় প্লেয়ার', commission: '২০%' },
        { players: '১০ - ১৯ সক্রিয় প্লেয়ার', commission: '৩৫%' },
        { players: '২০ বা তার বেশি সক্রিয় প্লেয়ার', commission: '৫০%' },
      ],
      joinNow: 'এখনই যোগ দিন',
      termsTitle: 'শর্তাবলী',
      terms: [
        'অ্যাফিলিয়েট হতে হলে আপনার বয়স অবশ্যই ১৮+ হতে হবে।',
        'এজেন্টরা নিজেদের রেফারেল লিংক দিয়ে প্লেয়ার অ্যাকাউন্ট খুলতে পারবেন না।',
        'সন্দেহজনক আচরণ, অপব্যবহার বা ডুপ্লিকেট অ্যাকাউন্ট কার্যক্রমে সাসপেনশন হতে পারে।',
        'প্রোমোশন শুধুমাত্র একজনের ব্যবহারের জন্য এবং ডুপ্লিকেট পরিচয়/পেমেন্ট তথ্য গ্রহণযোগ্য নয়।',
        'ড্র, রিফান্ড, বাতিল, বিপরীত-সাইড বা নন-অ্যাক্টিভ বেট বৈধ টার্নওভারে গণ্য হবে না।',
        'সব অ্যাফিলিয়েটকে Bhaggo-র ওয়েবসাইটের শর্ত ও প্রোমোশনাল নীতিমালা মেনে চলতে হবে।',
        'Bhaggo পূর্ব নোটিশ ছাড়াই প্রোমোশন আপডেট বা বন্ধ করার অধিকার সংরক্ষণ করে।',
      ],
    },
    contact: {
      pageTitle: 'পার্টনার সাপোর্ট',
      supportImageAlt: 'সাপোর্ট',
      dayHours: 'সোমবার - শনিবার',
      timeHours: 'সকাল ১০:০০ - সন্ধ্যা ৭:০০ (GMT +6)',
      intro: 'ক্যাম্পেইন বা কমিশন সাপোর্ট দরকার? দ্রুত সহায়তার জন্য আমাদের অ্যাফিলিয়েট টিম টেলিগ্রামে প্রস্তুত।',
      telegramSupport: 'টেলিগ্রাম সাপোর্ট',
      tiles: [
        {
          title: 'ক্যাম্পেইন গাইডেন্স',
          text: 'ভালো কনভার্সনের জন্য অ্যাড-অ্যাঙ্গেল, প্রোমো ফোকাস এবং অপ্টিমাইজেশন সাজেশন পান।',
        },
        {
          title: 'ট্র্যাকিং ও রিপোর্ট',
          text: 'রিপোর্ট বুঝতে সমস্যা? আমাদের টিম ট্রাফিক কোয়ালিটি ও কমিশন ক্যালকুলেশন যাচাইয়ে সাহায্য করবে।',
        },
        {
          title: 'জরুরি সহায়তা',
          text: 'জরুরি অ্যাফিলিয়েট সমস্যায় টেলিগ্রাম সাপোর্টে যোগাযোগ করুন এবং দ্রুত সমাধানের জন্য পার্টনার আইডি দিন।',
        },
      ],
    },
  },
}
