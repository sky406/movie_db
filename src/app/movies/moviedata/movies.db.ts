import { generate_d } from "../fuctions/generatedate";
import { create_mov } from "../fuctions/createmovie";
import { movie } from "../interfaces/movie.interface";

export const movies:movie[] =
[
  create_mov('Sonic the hedgehog 2',generate_d(2022,4,8),['action'],8,".assets\movieposters\sonic-2-poster.jpg"),
  create_mov('Doctor Strange in the Multiverse of Madness',generate_d(2022,5,29),undefined,undefined,".assets\movieposters\sonic-2-poster.jpg"),
  create_mov('The Mask',generate_d(1994,7,29),['comedy','fantasy'],7,'.assets\movieposters\the mask.jpg')
]
