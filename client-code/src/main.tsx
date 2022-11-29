import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./app/pages/App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "./app/providers/ThemeProvider";

import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// ReactDOM.render(
//    <React.StrictMode>
//     <ThemeProvider>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </ThemeProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
