module.exports = {
    saveNotes: async (req, res) => {
        const { userID, noteID, allNotes } = req.body;
        console.log("userID, noteID, allNotes: ", userID, noteID, allNotes);

        const db = req.app.get("db");

        let updatedNotes = await db.update_notes(userID, noteID, allNotes);
        console.log("updatedNotes: ", updatedNotes);

        res.send("Update successful!");
    }
}