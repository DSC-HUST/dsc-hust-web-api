import {handleAsync} from '../utils';
import {Confirm} from '../models';
import _ from 'lodash';


export const confirmEmail = handleAsync(async(req, res) => {
    const email = req.query.email;
    const confirm = new Confirm({email});
    await confirm.save();
    res.status(301).redirect('http://www.dsc-hust.club/events/submit');
});

export const getAllConfirmEmail = handleAsync(async (req, res) => {
    const confirms = await Confirm.find({});
    const emails = confirms.map(confirm => confirm.email);
    res.json(_.uniq(emails));
});

