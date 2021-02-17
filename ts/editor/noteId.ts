/* Copyright: Ankitects Pty Ltd and contributors
 * License: GNU AGPL, version 3 or later; http://www.gnu.org/licenses/agpl.html */

let currentNoteId: number | null = null;

export function setNoteId(id: number): void {
    currentNoteId = id;
}

export function getNoteId(): number | null {
    return currentNoteId;
}