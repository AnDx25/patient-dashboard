export interface JourneyStep {
  id: number;
  title: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  department: string;
  concernedPerson: string;
  subSteps?: JourneyStep[];
}

export const mockJourney: JourneyStep[] = [
  {
    id: 1,
    title: 'Audiometry Test',
    status: 'Completed',
    department: 'Audiology',
    concernedPerson: 'Dr. Smith',
    subSteps: [
      { id: 11, title: 'Pure Tone Audiometry', status: 'Completed', department: 'Audiology', concernedPerson: 'Dr. Smith' },
      { id: 12, title: 'Speech Audiometry', status: 'Completed', department: 'Audiology', concernedPerson: 'Dr. Smith' },
    ],
  },
  {
    id: 2,
    title: 'Speech Test',
    status: 'In Progress',
    department: 'Speech Therapy',
    concernedPerson: 'Dr. Jones',
    subSteps: [
        { id: 21, title: 'Word Recognition Score', status: 'In Progress', department: 'Speech Therapy', concernedPerson: 'Dr. Jones' },
        { id: 22, title: 'Sentence Recognition Score', status: 'Pending', department: 'Speech Therapy', concernedPerson: 'Dr. Jones' },
    ],
  },
  {
    id: 3,
    title: 'Hearing Aid Trial',
    status: 'Pending',
    department: 'Audiology',
    concernedPerson: 'Dr. Davis',
    subSteps: [
      { id: 31, title: 'Hearing Aid Selection', status: 'Pending', department: 'Audiology', concernedPerson: 'Dr. Davis' },
      { id: 32, title: 'Hearing Aid Fitting', status: 'Pending', department: 'Audiology', concernedPerson: 'Dr. Davis' },
    ],
  },
  {
    id: 4,
    title: 'BERA (Brainstem Evoked Response Audiometry)',
    status: 'Pending',
    department: 'Neurology',
    concernedPerson: 'Dr. Wilson',
  },
  {
    id: 5,
    title: 'Tinnitus Evaluation',
    status: 'Pending',
    department: 'ENT',
    concernedPerson: 'Dr. Brown',
  },
];
