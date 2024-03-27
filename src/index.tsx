import { NextUIProvider } from "@nextui-org/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/components/App";
import "./index.css";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<StrictMode>
		<NextUIProvider>
			<App />
		</NextUIProvider>
	</StrictMode>,
);
