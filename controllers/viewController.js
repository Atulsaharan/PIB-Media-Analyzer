const db = require("./../utils/dbclient");
exports.getOverview = async (req, res) => {
    try {
        await db.client.connect();
        const database = db.client.db("PIB");
        const collection = database.collection("news");
        const articles = await collection.find({}).toArray();
        res.status(200).render("index.pug", {
            articles,
        });

        //we would need to await the query for getting news from the database
    } catch (err) {
        res.status(500).json({
            status: "error",
            err: err.message,
            err,
        });
    }
};

exports.getLoginForm = async (req, res) => {
    try {
        await res.status(200).render("login.pug");
    } catch (err) {
        //the catch block is not working currently
        res.status(500).send("something went very wrong");
    }
};

exports.showProfile = async (req, res) => {
    try {
<<<<<<< HEAD
        await res.status(200).render("profile.pug", {
        });
=======
        await res.status(200).render("profile.pug", {});
>>>>>>> 1c3ba06b67195e291d81d2adb0e0bf410c945a2c
    } catch (err) {
        //the catch block is not working currently
        res.status(500).send("something went very wrong");
    }
};

exports.getPIBmediaAbout=async(req,res)=>{
    try{
        await res.status(200).render("about.pug");
    }catch(err){
        res.status(500).send("something went very wrong")
    }
}

exports.showDepInfo=async(req,res)=>{
    try{
        await res.status(200).render("deptInfo.pug");
    }catch(err){
        res.status(500).send("something went very wrong")
    }
}