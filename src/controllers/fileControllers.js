export const uploadFile = (req, res) => {
    const file = req.file;
    return res.send("file uploaded")
};