import { Job } from '@/types';
import { filterJobList } from '@/util/util';
import { useEffect, useState } from 'react';

export default function useJobList() {
  const [selectedJob, setSelectedJob] = useState<Job>('전사');
  const [filteredJobList, setFilteredJobList] = useState<any[]>([]);

  const handleSelect = (job: Job) => {
    setSelectedJob(job);
  };

  useEffect(() => {
    setFilteredJobList(filterJobList(selectedJob));
  }, [selectedJob]);

  return { selectedJob, handleSelect, filteredJobList };
}
