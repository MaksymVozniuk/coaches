export default {
  addCoach(context, data) {
    const coachData = {
      id: `c${context.state.coaches.length + 1}`,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };
    context.commit('addCoach', coachData);
  },
};
