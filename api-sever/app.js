const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();
const port = 3000;
const pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'quiz_db',
    password: 'docker',
    port: 5432,
});
app.use(express.json());
app.use(cors());

//get all question 
app.get('/quiz', (req, res)=>{
    async function getQuiz(){
        try{
            const result = await pool.query('SELECT * FROM quiz');
            res.status(200).send(result.rows);
        } catch(e){
            console.error(e.stack);
        }
    }
    getQuiz();

});

//get question by id
app.get('/quiz/:id', (req, res)=>{
    async function getQuizId(){
        try{
            const result = await pool.query(`SELECT * FROM quiz WHERE id = ${req.params.id}`);
            if(result.rowCount.length==0){
                res.sendStatus(404);
            }else {
                res.status(200).send(result.rows);
            }
        }catch(e) {
            console.error(e.stack);
        }
    }
    getQuizId();

});

//gets scoreboard
app.get('/scoreboard', (req, res)=>{
    async function getscoreBoard(){
        try{
            const result = await pool.query('SELECT * FROM scoreboard');
            console.log(result);
            res.send(result.rows);
        } catch(e) {
            console.error(e.stack);
        }
    }
    getscoreBoard();
});

//gets scoreboard by id
app.get('/scoreboard/:id', (req, res)=>{
    async function getscoreBoardById(){
        try{
            const result = await pool.query(`SELECT * FROM scoreboard WHERE id = ${req.params.id}`);
            if(result.rows.length==0){
                res.sendStatus(404);
            }else{
                res.status(200).send(result.rows[0]);
            }
        } catch(e) {
            console.error(e.stack);
        }
    }
    getscoreBoardById();
});
//delete scoreboard
app.delete('/scoreboard/:id',(req, res)=>{
    async function deleteScoreBoard(){
        try{
            const result = await pool.query(`DELETE FROM scoreboard WHERE id = ${req.params.id}`);
            res.status(200).send(result.rows);
        } catch (e) {
            console.error(e.stack);
        }
    }
    deleteScoreBoard();
});

app.post('/scoreboard', (req, res)=>{
    async function createScoreBoard() {
        try{
            let scoreBoard = req.body;
            let name = scoreBoard.name;
            let age = scoreBoard.age;
            let score = scoreBoard.score;
            const result = await pool.query(`INSERT INTO scoreboard (name, age, score) VALUES ('${name}', ${age}, ${score}) RETURNING *`);
            res.status(202).send(result.rows);
        } catch (e) {
            console.error(e.stack);
        }
    } 
    createScoreBoard();
});

app.patch('/scoreboard/:id', (req, res)=>{
    async function updateScoreBoard() {
        try{
            let scoreBoard = req.body;
            let name = scoreBoard.name;
            let age = scoreBoard.age;
            let score = scoreBoard.score;
            const result = await pool.query(`UPDATE scoreboard SET name='${name}', age= ${age}, score= ${score} WHERE id =${req.params.id}`);
            res.status(202).send(result.rows);
        } catch (e) {
            console.error(e.stack);
        }
    }
    updateScoreBoard();
});
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});