
# ⚛️ Async Counter with React + Redux Toolkit (Vite + TypeScript) + Testing Asynchronous Logic in React Components

## 🎯 Objective

This project demonstrates how to build an asynchronous React component using Redux Toolkit and Redux Saga, including robust tests using Vitest and API mocking. Key features:

- Redux slices and asynchronous sagas for managing complex state
- Comprehensive testing and mocking external APIs
- Detailed code coverage analysis

---

## 🧱 Technologies

- React + TypeScript
- Vite
- Redux Toolkit
- Redux Saga
- React-Redux
- Vitest (testing)
- @testing-library/react
- Istanbul (code coverage reporting)

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Counter.tsx           # UI component interacting with Redux store
│   └── UserProfile.tsx       # Example async user profile fetching
├── redux/
│   ├── store.ts              # Redux store configuration
│   ├── counterSlice.ts       # Slice for counter actions and reducers
│   └── counterSagas.ts       # Async sagas for increment/decrement
├── App.tsx                   # Root component wrapping with Redux Provider
├── main.tsx                  # Entry point (ReactDOM.createRoot)
tests/
├── App.test.tsx              # App component rendering tests
├── Counter.test.tsx          # Component interaction tests
├── UserProfile.test.tsx      # Async component test with API mocking
├── counterSagas.test.ts      # Unit tests for Redux sagas
├── counterSlice.test.ts      # Unit tests for Redux slices
├── store.test.ts             # Redux store configuration test
└── main.test.tsx             # Entry point basic tests
```

---

## ⚙️ Installation

```bash
git clone https://github.com/your-username/react-async-counter.git
cd react-async-counter
npm install
```

---

## 🚀 Running the Project

### Development Server

```bash
npm run dev
```

---

## 🧪 Running Tests

```bash
# Run all tests
npm test

# Run tests with interactive UI (Vitest)
npm run test:ui

# Run tests with code coverage
npm run coverage
```

---

## 🔍 Test Scenarios

1. **Loading:** Triggering async increment/decrement actions with simulated delay.
2. **Success:** State updates reflected correctly in Redux store and UI.
3. **Error:** Suggested error handling scenarios with mocked failures (to be implemented).
4. **Mocking:** Fully mocked API calls ensuring isolation from external dependencies.

---

## 📈 Code Coverage

✅ Complete coverage for key components and logic (`Counter.tsx`, sagas, and slices). 

---

## 🌍 Deployment

- [Vercel]( )
