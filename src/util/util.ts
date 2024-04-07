import { jobList } from '@/data/job';
import { Job } from '@/types';

export const filterJobList = (job?: Job | null) => {
  if (job) {
    const filteredArr = jobList?.filter((el) => el[job])[0];

    const result: any[] = [];
    if (filteredArr) {
      for (const value of Object?.values(filteredArr)) {
        for (const [key, subValue] of Object?.entries<string[]>(value)) {
          subValue.forEach((arrayValue) => {
            result.push({
              name: `${key} ${arrayValue}`,
              value: arrayValue
            });
          });
        }
      }
    }

    return result;
  }

  return [];
};

export function filterImageUrl(url: string) {
  if (url && !url.includes('https://')) {
    return '';
  }
  return url;
}

export function formatMoney(money: number) {
  return new Intl.NumberFormat().format(money);
}
