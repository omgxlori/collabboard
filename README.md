# CollabBoard

CollabBoard is an intuitive and dynamic task management application that enables teams to seamlessly collaborate, organize, and track their tasks. Designed with simplicity and efficiency in mind, CollabBoard helps you stay on top of your projects while fostering teamwork and productivity.

## Features
- User Authentication: Secure login and token-based authentication using JSON Web Tokens (JWT).
- Kanban Board Interface: Organize tasks across different stages like "To-Do," "In Progress," and "Done."
- Task Management: Create new tasks, edit or delete existing tasks, and assign tasks to specific users.
- Role-based Access Control: Ensure only authorized users can manage tasks.
- Real-Time Updates: View updated task statuses instantly across the board.
- Responsive Design: Works seamlessly across devices of all sizes.

## Installation
Follow these steps to set up CollabBoard locally:

Clone the Repository:

git clone <repository-url>
cd CollabBoard
Set Up Environment Variables:
Create a .env file in the server folder with the following values:

DB_NAME=kanban_db
DB_USER=<your-database-username>
DB_PASSWORD=<your-database-password>
JWT_SECRET_KEY=<your-secret-key>
Install Dependencies:

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
Seed the Database (optional):
Run the following command to populate the database with sample data:

npm run seed
Start the Application:
In separate terminals, start the server and client:

# Start the server
cd server
npm run start

# Start the client
cd ../client
npm run dev
Open the application in your browser:

http://localhost:3000
Usage
Logging In
Use a registered username and password to log in.
Once authenticated, you’ll be redirected to the Kanban board.
Managing Tasks
Create a Task: Use the "New Task" button to add a task to the board.
Update Task Status: Drag tasks between stages ("To-Do," "In Progress," "Done").
Edit/Delete Tasks: Modify task details or remove them as needed.
Logging Out
Click the "Logout" button to securely end your session.
Technologies Used
Backend:
Node.js
Express.js
Sequelize ORM
PostgreSQL
JSON Web Tokens (JWT)
Frontend:
React
TypeScript
Vite
Fetch API
Roadmap
Planned Features: !!!!!

Real-Time Collaboration: Integrate WebSockets for live updates.
Advanced Filtering and Sorting: Allow users to filter tasks by priority, assignee, or deadlines.
Customizable Boards: Enable teams to create and name their own task stages.
Notifications: Add reminders for deadlines and activity updates.
Contributing
We welcome contributions! To get started:

Fork the repository.
Create a feature branch:
git checkout -b feature-name
Commit your changes:
git commit -m "Add feature-name"
Push to your branch:
git push origin feature-name
Open a Pull Request.
License
This project is licensed under the MIT License.

Acknowledgments
Special thanks to all contributors and open-source tools that made this project possible.