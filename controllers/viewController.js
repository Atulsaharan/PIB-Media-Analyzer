exports.getOverview = async (req, res) => {
    try {
        res.status(200).render("index.pug");

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
        await res.status(200).render("profile.pug", {
            random: "surbhi",
        });
    } catch (err) {
        //the catch block is not working currently
        res.status(500).send("something went very wrong");
    }
};
