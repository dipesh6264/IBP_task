# Real-time Data Project

This is a simple web application built with Express.js, Socket.IO, and MongoDB. It allows users to submit data through a form, which is then displayed in real-time on the webpage. The submitted data is also saved in a MongoDB database.

## Features

- Real-time updates: Data submitted through the form is instantly displayed on the webpage for all connected users.
- Data persistence: Submitted data is stored in a MongoDB database, ensuring that it is not lost when the server restarts.
- Clean and responsive design: The webpage has been styled using CSS to provide a pleasant user experience.

## Technologies Used

- Express.js: Web framework for Node.js used to handle HTTP requests.
- Socket.IO: Library for real-time web applications, used for bidirectional communication between clients and server.
- MongoDB: NoSQL database used for storing submitted data.
- HTML/CSS: Frontend languages used for structuring and styling the webpage.

## Installation

1. Clone this repository:

```
git clone <repository-url>
```

2. Install dependencies:

```
npm install
```

3. Start the server:

```
npm start
```

4. Open your web browser and navigate to `http://localhost:3000` to view the application.

## Usage

- Fill out the form with the desired data and click the submit button.
- The submitted data will be displayed in real-time on the webpage.
- Refreshing the webpage will load previously submitted data from the database.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
