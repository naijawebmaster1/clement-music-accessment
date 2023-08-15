import React, { useState, createContext, useContext, FC, ReactNode, useEffect } from 'react';



// Define the context interface
interface IAuthContext {
	isDarkMode: boolean;
	setisDarkMode: (isDarkMode: boolean) => void;
	isCollapsed: boolean;
	setSidebarCollapsed: (isCollapsed: boolean) => void;
	showSidebar: boolean;
	setShowSidebar: (prev: any) => void;
}

// Create the AuthContext with default values
export const AuthContext = createContext<IAuthContext>({
	isDarkMode: true,
	setisDarkMode: () => null,
	isCollapsed: false,
	setSidebarCollapsed: () => null,
	showSidebar: true,
	setShowSidebar: () => null,
});

// Create the custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthContextProvider component
export const AuthContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isDarkMode, setisDarkMode] = useState<boolean>(true);

	const [isCollapsed, setSidebarCollapsed] = useState(false);
	const [showSidebar, setShowSidebar] = useState(true);

	return (
		<AuthContext.Provider value={{ isDarkMode, setisDarkMode, isCollapsed, setSidebarCollapsed, showSidebar, setShowSidebar }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
