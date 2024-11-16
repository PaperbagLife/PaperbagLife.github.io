import mobaImg from '../assets/img/moba.png'
import danmakuImg from '../assets/img/danmaku.png'
import shooterImg from '../assets/img/shooter.png'
import starrailImg from '../assets/img/starrail.png'
import youtubeImg from '../assets/img/youtube_channel.png'
import coupleImg from '../assets/img/couple_trouble.png'

export const COLUMN_FILL_RATIO = 0.84

export type Project = {
  title: string
  timeline?: string
  description: string
  img?: string
  youtube?: string
  link?: string
  route?: string
}

export const projectEntries: Project[] = [
  {
    title: 'League of Cylinders - C#, Unity',
    timeline: 'Sept 2021 - Oct 2021',
    description:
      'Inspired by my previous project that used unity navigation, I wanted to try recreating the basic structure of the popular game League of Legends. I created characters that attacks, casts projectiles, and navigates around the terrain.',
    img: mobaImg
  },
  {
    title: 'ShopSim - C#, Unity',
    timeline: 'Jan 2021',
    description:
      "I created a fully animated 3D animation/simulation of shoppers walking around a shop. I used Unity's navigation to make pathing calculated at real time. I used finalIK to make realistic animations for the shoppers' 3D model. The simulation records paths of each shopper when they choose a destination to walk towards.",
    youtube: 'https://www.youtube.com/embed/bK8pCRX2u8I?si=3ElUwQU_ogGa3lnD'
  },
  {
    title: 'Couple Trouble - Python, Pygames, OpenCV',
    timeline: 'Feb 2020',
    img: coupleImg,
    description:
      'I lead a team of 4 in Tartan Hacks 2020 and we won the "Best Valentines Hack" award. I was the main programmer for the game system. I used OpenCV to implement a control system that detects two different colors. The players has to hold hands wearing rings to control the car and avoid obstacles. This was an interesting take on the valentine theme, so we stood out and won.',
    youtube: 'https://www.youtube.com/embed/w7r6SNbJifU?si=n6_rSGrgoQ2iCHCF'
  },
  {
    title: 'CV Shooter- Python, Pygames, OpenCV',
    timeline: 'May 2019',
    description:
      "This was my 15-112 Project. It is a top-down space shooter game. I used OpenCV to implement a control system that detects a red color. The game uses a dynamic difficulty system that adjusts itself to the player's performance. The boss has various different attack patterns and a cool laser attack.",
    youtube: 'https://www.youtube.com/embed/WvnU6LHCbh4?si=lkFygfzb--4GqAKh'
  },
  {
    title: 'Cosmo Rail - Vue, Typescript',
    timeline: 'Sept 2023 - Ongoing',
    description:
      'After I started working on UI for my job, I thought I could use my newfound knowledge to make games using Vue and Typescript. I have made several minigames on my personal website, you can see them under the Games section on this website. The screenshot above is a turn based game with animations using css.',
    img: starrailImg,
    link: 'paperbaglife@github.io/#/games'
  },
  {
    title: 'Enter the Arena - C#, Unity',
    timeline: 'Sept 2018 - Dec 2018',
    description:
      'In my first year, I joined the Game Creation Society at CMU and worked with a team of 9 people. We created a 3D VR hack and slash game made for the HTC Vive headset. I worked on the enemy attack logic and did some testing for the game. ',
    link: 'https://www.gamecreation.org/games/enter_the_arena'
  }
]

export const interests: Project[] = [
  {
    title: 'Violin',
    timeline: '2006 - present',
    description:
      "Music has been a major part of my life. Whether I'm navigating the depths of sadness or riding the waves of energy, the violin is my faithful companion. I also have a YouTube Channel where I make J-pop and Vocaloid covers. Ocassionally I upload edited clips of my gaming journey.",
    link: 'https://www.youtube.com/c/PaperbagLife',
    img: youtubeImg
  },
  {
    title: 'Gaming/Game Design',
    timeline: '2010 - present',
    description:
      "I'm an avid gamer and aspiring game designer, and it all started back in 2012 when I received a PSP as a gift. Since then, gaming has been my passion, leading me through countless adventures and quests in virtual realms. But my interest didn't stop at just playing; it sparked a desire within me to create my own gaming experiences. I've explored various tools and platforms to bring my ideas to life. From experimenting with RPG Maker series, Powerpoint, and Scratch in the beginning, to mastering more advanced engines like GameMaker, Pygame, Unity, and Vue, my journey in game design has been a thrilling ride. You can catch a glimpse of these in the 'More' section above",
    link: '#/games'
  }
]

type Semester = {
  name: string
  courses: string[]
}
export const semesters: Semester[] = [
  {
    name: 'Fall 2018:',
    courses: [
      '15110 Principles of Computing',
      '21122 Integration and Approximation',
      '33121 Physics for Science Students',
      '82171 Elementary Japanese 1'
    ]
  },
  {
    name: 'Spring 2019:',
    courses: [
      '03121 Modern Biology',
      '15112 Fundamentals of Programming and Computer Science',
      '21127 Concepts of Mathematics',
      '21241 Matrices and Linear Transformations',
      '73102 Principles of Microeconomics',
      '76107 Writing about Data',
      '76108 Writing about Public Problems'
    ]
  },
  {
    name: 'Summer 1 2019:',
    courses: ['21259 Calculus in 3D', '21260 Differential Equations']
  },
  {
    name: 'Summer 2 2019:',
    courses: ['15122 Principles of Imperative Computation']
  },
  {
    name: 'Fall 2019:',
    courses: [
      '15150 Principles of Functional Programming',
      '15251 Great Ideas in Theoretical Computer Science',
      '21295 Putnam Seminar',
      '21325 Probability',
      '88120 Reason, Passion, and Cognition'
    ]
  },
  {
    name: 'Spring 2020:',
    courses: [
      '15210 Parallel and Sequential Data Structures and Algorithms',
      '15213 Introduction to Computer Systems',
      '21270 Intro to Mathematical Finance',
      '21380 Intro to Mathematical Modelling',
      '38230 Engage in Wellness'
    ]
  },
  {
    name: 'Fall 2020:',
    courses: [
      '10315 Machine Learning',
      '15281 Artificial Intelligence: Representation and Problem Solving',
      '21370 Discrete Time Finance',
      '33104 Experimental Physics',
      '76270 Writing for the Professions'
    ]
  },
  {
    name: 'Spring 2021:',
    courses: [
      '21420 Continuous Time Finance',
      '15451 Algorithms',
      '15440 Distributed Systems',
      '73103 Principles of Macro Economics',
      '80100 Introduction to Philosophy'
    ]
  },
  {
    name: 'Fall 2021:',
    courses: [
      '15462 Computer Graphics',
      '15317 Constructive Logic',
      '82279 Anime - Visual Interplay between Japan and the World',
      '80283 IMHYSI(Linguistics) '
    ]
  },
  {
    name: 'Spring 2022:',
    courses: [
      '15330 Introduction to Computer Security',
      '33120 Science and Science Fiction',
      '85102 Introduction to Psychology',
      '15195 Competition Programming ',
      '98012 Stuco: Fun with Robots'
    ]
  }
]

type WebGameProject = Project & {
  route: string
}

export const games: WebGameProject[] = [
  {
    title: 'Shooter',
    img: shooterImg,
    description: 'Simple top-down shooter game using DOMs',
    route: '/games/shooter'
  },
  {
    title: 'Danmaku',
    img: danmakuImg,
    description: 'Tohou-like top-down bullet hell using canvas',
    route: '/games/danmaku'
  },
  {
    title: 'Star rail',
    img: starrailImg,
    description: 'Turn based combat similar to Honkai Star Rail',
    route: '/games/starrail'
  }
]
