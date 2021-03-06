import myCharactersRepo from "../../../../utils/character-repo";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      {
        let {id} = req.query;
        if (!id) {
          res.status(404).json({error: "No character!"});
        }

        let character = myCharactersRepo.getById(id);

        res.status(200).json({
          character: character,
        });
      }
      break;
    case "PUT":
      {
        setTimeout(() => {
          const body = req.body;

          let random_boolean = req.body.favourite ? Math.random() < 0.7 : true;

          if (random_boolean === true) {
            myCharactersRepo.update(body);
            res.status(200).json("success");
          } else {
            res.status(500).json({error: "failed to load data"});
          }
        }, req.body.favourite && 3000);
      }
      break;

    case "DELETE":
      {
        let {id} = req.query;

        myCharactersRepo.delete(id);
        res.status(200).json("success");
      }
      break;
  }
}
