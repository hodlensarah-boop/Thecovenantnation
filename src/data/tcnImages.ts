import logoTransparent from '../assets/tcn/logo-transparent.webp';
import pastorPojuPortrait from '../assets/tcn/pastor-poju-about.webp';
import pastorPojuTeaching from '../assets/tcn/gallery-3.webp';
import heroCommunity from '../assets/tcn/pg-160.webp';
import firstVisitEntrance from '../assets/tcn/wa-2.webp';
import spiritualGrowthBible from '../assets/tcn/pg-159.webp';
import studyTogether from '../assets/tcn/pg-155.webp';
import communityFellowship from '../assets/tcn/pg-easter2.webp';
import communityJoy from '../assets/tcn/pg-easter7.webp';
import worshipHands from '../assets/tcn/pg-153.webp';
import prayerCongregation from '../assets/tcn/pg-154.webp';
import worshipLead from '../assets/tcn/pg-93.webp';
import choirPraise from '../assets/tcn/pg-372019.webp';
import pastorTeachingLight from '../assets/tcn/hero-cand-85.webp';
import childrenMinistry from '../assets/tcn/card-children.webp';
import jesusTribeMinistry from '../assets/tcn/card-jesustribe.webp';
import youthMinistry from '../assets/tcn/card-youth.webp';
import startJourneyBelong from '../assets/tcn/pg-6z7a6181.webp';

export interface HeroSlideImage {
  id: string;
  src: string;
  alt: string;
  objectPosition: string;
}

export const TCN_IMAGES = {
  logo: {
    src: logoTransparent,
    alt: 'The Covenant Nation official crest emblem',
  },
  heroCommunity: {
    src: heroCommunity,
    alt: 'Warm multi-generational congregation at The Covenant Nation clapping and smiling together during worship',
  },
  pastorPojuPortrait: {
    src: pastorPojuPortrait,
    alt: 'Pastor Poju Oyemade, Senior Pastor and Founder of The Covenant Nation',
  },
  pastorPojuTeaching: {
    src: pastorPojuTeaching,
    alt: 'Pastor Poju Oyemade teaching from the pulpit at The Covenant Nation',
  },
  pastorTeachingLight: {
    src: pastorTeachingLight,
    alt: 'Pastor Poju Oyemade teaching God’s Word at The Covenant Nation',
  },
  firstVisitEntrance: {
    src: firstVisitEntrance,
    alt: 'Welcoming front entrance of The Covenant Place displaying Welcome to The Covenant Nation',
  },
  spiritualGrowthBible: {
    src: spiritualGrowthBible,
    alt: 'Member of The Covenant Nation studying an open Bible with a notebook during service',
  },
  studyTogether: {
    src: studyTogether,
    alt: 'Believers taking notes and reading Scripture together during a Covenant Nation gathering',
  },
  communityFellowship: {
    src: communityFellowship,
    alt: 'Joyful members of The Covenant Nation smiling warmly together in community',
  },
  startJourneyBelong: {
    src: startJourneyBelong,
    alt: 'Warm multi-generational Covenant Nation family members smiling and worshipping side by side in unity',
  },
  communityJoy: {
    src: communityJoy,
    alt: 'Worshippers rejoicing together in warm fellowship at The Covenant Nation',
  },
  worshipHands: {
    src: worshipHands,
    alt: 'Heartfelt worship and prayer among believers at The Covenant Nation',
  },
  prayerCongregation: {
    src: prayerCongregation,
    alt: 'Congregation standing and kneeling in united prayer at The Covenant Nation',
  },
  worshipLead: {
    src: worshipLead,
    alt: 'Worshippers leading praise from the sanctuary platform at The Covenant Nation',
  },
  choirPraise: {
    src: choirPraise,
    alt: 'The Covenant Nation choir leading worship together',
  },
  childrenMinistry: {
    src: childrenMinistry,
    alt: 'Children’s Church ministry at The Covenant Nation in safe, creative classrooms',
  },
  jesusTribeMinistry: {
    src: jesusTribeMinistry,
    alt: 'Jesus Tribe teenage church at The Covenant Nation in worship and small-group fellowship',
  },
  youthMinistry: {
    src: youthMinistry,
    alt: 'Covenant Connect Youth Church community worshipping and connecting together',
  },
};

export const HERO_SLIDER_IMAGES: HeroSlideImage[] = [
  {
    id: 'worship-stage',
    src: '/assets/aistudio/Screenshot_20261120_184842_Chrome_4702854c.jpg',
    alt: 'The Covenant Nation worship team leading heartfelt worship on stage',
    objectPosition: 'object-[center_24%]',
  },
  {
    id: 'congregation-joy',
    src: heroCommunity,
    alt: 'Warm multi-generational congregation at The Covenant Nation clapping and smiling together during worship',
    objectPosition: 'object-[center_20%]',
  },
  {
    id: 'community-fellowship',
    src: communityFellowship,
    alt: 'Smiling believers celebrating and worshipping together at The Covenant Nation',
    objectPosition: 'object-[center_22%]',
  },
  {
    id: 'united-prayer',
    src: prayerCongregation,
    alt: 'Members of The Covenant Nation standing together in passionate prayer and worship',
    objectPosition: 'object-[center_22%]',
  },
  {
    id: 'rejoicing-family',
    src: communityJoy,
    alt: 'Joyful worshippers praising God together as one family at The Covenant Nation',
    objectPosition: 'object-[center_18%]',
  },
  {
    id: 'choir-praise',
    src: choirPraise,
    alt: 'The Covenant Nation choir leading joyful praise during a Sunday service',
    objectPosition: 'object-[center_20%]',
  },
  {
    id: 'pastor-teaching',
    src: pastorTeachingLight,
    alt: 'Pastor Poju Oyemade sharing God’s Word at The Covenant Nation',
    objectPosition: 'object-[center_18%]',
  },
];

