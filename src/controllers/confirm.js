import {handleAsync} from '../utils';
import {Confirm} from '../models';

export const confirmEmail = handleAsync(async(req, res) => {
    const email = req.query.email;
    const confirm = new Confirm({email});
    await confirm.save();
    res.status(301).redirect('http://www.dsc-hust.club/events/submit');
});

