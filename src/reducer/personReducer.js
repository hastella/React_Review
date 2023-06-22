export default function personReducer(person, action) {
  switch (action.type) {
    case "updated": {
      const { prev, current } = action;
      // const prev = action.prev;
      // const current = action.current;
      return {
        ...person,
        mentors: person.mentors.map((mentor) =>
          mentor.name === prev ? { ...mentor, name: current } : mentor
        ),
      };
    }
    case "added": {
      const { name, title } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name, title }],
      };
    }
    case "deleted": {
      const { name } = action;
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== name),
      };
    }
    default: {
      throw new Error(`알수없는 액션 타입: ${action.type}`);
    }
  }
}
