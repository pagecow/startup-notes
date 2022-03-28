update startup_notes_users
set note_id = $2, notes = $3
where user_id = $1
returning *;