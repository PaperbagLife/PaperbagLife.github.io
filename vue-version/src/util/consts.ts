import coupletroubleUrl from '../assets/img/couple_trouble.png'
import cvshooterUrl from '../assets/img/cv_shooter.png'
import mobaUrl from '../assets/img/moba.png'
import shopsimUrl from '../assets/img/Shopsim.png'
import starrailUrl from '../assets/img/starrail.png'

type Project = {
  title: string
  timeline: string
  description: string
  img?: string
  link?: string
}

export const projectEntries: Project[] = [
  {
    title: 'League of Cylinders - C#, Unity',
    timeline: 'Sept 2021 - Oct 2021',
    description:
      'Inspired by my previous project that used unity navigation, I wanted to try recreating the basic structure of the popular game League of Legends. I created characters that attacks, casts projectiles, and navigates around the terrain.',
    img: mobaUrl
  },
  {
    title: 'ShopSim - C#, Unity',
    timeline: 'Jan 2021',
    description:
      "I created a fully animated 3D animation/simulation of shoppers walking around a shop. I used Unity's navigation to make pathing calculated at real time. I used finalIK to make realistic animations for the shoppers' 3D model. The simulation records paths of each shopper when they choose a destination to walk towards.",
    img: shopsimUrl,
    link: 'https://www.youtube.com/watch?v=bK8pCRX2u8I'
  },
  {
    title: 'Couple Trouble - Python, Pygames, OpenCV',
    timeline: 'Feb 2020',
    description:
      'I lead a team of 4 in Tartan Hacks 2020 and we won the "Best Valentines Hack" award. I was the main programmer for the game system. I used OpenCV to implement a control system that detects two different colors. The players has to hold hands wearing rings to control the car and avoid obstacles. This was an interesting take on the valentine theme, so we stood out and won.',
    img: coupletroubleUrl,
    link: 'https://www.youtube.com/watch?v=w7r6SNbJifU'
  },
  {
    title: 'CV Shooter- Python, Pygames, OpenCV',
    timeline: 'May 2019',
    description:
      "This was my 15-112 Project. It is a top-down space shooter game. I used OpenCV to implement a control system that detects a red color. The game uses a dynamic difficulty system that adjusts itself to the player's performance. The boss has various different attack patterns and a cool laser attack.",
    img: cvshooterUrl,
    link: 'https://www.youtube.com/watch?v=WvnU6LHCbh4'
  },
  {
    title: 'Cosmo Rail - Vue, Typescript',
    timeline: 'Sept 2023 - Ongoing',
    description:
      'After I started working on UI for my job, I thought I could use my newfound knowledge to make games using Vue and Typescript. I have made several minigames on my personal website, you can see them under the Games section on this website. The screenshot above is a turn based game with animations using css.',
    img: starrailUrl,
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
