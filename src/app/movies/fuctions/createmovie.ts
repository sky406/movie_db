import { movie } from "../interfaces/movie.interface"
import { generate_d } from "./generatedate"

export function create_mov(title:string = 'lorem',
                          release:Date = generate_d(2012,12,12),
                          genre:string[] = ['idk'],
                          rating:number|string = 'TBD',
                          poster:string):movie
{
  if(rating > 10 )rating=10;
  else if(rating < 0)rating= 0;
  return{
    Title:title,
    release:release,
    genre:genre,
    rating:rating,
    poster:poster
  }

}
