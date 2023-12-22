import { PropsWithChildren, createContext, useContext, useState } from "react";

interface SidebarContextProps {
	collapsed: boolean;
	setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
	toggled: boolean;
	setToggled: React.Dispatch<React.SetStateAction<boolean>>;
	breakPoint: boolean;
	setBreakPoint: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
	undefined
);

export const ProSidebarProvider = ({ children }: PropsWithChildren) => {
	const [collapsed, setCollapsed] = useState(false);
	const [toggled, setToggled] = useState(false);
	const [breakPoint, setBreakPoint] = useState(true);

	return (
		<SidebarContext.Provider
			value={{
				collapsed,
				setCollapsed,
				toggled,
				setToggled,
				breakPoint,
				setBreakPoint,
			}}
		>
			{children}
		</SidebarContext.Provider>
	);
};

export const useProSidebarContext = () => {
	const context = useContext(SidebarContext);
	if (!context) {
		throw new Error(
			"useSidebarContext should be used within the SidebarContext provider!"
		);
	}

	return context;
};
