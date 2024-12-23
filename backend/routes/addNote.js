import { Router } from "express";
import { createNote, viewNote, noteId } from "../controllers/addNote.js";

const router = Router();


router.post('/createNote', createNote);
router.get('/notes', viewNote);
router.get('/note/:id', noteId);


export default router