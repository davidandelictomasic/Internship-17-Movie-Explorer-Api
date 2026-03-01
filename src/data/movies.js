const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    genre: "Drama",
    description: "A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.",
    poster: "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    genre: "Crime",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son.",
    poster: "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genre: "Action",
    description: "When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
  },
  {
    id: 4,
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    genre: "Crime",
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    poster: "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    id: 5,
    title: "Forrest Gump",
    year: 1994,
    rating: 8.8,
    genre: "Drama",
    description: "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
    poster: "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    id: 6,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genre: "Sci-Fi",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
  },
  {
    id: 7,
    title: "Fight Club",
    year: 1999,
    rating: 8.8,
    genre: "Drama",
    description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    poster: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    id: 8,
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    genre: "Sci-Fi",
    description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth -- the life he knows is the elaborate deception of an evil cyber-intelligence.",
    poster: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDL2XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    id: 9,
    title: "Goodfellas",
    year: 1990,
    rating: 8.7,
    genre: "Crime",
    description: "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.",
    poster: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    id: 10,
    title: "Interstellar",
    year: 2014,
    rating: 8.7,
    genre: "Sci-Fi",
    description: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot is tasked with piloting a spacecraft, along with a team of researchers, to find a new planet for humans.",
    poster: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    id: 11,
    title: "The Silence of the Lambs",
    year: 1991,
    rating: 8.6,
    genre: "Thriller",
    description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
    poster: "https://m.media-amazon.com/images/M/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    id: 12,
    title: "Gladiator",
    year: 2000,
    rating: 8.5,
    genre: "Action",
    description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    poster: "https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    id: 13,
    title: "The Departed",
    year: 2006,
    rating: 8.5,
    genre: "Crime",
    description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    poster: "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg"
  },
  {
    id: 14,
    title: "Whiplash",
    year: 2014,
    rating: 8.5,
    genre: "Drama",
    description: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    poster: "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRhLThmZDUtZDkzYWZhZmI1YzU3XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    id: 15,
    title: "The Prestige",
    year: 2006,
    rating: 8.5,
    genre: "Thriller",
    description: "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
    poster: "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_SX300.jpg"
  },
  {
    id: 16,
    title: "Parasite",
    year: 2019,
    rating: 8.5,
    genre: "Thriller",
    description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    poster: "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    id: 17,
    title: "Django Unchained",
    year: 2012,
    rating: 8.5,
    genre: "Western",
    description: "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation owner in Mississippi.",
    poster: "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg"
  },
  {
    id: 18,
    title: "The Lion King",
    year: 1994,
    rating: 8.5,
    genre: "Animation",
    description: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    poster: "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    id: 19,
    title: "Saving Private Ryan",
    year: 1998,
    rating: 8.6,
    genre: "War",
    description: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    poster: "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWQtZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    id: 20,
    title: "Back to the Future",
    year: 1985,
    rating: 8.5,
    genre: "Sci-Fi",
    description: "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
    poster: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    id: 21,
    title: "Alien",
    year: 1979,
    rating: 8.5,
    genre: "Horror",
    description: "After investigating a mysterious transmission of unknown origin, the crew of a commercial spacecraft encounters a deadly lifeform.",
    poster: "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    id: 22,
    title: "The Truman Show",
    year: 1998,
    rating: 8.2,
    genre: "Comedy",
    description: "An insurance salesman discovers his whole life is actually a reality TV show.",
    poster: "https://m.media-amazon.com/images/M/MV5BNjUxYjMzMDQtNzYyOS00OTY2LWE2NTctMTk3ZjIxMGNmMDQwXkEyXkFqcGc@._V1_SX300.jpg"
  }
]

export default movies
