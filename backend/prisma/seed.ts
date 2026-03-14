import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.favorite.deleteMany();
  await prisma.movie.deleteMany();
  await prisma.genre.deleteMany();

  const action = await prisma.genre.create({ data: { name: "Action" } });
  const comedy = await prisma.genre.create({ data: { name: "Comedy" } });
  const drama = await prisma.genre.create({ data: { name: "Drama" } });
  const sciFi = await prisma.genre.create({ data: { name: "Sci-Fi" } });
  const thriller = await prisma.genre.create({ data: { name: "Thriller" } });
  const horror = await prisma.genre.create({ data: { name: "Horror" } });
  const romance = await prisma.genre.create({ data: { name: "Romance" } });
  const animation = await prisma.genre.create({ data: { name: "Animation" } });
  const adventure = await prisma.genre.create({ data: { name: "Adventure" } });
  const crime = await prisma.genre.create({ data: { name: "Crime" } });

  const movies = [
    {
      title: "The Dark Knight",
      year: 2008,
      rating: 9.0,
      plot: "When the menace known as the Joker wreaks havoc on Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      genres: { connect: [{ id: action.id }, { id: crime.id }, { id: drama.id }] },
    },
    {
      title: "Inception",
      year: 2010,
      rating: 8.8,
      plot: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      genres: { connect: [{ id: action.id }, { id: sciFi.id }, { id: thriller.id }] },
    },
    {
      title: "Interstellar",
      year: 2014,
      rating: 8.7,
      plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      genres: { connect: [{ id: sciFi.id }, { id: adventure.id }, { id: drama.id }] },
    },
    {
      title: "The Shawshank Redemption",
      year: 1994,
      rating: 9.3,
      plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
      genres: { connect: [{ id: drama.id }] },
    },
    {
      title: "Pulp Fiction",
      year: 1994,
      rating: 8.9,
      plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      genres: { connect: [{ id: crime.id }, { id: drama.id }] },
    },
    {
      title: "The Matrix",
      year: 1999,
      rating: 8.7,
      plot: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNlYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      genres: { connect: [{ id: action.id }, { id: sciFi.id }] },
    },
    {
      title: "Forrest Gump",
      year: 1994,
      rating: 8.8,
      plot: "The presidencies of Kennedy and Johnson, the Vietnam War, and other events unfold from the perspective of an Alabama man with an IQ of 75.",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNjU1MjGYXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      genres: { connect: [{ id: drama.id }, { id: romance.id }] },
    },
    {
      title: "Fight Club",
      year: 1999,
      rating: 8.8,
      plot: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_SX300.jpg",
      genres: { connect: [{ id: drama.id }, { id: thriller.id }] },
    },
    {
      title: "The Godfather",
      year: 1972,
      rating: 9.2,
      plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son.",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      genres: { connect: [{ id: crime.id }, { id: drama.id }] },
    },
    {
      title: "Gladiator",
      year: 2000,
      rating: 8.5,
      plot: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      genres: { connect: [{ id: action.id }, { id: adventure.id }, { id: drama.id }] },
    },
    {
      title: "The Silence of the Lambs",
      year: 1991,
      rating: 8.6,
      plot: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to catch another serial killer.",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      genres: { connect: [{ id: thriller.id }, { id: crime.id }, { id: horror.id }] },
    },
    {
      title: "Toy Story",
      year: 1995,
      rating: 8.3,
      plot: "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom.",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtMDQzZjBhMGI3NjE5XkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg",
      genres: { connect: [{ id: animation.id }, { id: comedy.id }, { id: adventure.id }] },
    },
    {
      title: "The Departed",
      year: 2006,
      rating: 8.5,
      plot: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in Boston.",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg",
      genres: { connect: [{ id: crime.id }, { id: thriller.id }, { id: drama.id }] },
    },
    {
      title: "WALL-E",
      year: 2008,
      rating: 8.4,
      plot: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SX300.jpg",
      genres: { connect: [{ id: animation.id }, { id: sciFi.id }, { id: adventure.id }] },
    },
    {
      title: "The Hangover",
      year: 2009,
      rating: 7.7,
      plot: "Three buddies wake up from a bachelor party in Las Vegas with no memory of the previous night and the bachelor missing.",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      genres: { connect: [{ id: comedy.id }] },
    },
    {
      title: "Titanic",
      year: 1997,
      rating: 7.9,
      plot: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
      genres: { connect: [{ id: drama.id }, { id: romance.id }] },
    },
    {
      title: "Jurassic Park",
      year: 1993,
      rating: 8.2,
      plot: "A pragmatic paleontologist touring an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg",
      genres: { connect: [{ id: sciFi.id }, { id: adventure.id }, { id: action.id }] },
    },
    {
      title: "The Conjuring",
      year: 2013,
      rating: 7.5,
      plot: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_SX300.jpg",
      genres: { connect: [{ id: horror.id }, { id: thriller.id }] },
    },
    {
      title: "Superbad",
      year: 2007,
      rating: 7.6,
      plot: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BY2VkMDg4ZTYtN2M3Yy00NWZiLWE2ODEtZjU5MjZkYWNkZWE2XkEyXkFqcGdeQXVyODY5Njk4Njk@._V1_SX300.jpg",
      genres: { connect: [{ id: comedy.id }] },
    },
    {
      title: "Blade Runner 2049",
      year: 2017,
      rating: 8.0,
      plot: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg",
      genres: { connect: [{ id: sciFi.id }, { id: thriller.id }, { id: drama.id }] },
    },
  ];

  for (const movie of movies) {
    await prisma.movie.create({ data: movie });
  }

 
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
