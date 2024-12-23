import Note from "../models/addNote.js";


export const createNote = async (req, res)=>{
    const { title, body } = req.body;

    const note = new Note({
        title,
        body
    })

    await note.save()
    res.status(201).json({
        message:"NOTE CREATED SUCCESSFULLY",
        note
    })
}

export const viewNote  = async (req, res)=>{
    const viewAllNotes = await Note.find()
    res.json(viewAllNotes)
}

export const noteId = async (req,res)=>{
    const particularNote = await Note.findById(req.params.id)
    res.json(particularNote)
}