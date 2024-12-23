import mongoose from 'mongoose'

const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb+srv://Traccie_0:O47Pp4YfsUZ7kTww@BackendCluster.yz7pv.mongodb.net/?ret' +
        'ryWrites=true&w=majority&appName=BackendCluster/noteApp');
        console.log('connected to mongod');
        
    }catch(error){
        console.error('Database connection failed')
        process.exit(1)
    }
}

export default connectDB