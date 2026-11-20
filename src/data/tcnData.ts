export type PageRoute = 'home' | 'im-new' | 'grow' | 'community' | 'watch-listen' | 'about';

export interface Centre {
  id: string;
  name: string;
  region: 'Lagos' | 'Nigeria (Outside Lagos)' | 'Global';
  country: string;
  city: string;
  venue: string;
  times: string[];
  instagramUrl: string;
  instagramHandle: string;
  note?: string;
  flagForConfirmation?: string;
  isFlagship?: boolean;
}

export const TCN_CONTACT = {
  helplinePhones: ['0818 600 0021', '0818 600 0024', '0818 600 0025', '0818 600 0082'],
  mediaStorePhone: '0814 000 0224',
  hours: 'Weekdays 9:00 AM – 5:00 PM WAT',
  officeHours: '9:00 AM – 3:00 PM WAT',
  enquiriesEmail: 'enquiries@covenantchristiancentre.org',
  helplineEmail: 'helpline@covenantchristiancentre.org',
  lifeFellowshipEmail: 'lifefellowships@gmail.com',
  fofEmail: 'fof@covenantchristiancentre.org',
  testimonyFormUrl: 'https://insightsforliving.org/form-view/104',
  newToChurchFormUrl: 'https://www.thecovenantnation.org/newtochurch',
  givingUrl: 'https://www.thecovenantnation.org/giving',
  officialCentresUrl: 'https://insightsforliving.org/newcenters/',
  privacyUrl: 'https://www.thecovenantnation.org/privacypolicy/',
};

export const TCN_SOCIALS = {
  instagram: 'https://www.instagram.com/covenantccentre/',
  youtube: 'https://www.youtube.com/c/CovenantChristianCentreNG',
  youtubeAlt: 'https://www.youtube.com/channel/UCsVBRhKh9spV-YPTub0KcxQ',
  facebook: 'https://www.facebook.com/CovenantChristiancentre',
  twitter: 'https://twitter.com/CovenantCCentre',
};

export const TCN_CENTRES: Centre[] = [
  // Flagship & Lagos Centres
  {
    id: 'iganmu',
    name: 'TCN Iganmu',
    region: 'Lagos',
    country: 'Nigeria',
    city: 'Iganmu, Lagos',
    venue: 'The Covenant Place, Iganmu. Right Beside The National Art Theatre, Lagos.',
    times: ['6:30am · First Service', '8:15am · Second Service', '10:30am · Third Service'],
    instagramUrl: 'https://www.instagram.com/tcniganmu/',
    instagramHandle: '@tcniganmu',
    isFlagship: true,
    flagForConfirmation: 'Official Contact page also lists 7:45am & 9:45am; confirm Sunday schedule before travelling.',
  },
  {
    id: 'yaba',
    name: 'TCN Yaba',
    region: 'Lagos',
    country: 'Nigeria',
    city: 'Yaba, Lagos',
    venue: '400, Herbert Macaulay Road, Yaba, Lagos.',
    times: ['6:30am · First Service', '8:30am · Second Service'],
    instagramUrl: 'https://www.instagram.com/tcnyaba/',
    instagramHandle: '@tcnyaba',
    isFlagship: true,
    flagForConfirmation: 'Official Contact page also lists 6:30am & 8:15am; confirm second service time via @tcnyaba.',
  },
  {
    id: 'lekki',
    name: 'TCN Lekki',
    region: 'Lagos',
    country: 'Nigeria',
    city: 'Lekki, Lagos',
    venue: 'The Covenant Temple, Lekki. Chisco Bus-Stop, behind Enyo Fuel Station, Lekki.',
    times: ['7:45am · First Service', '10:00am · Second Service'],
    instagramUrl: 'https://www.instagram.com/tcnlekki/',
    instagramHandle: '@tcnlekki',
    isFlagship: true,
    flagForConfirmation: 'Official Contact page also lists 8:00am & 9:45am; confirm current Sunday times via @tcnlekki.',
  },
  {
    id: 'covenant-connect',
    name: 'Covenant Connect (Youth Church)',
    region: 'Lagos',
    country: 'Nigeria',
    city: 'Yaba, Lagos',
    venue: 'The Covenant Nation, 400 Herbert Macaulay Way, Yaba, Lagos.',
    times: ['11:30am · First Service'],
    instagramUrl: 'https://www.instagram.com/cconnectchurch_/',
    instagramHandle: '@cconnectchurch_',
    note: 'Young adults community (ages 18–25).',
  },
  {
    id: 'victoria-island',
    name: 'TCN Victoria Island',
    region: 'Lagos',
    country: 'Nigeria',
    city: 'Victoria Island, Lagos',
    venue: 'Lagoon Restaurant, Ozumba Mbadiwe, Victoria Island, Lagos.',
    times: ['9:00am · First Service'],
    instagramUrl: 'https://www.instagram.com/tcnvictoriaisland/',
    instagramHandle: '@tcnvictoriaisland',
  },
  {
    id: 'ikeja',
    name: 'TCN Ikeja',
    region: 'Lagos',
    country: 'Nigeria',
    city: 'Oregun, Ikeja, Lagos',
    venue: '32 Kudirat Abiola Way (by Polaris Bank), Oregun, Ikeja.',
    times: ['7:30am · First Service', '9:30am · Second Service'],
    instagramUrl: 'https://www.instagram.com/tcnikejacentre/',
    instagramHandle: '@tcnikejacentre',
  },
  {
    id: 'maryland',
    name: 'TCN Maryland',
    region: 'Lagos',
    country: 'Nigeria',
    city: 'Maryland, Lagos',
    venue: '370 Ikorodu Road, Maryland, Lagos.',
    times: ['7:00am · First Service', '9:00am · Second Service'],
    instagramUrl: 'https://www.instagram.com/tcnmaryland/',
    instagramHandle: '@tcnmaryland',
  },
  {
    id: 'gbagada',
    name: 'TCN Gbagada',
    region: 'Lagos',
    country: 'Nigeria',
    city: 'Gbagada, Lagos',
    venue: 'The Covenant Nation Gbagada, Witssprings Suites, 4 Fred Omojole Crescent, Gbagada.',
    times: ['8:30am · First Service'],
    instagramUrl: 'https://www.instagram.com/tcngbagada/',
    instagramHandle: '@tcngbagada',
  },
  {
    id: 'festac',
    name: 'TCN Festac',
    region: 'Lagos',
    country: 'Nigeria',
    city: 'Festac Town, Lagos',
    venue: 'The Covenant Nation Festac, 1st Avenue, Beside i-Fitness Gym, Festac Town.',
    times: ['7:15am · First Service', '9:00am · Second Service'],
    instagramUrl: 'https://www.instagram.com/tcn.festac/',
    instagramHandle: '@tcn.festac',
  },
  {
    id: 'ajah',
    name: 'TCN Ajah',
    region: 'Lagos',
    country: 'Nigeria',
    city: 'Ikota / Ajah, Lagos',
    venue: 'Filmhouse Cinemas – Ikota Blackbell Mall, Lekki, Lagos.',
    times: ['7:45am · First Service'],
    instagramUrl: 'https://www.instagram.com/tcnajah_vgc/',
    instagramHandle: '@tcnajah_vgc',
  },
  {
    id: 'abule-egba',
    name: 'TCN Abule-Egba',
    region: 'Lagos',
    country: 'Nigeria',
    city: 'Abule-Egba, Lagos',
    venue: 'Heritage Mall, U-Turn B/Stop, Lagos/Abeokuta Express Way, Abule-Egba, Lagos.',
    times: ['7:30am · First Service', '9:30am · Second Service'],
    instagramUrl: 'https://www.instagram.com/tcnabuleegba/',
    instagramHandle: '@tcnabuleegba',
  },
  {
    id: 'badagry',
    name: 'TCN Badagry',
    region: 'Lagos',
    country: 'Nigeria',
    city: 'Badagry, Lagos',
    venue: 'Sycomore Hotels (Event Hall), No 1 Seje Road, Ajara-Topa, Badagry.',
    times: ['9:00am · First Service'],
    instagramUrl: 'https://www.instagram.com/tcnbadagry/',
    instagramHandle: '@tcnbadagry',
  },
  {
    id: 'badore',
    name: 'TCN Badore',
    region: 'Lagos',
    country: 'Nigeria',
    city: 'Badore, Ajah, Lagos',
    venue: 'Genesis Hall, Akins Bus Stop, by Wema Bank, Addo Road.',
    times: ['9:00am · First Service'],
    instagramUrl: 'https://www.instagram.com/tcnbadore/',
    instagramHandle: '@tcnbadore',
  },
  {
    id: 'egbeda',
    name: 'TCN Egbeda',
    region: 'Lagos',
    country: 'Nigeria',
    city: 'Egbeda, Lagos',
    venue: 'Grand Ovation Centre, Moshalashi Bus Stop Besides Mobil Filling Station, Idimu Road, Egbeda, Lagos.',
    times: ['9:00am · First Service'],
    instagramUrl: 'https://www.instagram.com/tcnegbeda/',
    instagramHandle: '@tcnegbeda',
  },
  {
    id: 'ibeju-lekki',
    name: 'TCN Ibeju-Lekki',
    region: 'Lagos',
    country: 'Nigeria',
    city: 'Ibeju-Lekki, Lagos',
    venue: '9, Oluwatoyin Dada Street, Winners Estate, Off Elemoro Palace Road, Ibeju-Lekki.',
    times: ['9:00am · First Service'],
    instagramUrl: 'https://www.instagram.com/TCNIbejuLekki/',
    instagramHandle: '@TCNIbejuLekki',
  },
  {
    id: 'igando',
    name: 'TCN Igando',
    region: 'Lagos',
    country: 'Nigeria',
    city: 'Igando, Lagos',
    venue: 'LASU-Isheri Exp. Way, Opposite Sabola Bus Stop, Akesan-Igando.',
    times: ['7:00am · First Service', '9:00am · Second Service', '11:00am · Youth Service'],
    instagramUrl: 'https://www.instagram.com/tcnigando/',
    instagramHandle: '@tcnigando',
  },
  {
    id: 'ikorodu',
    name: 'TCN Ikorodu',
    region: 'Lagos',
    country: 'Nigeria',
    city: 'Ikorodu, Lagos',
    venue: 'Dream Parks and Gardens, off Radio Road by Hilltop Estate, Obafemi Awolowo Road, Ikorodu.',
    times: ['7:15am · First Service', '9:00am · Second Service'],
    instagramUrl: 'https://www.instagram.com/tcnikorodu/',
    instagramHandle: '@tcnikorodu',
  },
  {
    id: 'isolo',
    name: 'TCN Isolo',
    region: 'Lagos',
    country: 'Nigeria',
    city: 'Isolo, Lagos',
    venue: 'The Covenant Nation, 23, Adebisi Omotola Street by Asuani Police Station, Off Victoria Street, Isolo, Lagos.',
    times: ['7:00am · First Service', '9:30am · Second Service'],
    instagramUrl: 'https://www.instagram.com/tcnisolo/',
    instagramHandle: '@tcnisolo',
  },
  {
    id: 'ketu-ikosi',
    name: 'TCN Ketu-Ikosi',
    region: 'Lagos',
    country: 'Nigeria',
    city: 'Shangisha / Ketu, Lagos',
    venue: 'Centre for Management Development, CMD Avenue, Management Village, Shangisha, Ketu, Lagos.',
    times: ['7:30am · First Service', '9:15am · Second Service'],
    instagramUrl: 'https://www.instagram.com/tcnikosiketu/',
    instagramHandle: '@tcnikosiketu',
  },
  {
    id: 'mushin-oshodi',
    name: 'TCN Mushin/Oshodi',
    region: 'Lagos',
    country: 'Nigeria',
    city: 'Mushin / Oshodi, Lagos',
    venue: 'Digital Bridge Institute, 1 NITEL Road, Old NITEL Training School, Cappa Bus Stop.',
    times: ['8:00am · First Service'],
    instagramUrl: 'https://www.instagram.com/tcnmushin/',
    instagramHandle: '@tcnmushin',
    flagForConfirmation: 'Check @tcnmushin or Helpline for latest venue access updates.',
  },
  {
    id: 'ogba',
    name: 'TCN Ogba',
    region: 'Lagos',
    country: 'Nigeria',
    city: 'Ogba, Lagos',
    venue: 'Philjul Events Gallery, Off Ogba Ogunji Road, Behind AP Filling Station, Ogba, Lagos.',
    times: ['8:30am · First Service'],
    instagramUrl: 'https://www.instagram.com/tcnogba/',
    instagramHandle: '@tcnogba',
  },
  {
    id: 'orchid-road',
    name: 'TCN Orchid Road',
    region: 'Lagos',
    country: 'Nigeria',
    city: 'Orchid Road, Lekki, Lagos',
    venue: '100 Mega-1 Event Way, Orchid Road, Lekki, Lagos.',
    times: ['8:00am · First Service'],
    instagramUrl: 'https://www.instagram.com/tcn.orchid/',
    instagramHandle: '@tcn.orchid',
  },
  {
    id: 'satellite-town',
    name: 'TCN Satellite Town',
    region: 'Lagos',
    country: 'Nigeria',
    city: 'Satellite Town, Lagos',
    venue: 'Mater DEI School, 102-106 Marwa Road, Satellite Town, Lagos.',
    times: ['8:00am · First Service'],
    instagramUrl: 'https://www.instagram.com/tcnsatellitetown/',
    instagramHandle: '@tcnsatellitetown',
  },
  {
    id: 'sangotedo',
    name: 'TCN Sangotedo',
    region: 'Lagos',
    country: 'Nigeria',
    city: 'Sangotedo, Lagos',
    venue: 'KM22 Lekki-Epe Expressway, Opposite Lagos Business School.',
    times: ['7:45am – 9:45am · Sunday Service'],
    instagramUrl: 'https://www.instagram.com/tcnsangotedo/',
    instagramHandle: '@tcnsangotedo',
  },

  // Nigeria (Outside Lagos)
  {
    id: 'abuja',
    name: 'TCN Abuja',
    region: 'Nigeria (Outside Lagos)',
    country: 'Nigeria',
    city: 'Abuja, FCT',
    venue: 'Ladi Kwali Hall, Abuja Continental Hotel (formerly Sheraton), Abuja.',
    times: ['7:30am · First Service', '9:30am · Second Service'],
    instagramUrl: 'https://www.instagram.com/tcnabuja/',
    instagramHandle: '@tcnabuja',
    isFlagship: true,
  },
  {
    id: 'karu',
    name: 'TCN Karu',
    region: 'Nigeria (Outside Lagos)',
    country: 'Nigeria',
    city: 'Karu Site, Abuja',
    venue: 'FrankVille Hotel, 10 Ngaram S.K Street, Fepa Quarters, After Customs Hospital, Karu Site, Abuja.',
    times: ['8:30am · First Service'],
    instagramUrl: 'https://www.instagram.com/tcnkaru/',
    instagramHandle: '@tcnkaru',
  },
  {
    id: 'kubwa',
    name: 'TCN Kubwa',
    region: 'Nigeria (Outside Lagos)',
    country: 'Nigeria',
    city: 'Kubwa, Abuja',
    venue: 'Cenon Pavilion, Adjacent to Arlington Hotel, PW 181 Bakori Road, Kubwa, Abuja.',
    times: ['8:30am · First Service'],
    instagramUrl: 'https://www.instagram.com/tcnkubwa/',
    instagramHandle: '@tcnkubwa',
  },
  {
    id: 'ibadan',
    name: 'TCN Ibadan',
    region: 'Nigeria (Outside Lagos)',
    country: 'Nigeria',
    city: 'Bodija, Ibadan',
    venue: 'Pentonrise Event Centre, Housing, Awolowo Road, Bodija, Ibadan.',
    times: ['9:00am · First Service'],
    instagramUrl: 'https://www.instagram.com/tcnibadan/',
    instagramHandle: '@tcnibadan',
  },
  {
    id: 'mowe-arepo',
    name: 'TCN Mowe-Arepo',
    region: 'Nigeria (Outside Lagos)',
    country: 'Nigeria',
    city: 'Arepo, Ogun State',
    venue: '58/60 Journalist Road, Arepo (Beside DUX FM).',
    times: ['8:00am · First Service'],
    instagramUrl: 'https://www.instagram.com/tcnmowe_arepo/',
    instagramHandle: '@tcnmowe_arepo',
  },
  {
    id: 'port-harcourt',
    name: 'TCN Port Harcourt',
    region: 'Nigeria (Outside Lagos)',
    country: 'Nigeria',
    city: 'Port Harcourt, Rivers State',
    venue: 'Hotel Presidential, 1 Birabi Street, GRA, Port Harcourt.',
    times: ['8:30am · First Service'],
    instagramUrl: 'https://www.instagram.com/tcnphcity/',
    instagramHandle: '@tcnphcity',
  },
  {
    id: 'uyo',
    name: 'TCN Uyo',
    region: 'Nigeria (Outside Lagos)',
    country: 'Nigeria',
    city: 'Uyo, Akwa Ibom',
    venue: 'Vinpy Hotels and Event Centre, 10 Udo Udoma Avenue, Uyo.',
    times: ['7:30am · First Service', '9:30am · Second Service'],
    instagramUrl: 'https://www.instagram.com/tcnuyo/',
    instagramHandle: '@tcnuyo',
  },

  // Global Centres
  {
    id: 'uk-lewisham',
    name: 'TCN UK (Lewisham)',
    region: 'Global',
    country: 'United Kingdom',
    city: 'London SE4, UK',
    venue: 'Main Hall, Prendergast Ladywell School, Manwood Road, Catford, Lewisham SE4 1SA, United Kingdom.',
    times: ['10:00am · Sunday Service', '9:30am · Pre-service Prayer'],
    instagramUrl: 'https://www.instagram.com/thecovenantnationuk/',
    instagramHandle: '@thecovenantnationuk',
    isFlagship: true,
  },
  {
    id: 'central-london',
    name: 'TCN Central London',
    region: 'Global',
    country: 'United Kingdom',
    city: 'Camden, London NW1',
    venue: 'Richard Cobden Primary School, Camden Street, NW1 0LL, London.',
    times: ['10:00am · Sunday Service'],
    instagramUrl: 'https://www.instagram.com/tcncentrallondon/',
    instagramHandle: '@tcncentrallondon',
  },
  {
    id: 'birmingham',
    name: 'TCN Birmingham',
    region: 'Global',
    country: 'United Kingdom',
    city: 'Birmingham, UK',
    venue: 'Odeon Cinemas, 139 New St, Birmingham B2 4NU.',
    times: ['10:00am GMT · Sunday Service'],
    instagramUrl: 'https://www.instagram.com/tcnbirmingham/',
    instagramHandle: '@tcnbirmingham',
  },
  {
    id: 'manchester',
    name: 'TCN Manchester',
    region: 'Global',
    country: 'United Kingdom',
    city: 'Manchester, UK',
    venue: 'Dean Trust Ardwick, 345 Stockport Rd, Manchester, M13 0LF.',
    times: ['10:00am · Sunday Service'],
    instagramUrl: 'https://www.instagram.com/tcnmanchester/',
    instagramHandle: '@tcnmanchester',
  },
  {
    id: 'glasgow',
    name: 'TCN Glasgow',
    region: 'Global',
    country: 'United Kingdom',
    city: 'Glasgow, Scotland',
    venue: 'Toryglen Community Base, 179 Prospecthill Circus, Glasgow G42 0LA.',
    times: ['11:00am · Sunday Service'],
    instagramUrl: 'https://www.instagram.com/tcnglasgow/',
    instagramHandle: '@tcnglasgow',
  },
  {
    id: 'dublin',
    name: 'TCN Dublin',
    region: 'Global',
    country: 'Ireland',
    city: 'Dublin, Ireland',
    venue: 'Clayton Hotel, Leopardstown, Central Park, Sandyford 18.',
    times: ['10:00am · Sunday Service'],
    instagramUrl: 'https://www.instagram.com/tcndublin/',
    instagramHandle: '@tcndublin',
  },
  {
    id: 'nyc',
    name: 'TCN NYC',
    region: 'Global',
    country: 'United States',
    city: 'Brooklyn, NY',
    venue: '1021 Rutland Road, Brooklyn, NY 11212.',
    times: ['10:00am · Sunday Service'],
    instagramUrl: 'https://www.instagram.com/thecovenantnationnyc/',
    instagramHandle: '@thecovenantnationnyc',
  },
  {
    id: 'canada',
    name: 'TCN Canada (Mississauga)',
    region: 'Global',
    country: 'Canada',
    city: 'Mississauga, ON',
    venue: '1465 Leda Avenue, Mississauga, ON, Canada.',
    times: ['10:00am ET · Sunday Service'],
    instagramUrl: 'https://www.instagram.com/tcntoronto/',
    instagramHandle: '@tcntoronto',
  },
  {
    id: 'calgary',
    name: 'TCN Calgary',
    region: 'Global',
    country: 'Canada',
    city: 'Calgary, AB',
    venue: 'Auditorium 11, Cineplex Cinema Chinook Mall, 6455 Macleod Trl SW, Calgary, AB T2H 0K9.',
    times: ['9:30am MST · Sunday Service'],
    instagramUrl: 'https://www.instagram.com/tcncalgary/',
    instagramHandle: '@tcncalgary',
  },
];

export interface GrowthResource {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  schedule: string;
  actionLabel: string;
  url: string;
  email?: string;
}

export const GROWTH_PATHWAYS: GrowthResource[] = [
  {
    id: 'fof',
    title: 'Foundation of Faith',
    subtitle: 'Core Biblical Foundations',
    description:
      'An interactive 7-class refresher on the foundational truths of the Christian faith, open to new and maturing believers with live Q&A.',
    schedule: 'Quarterly across Lagos centres & online',
    actionLabel: 'Join Foundation of Faith',
    url: 'http://fof.covenantchristiancentre.org/',
    email: 'fof@covenantchristiancentre.org',
  },
  {
    id: 'discipleship',
    title: 'Discipleship Classes',
    subtitle: 'Equipped for Ministry & Life',
    description:
      'Deepen your grasp of God’s Word, be equipped to serve in every sphere of life, and grow into a disciple who helps others walk with Christ.',
    schedule: 'Follows Foundation of Faith',
    actionLabel: 'Explore Next Steps',
    url: 'https://insightsforliving.org/first-timer/',
    email: 'helpline@covenantchristiancentre.org',
  },
  {
    id: 'life-fellowships',
    title: 'Life Fellowships',
    subtitle: 'Small Prayer & Care Cells',
    description:
      'Small spiritual companies of 6–8 believers sharing similar life stages and goals who pray in agreement and care for one another (Acts 4:23–24).',
    schedule: 'Weekly small-group fellowship',
    actionLabel: 'Connect to a Fellowship',
    url: 'mailto:lifefellowships@gmail.com?subject=Joining%20a%20Life%20Fellowship',
    email: 'lifefellowships@gmail.com',
  },
  {
    id: 'bible-study',
    title: 'Bible Study & Confessions',
    subtitle: 'Daily Word & Declarations',
    description:
      'Access the official “Accessing the God Life” Bible Study Manual alongside daily scripture confessions and faith declarations.',
    schedule: 'Available anytime · PDF & Study Guides',
    actionLabel: 'Open Bible Study Manual',
    url: 'https://insightsforliving.org/bible-study-manual/',
  },
];

export const CONFESSION_DOWNLOADS = [
  {
    title: 'Daily Confession of Faith',
    meta: 'Official Ministry PDF · Daily Declarations',
    url: 'https://insightsforliving.org/wp-content/uploads/2021/01/Daily_Confessions1a.pdf',
  },
  {
    title: '2024 Church Confession',
    meta: 'Official PDF · Year Declarations',
    url: 'https://insightsforliving.org/wp-content/uploads/2024/01/2024-Confession.pdf',
  },
  {
    title: 'The Blood Confession',
    meta: 'Official PDF · 2 MB · Redemption & Covenant',
    url: 'https://insightsforliving.org/wp-content/uploads/tcn-downloads/The-Blood-Confessions.pdf',
  },
  {
    title: 'Confessions Before & After Service',
    meta: 'Official PDF · Worship Preparation',
    url: 'https://insightsforliving.org/wp-content/uploads/2020/12/Confessions-2020-Before-and-After-Service-THE-BLOOD-Autosaved.pdf',
  },
  {
    title: 'Songs and the Sword Confession',
    meta: 'Official Web Declaration',
    url: 'https://insightsforliving.org/songsandtheswordconfessions/',
  },
  {
    title: 'Bible Study Manual: Accessing the God Life',
    meta: 'Official PDF · 4.14 MB',
    url: 'https://insightsforliving.org/bible-study-manual/',
  },
];

export interface MinistryCommunity {
  id: string;
  name: string;
  audience: string;
  summary: string;
  details: string;
  contactLabel: string;
  contactUrl: string;
  secondaryUrl?: string;
  secondaryLabel?: string;
  imageKey?: 'children' | 'jesus-tribe' | 'youth' | 'community' | 'worship' | 'bible';
}

export const FAMILY_COMMUNITIES: MinistryCommunity[] = [
  {
    id: 'children',
    name: 'Children’s Church',
    audience: 'Ages 1 – 12',
    summary:
      'A clean, safe, joyful environment where children experience Jesus and learn the Bible creatively during every Sunday service.',
    details:
      'Every Sunday our children experience Jesus in age-appropriate classes from ages 1 to 12 across our centres. Our goal is that every child builds a lifelong relationship with Jesus in a safe, engaging space.',
    contactLabel: 'Official Children’s Page',
    contactUrl: 'https://insightsforliving.org/children/',
    imageKey: 'children',
  },
  {
    id: 'jesus-tribe',
    name: 'Jesus Tribe (Teens)',
    audience: 'Ages 13 – 19',
    summary:
      'Our teenage church where young people learn to represent Jesus in word, conduct, love, and purity with engaging worship and small groups.',
    details:
      'Operating across our centres for teenagers aged 13–19, Jesus Tribe features lively games, heartfelt worship, small-group conversations, and messages anchored in Luke 2:40.',
    contactLabel: 'Connect with @tcnjesustribe',
    contactUrl: 'https://insightsforliving.org/jesus-tribe/',
    secondaryUrl: 'https://www.instagram.com/tcnjesustribe/',
    secondaryLabel: 'Instagram @tcnjesustribe',
    imageKey: 'jesus-tribe',
  },
  {
    id: 'youth',
    name: 'Covenant Connect (Youth)',
    audience: 'Young Adults · Ages 18 – 25',
    summary:
      'A vibrant community helping young adults walk in God’s love and wisdom, pray together, and build lifelong godly friendships.',
    details:
      'Meets Sundays at 11:30am at 400 Herbert Macaulay Way, Yaba, Lagos, alongside YouTube and Mixlr streams. Reach the team directly at covenantconnect1@gmail.com.',
    contactLabel: 'Youth Church Page',
    contactUrl: 'https://insightsforliving.org/youth/',
    secondaryUrl: 'mailto:covenantconnect1@gmail.com',
    secondaryLabel: 'covenantconnect1@gmail.com',
    imageKey: 'youth',
  },
  {
    id: 'covenant-ministries',
    name: 'Covenant Ministries & Outreach',
    audience: 'Social Impact & Empowerment',
    summary:
      'Practical love in action through Edu-Aid (public schools), Project W.R.A.P (widows’ support), Covenant Capital, and Lagos Sees eye care.',
    details:
      'Through Edu-Aid (edu-aid.org), Project W.R.A.P (projectwrap.org), Covenant Capital (covenant-capital.org), and Lagos Sees medical outreach, TCN serves neighbours and empowers entrepreneurs across Lagos and Nigeria.',
    contactLabel: 'Explore Covenant Ministries',
    contactUrl: 'https://insightsforliving.org/cccministries/',
  },
  {
    id: 'departments',
    name: 'Departments & Service Units',
    audience: 'Serve with Your Gifts',
    summary:
      'Sixteen dedicated ministry teams including Ushering, Prayer, Technical & Sound, Snapshots Theatre, Marriage Enrichment, and Medical Outreach.',
    details:
      'After completing Foundation of Faith, members are encouraged to serve in a department aligned with their gifts—from welcoming visitors in Ushering to intercession, media, or community care.',
    contactLabel: 'View All 16 Departments',
    contactUrl: 'https://insightsforliving.org/our-departments-units/',
  },
  {
    id: 'life-fellowships',
    name: 'Life Fellowships',
    audience: 'Prayer Cells · 6–8 Members',
    summary:
      'Intimate prayer cells built on Acts 4:23–24 so no one walks alone—sharing life, praying in agreement, and receiving spiritual strength.',
    details:
      'Life Fellowships connect 6 to 8 believers in similar seasons of life for regular prayer, encouragement, and personal pastoral care. Email lifefellowships@gmail.com to be matched.',
    contactLabel: 'Email lifefellowships@gmail.com',
    contactUrl: 'mailto:lifefellowships@gmail.com?subject=Life%20Fellowship%20Enquiry',
  },
  {
    id: 'community-groups',
    name: 'Covenant Community Groups',
    audience: 'Interest & Neighbourhood Circles',
    summary:
      'Connect beyond Sunday with fellow believers in your neighbourhood or shared vocation for real friendship, care, and mutual support.',
    details:
      'Community Groups provide relational belonging across Lagos and our global centres so every member has people who genuinely know and walk with them.',
    contactLabel: 'Visit Community Groups Portal',
    contactUrl: 'https://tcncommunitygroups.org',
  },
];

export const COVENANT_OUTREACHES = [
  {
    name: 'Edu-Aid',
    focus: 'Public Primary Education Support',
    description:
      'Facilitating quality public primary education across Lagos State by supporting schools, teachers, and pupils through resource, financial, and volunteer partnerships.',
    url: 'https://edu-aid.org/',
  },
  {
    name: 'Project W.R.A.P',
    focus: 'Widows’ Relief & Assistance Program',
    description:
      'Established in 2011 as a biblical and social commitment to support widows and the children of men who died in service to Nigeria.',
    url: 'http://www.projectwrap.org/',
  },
  {
    name: 'Covenant Capital',
    focus: 'Enterprise & Career Empowerment',
    description:
      'Providing microcredit, project finance, business advisory, training, and career development to help entrepreneurs build thriving, job-creating enterprises.',
    url: 'https://covenant-capital.org/',
  },
  {
    name: 'Lagos Sees',
    focus: 'Free Community Eye-Care Outreach',
    description:
      'Volunteer doctors, optometrists, nurses, and pharmacists delivering free medical and eye care to host communities across Lagos State.',
    email: 'seunfunmi@covenantchristiancentre.org',
    url: 'https://insightsforliving.org/our-departments-units/',
  },
];

export interface DepartmentItem {
  name: string;
  description: string;
  email: string;
}

export const TCN_DEPARTMENTS: DepartmentItem[] = [
  {
    name: 'Ushering Department',
    description: 'Warmly welcomes, organises, provides information, and serves worshippers across our centres.',
    email: 'c3ushers@gmail.com',
  },
  {
    name: 'Information Help Desk Unit',
    description: 'Assists visitors and members with questions, event follow-up, and lost-and-found care.',
    email: 'c3infohelpdesk@gmail.com',
  },
  {
    name: 'Prayer Department',
    description: 'Intercedes consistently for the spiritual, physical, and practical growth of the church and members.',
    email: 'prayers@covenantchristiancentre.org',
  },
  {
    name: 'Altar Call Department',
    description: 'Walks alongside new converts after altar calls during Sunday services and special convocations.',
    email: 'cccaltarcall@gmail.com',
  },
  {
    name: 'Marriage Enrichment (C3MET)',
    description: 'Counsellors and volunteers equipping married couples through quarterly gatherings and private counselling.',
    email: 'c3marriages@gmail.com',
  },
  {
    name: 'Foundation of Faith',
    description: 'Teaches the 7-class biblical refresher course across Lagos centres and online.',
    email: 'fof@covenantchristiancentre.org',
  },
  {
    name: 'Technical & Sound Department',
    description: 'Manages audio capture, sound reinforcement, and broadcast audio feeds across services.',
    email: 'c3sounddepartment@gmail.com',
  },
  {
    name: 'Word 2 Media (W2Media)',
    description: 'Enhances worship with scripture projections, song lyrics, presentation graphics, and visual media.',
    email: 'c3w2media@googlegroups.com',
  },
  {
    name: 'E-Library & Livestream Department',
    description: 'Produces and distributes digital sermons and manages live broadcasts on YouTube and Facebook.',
    email: 'elibraryc3@gmail.com',
  },
  {
    name: 'Snapshots Theatre Department',
    description: 'Creative arts ministry sharing the Gospel through stage drama and productions since 2007.',
    email: 'snapshots9ja@gmail.com',
  },
  {
    name: 'Focus Photography Department',
    description: 'Captures documentary photography across church services, outreach, and special gatherings.',
    email: 'c3focus@gmail.com',
  },
  {
    name: 'Transportation Department',
    description: 'Operates courteous Sunday and event shuttle routes so worshippers arrive comfortably.',
    email: 'enquiries@covenantchristiancentre.org',
  },
  {
    name: 'Crowd Control Department',
    description: 'Stewards traffic flow and safe entry with empathy and calm hospitality.',
    email: 'crowdcontrolc3@gmail.com',
  },
  {
    name: 'Lagos Sees Medical Outreach',
    description: 'Volunteer healthcare professionals delivering free community eye care across Lagos.',
    email: 'seunfunmi@covenantchristiancentre.org',
  },
  {
    name: 'Registration Department',
    description: 'Coordinates registration and guest check-in at The Platform, WOFBEC, and ICPLMW.',
    email: 'c3regunit@gmail.com',
  },
  {
    name: 'Production & CD Sales Unit',
    description: 'Records, compresses, and provides physical and digital sermon archives after services.',
    email: 'orders@covenantchristiancentre.org',
  },
];

export const FEATURED_SERMON = {
  title: 'The Blood of Sprinkling',
  speaker: 'Pastor Poju Oyemade',
  series: 'Featured Teaching on Insights for Living',
  summary:
    'Discover what the speaking of the Blood of Jesus means for your conscience, covenant standing, and daily walk of faith.',
  eLibraryUrl: 'https://elibrary.insightsforliving.org/',
  sermonsArchiveUrl: 'https://insightsforliving.org/our-sermon/',
};

export const RECENT_TEACHINGS = [
  {
    title: 'Setting Goals for Growth & Development',
    speaker: 'Pastor Poju Oyemade',
    url: 'https://insightsforliving.org/our-sermon/',
  },
  {
    title: 'The Development of the Seed of God',
    speaker: 'Pastor Poju Oyemade',
    url: 'https://insightsforliving.org/our-sermon/',
  },
  {
    title: 'Turning the Ordinary to Extra-Ordinary',
    speaker: 'Pastor Poju Oyemade',
    url: 'https://insightsforliving.org/our-sermon/',
  },
  {
    title: 'The Incubating Phase of Faith',
    speaker: 'Pastor Poju Oyemade',
    url: 'https://insightsforliving.org/our-sermon/',
  },
  {
    title: 'The Importance of Importunity',
    speaker: 'Pastor Poju Oyemade',
    url: 'https://insightsforliving.org/the-importance-of-importunity/',
  },
  {
    title: 'The Power of Triumphant Faith',
    speaker: 'Pastor Poju Oyemade',
    url: 'https://insightsforliving.org/the-power-of-triumphant-faith/',
  },
];

export const MEDIA_CHANNELS = [
  {
    id: 'watch-live',
    title: 'WATCH LIVE',
    schedule: 'Sundays · 8:00 AM & 10:30 AM WAT · Wed 7:00 PM WAT',
    description: 'Join live video worship and Pastor Poju Oyemade’s teaching from Lagos wherever you are in the world.',
    actionLabel: 'Open Video Livestream',
    url: 'https://insightsforliving.org/livestream/',
    secondaryUrl: 'https://www.youtube.com/c/CovenantChristianCentreNG',
    secondaryLabel: 'YouTube Channel',
  },
  {
    id: 'listen-live',
    title: 'LISTEN LIVE',
    schedule: 'Daily Morning Prayer 5:00 AM WAT · Wed 6:45 PM WAT',
    description: 'Tune in to Covenant Audio Stream on Mixlr for morning corporate prayers, midweek worship, and Sunday audio.',
    actionLabel: 'Listen on Mixlr',
    url: 'https://mixlr.com/covenant',
    secondaryUrl: 'https://insightsforliving.org/audio-livestream/',
    secondaryLabel: 'Audio Stream Page',
  },
  {
    id: 'e-library',
    title: 'EXPLORE THE E-LIBRARY',
    schedule: 'Audio MP3 & Video Message Archive',
    description: 'Browse and download teachings by Pastor Poju Oyemade and guest ministers on faith, family, purpose, and prayer.',
    actionLabel: 'Visit the E-Library',
    url: 'https://elibrary.insightsforliving.org/',
  },
  {
    id: 'podcasts',
    title: 'WEEKLY PODCASTS',
    schedule: 'Insights for Living Broadcast',
    description: 'Practical weekly teachings to help you apply God’s Word across relationships, vocation, and everyday decisions.',
    actionLabel: 'Listen to Podcasts',
    url: 'https://anchor.fm/thecovenantnation',
    secondaryUrl: 'https://insightsforliving.org/weekly-podcast/',
    secondaryLabel: 'Podcast Page',
  },
  {
    id: 'confessions',
    title: 'CONFESSIONS',
    schedule: 'Daily Declarations & Study Guides',
    description: 'Read and download official faith confessions, prophetic declarations, and the Accessing the God Life study manual.',
    actionLabel: 'View Confessions',
    url: 'https://insightsforliving.org/downloads/',
  },
];
