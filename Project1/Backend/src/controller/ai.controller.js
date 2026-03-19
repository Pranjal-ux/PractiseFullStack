const aiServices = require('../Services/ai.services')
module.exports.getResponse = async (req,res)=>{
const prompt = req.query.prompt;
if(!prompt){
    return res.status(400).send("Prompt is required")
}
const response  = await aiServices(prompt)

res.send(response)

}