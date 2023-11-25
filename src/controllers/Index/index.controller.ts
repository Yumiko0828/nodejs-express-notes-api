import { Request, Response } from "express";
import { version as express_version } from "express/package.json";

export class IndexController {
  main(req: Request, res: Response) {
    res.json({
      status: "Server working",
      express_version,
    });
  }
}
