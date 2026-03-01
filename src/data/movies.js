import shawshankRedemption from '../assets/images/shawshank-redemption.jpg'
import theGodfather from '../assets/images/the-godfather.png'
import darkKnight from '../assets/images/dark-knight.jpg'
import pulpFiction from '../assets/images/pulp-fiction.jpg'
import forrestGump from '../assets/images/forrest-gump.jpg'
import inception from '../assets/images/inception.jpg'
import fightClub from '../assets/images/fight-club.jpg'
import theMatrix from '../assets/images/the-matrix.jpg'
import goodfellas from '../assets/images/goodfellas.png'
import interstellar from '../assets/images/interstellar.jpg'
import silenceOfTheLambs from '../assets/images/silence-of-the-lambs.jpg'
import gladiator from '../assets/images/gladiator.jpg'
import departed from '../assets/images/departed.jpg'
import whiplash from '../assets/images/whiplash.jpg'
import prestige from '../assets/images/prestige.jpg'
import parasite from '../assets/images/parasite.jpg'
import djangoUnchained from '../assets/images/django-unchained.jpg'
import theLionKing from '../assets/images/the-lion-king.jpg'
import savingPrivateRyan from '../assets/images/saving-private.jpg'
import backToTheFuture from '../assets/images/back-to-future.jpg'
import alien from '../assets/images/alien.jpg'
import theTrumanShow from '../assets/images/the-truman-show.jpg'

const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    genre: "Drama",
    description: "A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.",
    poster: shawshankRedemption
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    genre: "Crime",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son.",
    poster: theGodfather
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genre: "Action",
    description: "When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster: darkKnight
  },
  {
    id: 4,
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    genre: "Crime",
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    poster: pulpFiction
  },
  {
    id: 5,
    title: "Forrest Gump",
    year: 1994,
    rating: 8.8,
    genre: "Drama",
    description: "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
    poster: forrestGump
  },
  {
    id: 6,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genre: "Sci-Fi",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    poster: inception
  },
  {
    id: 7,
    title: "Fight Club",
    year: 1999,
    rating: 8.8,
    genre: "Drama",
    description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    poster: fightClub
  },
  {
    id: 8,
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    genre: "Sci-Fi",
    description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth -- the life he knows is the elaborate deception of an evil cyber-intelligence.",
    poster: theMatrix
  },
  {
    id: 9,
    title: "Goodfellas",
    year: 1990,
    rating: 8.7,
    genre: "Crime",
    description: "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.",
    poster: goodfellas
  },
  {
    id: 10,
    title: "Interstellar",
    year: 2014,
    rating: 8.7,
    genre: "Sci-Fi",
    description: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot is tasked with piloting a spacecraft, along with a team of researchers, to find a new planet for humans.",
    poster: interstellar
  },
  {
    id: 11,
    title: "The Silence of the Lambs",
    year: 1991,
    rating: 8.6,
    genre: "Thriller",
    description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
    poster: silenceOfTheLambs
  },
  {
    id: 12,
    title: "Gladiator",
    year: 2000,
    rating: 8.5,
    genre: "Action",
    description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    poster: gladiator
  },
  {
    id: 13,
    title: "The Departed",
    year: 2006,
    rating: 8.5,
    genre: "Crime",
    description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    poster: departed
  },
  {
    id: 14,
    title: "Whiplash",
    year: 2014,
    rating: 8.5,
    genre: "Drama",
    description: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    poster: whiplash
  },
  {
    id: 15,
    title: "The Prestige",
    year: 2006,
    rating: 8.5,
    genre: "Thriller",
    description: "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
    poster: prestige
  },
  {
    id: 16,
    title: "Parasite",
    year: 2019,
    rating: 8.5,
    genre: "Thriller",
    description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    poster: parasite
  },
  {
    id: 17,
    title: "Django Unchained",
    year: 2012,
    rating: 8.5,
    genre: "Western",
    description: "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation owner in Mississippi.",
    poster: djangoUnchained
  },
  {
    id: 18,
    title: "The Lion King",
    year: 1994,
    rating: 8.5,
    genre: "Animation",
    description: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    poster: theLionKing
  },
  {
    id: 19,
    title: "Saving Private Ryan",
    year: 1998,
    rating: 8.6,
    genre: "War",
    description: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    poster: savingPrivateRyan
  },
  {
    id: 20,
    title: "Back to the Future",
    year: 1985,
    rating: 8.5,
    genre: "Sci-Fi",
    description: "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
    poster: backToTheFuture
  },
  {
    id: 21,
    title: "Alien",
    year: 1979,
    rating: 8.5,
    genre: "Horror",
    description: "After investigating a mysterious transmission of unknown origin, the crew of a commercial spacecraft encounters a deadly lifeform.",
    poster: alien
  },
  {
    id: 22,
    title: "The Truman Show",
    year: 1998,
    rating: 8.2,
    genre: "Comedy",
    description: "An insurance salesman discovers his whole life is actually a reality TV show.",
    poster: theTrumanShow
  }
]

export default movies
