import React, { createContext, useContext, useState } from 'react';

// Create a context
const EditContext = createContext();

// Create a provider component
export const EditProvider = ({ children }) => {
  const [texts, setTexts] = useState({
    form1: {
      emailLabel: 'Email address',
      emailHelp: "We'll never share your email with anyone else.",
      passwordLabel: 'Password',
      checkLabel: 'Check me out',
      submit: 'Submit',
    },
    // You can add other components' texts here
  });

  const handleTextEdit = (component, field, newValue) => {
    setTexts((prevTexts) => ({
      ...prevTexts,
      [component]: {
        ...prevTexts[component],
        [field]: newValue,
      },
    }));
  };

  return (
    <EditContext.Provider value={{ texts, handleTextEdit }}>
      {children}
    </EditContext.Provider>
  );
};

// Custom hook for using the context
export const useEdit = () => {
  const context = useContext(EditContext);
  if (!context) {
    throw new Error('useEdit must be used within an EditProvider');
  }
  return context;
};