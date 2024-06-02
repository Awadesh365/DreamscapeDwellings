# DreamscapeDwellings

## Overview

**DreamscapeDwellings** is a state-of-the-art real estate application developed using the MERN stack (MongoDB, Express.js, React, Node.js). It provides users with a secure, seamless platform to manage and browse property listings, offering advanced features and an intuitive user interface.

## Features

### 🔑 Advanced Authentication

- **JWT (JSON Web Token)**: Secure user sessions and authentication.
- **Firebase Authentication**: Robust, scalable authentication with Firebase.
- **Google OAuth**: Easy sign-in using Google accounts for a smooth user experience.

### 🏡 Real-world CRUD Operations

- **Create, Read, Update, Delete**: Efficient property listing management with MongoDB.

### 💡 User-friendly Features

- **Image Uploads**: Users can easily upload and manage property images.
- **Property Listing Management**: Streamlined process for handling property details.

### 🚀 Advanced Search Functionality

- **Sophisticated Search**: Enhanced search capabilities to help users find properties quickly and accurately.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Firebase Account
- Google Developer Account for OAuth

### Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/awadesh365/DreamscapeDwellings.git
   cd DreamscapeDwellings
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add the following:

   ```env
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   FIREBASE_API_KEY=your_firebase_api_key
   FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   FIREBASE_PROJECT_ID=your_firebase_project_id
   FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   FIREBASE_APP_ID=your_firebase_app_id
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

4. **Run the application**
   ```sh
   npm start
   ```

## Usage

1. **Sign Up / Sign In**

   - Users can register or log in using email and password, Google OAuth, or Firebase authentication.

2. **Property Management**

   - Users can create, update, and delete property listings as needed.

3. **Search Properties**
   - Utilize advanced search features to find properties based on various criteria.

## Folder Structure

```plaintext
DreamscapeDwellings/
├── client/                  # React frontend
│   ├── public/
│   └── src/
│       ├── components/      # Reusable components
│       ├── pages/           # Page components
│       ├── services/        # API service calls
│       ├── styles/          # CSS and styling
│       └── utils/           # Utility functions
├── server/                  # Express backend
│   ├── config/              # Configuration files
│   ├── controllers/         # Request handlers
│   ├── models/              # Mongoose models
│   ├── routes/              # Express routes
│   └── middleware/          # Middleware functions
├── .env                     # Environment variables
├── .gitignore
├── package.json
└── README.md
```

## Contributing

We welcome contributions from the community. To ensure a smooth contribution process, please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```sh
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes**
   ```sh
   git commit -m 'Add some feature'
   ```
4. **Push to the branch**
   ```sh
   git push origin feature/your-feature-name
   ```
5. **Open a pull request** with a detailed description of your changes.

## Code of Conduct

We expect all contributors to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it to understand the expected behavior when contributing to this project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or suggestions, feel free to open an issue or contact the project maintainers at 36awadesh@gmail.com.

## Acknowledgements

We thank the open-source community for their invaluable contributions and tools that have made this project possible.

---

_DreamscapeDwellings - Your gateway to the dream home._
