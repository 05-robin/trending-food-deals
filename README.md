# Trending Food Deals App

A React Native app displaying trending food deals.

## Setup Instructions

1. Clone the repo:
   ```sh
   git clone https://github.com/05-robin/trending-food-deals.git
   cd trending-food-deals

2. npm install

3. npx react-native run-android


## Setup Instructions

The project is organized into different folders to track everything clearly and ensure maintainability.


- **`Src/`**: Contains the core source code of the application.
  - **`Components/`**: Houses All the reusable UI components.
    - **`CardComponent/`**: It has CardComponent.tsx file
        - `CardComponent.tsx`: A card component to display individual food deals.
  - **`Screens/`**: Houses All the Screens.
      - **`TrendingDetailsScreen/`**: : Houses both the TrendingDeals Screen UI and its related logics using custom hook.
        - `TrendingDealsScreen.tsx`: Displays a list of trending food deals.
        - `UseTrendingScreen.ts`: Holds the state and its respective functions related to TrendingDealsScreen.tsx.
  - **`Data/`**: Stores mock data used in the app.
    - `deals.ts`: A hardcoded list of trending food deals.
  - **`Interface/`**: Contains TypeScript type definitions.
    - `DealBO.ts`: Defines the structure of a deal object.

- **`App.js`**: The main entry point of the app.
- **`README.md`**: Documentation with setup instructions and project details.
- **`package.json`**: Contains project dependencies and scripts.

This structure helps in maintaining a clean separation of concerns, making the project easy to scale and modify.
