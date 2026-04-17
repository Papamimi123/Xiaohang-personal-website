import { getSiteCopy } from "@/data/siteCopy";

/** Social URLs — replace with your profiles */
const socialLinksBase = [
  {
    id: 'instagram',
    label: 'IG',
    href: 'https://www.instagram.com/papa_jd'
  },
  {
    id: 'linkedin',
    label: 'in',
    href: 'https://www.linkedin.com/in/xiaohangchu'
  },
  {
    id: 'github',
    label: 'GH',
    href: 'https://github.com/xiaohangchu'
  },
  {
    id: 'douyin',
    label: '抖音',
    href: 'https://www.douyin.com/ganmi821'
  }
];

export const getSocialNavItems = (language = 'en') => {
  const titles = getSiteCopy(language).socialTitles;

  return socialLinksBase.map((item) => ({
    ...item,
    title: titles[item.id]
  }));
};

export const socialNavItems = getSocialNavItems();
