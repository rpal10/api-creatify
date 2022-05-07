import { Request, Response } from "express";
import axios from "axios";

const BEARER = ""; //Token from spotify

/**
 * Gets the liked songs from a user
 * @param req
 * @param res
 */
export const liked = (req: Request, res: Response) => {
  res.send("song");
};

/**
 * Gets a playlist from a user
 * @param req
 * @param res
 */
export const playlist = (req: Request, res: Response) => {
  const idPlaylist = req.params.id;
  const market = req.params.market;

  axios
    .get(
      `https://api.spotify.com/v1/playlists/${idPlaylist}/tracks?market=${market}`,
      {
        headers: {
          Authorization: `Bearer ${BEARER}`,
        },
      }
    )
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.log("Error", error);
      res.send("error");
    });
};
