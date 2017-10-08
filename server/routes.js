module.exports = app => {

	app.get(`/`, (req, res) => {
		res.sendfile('./public/index.html');
	});

	const funnyStuff = {question: `Why did the chicken cross the road?`, answer: `To get to the other side`};

	app.get(`/data`, (req, res) => {
		res.json(funnyStuff);
	});
};