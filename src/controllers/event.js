import {handleAsync} from '../utils';
import {Event} from '../models';

export const createEvent = handleAsync(async(req, res) => {
    const event = new Event(req.body);
    res.json(await event.save());
});

export const getAllEvent = handleAsync(async(req, res) => {
    res.json(await Event.find({}));
});

export const getEvent = handleAsync(async(req, res) => {
    res.json(await Event.findById(req.params.id));
});

export const updateEvent = handleAsync(async(req, res) => {
    res.json(await Event.findByIdAndUpdate(req.params.id, {
        ...req.body
    }, {new: true}));
});