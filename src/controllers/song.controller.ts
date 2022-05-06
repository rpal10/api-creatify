import { Request, Response } from "express";

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
  res.send("playlist");
};
