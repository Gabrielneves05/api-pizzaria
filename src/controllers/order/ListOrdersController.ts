import { Request, Response } from "express";
import { ListOrdersService } from "../../services/order/ListOrdersService";

class ListOrdersController {
    async handle(req: Request, res: Response) {
        const listOrdersService = new ListOrdersService()

        const oders = await listOrdersService.execute()

        return res.json(oders)
    }
}

export { ListOrdersController };