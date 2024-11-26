-- Create the database 
CREATE DATABASE todo_app;

-- Connect to the database
\c todo_app;

-- Create the todos table
CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    text VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Insert some sample data (optional)
INSERT INTO
    todos (text, completed, time)
VALUES (
        'Learn React',
        false,
        '2024-11-13 06:00:00'
    ),
    (
        'Learn Node.js',
        false,
        '2024-11-13 06:10:00'
    ),
    (
        'Create a To-Do app',
        true,
        '2024-11-13 06:20:00'
    );