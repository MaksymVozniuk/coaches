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
          firstName: 'Emma',
          lastName: 'Williams',
          areas: ['frontend', 'career'],
          description:
            'I am Emma, a frontend developer with 8 years of experience. I specialize in helping you build stunning user interfaces and advance in your tech career.',
          hourlyRate: 28,
        },
        {
          id: 'c5',
          firstName: 'Michael',
          lastName: 'Brown',
          areas: ['backend', 'career'],
          description:
            'I am Michael, a backend engineer with extensive knowledge in server-side development. I can assist you with backend challenges and provide career mentoring.',
          hourlyRate: 32,
        },
        {
          id: 'c6',
          firstName: 'Sophia',
          lastName: 'Taylor',
          areas: ['frontend'],
          description:
            'I am Sophia, a skilled frontend developer. I focus on helping you master the latest frontend technologies and build high-performance web applications.',
          hourlyRate: 27,
        },
        {
          id: 'c7',
          firstName: 'James',
          lastName: 'Anderson',
          areas: ['backend'],
          description:
            'I am James, an experienced backend developer. I offer guidance on building robust backend systems and optimizing server performance.',
          hourlyRate: 34,
        },
        {
          id: 'c8',
          firstName: 'Olivia',
          lastName: 'Martinez',
          areas: ['frontend', 'career'],
          description:
            'I am Olivia, a seasoned frontend developer. I can help you create beautiful, responsive web designs and provide career advice to grow in the tech industry.',
          hourlyRate: 29,
        },
        {
          id: 'c9',
          firstName: 'William',
          lastName: 'Garcia',
          areas: ['backend', 'career'],
          description:
            'I am William, a backend developer with a decade of experience. I specialize in backend development and career progression strategies.',
          hourlyRate: 33,
        },
        {
          id: 'c10',
          firstName: 'Natalie',
          lastName: 'Lee',
          areas: ['backend', 'frontend', 'career'],
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
