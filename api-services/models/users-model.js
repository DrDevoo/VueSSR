import mongoose from 'mongoose'

const UsersScheme = mongoose.Schema({
    name:{
        type: String,
        default: "user",
    },
    age:{
        type: Number,
        default: 18,
    },
});

export default mongoose.model('Users', UsersScheme);