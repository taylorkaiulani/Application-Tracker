import * as apps from './applications-model.mjs';
import express from 'express';
import 'dotenv/config';


const PORT = process.env.PORT;
const app = express();
app.use(express.json());


app.post('/applications', (req, res) => {
    apps.createApp(req.body.company, req.body.subDate, req.body.resume, req.body.oa, 
        req.body.phone, req.body.interview, req.body.intDate, req.body.offer, req.body.amount, 
        req.body.notes)
    .then(app => {
        res.status(201).json(app);
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({ Error: 'Uh-oh! Failed to add application. Please try again later.' });
    });
});

app.get('/applications', (req, res) => {
    apps.findApps()
        .then(apps => {
            res.status(200).json(apps);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Uh-oh! We cannot load your applications. Please try again later.' });
        });
});

app.put('/applications/:_id', (req, res) => {
    apps.replaceApp(req.params._id, req.body.company, req.body.subDate, req.body.resume, 
        req.body.oa, req.body.phone, req.body.interview, req.body.intDate, req.body.offer, 
        req.body.amount, req.body.notes)
        .then(app => {
            res.status(200).json(app)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Uh-oh! Failed to update application. Please try again later.' });
        });
});

app.delete('/applications/:_id', (req, res) => {
    apps.deleteApp(req.params._id)
        .then(
            res.status(204).send()
        )
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Uh-oh! Failed to delete application. Please try again later.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});