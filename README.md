# Awesome Dashboard

A full-stack web application.

## Getting Started

### macOS / Linux

```bash
npm install
npm start
```

### Windows

1. Install [Node.js](https://nodejs.org/) (v18 or later recommended).
2. Open Command Prompt or PowerShell.
3. Clone the repository and navigate into it:

```powershell
git clone https://github.com/linqianru234-wq/eval-awesome-dashboard.git
cd eval-awesome-dashboard
```

4. Install dependencies:

```powershell
npm install
```

5. Start the application:

```powershell
npm start
```

6. Open your browser and navigate to `http://localhost:3000` (or the port shown in the terminal).

### Troubleshooting (Windows)

- **`npm install` fails**: Try running the terminal as Administrator, or clear the npm cache with `npm cache clean --force`.
- **Port already in use**: Find the process using the port with `netstat -ano | findstr :3000` and terminate it, or set a different port via the `PORT` environment variable: `$env:PORT = "8080"; npm start`.
- **Node.js not found**: Ensure Node.js is added to your system PATH during installation (checked by default in the installer).

## Features
- Real-time dashboard
- User authentication
- Responsive design