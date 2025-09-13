export interface JourneyStep {
  id: number;
  title: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  subSteps?: JourneyStep[];
}

export const mockJourney: JourneyStep[] = [
  {
    id: 1,
    title: 'Audiometry Test',
    status: 'Completed',
    subSteps: [
      { id: 11, title: 'Pure Tone Audiometry', status: 'Completed' },
      { id: 12, title: 'Speech Audiometry', status: 'Completed' },
    ],
  },
  {
    id: 2,
    title: 'Speech Test',
    status: 'In Progress',
    subSteps: [
        { id: 21, title: 'Word Recognition Score', status: 'In Progress' },
        { id: 22, title: 'Sentence Recognition Score', status: 'Pending' },
    ],
  },
  {
    id: 3,
    title: 'Hearing Aid Trial',
    status: 'Pending',
    subSteps: [
      { id: 31, title: 'Hearing Aid Selection', status: 'Pending' },
      { id: 32, title: 'Hearing Aid Fitting', status: 'Pending' },
    ],
  },
  {
    id: 4,
    title: 'BERA (Brainstem Evoked Response Audiometry)',
    status: 'Pending',
  },
  {
    id: 5,
    title: 'Tinnitus Evaluation',
    status: 'Pending',
  },
];
