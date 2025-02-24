# Interactive Panels

This project implements an interactive layout of panels that expand when clicked. Each panel displays a background image and a dynamic title. When you select a panel, it expands to take up more space, while the others collapse.

The panel data (titles and background images) is obtained by calling a mock API using **json-server**. To make the HTTP request, the **Axios** library is used.

## Screenshot

![interactive-panels-demo](./interactive-panels-demo.gif)

## How to Run

1. Clone the repository or create each project from scratch and the folder and file structure `npm create vite@latest projectName -- --template react`.
2. Navigate to the project folder: `cd project-1`.
3. Install the dependencies: `npm install`.
4. Run the project: `npm run dev`.
5. Add this line in the scripsts to the package.json file: `"server": "json-server --watch db.json --port 5000"`.
6. Run the project: `npm run server`.
7. Add `"react/prop-types": 0,` to the package.son file.

## Watch Live

[Watch Live](https://interactive-panels.vercel.app/)
