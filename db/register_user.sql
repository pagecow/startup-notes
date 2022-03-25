INSERT INTO startup_notes_users
    (email, password, country_origin)
VALUES
    ($1, $2, $3)
returning *;