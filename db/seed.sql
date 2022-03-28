create table startup_notes_users (
    user_id serial primary key,
    email varchar(100),
    password varchar(250),
    date_signed_up timestamp default now(),
    country_origin varchar,
    note_id integer default 0,
    notes varchar array
);