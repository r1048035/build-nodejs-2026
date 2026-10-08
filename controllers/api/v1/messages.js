// import Message model
import Message from '../../../models/api/v1/Message.js';

export const list = async (req, res)=>{
    const messages = await Message.find({});
  
    const result = {
      'status': 'success',
      'data': {
        'messages': messages
      }
    }
    res.json(result);
};

export const get = (req, res)=>{
    res.send("GET message with id" + req.params.id);
};

export const create = async (req, res) => {
    console.log(req.body);

    try {
        const message = new Message({
            text: req.body.text,
            username: req.body.username
        });
        const savedMessage = await message.save();
        const result = {
            'status': 'success',
            'data': {
                'message': savedMessage
            }
        };
        res.json(result);
    } catch (err) {
        res.status(500).send("Something went wrong");
    }
};
