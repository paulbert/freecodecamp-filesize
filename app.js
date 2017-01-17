var	express = require('express'),
	app = express(),
	multer = require('multer'),
	upload = multer();
	
app.set('port',process.env.PORT || 3000);
app.get('/',function(req,res) {
	res.sendFile('views/index.html', {root: __dirname })
});
	
app.get('/favicon.ico', function(req, res) {
	res.sendStatus(200);
});

app.post('/fileupload',upload.single('file'),function(req,res) {
	if(req.file) {
		res.send({'size':req.file.size});
	} else {
		res.send('No file sent');
	}
});

app.listen(app.get('port'), function() {
	console.log("Node app is running at localhost:" + app.get('port'));
});