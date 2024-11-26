import db from "../dbConfig.js";


export const getTodos = async (req, res) => {
    console.log("Getting the todos")
    db.connect()
    try {
        const { rows } = await db.query('SELECT * FROM todos ORDER BY id DESC');
        res.status(200).json(rows);
        console.log("getting data")
        console.log(rows)
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal Server Error' });

    }
};

export const getTodoById = async (req, res) => {
    const { id } = req.params;
    try {
        const { rows } = await db.query('SELECT * FROM todos WHERE id = $1', [id]);
        if (rows.length === 0) return res.status(404).json({ error: 'Todo not found' });
        res.status(200).json(rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const createTodo = async (req, res) => {
    const { text, completed } = req.body;
    try {
        const { rows } = await db.query(
            'INSERT INTO todos (text, completed) VALUES ($1, $2) RETURNING *',
            [text, completed]
        );
        res.status(201).json(rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { text, completed } = req.body;
    try {
        const { rows } = await db.query(
            'UPDATE todos SET text = $1, completed = $2 WHERE id = $3 RETURNING *',
            [text, completed, id]
        );
        if (rows.length === 0) return res.status(404).json({ error: 'Todo not found' });
        res.status(200).json(rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const { rows } = await db.query('DELETE FROM todos WHERE id = $1 RETURNING *', [id]);
        if (rows.length === 0) return res.status(404).json({ error: 'Todo not found' });
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
