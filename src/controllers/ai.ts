
import { timeTools } from "../lib/tools"
import { AiModel, IAi } from "../models/ai"
import { encode, decode } from 'gpt-3-encoder'
import { Request, Response, NextFunction } from 'express'
//添加
export const aiAdd = async (req: Request, res: Response, next: NextFunction) => {

    //验证
    try {
        const addData: IAi = Object.assign(req.body, { add_time: timeTools.getUnix(), add_time_mydhms: timeTools.getNowTime() })

        console.log(req.body)
        let result: IAi | Error
        //增加数据
        result = await (AiModel as typeof AiModel & { addPrompt: (addData: object) => Promise<IAi> }).addPrompt(addData);

        if (result._id != null) {

            res.json({
                status: 'Success',
                message: "ok",
                data: {
                    ans: 'ok'
                },
            })
        }
        else {
            res.json({
                success: true,
                message: "false",
                data: result,
            })
        }

    }
    catch (err: any) {
        console.log(err)
        res.json({
            success: false,
            message: "error",
            data: err.toString(),
        })
    }

}

//估算token大小
export const tokenSize = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(req.body)
        if (!req.body) {
            console.log("请求体为空")
            res.json({
                success: false,
                message: "error",
                data: "请求体为空",
            })
            return
        }
        if (req.body?.content.trim() == "") {
            console.log("不能为空")
            res.json({
                status: 'Success',
                message: "ok",
                data: {
                    tLength: 0
                },
            })
            return
        }
        const encoded = encode(req.body?.content)
        const decoded = decode(encoded)
        const tLength = encoded.length
        res.json({
            status: 'Success',
            message: "ok",
            data: {
                tLength
            },
        })
    }
    catch (err) {
        console.log(err)
        res.json({
            success: false,
            message: "error",
            data: err?.toString(),
        })
    }


}
