import { writeFile, readFile } from "fs/promises";

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

async function initFile() {
  try {
    await writeFile("notes.json", JSON.stringify([]));
    console.log("notes.json initialized");
  } catch (error) {
    console.error("Failed to initialize file", error);
  }
}

async function readNotesNew(): Promise<Note[]> {
  const data = await readFile("notes.json", "utf-8");
  return JSON.parse(data) as Note[];
}

async function readNotes(): Promise<unknown[]> {
  const data = await readFile("notes.json", "utf-8");
  return JSON.parse(data);
}

initFile();
