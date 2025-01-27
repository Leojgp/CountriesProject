# Countries Project:

## Project Description
This cross-platform application was developed using **Bare React Native** and is designed to explore country data through the [RestCountries API](https://restcountries.com/#endpoints-all). It allows navigation across continents, countries, and detailed information, integrating interactive maps via [react-native-open-street-map](https://github.com/enieber/react-native-open-street-map). The app features an attractive design and smooth navigation flow.

## Key Features
1. **Navigation with React Navigation**:
   - Continent Screen.
   - Country List Screen (filtered by continent).
   - Country Detail Screen with additional information and location map.
   - Users can navigate back to the initial screen at any time.

2. **FlatList Implementation**:
   - Display a list of continents on the main screen.
   - Show a filtered list of countries (name, capital, language, and flag) for the selected continent.
   - Efficient handling of large datasets with dynamic rendering.

3. **Reusable Country Component**:
   - A modular component to display country details (name, capital, language, and flag).
   - Reusable across multiple screens to ensure consistent design.

4. **API Integration**:
   - Fetch data from [RestCountries API](https://restcountries.com/#endpoints-all) for continents, countries, and details.
   - Proper error handling for API failures.

5. **Interactive Map Integration**:
   - Show each country's location on [OpenStreetMap](https://www.openstreetmap.org/) using `react-native-open-street-map`.

6. **State Management**:
   - Use of React Context and Hooks for state management (e.g., selected continent, country, and theme).
   - Optionally, Redux with Query for advanced state handling.

7. **Responsive Design**:
   - Modern and user-friendly interface.
   - Careful attention to margins, typography, and color schemes for both themes.

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_.
