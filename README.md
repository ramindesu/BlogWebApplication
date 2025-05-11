✍️ Simple Blog Website

A minimal yet powerful blogging platform built with Node.js, Express, EJS, and Bootstrap. It allows users to compose and read blog posts with optional image support. Perfect for learning full-stack web development and RESTful routing.

⸻

🔍 Features
	•	📝 Compose blog posts with a title, content, and optional image
	•	📄 View a list of recent blog posts
	•	🔗 Click on “Read more” to view full post
	•	🖼 Image support via image URL
	•	📱 Fully responsive layout with Bootstrap
	•	⚡ Live rendering with EJS templates

⸻

🛠 Technologies Used
	•	Node.js
	•	Express.js
	•	EJS (Embedded JavaScript Templates)
	•	Bootstrap 5
	•	HTML5 & CSS3

⸻

🚀 Getting Started
	1.	Clone the repository:
    git clone https://github.com/yourusername/blog-project.git
cd blog-project
	2.	Install dependencies:
    npm install
    3. Start the server:
    node index.js
    	4.	Open your browser and go to:
http://localhost:3000

⸻

🧾 How to Use
	•	Visit /compose to create a new blog post.
	•	Fill in the title, content, and an optional image URL.
	•	Click Publish to see your post on the homepage.
	•	Click Read more to view the full content of a post.

⸻

📁 Project Structure
blog-project/
│
├── views/
│   ├── index.ejs         # Homepage with post previews
│   ├── post.ejs          # Full post view
│   ├── compose.ejs       # Compose form
│   └── partials/         # Header and footer partials
│
├── public/               # Static assets (CSS, images)
│
├── index.js              # Main server file
└── package.json          # Project metadata

⸻

📸 Preview 
![home](/Users/mohammadi/Downloads/projects/blog/public/images/Screenshot 2025-05-11 at 10.00.44 PM.png)
![composePage](/Users/mohammadi/Downloads/projects/blog/public/images/Screenshot 2025-05-11 at 10.01.18 PM.png)
![testing](/Users/mohammadi/Downloads/projects/blog/public/images/Screenshot 2025-05-11 at 10.01.23 PM.png)
![result](/Users/mohammadi/Downloads/projects/blog/public/images/Screenshot 2025-05-11 at 10.01.27 PM.png)

⸻

📌 Future Improvements
	•	✅ Add a database to store posts (e.g., MongoDB)
	•	🧾 Add validation and error messages
	•	📂 Enable image file upload support
	•	🔐 Add user authentication (login/register)


⸻

🙌 Acknowledgments

Created as part of a learning journey in full-stack web development.
Thanks to the awesome dev community 💙




