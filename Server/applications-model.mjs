import mongoose from 'mongoose';
import 'dotenv/config'


mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

const applicationSchema = mongoose.Schema({
    companyName:        {type: String, required: true},
    submissionDate:     {type: String, required: true},
    resumeVer:          {type: Number, required: false},
    onlineAssess:       {type: Boolean, required: false},
    phoneScreen:        {type: Boolean, required: false},
    interview:          {type: Boolean, required: false},
    interviewDate:      {type: String, required: false},
    offerReceived:      {type: Boolean, required: false},
    offerAmount:        {type: Number, required: false},
    notes:              {type: String, required: false}
});

const Application = mongoose.model("Application", applicationSchema);

const createApp = async (company, subDate, resume, oa, phone, interview, intDate, offer, amount, notes) => {
    const application = new Application(
        {   companyName: company, 
            submissionDate: subDate, 
            resumeVer: resume, 
            onlineAssess: oa, 
            phoneScreen: phone,
            interview: interview,
            interviewDate: intDate,
            offerReceived: offer,
            offerAmount: amount,
            notes: notes 
        });
    return application.save();
}

const findApps = async () => {
    const query = Application.find();
    return query.exec();
}

const replaceApp = async (id, company, subDate, resume, oa, phone, interview, intDate, offer, amount, notes) => {
    const result = await Application.findByIdAndUpdate({ _id: id }, 
        {   companyName: company, 
            submissionDate: subDate, 
            resumeVer: resume, 
            onlineAssess: oa, 
            phoneScreen: phone,
            interview: interview,
            interviewDate: intDate,
            offerReceived: offer,
            offerAmount: amount,
            notes: notes 
        },
        {new: true});
    
    return result;
}

const deleteApp = async (id) => {
    const result = await Application.deleteOne({ _id: id });
    return result.deletedCount;
}

export{ createApp, findApps, replaceApp, deleteApp }