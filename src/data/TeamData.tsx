// src/data/teamData.ts
 import ceo from '../asset/Ceo.jpg';
export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Dilip Singh Rathore',
    role: 'Founder',
    image: ceo,
    bio: 'Passionate about creating unforgettable flavors and event experiences.',
  },
];

export default teamMembers;
