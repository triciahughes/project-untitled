# Generating a React Application
## Spin up React application
```
npx create-react-app client --use-npm
```
- Creates a client folder and then creates a new React application within that folder.
## Add proxy for making requests
In your `package.json` file in the `client` directory at the top level of the JSON object: 
```
"proxy": "http://127.0.0.1:5555"
```
## Update port in `start` script
```
"scripts": {
	"start": "PORT=4000 react-scripts start"
}
```
## Configure virtual environment
This was already done for us in the lab and all we had to do was run `pipenv install && pipenv shell` to enter the virtual environment.
## Set up `app.py` in `server/` directory
```python
from flask import Flask, make_response, jsonify 
from flask_cors import CORS 

app = Flask(__name__) 
CORS(app) 

@app.route('/movies', methods=['GET']) 
def movies(): 
	response_dict = { "text": "Movies will go here" } 
	return make_response(jsonify(response_dict), 200) 
	
if __name__ == '__main__': 
	app.run(port=5555, debug=True)

```

Then in the `server/` directory, run: 
```
$ python app.py
```

And in the `client/` directory, run: 
```
$ npm start
```
## Populate database
```python

from flask import Flask, request, make_response, jsonify
from flask_cors import CORS
from flask_migrate import Migrate

from models import db, Movie

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

CORS(app)
migrate = Migrate(app, db)

db.init_app(app)

@app.route('/movies', methods=['GET'])
def movies():
    if request.method == 'GET':
        movies = Movie.query.all()

        return make_response(
            jsonify([movie.to_dict() for movie in movies]),
            200,
        )
    
    return make_response(
        jsonify({"text": "Method Not Allowed"}),
        405,
    ) 

if __name__ == '__main__':
    app.run(port=5555, debug=True)
```

Then, run `flask db upgrade` and `python seed.py`.

## Add `useEffect()` and `fetch()` to `App.Js`

```javascript
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then((movies) => console.log(movies));
  }, []);

  return <h1>Check the console for a list of movies!</h1>;
}

export default App;

```

## Use Honcho module to run React and Flask together

Add it to your Pipfile or run: 

```
$ pipenv install honcho
```

You'll need to set up a Procfile (lists different processes to run for app) in the root directory for your project. This will simplify deployment later. Add this code.

```
web: PORT=4000 npm start --prefix client
api: gunicorn -b 127.0.0.1:5555 --chdir ./server app:app
```

Then, you'll just need to run one command to start both React and Flask: 
```
$ honcho start -f Procfile.dev
```

If you're doing a lot of debugging in the terminal, don't use this approach, because it can make reading the server logs more difficult.

Configure Forms with Formik
```javascript
import {useFormik} from formik;
```

The `useFormik` hook provides us with a hook where we can specify initial values to a form and write an `onSubmit` callback function to do something with the values.

```javascript
const formik = useFormik({
	initialValues: {
		"key_1": "value_1",
		"key_2": "value_2",
		"key_3": "value_3"
	}, 
	validationSchema: formSchema,
	onSubmit: (values) => {
		fetch('URL', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(values)
		})
			.then(response => response.json())
			.then(stateSetter(newStateValue))
	}

});

```
With Formik, we don't need to write our own handleChange functions or logic to handle validation errors.
- You can access values using `formik.values`
- You can access errors using `formik.errors`

# Configure Validation with Yup
Yup is a library that meshes well with Formik. You can use it to create a validation schema.

```javascript
import * as yup from 'yup';
```

```javascript
  const formSchema = yup.object().shape({
    email: yup.string().email("Invalid email"),
    name: yup.string().required("Must enter a name").max(15),
    age: yup.number().positive().integer().required("Must enter age").typeError('Please enter an Integer').max(125),
  })
```