import { model, Schema, Document } from "mongoose"

interface IAi extends Document {
  prompt: string
  options: Object
  resData: Object
  add_time_mydhms: Date
  add_time: Number
}

const aiSchema = new Schema({
  prompt: { type: String, required: true },
  options: { type: Object, default: {}, required: true },
  resData: { type: Object, default: {}, required: true },
  add_time_mydhms: { type: Date },
  add_time: { type: Number },
});

//静态方法

//查询所有
aiSchema.statics.findAll = function () {
  // 这里的this.find({})是调用Mongoose静态方法，而不是创建实例，所以不需要加new。因此，在这个方法中，this指代的是模型本身，它已经是一个构造函数了
  return this.find({}).sort({ id: -1 })//查到返回具体结果
}

//添加
// 在addPrompt方法中，你需要创建一个新的模型实例，以便能够将其保存到MongoDB数据库中。因为this指向的是模型本身，而模型本身不是一个模型实例，因此你需要使用new来创建一个新的模型实例，并调用它的save()方法来将其保存到数据库中。
// 换句话说，this(addData)返回的是一个新的模型实例，你需要对该实例调用save()方法，所以需要使用new来创建该实例，才能使其成为可保存到数据库的有效实例。
aiSchema.statics.addPrompt = async function (addData: object) {
  try {
    //或者 await AiModel.create(addData)
    return await new this(addData).save()
  }
  catch (e) {
    console.log(e)
    return e
  }
}

const AiModel = model<IAi>("ai", aiSchema,'ai')

export { AiModel, IAi }

