create table startup_notes_users (
    user_id serial primary key,
    email varchar(100),
    password varchar(250),
    date_signed_up timestamp default now(),
    country_origin varchar
);