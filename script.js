document.getElementById('add-note').addEventListener('click', addNote);

function addNote() {
    const title = document.getElementById('note-title').value;
    const content = document.getElementById('note-content').value;

    if (title === '' || content === '') {
        alert('Please fill in both fields.');
        return;
    }

    const notesContainer = document.getElementById('notes-container');

    const noteDiv = document.createElement('div');
    noteDiv.className = 'note';

    const noteTitle = document.createElement('h3');
    noteTitle.textContent = title;

    const noteContent = document.createElement('p');
    noteContent.textContent = content;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        notesContainer.removeChild(noteDiv);
    });

    noteDiv.appendChild(noteTitle);
    noteDiv.appendChild(noteContent);
    noteDiv.appendChild(deleteBtn);

    notesContainer.appendChild(noteDiv);

    // Clear the input fields after adding the note
    document.getElementById('note-title').value = '';
    document.getElementById('note-content').value = '';
}
