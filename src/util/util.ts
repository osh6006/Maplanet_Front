import { jobList } from '@/data/job';
import { Job } from '@/types';

export const filterJobList = (job: Job) => {
  const filteredArr = jobList.filter((el) => el[job])[0];

  const result: any[] = [];
  for (const value of Object.values(filteredArr)) {
    for (const [key, subValue] of Object.entries<string[]>(value)) {
      subValue.forEach((arrayValue) => {
        result.push({
          name: `${key} ${arrayValue}`,
          value: arrayValue
        });
      });
    }
  }

  return result;
};
