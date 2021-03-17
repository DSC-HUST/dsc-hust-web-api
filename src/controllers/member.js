import {Member} from '../models';
import {handleAsync} from '../utils';

export const getAllMember = handleAsync(async(req, res) => {
    res.json(await Member.find({}));
});

export const getMemberById = handleAsync(async (req, res) => {
    res.json(await Member.findById(req.params.id));
});

export const createMember = handleAsync(async (req, res) => {
    const member = new Member(req.body);
    res.json(await member.save());
})

export const updateMember = handleAsync(async (req, res) => {
    res.json(await Member.findByIdAndUpdate(req.params.id, req.body, {new: true}));
});

export const deleteMember = handleAsync(async (req, res) => {
    const data = await Member.findByIdAndRemove(req.params.id);
    res.json({
        message: "delete success" 
    });
});