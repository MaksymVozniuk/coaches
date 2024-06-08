import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Maksym',
          lastName: 'Vozniuk',
          areas: ['frontend', 'backend', 'career'],
          description: "I'm Maksym and I'm retard!",
          hourlyRate: 21,
        },
        {
          id: 'c2',
          firstName: 'Julie',
          lastName: 'Jones',
          areas: ['frontend', 'career'],
          description:
            'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30,
        },
        {
          id: 'c3',
          firstName: 'Alexander',
          lastName: 'Smith',
          areas: ['backend', 'career'],
          description:
            'I am Alexander with 10 years of experience in backend development. I can guide you through complex backend challenges and career advancements.',
          hourlyRate: 35,
        },
        {
          id: 'c4',
          firstName: 'Samantha',
          lastName: 'Green',
          areas: ['frontend', 'backend', 'design'],
          description:
            'My name is Samantha. With expertise in both frontend and backend, I can help you become a full-stack developer and also enhance your design skills.',
          hourlyRate: 40,
        },
        {
          id: 'c5',
          firstName: 'Michael',
          lastName: 'Brown',
          areas: ['backend', 'database', 'career'],
          description:
            'I am Michael, specialized in backend and database management. I can assist you in mastering database technologies and advancing your career.',
          hourlyRate: 32,
        },
        {
          id: 'c6',
          firstName: 'Laura',
          lastName: 'Wilson',
          areas: ['frontend', 'ux/ui'],
          description:
            'My name is Laura. I have a strong background in frontend development and UX/UI design. Let me help you create stunning and user-friendly web applications.',
          hourlyRate: 28,
        },
        {
          id: 'c7',
          firstName: 'John',
          lastName: 'Doe',
          areas: ['full-stack', 'career'],
          description:
            'I am John, a full-stack developer with a passion for teaching. I can guide you through the process of becoming a proficient full-stack developer.',
          hourlyRate: 33,
        },
        {
          id: 'c8',
          firstName: 'Emily',
          lastName: 'Clark',
          areas: ['frontend', 'backend', 'database'],
          description:
            'My name is Emily. I have experience in both frontend and backend, as well as database management. I can provide comprehensive training in web development.',
          hourlyRate: 36,
        },
        {
          id: 'c9',
          firstName: 'Daniel',
          lastName: 'Johnson',
          areas: ['frontend', 'mobile'],
          description:
            'I am Daniel, specialized in frontend and mobile development. I can help you build responsive web and mobile applications.',
          hourlyRate: 31,
        },
        {
          id: 'c10',
          firstName: 'Natalie',
          lastName: 'Lee',
          areas: ['backend', 'cloud', 'career'],
          description:
            'My name is Natalie. With expertise in backend and cloud technologies, I can help you deploy scalable applications and advance in your career.',
          hourlyRate: 38,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
